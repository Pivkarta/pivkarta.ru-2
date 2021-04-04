import { UserFragment } from 'src/modules/gql/generated'

export type UserLinkProps = {
  user: UserFragment

  /**
   * Выводить имя
   */
  showName?: boolean

  /**
   * Выводить аватар
   */
  showAvatar?: boolean
}
