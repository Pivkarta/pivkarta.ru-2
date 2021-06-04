import React from 'react'
import { useRouter } from 'next/router'

//import { ParsedUrlQuery } from 'querystring'

import {
  useCompanyInfoQuery,
  //CompanyInfoQuery,
  //CompanyInfoDocument,
  CompanyInfoQueryVariables,
} from 'src/modules/gql/generated'

//import { Page } from '../../_App/interfaces'
//import { CompanyPageProps } from './interfaces'

const getVariables = (placeid: number): CompanyInfoQueryVariables => {
  //const id = query.id
  //console.log('beers', query)

  return {
    where: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      place_id: placeid,
      //place_id: placeid && typeof placeid === 'number' ? placeid : '',
    },
  }
}

const CompanyPage = () => {
  const router = useRouter()

  let placeId = 0

  if (router.query.uri && router.query.uri[0]) {
    placeId = parseFloat(router.query.uri[0])
  }

  /**
   * Здесь надо понять, что делать, если останется placeId = 0.
   * Проблема в том, что хук useCompanyInfoQuery должет сработать при любых раскладах,
   * то есть при несоблюдении правила if() прервать нельзя.
   */

  const variables = getVariables(placeId)

  const response = useCompanyInfoQuery({
    variables,
  })

  const name = response.data?.object?.name
  const image = response.data?.object?.image

  //const url = uri.join()

  //console.log('response',response);

  return (
    <>
      <p>Название: {name}</p>
      <p>Картинка: {image}</p>
    </>
  )
}

export default CompanyPage
