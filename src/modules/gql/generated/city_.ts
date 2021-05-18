/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CityFragment = { __typename?: 'City', id: string, name: string, alias: string, lat: number, lng: number };

export const CityFragmentDoc = gql`
    fragment city_ on City {
  id
  name
  alias
  lat
  lng
}
    `;