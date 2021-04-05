/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CommentFieldsFragment = { __typename?: 'Comment', id: string, comment_id?: Types.Maybe<number>, object_id?: Types.Maybe<number>, type_id: number, createdAt: globalThis.Date, editor_content: globalThis.Record<string, any> | globalThis.Array<any>, is_checked: number, name?: Types.Maybe<string>, parent?: Types.Maybe<string> };

export const CommentFieldsFragmentDoc = gql`
    fragment commentFields on Comment {
  id
  comment_id
  object_id
  type_id
  createdAt
  editor_content
  is_checked
  name
  parent
}
    `;