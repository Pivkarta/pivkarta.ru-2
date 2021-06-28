import { PaginationProps } from 'src/components/ui/Pagination'
import { BeerCardViewProps } from '../BeerCard/interfaces'
import { BeersColorFilterProps } from './ColorFilter/interfaces'
import { BeersFilteredFilterProps } from './FilteredFilter/interfaces'

export type BeersPageViewProps = {
  beers: BeerCardViewProps['beer'][]

  pagination: PaginationProps | undefined

  color: BeersColorFilterProps['color']

  filtered: BeersFilteredFilterProps['filtered']
}
