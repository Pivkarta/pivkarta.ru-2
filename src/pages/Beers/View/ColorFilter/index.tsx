import React, { useMemo, useState, useEffect, useCallback } from 'react'
import Select, { Option } from '@prisma-cms/ui/dist/form/Select'
import { useRouter } from 'next/router'
import { BeerColor, BeersColorFilterProps } from './interfaces'

type BeerColorSelectOption = Option<NonNullable<BeerColor | ''>>

const options: BeerColorSelectOption[] = [
  {
    label: 'Выберите из списка',
    value: '',
  },
  {
    label: 'Светлое',
    value: 'Светлое',
  },
  {
    label: 'Темное',
    value: 'Темное',
  },
  {
    label: 'Полутемное',
    value: 'Полутемное',
  },
]

/**
 * Фильтр пива по цвету
 */
export const BeersColorFilter: React.FC<BeersColorFilterProps> = ({
  color,
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
    return options.find((n) => n.value === color) || null
  }, [color])

  /**
   * Метод на выбор пункта селекта
   */
  const onChange = useCallback(
    (option: BeerColorSelectOption | null) => {
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
        query.color = value
      } else {
        delete query.color
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
        <Select<BeerColorSelectOption>
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
