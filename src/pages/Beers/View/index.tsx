import React, { useMemo } from 'react'
import Pagination from 'src/components/ui/Pagination'
import Title from 'src/components/ui/Title'
import BeerCard from '../BeerCard'
import { BeersColorFilter } from './ColorFilter'
import { BeersFilteredFilter } from './FilteredFilter'
import { BeersPageViewProps } from './interfaces'

const BeersPageView: React.FC<BeersPageViewProps> = ({
  beers,
  pagination,
  color,
  filtered,
}) => {
  return useMemo(() => {
    return (
      <>
        <Title variant="h2">Энциклопедия пива</Title>

        <div>
          <BeersColorFilter color={color} />
        </div>

        <div>
          <BeersFilteredFilter filtered={filtered} />
        </div>

        {beers.map((n) => {
          return <BeerCard key={n.id} beer={n} />
        })}

        {pagination ? <Pagination {...pagination} /> : null}
      </>
    )
  }, [beers, pagination, color, filtered])
}

export default BeersPageView
