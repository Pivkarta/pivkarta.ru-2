import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
//import { BeersSearchFilterProps } from './interfaces'

/*
export const BeersSearchFilter: React.FC<BeersSearchFilterProps> = ({
  search
}) => {}
*/

export const BeersSearchFilter = () => {
  const router = useRouter()

  //const onChange = useCallback(

  //const query = {
  //  ...router.query,
  //}

  //const search = query.search

  //)

  return useMemo(() => {
    return (
      <>
        <input
          type="text"
          value={router.query.search}
          placeholder={'Название пива'}
        />
      </>
    )
  }, [router.query.search])
}
