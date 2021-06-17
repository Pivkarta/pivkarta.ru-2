import React, { useMemo } from 'react'
import Pagination from 'src/components/ui/Pagination'
import Title from 'src/components/ui/Title'
import BeerCard from '../BeerCard'
import { BeersPageViewProps } from './interfaces'

const BeersPageView: React.FC<BeersPageViewProps> = ({ beers, pagination }) => {
  return useMemo(() => {
    return (
      <>
        <Title variant="h2">Энциклопедия пива</Title>

        {beers.map((n) => {
          return <BeerCard key={n.id} beer={n} />
        })}

        {pagination ? <Pagination {...pagination} /> : null}
      </>
    )
  }, [beers, pagination])
}

export default BeersPageView
