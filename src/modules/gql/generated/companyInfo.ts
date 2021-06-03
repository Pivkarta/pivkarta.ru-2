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
export type CompanyInfoQueryVariables = Types.Exact<{
  where: Types.PlaceWhereUniqueInput;
}>;


export type CompanyInfoQuery = { __typename?: 'Query', object?: Types.Maybe<(
    { __typename?: 'Place' }
    & CompanyFragment
  )> };


export const CompanyInfoDocument = gql`
    query companyInfo($where: PlaceWhereUniqueInput!) {
  object: place(where: $where) {
    ...company
  }
}
    ${CompanyFragmentDoc}`;

/**
 * __useCompanyInfoQuery__
 *
 * To run a query within a React component, call `useCompanyInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyInfoQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCompanyInfoQuery(baseOptions: Apollo.QueryHookOptions<CompanyInfoQuery, CompanyInfoQueryVariables>) {
        return Apollo.useQuery<CompanyInfoQuery, CompanyInfoQueryVariables>(CompanyInfoDocument, baseOptions);
      }
export function useCompanyInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompanyInfoQuery, CompanyInfoQueryVariables>) {
          return Apollo.useLazyQuery<CompanyInfoQuery, CompanyInfoQueryVariables>(CompanyInfoDocument, baseOptions);
        }
export type CompanyInfoQueryHookResult = ReturnType<typeof useCompanyInfoQuery>;
export type CompanyInfoLazyQueryHookResult = ReturnType<typeof useCompanyInfoLazyQuery>;
export type CompanyInfoQueryResult = Apollo.QueryResult<CompanyInfoQuery, CompanyInfoQueryVariables>;