import React, { useMemo } from 'react'
import Comment from 'src/components/ui/Comment'
import { CommentsPageViewCommentProps } from './interfaces'

const CommentsPageViewComment: React.FC<CommentsPageViewCommentProps> = ({
  comment,
  ...other
}) => {
  return useMemo(() => {
    return (
      <>
        <Comment comment={comment} commentLink={true} {...other} />
      </>
    )
  }, [comment, other])
}

export default CommentsPageViewComment
