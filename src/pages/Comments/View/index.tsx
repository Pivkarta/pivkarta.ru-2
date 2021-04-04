import React, { useMemo } from 'react'
import Pagination from 'src/components/ui/Pagination'
import Title from 'src/components/ui/Title'
import CommentsPageViewComment from './Comment'
import { CommentsPageViewProps } from './interfaces'
import { CommentsPageViewStyled } from './styled'

const CommentsPageView: React.FC<CommentsPageViewProps> = ({
  comments,
  pagination,
}) => {
  return useMemo(() => {
    return (
      <>
        <CommentsPageViewStyled>
          <Title variant="h2">Комментарии</Title>

          {comments.map((n) => {
            return <CommentsPageViewComment key={n.id} comment={n} />
          })}

          {pagination ? <Pagination {...pagination} /> : null}
        </CommentsPageViewStyled>
      </>
    )
  }, [comments, pagination])
}

export default CommentsPageView
