import React, { useMemo } from 'react'

import Link from '..'
import { CityLinkProps } from './interfaces'

/**
 * Ссылка на страницу тега
 */
const CityLink: React.FC<CityLinkProps> = ({ city, children, ...other }) => {
  return useMemo(() => {
    return (
      <Link href={`/${city.alias}`} title={city.name} {...other}>
        {children || city.name}
      </Link>
    )
  }, [city.alias, city.name, other, children])
}

export default CityLink
