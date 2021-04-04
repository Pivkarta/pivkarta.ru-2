/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserFragment } from './user';
import { gql } from '@apollo/client';
import { UserFragmentDoc } from './user';
import * as Apollo from '@apollo/client';
export type UserByUsernameQueryVariables = Types.Exact<{
  where: Types.UserWhereUniqueInput;
}>;


export type UserByUsernameQuery = { __typename?: 'Query', object?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> };


export const UserByUsernameDocument = gql`
    query userByUsername($where: UserWhereUniqueInput!) {
  object: user(where: $where) {
    ...user
  }
}
    ${UserFragmentDoc}`;

/**
 * __useUserByUsernameQuery__
 *
 * To run a query within a React component, call `useUserByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByUsernameQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserByUsernameQuery(baseOptions: Apollo.QueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>) {
        return Apollo.useQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(UserByUsernameDocument, baseOptions);
      }
export function useUserByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByUsernameQuery, UserByUsernameQueryVariables>) {
          return Apollo.useLazyQuery<UserByUsernameQuery, UserByUsernameQueryVariables>(UserByUsernameDocument, baseOptions);
        }
export type UserByUsernameQueryHookResult = ReturnType<typeof useUserByUsernameQuery>;
export type UserByUsernameLazyQueryHookResult = ReturnType<typeof useUserByUsernameLazyQuery>;
export type UserByUsernameQueryResult = Apollo.QueryResult<UserByUsernameQuery, UserByUsernameQueryVariables>;