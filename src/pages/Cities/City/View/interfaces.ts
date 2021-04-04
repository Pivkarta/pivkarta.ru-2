import { CityFragment } from 'src/modules/gql/generated'
import { CompaniesViewProps } from 'src/pages/Companies/View/interfaces'

export type CityPageViewProps = {
  city: CityFragment
} & CompaniesViewProps
