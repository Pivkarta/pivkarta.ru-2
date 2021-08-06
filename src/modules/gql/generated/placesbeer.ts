/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type PlacesbeerQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.PlaceWhereInput>;
  center?: Types.Maybe<Types.CoordsInput>;
}>;


export type PlacesbeerQuery = { __typename?: 'Query', mapPlacesConnection: { __typename?: 'MapPlaceConnection', edges: Array<{ __typename?: 'PlaceEdge', node: { __typename?: 'Place', id: string, uri?: Types.Maybe<string>, place_id?: Types.Maybe<number>, name: string, image?: Types.Maybe<string> } }> } };


export const PlacesbeerDocument = gql`
    query placesbeer($where: PlaceWhereInput, $center: CoordsInput) {
  mapPlacesConnection(first: 10, where: $where, center: $center) {
    edges {
      node {
        id
        uri
        place_id
        name
        image
      }
    }
  }
}
    `;

/**
 * __usePlacesbeerQuery__
 *
 * To run a query within a React component, call `usePlacesbeerQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlacesbeerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlacesbeerQuery({
 *   variables: {
 *      where: // value for 'where'
 *      center: // value for 'center'
 *   },
 * });
 */
export function usePlacesbeerQuery(baseOptions?: Apollo.QueryHookOptions<PlacesbeerQuery, PlacesbeerQueryVariables>) {
        return Apollo.useQuery<PlacesbeerQuery, PlacesbeerQueryVariables>(PlacesbeerDocument, baseOptions);
      }
export function usePlacesbeerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlacesbeerQuery, PlacesbeerQueryVariables>) {
          return Apollo.useLazyQuery<PlacesbeerQuery, PlacesbeerQueryVariables>(PlacesbeerDocument, baseOptions);
        }
export type PlacesbeerQueryHookResult = ReturnType<typeof usePlacesbeerQuery>;
export type PlacesbeerLazyQueryHookResult = ReturnType<typeof usePlacesbeerLazyQuery>;
export type PlacesbeerQueryResult = Apollo.QueryResult<PlacesbeerQuery, PlacesbeerQueryVariables>;