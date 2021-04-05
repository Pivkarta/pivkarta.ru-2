import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React, { useMemo } from 'react'
import {
  useCompaniesConnectionQuery,
  CompaniesConnectionQueryVariables,
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

const CityPage: Page<CityPageProps> = ({ city, ...other }) => {
  const router = useRouter()

  const { variables, page } = useMemo(() => {
    return getCompaniesVariables({
      city,
      query: router.query,
    })
  }, [city, router.query])

  const companiesResponse = useCompaniesConnectionQuery({
    variables,
  })

  return useMemo(() => {
    const companies: CityPageViewProps['companies'] = []

    companiesResponse.data?.companiesConnection.edges.forEach((n) => {
      if (n.node) {
        companies.push(n.node)
      }
    })

    return (
      <>
        <NextSeo
          title={`Общественные бани в городе "${city.name}"`}
          description={`Все общественные бани и сауны в городе "${city.name}"`}
        />
        <CityPageView
          city={city}
          companies={companies}
          pagination={{
            page,
            limit: companiesResponse.variables?.first || 0,
            total:
              companiesResponse.data?.companiesConnection.aggregate.count || 0,
          }}
          {...other}
        />
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

export default CityPage
