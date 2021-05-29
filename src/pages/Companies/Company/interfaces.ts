import { PageProps } from '../../_App/interfaces'
import { CompanyFragment } from 'src/modules/gql/generated'

export type CompanyPageProps = {
  company: CompanyFragment | undefined
} & PageProps
