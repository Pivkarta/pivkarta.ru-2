/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CityFragment = { __typename?: 'City', id: string, alias: string, lat: number, lng: number, pagetitle: string };

export const CityFragmentDoc = gql`
    fragment city on City {
  id
  pagetitle: name
  alias
  lat
  lng
}
    `;