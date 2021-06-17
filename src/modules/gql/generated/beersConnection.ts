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
export type BeersConnectionQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.BeerWhereInput>;
  orderBy?: Types.Maybe<Types.BeerOrderByInput>;
  first?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type BeersConnectionQuery = { __typename?: 'Query', beersConnection: { __typename?: 'BeerConnection', aggregate: { __typename?: 'AggregateBeer', count: number }, edges: Array<Types.Maybe<{ __typename?: 'BeerEdge', node: (
        { __typename?: 'Beer' }
        & BeerFragment
      ) }>> } };


export const BeersConnectionDocument = gql`
    query beersConnection($where: BeerWhereInput, $orderBy: BeerOrderByInput, $first: Int, $skip: Int) {
  beersConnection(where: $where, orderBy: $orderBy, first: $first, skip: $skip) {
    aggregate {
      count
    }
    edges {
      node {
        ...beer
      }
    }
  }
}
    ${BeerFragmentDoc}`;

/**
 * __useBeersConnectionQuery__
 *
 * To run a query within a React component, call `useBeersConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useBeersConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBeersConnectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useBeersConnectionQuery(baseOptions?: Apollo.QueryHookOptions<BeersConnectionQuery, BeersConnectionQueryVariables>) {
        return Apollo.useQuery<BeersConnectionQuery, BeersConnectionQueryVariables>(BeersConnectionDocument, baseOptions);
      }
export function useBeersConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BeersConnectionQuery, BeersConnectionQueryVariables>) {
          return Apollo.useLazyQuery<BeersConnectionQuery, BeersConnectionQueryVariables>(BeersConnectionDocument, baseOptions);
        }
export type BeersConnectionQueryHookResult = ReturnType<typeof useBeersConnectionQuery>;
export type BeersConnectionLazyQueryHookResult = ReturnType<typeof useBeersConnectionLazyQuery>;
export type BeersConnectionQueryResult = Apollo.QueryResult<BeersConnectionQuery, BeersConnectionQueryVariables>;