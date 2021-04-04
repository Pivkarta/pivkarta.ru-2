import React, { useMemo } from 'react'

import Link from '..'
import { CityLinkProps } from './interfaces'

/**
 * Ссылка на страницу тега
 */
const CityLink: React.FC<CityLinkProps> = ({ city, children, ...other }) => {
  return useMemo(() => {
    return (
      <Link href={`/${city.alias}`} title={city.pagetitle} {...other}>
        {children || city.pagetitle}
      </Link>
    )
  }, [city.alias, city.pagetitle, other, children])
}

export default CityLink
