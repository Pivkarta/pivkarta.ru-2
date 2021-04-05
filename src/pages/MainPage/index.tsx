import React from 'react'
import { NextSeo } from 'next-seo'
import { Page } from '../_App/interfaces'

import { MainPageProps } from './interfaces'

export const MainPage: Page<MainPageProps> = (): JSX.Element => {
  return (
    <>
      <NextSeo
        title="Городские и общественные бани"
        description="Все Городские и общественные бани"
      />
    </>
  )
}

MainPage.getInitialProps = async (appContext) => {
  const { cities } = appContext

  const moscow = cities.find((n) => n.name === 'Москва')

  return {
    city: moscow,
  }
}

export default MainPage
