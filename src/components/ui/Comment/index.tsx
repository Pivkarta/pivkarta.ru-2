import React, { useMemo } from 'react'
import { Grid } from '@material-ui/core'
import moment from 'moment'
import UserLink from '../Link/User'
import { CommentProps } from './interfaces'
import { CommentStyled } from './styles'
import Editor from '@prisma-cms/editor'
import CommentLink from '../Link/Comment'

/**
 * Комментарий
 */
const Comment: React.FC<CommentProps> = ({
  comment,
  commentLink = false,
  ...other
}) => {
  const content = useMemo(() => {
    if (!comment.editor_content) {
      return null
    }

    /**
     * Контент со стороны сервера может прийти как просто текст, так и JSON
     */
    // try {
    //   const value = JSON.parse(comment.text) as PrismaCmsEditorProps['value']

    //   /**
    //    * Если получилось распарсить, возвращаем редактором
    //    */
    //   return (value && ) || null
    // } catch (error) {
    //   // Если не получилось, то возвращаем как есть
    //   return (
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: comment.text,
    //       }}
    //     />
    //   )
    // }

    return <Editor editorKey="comment" value={comment.editor_content} />
  }, [comment.editor_content])

  const createdon = useMemo(() => {
    const createdon =
      comment.createdAt &&
      moment(comment.createdAt).format('YYYY-MM-DD HH:mm:ss')

    if (!createdon) {
      return null
    }

    if (commentLink) {
      return <CommentLink comment={comment}>{createdon}</CommentLink>
    }

    // else

    return createdon
  }, [comment, commentLink])

  return useMemo(() => {
    return (
      <CommentStyled {...other}>
        <Grid container spacing={2}>
          <Grid item>
            {comment.CreatedBy && (
              <UserLink user={comment.CreatedBy} showName={false} />
            )}
          </Grid>
          <Grid item xs>
            {comment.CreatedBy && (
              <UserLink user={comment.CreatedBy} showAvatar={false} />
            )}
            <p>{createdon}</p>
          </Grid>
          <Grid item xs={12}>
            {content}
          </Grid>
        </Grid>
      </CommentStyled>
    )
  }, [comment.CreatedBy, content, createdon, other])
}

export default Comment
