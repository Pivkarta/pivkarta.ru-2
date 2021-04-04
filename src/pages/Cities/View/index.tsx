import React, { useMemo } from 'react'
import Grid from '@material-ui/core/Grid'
import { CitiesPageViewProps } from './interfaces'
import CityLink from 'src/components/ui/Link/City'

const CitiesPageView: React.FC<CitiesPageViewProps> = ({ cities }) => {
  return useMemo(() => {
    return (
      <Grid container>
        {cities.map((n) => {
          if (!n) {
            return
          }

          return (
            <Grid key={n.id} item xs={12} sm={4} md={3}>
              <CityLink city={n} />
            </Grid>
          )
        })}
      </Grid>
    )
  }, [cities])
}

export default CitiesPageView
