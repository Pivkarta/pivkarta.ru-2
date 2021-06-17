import React from 'react'
import { useRouter } from 'next/router'

import {
  useBeerInfoQuery,
  BeerInfoQueryVariables,
} from 'src/modules/gql/generated'

const getVariables = (beerid: number): BeerInfoQueryVariables => {
  return {
    where: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      beer_id: beerid,
    },
  }
}

const BeerPage = () => {
  const router = useRouter()

  let beerId = 0

  if (router.query.uri && router.query.uri[0]) {
    beerId = parseFloat(router.query.uri[0])
  }

  /**
   * Здесь надо понять, что делать, если останется beerId = 0.
   * Проблема в том, что хук useCompanyInfoQuery должет сработать при любых раскладах,
   * то есть при несоблюдении правила if() прервать нельзя.
   */

  const variables = getVariables(beerId)

  const response = useBeerInfoQuery({
    variables,
  })

  const name = response.data?.object?.name
  const image = response.data?.object?.image

  return (
    <>
      <p>Название: {name}</p>
      <p>Картинка: {image}</p>
    </>
  )
}

export default BeerPage
