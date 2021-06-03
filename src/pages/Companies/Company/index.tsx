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
      place_id: placeid && typeof placeid === 'number' ? placeid : '',      
    },
  }
}




const CompanyPage = () => {
  const router = useRouter()

  const placeId = parseFloat(router.query.uri[0])

  const variables = getVariables(placeId)

  const response = useCompanyInfoQuery({
    variables,
  })

  //const url = uri.join()

  //console.log('response',response);
  
  const name = response.data?.object?.name 
  const image = response.data?.object?.image 

  return (
    <>
    <p>Название: {name}</p>
    <p>Картинка: {image}</p>
    </>
  )
}

export default CompanyPage
