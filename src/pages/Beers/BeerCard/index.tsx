import React, { useMemo } from 'react'
import Link from 'next/link'
import { BeerCardViewProps } from './interfaces'

const BeerCard: React.FC<BeerCardViewProps> = ({ beer }) => {
  return useMemo(() => {
    return (
      <>
        <h2>
          <p key={beer.id}>
            <Link href={beer.uri || '/'}>{beer.name}</Link>
          </p>
        </h2>
      </>
    )
  }, [beer])
}

export default BeerCard
