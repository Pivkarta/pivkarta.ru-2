/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CommentFragment } from './comment';
import { gql } from '@apollo/client';
import { CommentFragmentDoc } from './comment';
import * as Apollo from '@apollo/client';
export type CommentsConnectionQueryVariables = Types.Exact<{
  first?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  commentGetAuthor: Types.Scalars['Boolean'];
  orderBy?: Types.Maybe<Types.CommentOrderByInput>;
  where?: Types.Maybe<Types.CommentWhereInput>;
}>;


export type CommentsConnectionQuery = { __typename?: 'Query', commentsConnection: { __typename?: 'CommentConnection', aggregate: { __typename?: 'AggregateComment', count: number }, edges: Array<Types.Maybe<{ __typename?: 'CommentEdge', node: (
        { __typename?: 'Comment' }
        & CommentFragment
      ) }>> } };


export const CommentsConnectionDocument = gql`
    query commentsConnection($first: Int, $skip: Int, $commentGetAuthor: Boolean!, $orderBy: CommentOrderByInput, $where: CommentWhereInput) {
  commentsConnection(first: $first, skip: $skip, orderBy: $orderBy, where: $where) {
    aggregate {
      count
    }
    edges {
      node {
        ...comment
      }
    }
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useCommentsConnectionQuery__
 *
 * To run a query within a React component, call `useCommentsConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsConnectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      commentGetAuthor: // value for 'commentGetAuthor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCommentsConnectionQuery(baseOptions: Apollo.QueryHookOptions<CommentsConnectionQuery, CommentsConnectionQueryVariables>) {
        return Apollo.useQuery<CommentsConnectionQuery, CommentsConnectionQueryVariables>(CommentsConnectionDocument, baseOptions);
      }
export function useCommentsConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsConnectionQuery, CommentsConnectionQueryVariables>) {
          return Apollo.useLazyQuery<CommentsConnectionQuery, CommentsConnectionQueryVariables>(CommentsConnectionDocument, baseOptions);
        }
export type CommentsConnectionQueryHookResult = ReturnType<typeof useCommentsConnectionQuery>;
export type CommentsConnectionLazyQueryHookResult = ReturnType<typeof useCommentsConnectionLazyQuery>;
export type CommentsConnectionQueryResult = Apollo.QueryResult<CommentsConnectionQuery, CommentsConnectionQueryVariables>;