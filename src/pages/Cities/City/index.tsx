import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React, { useMemo } from 'react'
import {
  useCompaniesConnectionQuery,
  CompaniesConnectionQueryVariables,
  CityDocument,
  CityQuery,
  CityQueryVariables,
  CompaniesConnectionDocument,
  CompaniesConnectionQuery,
} from 'src/modules/gql/generated'
import { Page } from 'src/pages/_App/interfaces'
import { CityPageProps } from './interfaces'
import CityPageView from './View'
import { CityPageViewProps } from './View/interfaces'

/**
 * Параметры для запроса компаний
 */
export const getCompaniesVariables = ({
  city,
  query,
}: {
  city: CityPageProps['city'] | undefined
  query: ParsedUrlQuery
}): {
  variables: CompaniesConnectionQueryVariables
  page: number
} => {
  let skip: number | undefined

  const take = 12

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 0

  if (page > 1) {
    skip = (page - 1) * take
  }

  const variables: CompaniesConnectionQueryVariables = {
    first: take,
    skip,
  }

  /**
   * Проверяем есть ли параметр coords, является ли он строкой и начинается ли с символа @
   */
  if (
    query.coords &&
    typeof query.coords === 'string' &&
    query.coords.startsWith('@')
  ) {
    /**
     * Убираем первый символ @ и разбиваем в массив по разделителю-запятой
     */
    const arrayOfCoords = query.coords.slice(1).split(',')

    /**
     * Задаем переменные из объекта city, если он есть. Если нет, то переменные будут со значением undefined.
     */
    let { lat, lng } = city || {}

    /**
     * Если есть массив arrayOfCoords и его длина равна трем, перетираем переменные координат.
     * Замечаение: здесь можно было бы добавить еще проверку на значения массива, чтобы не перетирать координаты,
     * если значения некорректные, но так не надо делать именно в этом случае, потому что это тогда ломает саму суть перетирания,
     * ибо можно тогда наплодить кучу УРЛов некорректных, но которые все равно будут всегда выдавать один и тот же список компаний
     * из центра города. Так что некорректный УРЛ должен оставаться некорректным.
     */
    if (arrayOfCoords.length === 3) {
      lat = parseFloat(arrayOfCoords[0])
      lng = parseFloat(arrayOfCoords[1])
    }

    /**
     * Проверяем есть ли переменные координат и являются ли они числами.
     * Если да, то задаем параметры запроса
     */
    if (
      lat !== undefined &&
      isFinite(lat) &&
      lng !== undefined &&
      isFinite(lng)
    ) {
      variables.center = {
        lat,
        lng,
      }
    }
  }

  return {
    variables,
    page,
  }
}

/**
 * Страница города (вывод компаний)
 */
const CityPage: Page<CityPageProps> = ({ city, ...other }) => {
  const router = useRouter()

  const { variables, page } = useMemo(() => {
    return getCompaniesVariables({
      city,
      query: router.query,
    })
  }, [city, router.query])

  /**
   * Получаем список компаний
   */
  const companiesResponse = useCompaniesConnectionQuery({
    variables,

    /**
     * Если город отсутствует, не выполняем АПИ-запрос.
     * На самом деле внизу в getInitialProps прописано, что если города нет,
     * то возвращаем 404 (так что эта часть вообще не будет рендериться), но
     * мы обязаны условия прописать для тайпскрипта, чтобы он не ругался.
     * А хуки нельзя по условию рендерить или нет, они всегда должны быть исполняемыми.
     *
     * Так же не выполняем запрос компаний, если координаты не определены.
     */
    skip: !city || !variables.center,
  })

  return useMemo(() => {
    /**
     * Если город отсутствует, возвращаем пусто
     */
    if (!city) {
      return null
    }

    const companies: CityPageViewProps['companies'] = []

    companiesResponse.data?.companiesConnection.edges.forEach((n) => {
      if (n.node) {
        companies.push(n.node)
      }
    })

    return (
      <>
        <NextSeo
          title={`Компании в городе "${city.name}"`}
          description={`Все компании в городе "${city.name}"`}
        />
        {
          <CityPageView
            city={city}
            companies={companies}
            pagination={{
              page,
              limit: companiesResponse.variables?.first || 0,
              total:
                companiesResponse.data?.companiesConnection.aggregate.count ||
                0,
            }}
            {...other}
          />
        }
      </>
    )
  }, [
    city,
    companiesResponse.data?.companiesConnection.aggregate.count,
    companiesResponse.data?.companiesConnection.edges,
    companiesResponse.variables?.first,
    other,
    page,
  ])
}

CityPage.getInitialProps = async ({ query, apolloClient }) => {
  let city: CityPageViewProps['city'] | null = null

  if (query.city && typeof query.city === 'string') {
    await apolloClient
      .query<CityQuery, CityQueryVariables>({
        query: CityDocument,
        variables: {
          where: {
            alias: query.city,
          },
        },
      })
      .then(async (r) => {
        city = r.data.city || null

        /**
         * Если город получен, надо запросить и компании по нему, иначе SSR
         * не будет нормально отработан.
         */
        if (city) {
          const { variables } = getCompaniesVariables({
            city,
            query: query,
          })

          if (variables.center) {
            await apolloClient.query<
              CompaniesConnectionQuery,
              CompaniesConnectionQueryVariables
            >({
              query: CompaniesConnectionDocument,
              variables,
            })
          }
        }
      })
  }

  return {
    city,
    statusCode: !city ? 404 : undefined,
  }
}

export default CityPage
