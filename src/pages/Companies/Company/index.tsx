import React from 'react'
import { useRouter } from 'next/router'

//import { Page } from '../../_App/interfaces'
//import { CompanyPageProps } from './interfaces'

//const CompanyPage: Page<CompanyPageProps> = (company) => {
//    return '1'
//}

const CompanyPage = () => {
  const router = useRouter()

  const { uri } = router.query

  //console.log(uri.join());

  return <p>Post: {uri}</p>
}

export default CompanyPage
