/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import { ScheduleProps } from './interfaces'

import { List } from 'immutable'
import moment from 'moment'
import { ScheduleStyled } from './styles'

import clickSvg from '../../img/clock.svg'
import SvgIcon from 'src/components/ui/SvgIcon'
import menSvg from './img/man.svg'
import womenSvg from './img/woman.svg'
import familySvg from './img/family.svg'

const Schedule: React.FC<ScheduleProps> = ({
  // item,
  Schedules,
  showOffDates,
  name,
  ...other
}) => {
  const title = useMemo(() => {
    let icon: JSX.Element | undefined
    let title: string | undefined

    const clockIcon = <SvgIcon alt="clock" src={clickSvg} />

    switch (name) {
      case 'Schedule':
        title = 'Время работы'

        break

      case 'ScheduleMen':
        title = 'Мужские дни'
        icon = (
          <>
            <SvgIcon alt="clock" src={menSvg} />
          </>
        )

        break

      case 'ScheduleWomen':
        title = 'Женские дни'
        icon = (
          <>
            <SvgIcon alt="clock" src={womenSvg} />
          </>
        )

        break

      case 'ScheduleFamily':
        title = 'Семейные дни'
        icon = (
          <>
            <SvgIcon alt="clock" src={familySvg} />
          </>
        )

        break
    }

    return (
      <div className="schedule--title">
        <i className="icon">
          {icon}
          {clockIcon}
        </i>

        {title}
      </div>
    )
  }, [name])

  return useMemo(() => {
    // if (!item) {
    //   return null
    // }

    // let schedule = item[field]

    // if (!schedule) {
    //   return null
    // }

    const offDates: number[] = []

    // const scheduleList = List(schedules).filter((n) => n)
    const scheduleList = List(Schedules)

    // if (1 === 1) return null;

    showOffDates &&
      [0, 1, 2, 3, 4, 5, 6].map((day) => {
        if (scheduleList.findIndex((n) => n?.start.weekDay === day) === -1) {
          offDates.push(day)
        }
      })

    const scheduleGrouped = scheduleList.groupBy((n) => {
      if (!n) {
        return
      }

      const { start, end } = n

      const { hour, minute } = start

      const { hour: endHour, minute: endMinute } = end

      return JSON.stringify({ hour, minute, endHour, endMinute })
    })

    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

    const daysList: JSX.Element[] = []

    scheduleGrouped.map((n) => {
      const daysArray: Array<string | number | number[]> = []

      const first = n?.get(0)

      if (!first) {
        return
      }

      const { start, end } = first

      if (!start || !end) {
        return
      }

      const days2 = (n && n.map((i) => i && i.start && i.start.weekDay)) || []

      // Проходим по каждому дню, и если дни соседние, то объединяем их через тире
      let daysArray2: string | string[] | number[][] =
        // days2 &&
        days2.reduce<Array<number[]>>(
          (prev: any, next: number | null | undefined) => {
            /*
          Если предыдущий вариант не массив,
          возвращаем массив
        */

            const result = prev

            // if (Array.isArray(prev)) {
            //   result = prev
            // } else {
            //   result = [prev]
            // }

            const prevValue = result[result.length - 1]

            if (Array.isArray(prevValue)) {
              if (
                next !== null &&
                next !== undefined &&
                next - 1 === prevValue[prevValue.length - 1]
              ) {
                prevValue.push(next)
                result[result.length - 1] = prevValue
              } else {
                result.push([next])
              }
            } else {
              if (
                next !== null &&
                next !== undefined &&
                next - 1 === prevValue
              ) {
                result[result.length - 1] = [prevValue, next]
              } else {
                result.push(next)
              }
            }

            return result
          },
          []
        )

      // if (daysArray2 !== undefined) {
      // if (Array.isArray(daysArray2)) {
      daysArray2 = daysArray2.map((i) => {
        if (Array.isArray(i)) {
          const first = days[i[0]]
          const last = days[i[i.length - 1]]

          if (i.length > 2) {
            return `${first}-${last}`
          } else if (i.length === 2) {
            return [first, last].join(', ')
          } else {
            return first
          }
        } else {
          return days[i]
        }
      })

      daysArray2.map((n) => {
        daysArray.push(n)
      })
      //   }
      //   else {
      //     daysArray.push(days[daysArray2])
      //   }
      // }

      const { hour: startHour, minute: startMinute } = start

      const { hour: endHour, minute: endMinute } = end

      const from = moment(`${startHour}:${startMinute}`, 'HH:mm').format(
        'HH:mm'
      )
      let till = moment(`${endHour}:${endMinute}`, 'HH:mm').format('HH:mm')

      till = till === '23:59' ? '00:00' : till

      let title

      title = daysArray.join(', ')

      if (title === 'Пн-Вс') {
        title = 'Ежедневно'
      } else if (title === 'Пн-Пт') {
        title = 'Будни'
      } else if (title === 'Сб, Вс' && !offDates.length && showOffDates) {
        title = 'Выходные'
      }

      title = (title && <span>{title}:</span>) || null

      daysList.push(
        <div
          key={daysList.length}
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {title}{' '}
          {from === '00:00' && till === '00:00' ? (
            <b>Круглосуточно</b>
          ) : (
            <span>
              с <b>{from}</b> до <b>{till}</b>
            </span>
          )}
        </div>
      )
    })

    let offDatesStr

    if (offDates && offDates.length) {
      offDatesStr = (
        <div>
          <span
            style={{
              color: 'red',
            }}
          >
            {offDates.length === 1 ? 'Выходной' : 'Выходные'}
          </span>
          : {offDates.map((day) => days[day]).join(', ')}
        </div>
      )
    }

    return (
      <ScheduleStyled {...other}>
        {title}

        {daysList}

        {offDatesStr}
      </ScheduleStyled>
    )
  }, [Schedules, other, showOffDates, title])
}

export default Schedule
