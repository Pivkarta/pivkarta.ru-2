import { CitiesQuery } from 'src/modules/gql/generated'

export type CitiesPageViewProps = {
  cities: CitiesQuery['cities']
}
