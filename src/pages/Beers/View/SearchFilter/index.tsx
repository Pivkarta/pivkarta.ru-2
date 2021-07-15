import React, { ChangeEvent, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { BeersSearchFilterProps } from './interfaces'
import TextField from '@prisma-cms/ui/dist/form/TextField'

/*
export const BeersSearchFilter: React.FC<BeersSearchFilterProps> = ({
  search
}) => {}
*/

export const BeersSearchFilter: React.FC<BeersSearchFilterProps> = ({
  search,
}) => {
  const router = useRouter()

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value

      const query = {
        ...router.query,
      }

      if (value) {
        query.search = value
      } else {
        delete query.search
      }

      router.push({
        query,
      })
    },
    [router]
  )

  return useMemo(() => {
    return (
      <>
        <TextField
          type="text"
          value={search || ''}
          placeholder={'Название пива'}
          onChange={onChange}
        />
      </>
    )
  }, [search, onChange])
}
