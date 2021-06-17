import { PaginationProps } from 'src/components/ui/Pagination'
import { BeerCardViewProps } from '../BeerCard/interfaces'

export type BeersPageViewProps = {
  beers: BeerCardViewProps['beer'][]

  pagination: PaginationProps | undefined
}
