import { PageProps } from 'src/pages/_App/interfaces'
import { CityPageViewProps } from './View/interfaces'

export type CityPageProps = PageProps & {
  city: CityPageViewProps['city']
}
