/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { BeerFragment } from './beer';
import { gql } from '@apollo/client';
import { BeerFragmentDoc } from './beer';
import * as Apollo from '@apollo/client';
export type BeerInfoQueryVariables = Types.Exact<{
  where: Types.BeerWhereUniqueInput;
}>;


export type BeerInfoQuery = { __typename?: 'Query', object?: Types.Maybe<(
    { __typename?: 'Beer' }
    & BeerFragment
  )> };


export const BeerInfoDocument = gql`
    query beerInfo($where: BeerWhereUniqueInput!) {
  object: beer(where: $where) {
    ...beer
  }
}
    ${BeerFragmentDoc}`;

/**
 * __useBeerInfoQuery__
 *
 * To run a query within a React component, call `useBeerInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useBeerInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBeerInfoQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBeerInfoQuery(baseOptions: Apollo.QueryHookOptions<BeerInfoQuery, BeerInfoQueryVariables>) {
        return Apollo.useQuery<BeerInfoQuery, BeerInfoQueryVariables>(BeerInfoDocument, baseOptions);
      }
export function useBeerInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BeerInfoQuery, BeerInfoQueryVariables>) {
          return Apollo.useLazyQuery<BeerInfoQuery, BeerInfoQueryVariables>(BeerInfoDocument, baseOptions);
        }
export type BeerInfoQueryHookResult = ReturnType<typeof useBeerInfoQuery>;
export type BeerInfoLazyQueryHookResult = ReturnType<typeof useBeerInfoLazyQuery>;
export type BeerInfoQueryResult = Apollo.QueryResult<BeerInfoQuery, BeerInfoQueryVariables>;