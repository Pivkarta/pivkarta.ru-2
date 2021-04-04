/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CommentFieldsFragment } from './commentFields';
import { gql } from '@apollo/client';
import { CommentFieldsFragmentDoc } from './commentFields';
export type CommentFragment = (
  { __typename?: 'Comment', CreatedBy?: Types.Maybe<{ __typename?: 'User', id: string, user_id?: Types.Maybe<number>, username?: Types.Maybe<string>, first_name?: Types.Maybe<string>, middle_name?: Types.Maybe<string>, last_name?: Types.Maybe<string>, image?: Types.Maybe<string>, email?: Types.Maybe<string> }> }
  & CommentFieldsFragment
);

export const CommentFragmentDoc = gql`
    fragment comment on Comment {
  ...commentFields
  CreatedBy: created_by @include(if: $commentGetAuthor) {
    id
    user_id
    username
    first_name
    middle_name
    last_name
    image
    email
  }
}
    ${CommentFieldsFragmentDoc}`;