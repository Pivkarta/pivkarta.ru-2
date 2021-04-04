import { PaginationProps } from 'src/components/ui/Pagination'
import { CommentsPageViewCommentProps } from './Comment/interfaces'

export type CommentsPageViewProps = {
  comments: CommentsPageViewCommentProps['comment'][]

  pagination: PaginationProps | undefined
}
