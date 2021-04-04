import { PageProps } from '../_App/interfaces'
import { CityFragment } from 'src/modules/gql/generated'

export type MainPageProps = {
  city: CityFragment | undefined
} & PageProps
