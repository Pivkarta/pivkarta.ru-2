/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CompanyFragment = { __typename?: 'Place', id: string, minPrice?: Types.Maybe<number>, maxPrice?: Types.Maybe<number>, uri?: Types.Maybe<string>, createdAt: globalThis.Date, updatedAt: globalThis.Date, name: string, description?: Types.Maybe<string>, address?: Types.Maybe<string>, lat?: Types.Maybe<number>, lng?: Types.Maybe<number>, website?: Types.Maybe<string>, phone?: Types.Maybe<string>, image?: Types.Maybe<string>, gallery?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, schedules?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, content?: Types.Maybe<globalThis.Record<string, any> | globalThis.Array<any>>, metro?: Types.Maybe<string>, site?: Types.Maybe<string>, workTime?: Types.Maybe<string> };

export const CompanyFragmentDoc = gql`
    fragment company on Place {
  id
  minPrice
  maxPrice
  uri
  createdAt
  updatedAt
  name
  description
  address
  lat
  lng
  website
  phone
  image
  gallery
  schedules
  content
  metro
  phone
  site: website
  workTime: work_hours
}
    `;