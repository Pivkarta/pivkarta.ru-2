import { PaginationProps } from 'src/components/ui/Pagination'
import { CityFragment, CompaniesQuery } from 'src/modules/gql/generated'

export type CompaniesViewProps = {
  companies: CompaniesQuery['companies']
  city: CityFragment | undefined
  pagination: PaginationProps | undefined
}
