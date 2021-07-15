import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React, { useMemo } from 'react'
import {
  //BeerOrderByInput,
  BeerWhereInput,
  BeersConnectionDocument,
  BeersConnectionQuery,
  BeersConnectionQueryVariables,
  useBeersConnectionQuery,
} from 'src/modules/gql/generated'
import { Page } from 'src/pages/_App/interfaces'
import BeersPageView from './View'
import { BeerColor } from './View/ColorFilter/interfaces'
import { BeerFiltered } from './View/FilteredFilter/interfaces'
import { BeerSearch } from './View/SearchFilter/interfaces'
import { BeersPageViewProps } from './View/interfaces'

/**
 * Параметры для запроса пива
 */
export const getBeersVariables = ({
  query,
}: {
  query: ParsedUrlQuery
}): {
  variables: BeersConnectionQueryVariables
  page: number
  color: BeerColor
  filtered: BeerFiltered
  search: BeerSearch
} => {
  let skip: number | undefined

  const take = 12

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 0

  const color: BeerColor =
    query.color &&
    typeof query.color === 'string' &&
    query.color &&
    // Обязательно проверяем и на значение, так как у нас в типе жестко перечислены варианты.
    // Иначе будет ошибка тайпскрипта
    (query.color === 'Светлое' ||
      query.color === 'Темное' ||
      query.color === 'Полутемное')
      ? query.color
      : undefined

  //console.log('color', color)

  const filtered: BeerFiltered =
    query.filtered &&
    typeof query.filtered === 'string' &&
    query.filtered &&
    // Обязательно проверяем и на значение, так как у нас в типе жестко перечислены варианты.
    // Иначе будет ошибка тайпскрипта
    (query.filtered === 'Фильтрованное' || query.filtered === 'Нефильтрованное')
      ? query.filtered
      : undefined

  const search: BeerSearch =
    query.search && typeof query.search === 'string' && query.search
      ? query.search
      : undefined

  //console.log('filtered', filtered)

  const where: BeerWhereInput = {}

  if (color) {
    where.color = color
  }

  if (filtered) {
    where.filtered = false

    if (filtered == 'Фильтрованное') {
      where.filtered = true
    }
  }

  if (search) {
    where.name = search
  }

  if (page > 1) {
    skip = (page - 1) * take
  }

  const variables: BeersConnectionQueryVariables = {
    first: take,
    where: where,
    skip,
  }

  return {
    variables,
    page,
    color,
    filtered,
    search,
  }
}

const BeersPage: Page = () => {
  const router = useRouter()

  const { variables, page, color, filtered, search } = useMemo(() => {
    return getBeersVariables({
      query: router.query,
    })
  }, [router.query])

  /**
   * Получаем список пив
   */
  const beersResponse = useBeersConnectionQuery({
    variables,
  })

  //console.log('beersResponse',beersResponse);

  /*
        beersResponse.data?.object.forEach((n) => {

            beers.push(n)
            //console.log('n->',n)
        })

        //console.log('beers',beers);


*/
  const beers = useMemo(() => {
    const beers: BeersPageViewProps['beers'] = []

    beersResponse.data?.beersConnection.edges.forEach((n) => {
      if (n != null && n.node) {
        beers.push(n.node)
      }
    })

    return beers
  }, [beersResponse.data?.beersConnection.edges])

  //console.log('filtered_1', filtered)

  return useMemo(() => {
    return (
      <>
        <NextSeo
          title={`Марки и сорта пива`}
          description={`Энциклопедия пива: марки и сорта`}
        />

        {/*beers.map((n) => {
                  //return <BeerView key={n.id} beer={n}/>
                  return (
                  <p key={n.id}>
                      <Link href={n.uri || '/'}>
                            {n.name}
                      </Link>
                   </p>
                  )
            })*/}

        <BeersPageView
          beers={beers}
          pagination={{
            limit: beersResponse.variables?.first || 0,
            page,
            total: beersResponse.data?.beersConnection.aggregate.count || 0,
          }}
          /**
           * Передаем цвет из запроса, чтобы пробросить его в фильтр
           */
          color={color}
          /**
           * Передаем фильтрацию из запроса, чтобы пробросить его в фильтр
           */
          filtered={filtered}
          /**
           * Передаем поисковую строку из запроса, чтобы пробросить его в фильтр
           */
          search={search}
        />
      </>
    )
  }, [
    beers,
    beersResponse.data?.beersConnection.aggregate.count,
    beersResponse.variables?.first,
    page,
    color,
    filtered,
    search,
  ])
}

BeersPage.getInitialProps = async ({ apolloClient, query }) => {
  const { variables } = getBeersVariables({ query })

  const result = await apolloClient.query<
    BeersConnectionQuery,
    BeersConnectionQueryVariables
  >({
    query: BeersConnectionDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables,
  })

  return {
    statusCode: !result.data.beersConnection.edges.length ? 404 : undefined,
  }
}

export default BeersPage
