import React, { useMemo } from 'react'

import Link from '..'
import { CityLinkProps } from './interfaces'

/**
 * Ссылка на страницу города
 */
const CityLink: React.FC<CityLinkProps> = ({ city, children, ...other }) => {
  return useMemo(() => {
    return (
      <Link
        href={`/${city.alias}/@${city.lat},${city.lng},12`}
        title={city.name}
        {...other}
      >
        {children || city.name}
      </Link>
    )
  }, [city.alias, city.name, city.lat, city.lng, other, children])
}

export default CityLink
