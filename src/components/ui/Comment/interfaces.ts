import { CommentFragment } from 'src/modules/gql/generated'

export type CommentProps = {
  comment: CommentFragment

  /**
   * Выводить ссылку на комментарий
   */
  commentLink?: boolean
}
