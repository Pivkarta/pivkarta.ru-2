import React, { useMemo } from 'react'
import {
  CommentOrderByInput,
  CommentsConnectionDocument,
  CommentsConnectionQuery,
  CommentsConnectionQueryVariables,
  useCommentsConnectionQuery,
} from 'src/modules/gql/generated'

import View from './View'

import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { NextSeo } from 'next-seo'
import { CommentsPageViewProps } from './View/interfaces'

const getQueryParams = (
  query: ParsedUrlQuery
): CommentsConnectionQueryVariables & { page: number } => {
  let skip: number | undefined

  const take = 10

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 0

  if (page > 1) {
    skip = (page - 1) * take
  }

  return {
    page,
    skip,
    first: take,
    where: {},
    orderBy: CommentOrderByInput.CREATEDAT_DESC,
    commentGetAuthor: true,
  }
}

const CommentsPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const { ...queryVariables } = useMemo(() => {
    return {
      ...getQueryParams(query),
    }
  }, [query])

  const response = useCommentsConnectionQuery({
    variables: queryVariables,
    onError: console.error,
  })

  // const { variables, loading } = response

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 1

  const comments = useMemo(() => {
    const comments: CommentsPageViewProps['comments'] = []

    response.data?.commentsConnection.edges.map((n) => {
      if (n?.node) {
        comments.push(n.node)
      }
    })

    return comments
  }, [response.data?.commentsConnection.edges])

  return useMemo(() => {
    return (
      <>
        <NextSeo title="Комментарии" description="Отзывы о банях и саунах" />

        <View
          // {...queryResult}
          // data={response}
          // count={0}
          // variables={variables}
          // page={page}
          // loading={loading}
          comments={comments}
          pagination={{
            limit: response.variables?.first || 0,
            page,
            total: response.data?.commentsConnection.aggregate.count || 0,
          }}
        />
      </>
    )
  }, [
    comments,
    page,
    response.data?.commentsConnection.aggregate.count,
    response.variables?.first,
  ])
}

CommentsPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  const result = await apolloClient.query<CommentsConnectionQuery>({
    query: CommentsConnectionDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: {
      ...getQueryParams(context.query),
    },
  })

  return {
    statusCode: !result.data.commentsConnection.edges.length ? 404 : undefined,
  }
}

export default CommentsPage
