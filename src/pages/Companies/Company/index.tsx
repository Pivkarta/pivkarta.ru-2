import React from 'react'
import { useRouter } from 'next/router'

//import { Page } from '../../_App/interfaces'
//import { CompanyPageProps } from './interfaces'

//const CompanyPage: Page<CompanyPageProps> = (company) => {
//    return '1'
//}

const CompanyPage = () => {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/camelcase
  const { url_name } = router.query

  // eslint-disable-next-line @typescript-eslint/camelcase
  return <p>Post: {url_name}</p>
}

export default CompanyPage
