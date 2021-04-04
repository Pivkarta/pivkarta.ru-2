/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CompanyFragment } from './company';
import { gql } from '@apollo/client';
import { CompanyFragmentDoc } from './company';
import * as Apollo from '@apollo/client';
export type CompaniesConnectionQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.PlaceWhereInput>;
  orderBy?: Types.Maybe<Types.PlaceOrderByInput>;
  first?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  center?: Types.Maybe<Types.CoordsInput>;
  type?: Types.Maybe<Array<Types.PlaceType> | Types.PlaceType>;
}>;


export type CompaniesConnectionQuery = { __typename?: 'Query', companiesConnection: { __typename?: 'MapPlaceConnection', aggregate: { __typename?: 'AggregatePlace', count: number }, edges: Array<{ __typename?: 'PlaceEdge', node: (
        { __typename?: 'Place' }
        & CompanyFragment
      ) }> } };


export const CompaniesConnectionDocument = gql`
    query companiesConnection($where: PlaceWhereInput, $orderBy: PlaceOrderByInput, $first: Int, $skip: Int, $center: CoordsInput, $type: [PlaceType!]) {
  companiesConnection: mapPlacesConnection(
    where: $where
    orderBy: $orderBy
    first: $first
    skip: $skip
    center: $center
    type: $type
  ) {
    aggregate {
      count
    }
    edges {
      node {
        ...company
      }
    }
  }
}
    ${CompanyFragmentDoc}`;

/**
 * __useCompaniesConnectionQuery__
 *
 * To run a query within a React component, call `useCompaniesConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompaniesConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompaniesConnectionQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      center: // value for 'center'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCompaniesConnectionQuery(baseOptions?: Apollo.QueryHookOptions<CompaniesConnectionQuery, CompaniesConnectionQueryVariables>) {
        return Apollo.useQuery<CompaniesConnectionQuery, CompaniesConnectionQueryVariables>(CompaniesConnectionDocument, baseOptions);
      }
export function useCompaniesConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompaniesConnectionQuery, CompaniesConnectionQueryVariables>) {
          return Apollo.useLazyQuery<CompaniesConnectionQuery, CompaniesConnectionQueryVariables>(CompaniesConnectionDocument, baseOptions);
        }
export type CompaniesConnectionQueryHookResult = ReturnType<typeof useCompaniesConnectionQuery>;
export type CompaniesConnectionLazyQueryHookResult = ReturnType<typeof useCompaniesConnectionLazyQuery>;
export type CompaniesConnectionQueryResult = Apollo.QueryResult<CompaniesConnectionQuery, CompaniesConnectionQueryVariables>;