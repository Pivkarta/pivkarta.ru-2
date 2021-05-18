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

  const take = 10

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 0

  if (page > 1) {
    skip = (page - 1) * take
  }

  const variables: CompaniesConnectionQueryVariables = {
    first: 12,
    skip,
  }

  if (city) {
    variables.center = {
      lat: city.lat,
      lng: city.lng,
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
     */
    skip: !city,
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
      .then((r) => {
        city = r.data.city || null
      })
  }

  return {
    city,
    statusCode: !city ? 404 : undefined,
  }
}

export default CityPage
