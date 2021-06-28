/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type BeerFragment = { __typename?: 'Beer', id: string, beer_id?: Types.Maybe<number>, uri?: Types.Maybe<string>, name?: Types.Maybe<string>, url_name?: Types.Maybe<string>, createdAt: globalThis.Date, updatedAt: globalThis.Date, description?: Types.Maybe<string>, country?: Types.Maybe<string>, image?: Types.Maybe<string>, manufacturer?: Types.Maybe<string>, manufacture_years?: Types.Maybe<string>, container?: Types.Maybe<number>, alcohol?: Types.Maybe<string>, wort_percent?: Types.Maybe<string>, components?: Types.Maybe<string>, bitter?: Types.Maybe<number>, type_id?: Types.Maybe<number>, color?: Types.Maybe<string>, is_request?: Types.Maybe<number>, created_at?: Types.Maybe<number>, gallery?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, pasteurized?: Types.Maybe<boolean>, filtered?: Types.Maybe<boolean> };

export const BeerFragmentDoc = gql`
    fragment beer on Beer {
  id
  beer_id
  uri
  name
  url_name
  createdAt
  updatedAt
  description
  country
  image
  manufacturer
  manufacture_years
  container
  alcohol
  wort_percent
  components
  bitter
  type_id
  color
  is_request
  created_at
  gallery
  pasteurized
  filtered
}
    `;