/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type UserNoNestingFragment = { __typename?: 'User', id: string, user_id?: Types.Maybe<number>, username?: Types.Maybe<string>, fullname?: Types.Maybe<string>, email?: Types.Maybe<string>, image?: Types.Maybe<string>, etherwallet?: Types.Maybe<string>, created_at?: Types.Maybe<globalThis.Date>, sudo?: Types.Maybe<boolean> };

export const UserNoNestingFragmentDoc = gql`
    fragment UserNoNesting on User {
  id
  user_id
  username
  fullname
  email
  image
  etherwallet
  created_at
  sudo
}
    `;