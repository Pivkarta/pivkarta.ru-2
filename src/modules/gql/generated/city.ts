/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CityFragment } from './city_';
import { gql } from '@apollo/client';
import { CityFragmentDoc } from './city_';
import * as Apollo from '@apollo/client';
export type CityQueryVariables = Types.Exact<{
  where: Types.CityWhereUniqueInput;
}>;


export type CityQuery = { __typename?: 'Query', city?: Types.Maybe<(
    { __typename?: 'City' }
    & CityFragment
  )> };


export const CityDocument = gql`
    query city($where: CityWhereUniqueInput!) {
  city(where: $where) {
    ...city_
  }
}
    ${CityFragmentDoc}`;

/**
 * __useCityQuery__
 *
 * To run a query within a React component, call `useCityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCityQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCityQuery(baseOptions: Apollo.QueryHookOptions<CityQuery, CityQueryVariables>) {
        return Apollo.useQuery<CityQuery, CityQueryVariables>(CityDocument, baseOptions);
      }
export function useCityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CityQuery, CityQueryVariables>) {
          return Apollo.useLazyQuery<CityQuery, CityQueryVariables>(CityDocument, baseOptions);
        }
export type CityQueryHookResult = ReturnType<typeof useCityQuery>;
export type CityLazyQueryHookResult = ReturnType<typeof useCityLazyQuery>;
export type CityQueryResult = Apollo.QueryResult<CityQuery, CityQueryVariables>;