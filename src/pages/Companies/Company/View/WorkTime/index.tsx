import React, { useMemo } from 'react'
import { CompanyWorkTimeProps } from './interfaces'

import clock from './img/clock.svg'
import SvgIcon from 'src/components/ui/SvgIcon'
import SchedulesList from './SchedulesList'

const CompanyWorkTime: React.FC<CompanyWorkTimeProps> = ({
  company,
  ...other
}) => {
  return useMemo(() => {
    const workTime = company.workTime

    const schedulesContent =
      (company.schedules && (
        <SchedulesList Schedules={company.schedules} showOffDates />
      )) ||
      null

    if (!workTime && !schedulesContent) {
      return null
    }

    return (
      <>
        <div
          style={{
            overflow: 'hidden',
          }}
          {...other}
        >
          {schedulesContent}

          {(workTime && (
            <div>
              <SvgIcon src={clock} alt="time" />{' '}
              <span
                style={{
                  paddingLeft: 5,
                  paddingRight: 3,
                }}
              >
                Время работы{' '}
                {schedulesContent ? ` (дополнительная информация)` : null}
              </span>
              <div
                style={{
                  whiteSpace: 'pre-wrap',
                }}
                dangerouslySetInnerHTML={{
                  __html: workTime,
                }}
              ></div>
            </div>
          )) ||
            null}
        </div>
      </>
    )
  }, [company.schedules, company.workTime, other])
}

export default CompanyWorkTime
