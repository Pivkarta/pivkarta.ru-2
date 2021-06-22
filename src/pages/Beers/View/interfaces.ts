import { PaginationProps } from 'src/components/ui/Pagination'
import { BeerCardViewProps } from '../BeerCard/interfaces'
import { BeersColorFilterProps } from './ColorFilter/interfaces'

export type BeersPageViewProps = {
  beers: BeerCardViewProps['beer'][]

  pagination: PaginationProps | undefined

  color: BeersColorFilterProps['color']
}
