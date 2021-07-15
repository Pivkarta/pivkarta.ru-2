import React, { useMemo } from 'react'
import Pagination from 'src/components/ui/Pagination'
import Title from 'src/components/ui/Title'
import BeerCard from '../BeerCard'
import { BeersColorFilter } from './ColorFilter'
import { BeersFilteredFilter } from './FilteredFilter'
import { BeersSearchFilter } from './SearchFilter'
import { BeersPageViewProps } from './interfaces'
import { Grid } from '@material-ui/core'

const BeersPageView: React.FC<BeersPageViewProps> = ({
  beers,
  pagination,
  color,
  filtered,
  search,
}) => {
  return useMemo(() => {
    return (
      <>
        <Title variant="h2">Энциклопедия пива</Title>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <BeersSearchFilter search={search} />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <BeersColorFilter color={color} />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <BeersFilteredFilter filtered={filtered} />
          </Grid>
        </Grid>

        {beers.map((n) => {
          return <BeerCard key={n.id} beer={n} />
        })}

        {pagination ? <Pagination {...pagination} /> : null}
      </>
    )
  }, [beers, pagination, color, filtered, search])
}

export default BeersPageView
