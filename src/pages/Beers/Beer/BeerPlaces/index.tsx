import React from 'react'
import { Paper, Grid } from '@material-ui/core'
//import { imageFormats } from 'src/helpers/imageFormats'
import Link from 'src/components/ui/Link'
import { PlacesbeerViewProps } from './interfaces'

import {
  usePlacesbeerQuery,
  PlacesbeerQueryVariables,
} from 'src/modules/gql/generated'

const BeerPlaces = (props: { beerid: number }) => {
  //console.log('this.props.beerid', props.beerid)

  const getVariables = (beerid: number): PlacesbeerQueryVariables => {
    return {
      where: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        beers_some: {
          Beer: {
            // eslint-disable-next-line @typescript-eslint/camelcase
            beer_id: beerid,
          },
        },
      },
      center: {
        lat: 55.752,
        lng: 37.621,
      },
    }
  }

  const variables = getVariables(props.beerid)

  const response = usePlacesbeerQuery({
    variables,
  })

  //console.log('response', response.data)

  const places: PlacesbeerViewProps['places'] = []

  response.data?.mapPlacesConnection.edges.forEach((n) => {
    if (n != null && n.node) {
      places.push(n.node)
    }
  })

  //console.log('places', places)

  return (
    <>
      <h2>Пивные места:</h2>
      <Paper style={{ padding: '15px' }}>
        <Grid container>
          {places.map((n) => {
            return n ? (
              <>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link href={n.uri || '/'}>{n.name}</Link>
                </Grid>
              </>
            ) : null
          })}
        </Grid>
      </Paper>
    </>
  )
}

export default BeerPlaces
