// import { Schedules, ScheduleFragment } from 'src/modules/gql/generated'

// export type ScheduleData = {
//   day: number
//   hour: number
//   minute: number
//   month: number
//   second: number
//   weekDay: number
//   year: number
// }

// export type ScheduleItem = {
//   start: ScheduleData
//   end?: ScheduleData
// }

export type ScheduleProps = {
  showOffDates: boolean

  // Schedules: Scalars["Json"]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Schedules: any[]

  name: string
}
