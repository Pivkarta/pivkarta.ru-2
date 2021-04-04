import { CompanyViewProps } from '../../interfaces'

export type SchedulesListProps = {
  Schedules: NonNullable<CompanyViewProps['company']['schedules']>

  /**
   * Если да, то выводится информация Выходной
   */
  showOffDates: boolean
}
