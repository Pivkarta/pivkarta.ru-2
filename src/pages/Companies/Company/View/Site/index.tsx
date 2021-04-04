/* eslint-disable react/jsx-no-target-blank */
import React, { useMemo } from 'react'

/**
 * Вывод ссылки на сайт
 */
const Site: React.FC<{
  site: string
  approved: boolean
}> = ({ site, approved, ...other }) => {
  return useMemo(() => {
    return (
      <a
        href={/^https?:\/\//.test(site) ? site : `http://${site}`}
        target="_blank"
        rel={['noreferrer', approved ? 'follow' : 'nofollow'].join(' ')}
        {...other}
      >
        {site
          .replace(/(^https?:\/\/|\/+$)/g, '')
          .replace(/^www\./, '')
          .replace(/\/.*/, '')}
      </a>
    )
  }, [approved, other, site])
}

export default Site
