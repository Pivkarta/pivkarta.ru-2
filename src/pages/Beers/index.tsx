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
} => {
  let skip: number | undefined

  const take = 12

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 0

  const color = query.color && typeof query.color === 'string' && query.color

  //console.log('color', color)

  const where: BeerWhereInput = {}

  if (color) {
    where['color'] = color
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
  }
}

const BeersPage: Page = () => {
  const router = useRouter()

  const { variables, page } = useMemo(() => {
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
        />
      </>
    )
  }, [
    beers,
    beersResponse.data?.beersConnection.aggregate.count,
    beersResponse.variables?.first,
    page,
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
