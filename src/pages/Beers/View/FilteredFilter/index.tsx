import React, { useMemo, useState, useEffect, useCallback } from 'react'
import Select, { Option } from '@prisma-cms/ui/dist/form/Select'
import { useRouter } from 'next/router'
import { BeerFiltered, BeersFilteredFilterProps } from './interfaces'

type BeerFilteredSelectOption = Option<NonNullable<BeerFiltered | ''>>

const options: BeerFilteredSelectOption[] = [
  {
    label: 'Выберите из списка',
    value: '',
  },
  {
    label: 'Фильтрованное',
    value: 'Фильтрованное',
  },
  {
    label: 'Нефильтрованное',
    value: 'Нефильтрованное',
  },
]

/**
 * Фильтр пива по фильтрации
 */
export const BeersFilteredFilter: React.FC<BeersFilteredFilterProps> = ({
  filtered,
}) => {
  const router = useRouter()

  const [loading, loadingSetter] = useState(false)

  useEffect(() => {
    /**
     * При обновлении роутера обновляем состяние загрузки
     */
    loadingSetter(!router.isReady)
  }, [router])

  const value = useMemo(() => {
    return options.find((n) => n.value === filtered) || null
  }, [filtered])

  /**
   * Метод на выбор пункта селекта
   */
  const onChange = useCallback(
    (option: BeerFilteredSelectOption | null) => {
      /**
       * Получаем значение
       */
      const value = option?.value || undefined

      /**
       * Так как при выборе пункта изменения появляются не мгновенно,
       * то для юзабельности выставляем флаг загрузки
       */
      loadingSetter(true)

      const query = {
        ...router.query,
      }

      if (value) {
        query.filtered = value
      } else {
        delete query.filtered
      }

      /**
       * Обновляем адрес страницы
       */
      router.push({
        query,
      })
      // .finally(() => {
      //   console.log('Loaded')
      // })
    },
    [router]
  )

  return useMemo(() => {
    return (
      <>
        <Select<BeerFilteredSelectOption>
          options={options}
          onChange={onChange}
          value={value}
          disabled={loading}
          // https://stackoverflow.com/questions/61290173/react-select-how-do-i-resolve-warning-prop-id-did-not-match
          instanceId="beer-select"
        />
      </>
    )
  }, [onChange, value, loading])
}
