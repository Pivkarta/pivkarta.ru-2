import React, { useMemo } from 'react'
import { SchedulesListProps } from './interfaces'
import Schedule from './Schedule'
import { SchedulesListStyled } from './styles'

const SchedulesList: React.FC<SchedulesListProps> = ({
  Schedules,
  showOffDates,
  ...other
}) => {
  return useMemo(() => {
    const schedules: JSX.Element[] = []

    if (
      Schedules &&
      Array.isArray(Schedules) &&
      Schedules.filter((n) => n).length > 0
    ) {
      schedules.push(
        <Schedule
          key="Schedules"
          name="Schedule"
          Schedules={Schedules}
          showOffDates={showOffDates}
        />
      )
    }

    return schedules.length ? (
      <SchedulesListStyled {...other}>{schedules}</SchedulesListStyled>
    ) : null
  }, [Schedules, other, showOffDates])
}

export default SchedulesList
