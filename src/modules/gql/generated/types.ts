/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: globalThis.Date;
  Json: globalThis.Record<string, any> | globalThis.Array<any>;
  Long: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: globalThis.File;
};

export interface Account extends Node {
  __typename?: 'Account';
  id: Scalars['ID'];
  balance: Scalars['Float'];
  User: User;
  Transactions?: Maybe<Array<Transaction>>;
}


export type AccountUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type AccountTransactionsArgs = {
  where?: Maybe<TransactionWhereInput>;
  orderBy?: Maybe<TransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface AccountConnection {
  __typename?: 'AccountConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<AccountEdge>>;
  aggregate: AggregateAccount;
}

export interface AccountCreateInput {
  balance?: Maybe<Scalars['Float']>;
  User: UserCreateOneWithoutAccountInput;
  Transactions?: Maybe<TransactionCreateManyWithoutAccountInput>;
}

export interface AccountCreateOneWithoutTransactionsInput {
  connect?: Maybe<AccountWhereUniqueInput>;
}

export interface AccountCreateOneWithoutUserInput {
  connect?: Maybe<AccountWhereUniqueInput>;
}

export interface AccountCreateWithoutTransactionsInput {
  balance?: Maybe<Scalars['Float']>;
  User: UserCreateOneWithoutAccountInput;
}

export interface AccountCreateWithoutUserInput {
  balance?: Maybe<Scalars['Float']>;
  Transactions?: Maybe<TransactionCreateManyWithoutAccountInput>;
}

/** An edge in a connection. */
export interface AccountEdge {
  __typename?: 'AccountEdge';
  /** The item at the end of the edge. */
  node: Account;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum AccountOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  BALANCE_ASC = 'balance_ASC',
  BALANCE_DESC = 'balance_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface AccountPreviousValues {
  __typename?: 'AccountPreviousValues';
  id: Scalars['ID'];
  balance: Scalars['Float'];
}

export interface AccountSubscriptionPayload {
  __typename?: 'AccountSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Account>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<AccountPreviousValues>;
}

export interface AccountSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AccountSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AccountSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AccountSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<AccountWhereInput>;
}

export interface AccountUpdateInput {
  balance?: Maybe<Scalars['Float']>;
  User?: Maybe<UserUpdateOneWithoutAccountInput>;
  Transactions?: Maybe<TransactionUpdateManyWithoutAccountInput>;
}

export interface AccountUpdateOneWithoutTransactionsInput {
  connect?: Maybe<AccountWhereUniqueInput>;
}

export interface AccountUpdateOneWithoutUserInput {
  connect?: Maybe<AccountWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface AccountUpdateWithoutTransactionsDataInput {
  balance?: Maybe<Scalars['Float']>;
  User?: Maybe<UserUpdateOneWithoutAccountInput>;
}

export interface AccountUpdateWithoutUserDataInput {
  balance?: Maybe<Scalars['Float']>;
  Transactions?: Maybe<TransactionUpdateManyWithoutAccountInput>;
}

export interface AccountWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AccountWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AccountWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AccountWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  balance?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  balance_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  balance_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  balance_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  balance_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  balance_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  balance_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  balance_gte?: Maybe<Scalars['Float']>;
  User?: Maybe<UserWhereInput>;
  Transactions_every?: Maybe<TransactionWhereInput>;
  Transactions_some?: Maybe<TransactionWhereInput>;
  Transactions_none?: Maybe<TransactionWhereInput>;
}

export interface AccountWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface AggregateAccount {
  __typename?: 'AggregateAccount';
  count: Scalars['Int'];
}

export interface AggregateBeer {
  __typename?: 'AggregateBeer';
  count: Scalars['Int'];
}

export interface AggregateCallRequest {
  __typename?: 'AggregateCallRequest';
  count: Scalars['Int'];
}

export interface AggregateChatMessage {
  __typename?: 'AggregateChatMessage';
  count: Scalars['Int'];
}

export interface AggregateChatMessageReaded {
  __typename?: 'AggregateChatMessageReaded';
  count: Scalars['Int'];
}

export interface AggregateChatRoom {
  __typename?: 'AggregateChatRoom';
  count: Scalars['Int'];
}

export interface AggregateChatRoomInvitation {
  __typename?: 'AggregateChatRoomInvitation';
  count: Scalars['Int'];
}

export interface AggregateCity {
  __typename?: 'AggregateCity';
  count: Scalars['Int'];
}

export interface AggregateComment {
  __typename?: 'AggregateComment';
  count: Scalars['Int'];
}

export interface AggregateCommentType {
  __typename?: 'AggregateCommentType';
  count: Scalars['Int'];
}

export interface AggregateEthAccount {
  __typename?: 'AggregateEthAccount';
  count: Scalars['Int'];
}

export interface AggregateEthBlock {
  __typename?: 'AggregateEthBlock';
  count: Scalars['Int'];
}

export interface AggregateEthContractSource {
  __typename?: 'AggregateEthContractSource';
  count: Scalars['Int'];
}

export interface AggregateEthTransaction {
  __typename?: 'AggregateEthTransaction';
  count: Scalars['Int'];
}

export interface AggregateFile {
  __typename?: 'AggregateFile';
  count: Scalars['Int'];
}

export interface AggregateGame {
  __typename?: 'AggregateGame';
  count: Scalars['Int'];
}

export interface AggregateGameResult {
  __typename?: 'AggregateGameResult';
  count: Scalars['Int'];
}

export interface AggregateLetsadsSmsMessageStatus {
  __typename?: 'AggregateLetsadsSmsMessageStatus';
  count: Scalars['Int'];
}

export interface AggregateLetsadsSmsMessageStatusItem {
  __typename?: 'AggregateLetsadsSmsMessageStatusItem';
  count: Scalars['Int'];
}

export interface AggregateLetter {
  __typename?: 'AggregateLetter';
  count: Scalars['Int'];
}

export interface AggregateLog {
  __typename?: 'AggregateLog';
  count: Scalars['Int'];
}

export interface AggregateLogedIn {
  __typename?: 'AggregateLogedIn';
  count: Scalars['Int'];
}

export interface AggregateNotice {
  __typename?: 'AggregateNotice';
  count: Scalars['Int'];
}

export interface AggregateNotificationType {
  __typename?: 'AggregateNotificationType';
  count: Scalars['Int'];
}

export interface AggregatePhoto {
  __typename?: 'AggregatePhoto';
  count: Scalars['Int'];
}

export interface AggregatePlace {
  __typename?: 'AggregatePlace';
  count: Scalars['Int'];
}

export interface AggregatePlaceBeer {
  __typename?: 'AggregatePlaceBeer';
  count: Scalars['Int'];
}

export interface AggregateProject {
  __typename?: 'AggregateProject';
  count: Scalars['Int'];
}

export interface AggregateResetPassword {
  __typename?: 'AggregateResetPassword';
  count: Scalars['Int'];
}

export interface AggregateResource {
  __typename?: 'AggregateResource';
  count: Scalars['Int'];
}

export interface AggregateResourceTag {
  __typename?: 'AggregateResourceTag';
  count: Scalars['Int'];
}

export interface AggregateRoute {
  __typename?: 'AggregateRoute';
  count: Scalars['Int'];
}

export interface AggregateSmsMessage {
  __typename?: 'AggregateSmsMessage';
  count: Scalars['Int'];
}

export interface AggregateSmsProvider {
  __typename?: 'AggregateSmsProvider';
  count: Scalars['Int'];
}

export interface AggregateTag {
  __typename?: 'AggregateTag';
  count: Scalars['Int'];
}

export interface AggregateTarif {
  __typename?: 'AggregateTarif';
  count: Scalars['Int'];
}

export interface AggregateTarifRequest {
  __typename?: 'AggregateTarifRequest';
  count: Scalars['Int'];
}

export interface AggregateTeam {
  __typename?: 'AggregateTeam';
  count: Scalars['Int'];
}

export interface AggregateTopic {
  __typename?: 'AggregateTopic';
  count: Scalars['Int'];
}

export interface AggregateTournament {
  __typename?: 'AggregateTournament';
  count: Scalars['Int'];
}

export interface AggregateTournamentGroup {
  __typename?: 'AggregateTournamentGroup';
  count: Scalars['Int'];
}

export interface AggregateTourney {
  __typename?: 'AggregateTourney';
  count: Scalars['Int'];
}

export interface AggregateTransaction {
  __typename?: 'AggregateTransaction';
  count: Scalars['Int'];
}

export interface AggregateUser {
  __typename?: 'AggregateUser';
  count: Scalars['Int'];
}

export interface AggregateUserGroup {
  __typename?: 'AggregateUserGroup';
  count: Scalars['Int'];
}

export interface AggregateUserTarif {
  __typename?: 'AggregateUserTarif';
  count: Scalars['Int'];
}

export interface AggregateVote {
  __typename?: 'AggregateVote';
  count: Scalars['Int'];
}

export interface AnswerInput {
  offer?: Maybe<Scalars['Json']>;
  answer?: Maybe<Scalars['Json']>;
  sdp?: Maybe<Scalars['Json']>;
}

export interface AuthPayload {
  __typename?: 'AuthPayload';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  token?: Maybe<Scalars['String']>;
  data?: Maybe<User>;
}

export interface BatchPayload {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
}

export interface Beer extends Node {
  __typename?: 'Beer';
  container_str?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  beer_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  editor_content?: Maybe<Scalars['Json']>;
  country?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  num_comments?: Maybe<Scalars['Int']>;
  num_photos?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  manufacture_years?: Maybe<Scalars['String']>;
  container?: Maybe<Scalars['Int']>;
  alcohol?: Maybe<Scalars['String']>;
  wort_percent?: Maybe<Scalars['String']>;
  components?: Maybe<Scalars['String']>;
  bitter?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  is_request?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  add_user_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  gallery?: Maybe<Scalars['Json']>;
  places?: Maybe<Array<PlaceBeer>>;
  filtered?: Maybe<Scalars['Boolean']>;
  pasteurized?: Maybe<Scalars['Boolean']>;
}


export type BeerPlacesArgs = {
  where?: Maybe<PlaceBeerWhereInput>;
  orderBy?: Maybe<PlaceBeerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface BeerConnection {
  __typename?: 'BeerConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<BeerEdge>>;
  aggregate: AggregateBeer;
}

export interface BeerCreateInput {
  name?: Maybe<Scalars['String']>;
  url_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  editor_content?: Maybe<Scalars['Json']>;
  country?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  manufacture_years?: Maybe<Scalars['String']>;
  container?: Maybe<Scalars['Int']>;
  alcohol?: Maybe<Scalars['String']>;
  wort_percent?: Maybe<Scalars['String']>;
  components?: Maybe<Scalars['String']>;
  bitter?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  is_request?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  add_user_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  gallery?: Maybe<Scalars['Json']>;
  filtered?: Maybe<Scalars['Boolean']>;
  pasteurized?: Maybe<Scalars['Boolean']>;
}

export interface BeerCreateOneWithoutPlacesInput {
  connect?: Maybe<BeerWhereUniqueInput>;
}

export interface BeerCreateWithoutPlacesInput {
  beer_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  editor_content?: Maybe<Scalars['Json']>;
  country?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  num_comments?: Maybe<Scalars['Int']>;
  num_photos?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  manufacture_years?: Maybe<Scalars['String']>;
  container?: Maybe<Scalars['Int']>;
  alcohol?: Maybe<Scalars['String']>;
  wort_percent?: Maybe<Scalars['String']>;
  components?: Maybe<Scalars['String']>;
  bitter?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  is_request?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  add_user_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  gallery?: Maybe<Scalars['Json']>;
  filtered?: Maybe<Scalars['Boolean']>;
  pasteurized?: Maybe<Scalars['Boolean']>;
}

/** An edge in a connection. */
export interface BeerEdge {
  __typename?: 'BeerEdge';
  /** The item at the end of the edge. */
  node: Beer;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum BeerOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  BEER_ID_ASC = 'beer_id_ASC',
  BEER_ID_DESC = 'beer_id_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  URL_NAME_ASC = 'url_name_ASC',
  URL_NAME_DESC = 'url_name_DESC',
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  EDITOR_CONTENT_ASC = 'editor_content_ASC',
  EDITOR_CONTENT_DESC = 'editor_content_DESC',
  COUNTRY_ASC = 'country_ASC',
  COUNTRY_DESC = 'country_DESC',
  IMAGE_ASC = 'image_ASC',
  IMAGE_DESC = 'image_DESC',
  NUM_COMMENTS_ASC = 'num_comments_ASC',
  NUM_COMMENTS_DESC = 'num_comments_DESC',
  NUM_PHOTOS_ASC = 'num_photos_ASC',
  NUM_PHOTOS_DESC = 'num_photos_DESC',
  MANUFACTURER_ASC = 'manufacturer_ASC',
  MANUFACTURER_DESC = 'manufacturer_DESC',
  REGION_ASC = 'region_ASC',
  REGION_DESC = 'region_DESC',
  MANUFACTURE_YEARS_ASC = 'manufacture_years_ASC',
  MANUFACTURE_YEARS_DESC = 'manufacture_years_DESC',
  CONTAINER_ASC = 'container_ASC',
  CONTAINER_DESC = 'container_DESC',
  ALCOHOL_ASC = 'alcohol_ASC',
  ALCOHOL_DESC = 'alcohol_DESC',
  WORT_PERCENT_ASC = 'wort_percent_ASC',
  WORT_PERCENT_DESC = 'wort_percent_DESC',
  COMPONENTS_ASC = 'components_ASC',
  COMPONENTS_DESC = 'components_DESC',
  BITTER_ASC = 'bitter_ASC',
  BITTER_DESC = 'bitter_DESC',
  TYPE_ID_ASC = 'type_id_ASC',
  TYPE_ID_DESC = 'type_id_DESC',
  COLOR_ASC = 'color_ASC',
  COLOR_DESC = 'color_DESC',
  IS_REQUEST_ASC = 'is_request_ASC',
  IS_REQUEST_DESC = 'is_request_DESC',
  RATING_ASC = 'rating_ASC',
  RATING_DESC = 'rating_DESC',
  ADD_USER_ID_ASC = 'add_user_id_ASC',
  ADD_USER_ID_DESC = 'add_user_id_DESC',
  CREATED_AT_ASC = 'created_at_ASC',
  CREATED_AT_DESC = 'created_at_DESC',
  GALLERY_ASC = 'gallery_ASC',
  GALLERY_DESC = 'gallery_DESC',
  FILTERED_ASC = 'filtered_ASC',
  FILTERED_DESC = 'filtered_DESC',
  PASTEURIZED_ASC = 'pasteurized_ASC',
  PASTEURIZED_DESC = 'pasteurized_DESC'
}

export interface BeerPayload {
  __typename?: 'BeerPayload';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<Beer>;
}

export interface BeerPreviousValues {
  __typename?: 'BeerPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  beer_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  editor_content?: Maybe<Scalars['Json']>;
  country?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  num_comments?: Maybe<Scalars['Int']>;
  num_photos?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  manufacture_years?: Maybe<Scalars['String']>;
  container?: Maybe<Scalars['Int']>;
  alcohol?: Maybe<Scalars['String']>;
  wort_percent?: Maybe<Scalars['String']>;
  components?: Maybe<Scalars['String']>;
  bitter?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  is_request?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  add_user_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  gallery?: Maybe<Scalars['Json']>;
  filtered?: Maybe<Scalars['Boolean']>;
  pasteurized?: Maybe<Scalars['Boolean']>;
}

export interface BeerSubscriptionPayload {
  __typename?: 'BeerSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Beer>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<BeerPreviousValues>;
}

export interface BeerSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BeerSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BeerSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BeerSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<BeerWhereInput>;
}

export interface BeerUpdateInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  editor_content?: Maybe<Scalars['Json']>;
  country?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  manufacture_years?: Maybe<Scalars['String']>;
  container?: Maybe<Scalars['Int']>;
  alcohol?: Maybe<Scalars['String']>;
  wort_percent?: Maybe<Scalars['String']>;
  components?: Maybe<Scalars['String']>;
  bitter?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  is_request?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  gallery?: Maybe<Scalars['Json']>;
  filtered?: Maybe<Scalars['Boolean']>;
  pasteurized?: Maybe<Scalars['Boolean']>;
}

export interface BeerUpdateOneWithoutPlacesInput {
  connect?: Maybe<BeerWhereUniqueInput>;
}

export interface BeerUpdateWithoutPlacesDataInput {
  beer_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  editor_content?: Maybe<Scalars['Json']>;
  country?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  num_comments?: Maybe<Scalars['Int']>;
  num_photos?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  manufacture_years?: Maybe<Scalars['String']>;
  container?: Maybe<Scalars['Int']>;
  alcohol?: Maybe<Scalars['String']>;
  wort_percent?: Maybe<Scalars['String']>;
  components?: Maybe<Scalars['String']>;
  bitter?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  is_request?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  add_user_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  gallery?: Maybe<Scalars['Json']>;
  filtered?: Maybe<Scalars['Boolean']>;
  pasteurized?: Maybe<Scalars['Boolean']>;
}

export interface BeerWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<BeerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<BeerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<BeerWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  beer_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  beer_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  beer_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  beer_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  beer_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  beer_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  beer_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  beer_id_gte?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  url_name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  country_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  country_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  country_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  country_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  country_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  country_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  country_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  country_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  country_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  country_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  country_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  country_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  country_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  image_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  image_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  image_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  image_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  image_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  image_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  image_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  image_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  image_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  image_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  image_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  image_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  image_not_ends_with?: Maybe<Scalars['String']>;
  num_comments?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  num_comments_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  num_comments_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  num_comments_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  num_comments_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  num_comments_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  num_comments_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  num_comments_gte?: Maybe<Scalars['Int']>;
  num_photos?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  num_photos_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  num_photos_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  num_photos_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  num_photos_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  num_photos_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  num_photos_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  num_photos_gte?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  manufacturer_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacturer_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  manufacturer_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  manufacturer_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  manufacturer_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  manufacturer_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  manufacturer_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacturer_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacturer_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacturer_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  manufacturer_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacturer_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  manufacturer_not_ends_with?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  region_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  region_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  region_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  region_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  region_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  region_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  region_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  region_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  region_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  region_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  region_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  region_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  region_not_ends_with?: Maybe<Scalars['String']>;
  manufacture_years?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  manufacture_years_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  manufacture_years_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  manufacture_years_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  manufacture_years_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  manufacture_years_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  manufacture_years_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  manufacture_years_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  manufacture_years_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  manufacture_years_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  manufacture_years_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  manufacture_years_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  manufacture_years_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  manufacture_years_not_ends_with?: Maybe<Scalars['String']>;
  container?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  container_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  container_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  container_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  container_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  container_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  container_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  container_gte?: Maybe<Scalars['Int']>;
  alcohol?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  alcohol_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  alcohol_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  alcohol_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  alcohol_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  alcohol_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  alcohol_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  alcohol_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  alcohol_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  alcohol_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  alcohol_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  alcohol_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  alcohol_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  alcohol_not_ends_with?: Maybe<Scalars['String']>;
  wort_percent?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  wort_percent_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  wort_percent_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  wort_percent_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  wort_percent_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  wort_percent_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  wort_percent_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  wort_percent_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  wort_percent_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  wort_percent_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  wort_percent_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  wort_percent_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  wort_percent_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  wort_percent_not_ends_with?: Maybe<Scalars['String']>;
  components?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  components_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  components_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  components_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  components_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  components_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  components_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  components_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  components_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  components_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  components_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  components_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  components_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  components_not_ends_with?: Maybe<Scalars['String']>;
  bitter?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  bitter_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  bitter_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  bitter_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  bitter_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  bitter_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  bitter_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  bitter_gte?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  type_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  type_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  type_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  type_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  type_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  type_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  type_id_gte?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  color_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  color_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  color_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  color_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  color_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  color_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  color_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  color_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  color_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  color_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  color_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  color_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  color_not_ends_with?: Maybe<Scalars['String']>;
  is_request?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  is_request_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  is_request_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  is_request_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  is_request_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  is_request_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  is_request_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  is_request_gte?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  rating_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  rating_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  rating_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  rating_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  rating_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  rating_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  rating_gte?: Maybe<Scalars['Float']>;
  add_user_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  add_user_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  add_user_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  add_user_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  add_user_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  add_user_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  add_user_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  add_user_id_gte?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  created_at_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  created_at_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  created_at_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  created_at_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  created_at_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  created_at_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  created_at_gte?: Maybe<Scalars['Int']>;
  filtered?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  filtered_not?: Maybe<Scalars['Boolean']>;
  pasteurized?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  pasteurized_not?: Maybe<Scalars['Boolean']>;
  places_every?: Maybe<PlaceBeerWhereInput>;
  places_some?: Maybe<PlaceBeerWhereInput>;
  places_none?: Maybe<PlaceBeerWhereInput>;
}

export interface BeerWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  beer_id?: Maybe<Scalars['Int']>;
}

export interface CallRequest extends Node {
  __typename?: 'CallRequest';
  id: Scalars['ID'];
  called_descriptions: Scalars['Json'];
  caller_descriptions: Scalars['Json'];
  status?: Maybe<CallRequestStatus>;
  startedAt?: Maybe<Scalars['DateTime']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  Called: User;
  Caller?: Maybe<User>;
  Room?: Maybe<ChatRoom>;
}


export type CallRequestCalledArgs = {
  where?: Maybe<UserWhereInput>;
};


export type CallRequestCallerArgs = {
  where?: Maybe<UserWhereInput>;
};


export type CallRequestRoomArgs = {
  where?: Maybe<ChatRoomWhereInput>;
};

/** A connection to a list of items. */
export interface CallRequestConnection {
  __typename?: 'CallRequestConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<CallRequestEdge>>;
  aggregate: AggregateCallRequest;
}

export interface CallRequestCreateInput {
  called_descriptions: Scalars['Json'];
  caller_descriptions: Scalars['Json'];
  status?: Maybe<CallRequestStatus>;
  startedAt?: Maybe<Scalars['DateTime']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  Called: UserCreateOneInput;
  Caller?: Maybe<UserCreateOneInput>;
  Room?: Maybe<ChatRoomCreateOneWithoutCallRequestsInput>;
}

export interface CallRequestCreateManyWithoutRoomInput {
  connect?: Maybe<Array<CallRequestWhereUniqueInput>>;
}

export interface CallRequestCreateWithoutRoomInput {
  called_descriptions: Scalars['Json'];
  caller_descriptions: Scalars['Json'];
  status?: Maybe<CallRequestStatus>;
  startedAt?: Maybe<Scalars['DateTime']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  Called: UserCreateOneInput;
  Caller?: Maybe<UserCreateOneInput>;
}

export interface CallRequestDataInput {
  status?: Maybe<CallRequestStatus>;
}

/** An edge in a connection. */
export interface CallRequestEdge {
  __typename?: 'CallRequestEdge';
  /** The item at the end of the edge. */
  node: CallRequest;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum CallRequestOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CALLED_DESCRIPTIONS_ASC = 'called_descriptions_ASC',
  CALLED_DESCRIPTIONS_DESC = 'called_descriptions_DESC',
  CALLER_DESCRIPTIONS_ASC = 'caller_descriptions_ASC',
  CALLER_DESCRIPTIONS_DESC = 'caller_descriptions_DESC',
  STATUS_ASC = 'status_ASC',
  STATUS_DESC = 'status_DESC',
  STARTEDAT_ASC = 'startedAt_ASC',
  STARTEDAT_DESC = 'startedAt_DESC',
  ENDEDAT_ASC = 'endedAt_ASC',
  ENDEDAT_DESC = 'endedAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface CallRequestPreviousValues {
  __typename?: 'CallRequestPreviousValues';
  id: Scalars['ID'];
  called_descriptions: Scalars['Json'];
  caller_descriptions: Scalars['Json'];
  status?: Maybe<CallRequestStatus>;
  startedAt?: Maybe<Scalars['DateTime']>;
  endedAt?: Maybe<Scalars['DateTime']>;
}

export interface CallRequestResponse {
  __typename?: 'CallRequestResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<CallRequest>;
}

export enum CallRequestStatus {
  CREATED = 'Created',
  REJECTED = 'Rejected',
  ACCEPTED = 'Accepted',
  STARTED = 'Started',
  CANCELED = 'Canceled',
  MISSED = 'Missed',
  ENDED = 'Ended',
  ERROR = 'Error',
  BILLED = 'Billed'
}

export interface CallRequestSubscriptionPayload {
  __typename?: 'CallRequestSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<CallRequest>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<CallRequestPreviousValues>;
}

export interface CallRequestSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CallRequestSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CallRequestSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CallRequestSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<CallRequestWhereInput>;
}

export interface CallRequestUpdateDataInput {
  status?: Maybe<CallRequestStatus>;
  answer?: Maybe<AnswerInput>;
}

export interface CallRequestUpdateInput {
  called_descriptions?: Maybe<Scalars['Json']>;
  caller_descriptions?: Maybe<Scalars['Json']>;
  status?: Maybe<CallRequestStatus>;
  startedAt?: Maybe<Scalars['DateTime']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  Called?: Maybe<UserUpdateOneInput>;
  Caller?: Maybe<UserUpdateOneInput>;
  Room?: Maybe<ChatRoomUpdateOneWithoutCallRequestsInput>;
}

export interface CallRequestUpdateManyWithoutRoomInput {
  connect?: Maybe<Array<CallRequestWhereUniqueInput>>;
  disconnect?: Maybe<Array<CallRequestWhereUniqueInput>>;
}

export interface CallRequestUpdateWithWhereUniqueWithoutRoomInput {
  where: CallRequestWhereUniqueInput;
  data: CallRequestUpdateWithoutRoomDataInput;
}

export interface CallRequestUpdateWithoutRoomDataInput {
  called_descriptions?: Maybe<Scalars['Json']>;
  caller_descriptions?: Maybe<Scalars['Json']>;
  status?: Maybe<CallRequestStatus>;
  startedAt?: Maybe<Scalars['DateTime']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  Called?: Maybe<UserUpdateOneInput>;
  Caller?: Maybe<UserUpdateOneInput>;
}

export interface CallRequestUpsertWithWhereUniqueWithoutRoomInput {
  where: CallRequestWhereUniqueInput;
}

export interface CallRequestWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CallRequestWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CallRequestWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CallRequestWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  status?: Maybe<CallRequestStatus>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<CallRequestStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<CallRequestStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<CallRequestStatus>>;
  startedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  startedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  startedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  startedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  startedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  startedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  startedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  startedAt_gte?: Maybe<Scalars['DateTime']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  endedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  endedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  endedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  endedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  endedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  endedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  endedAt_gte?: Maybe<Scalars['DateTime']>;
  Called?: Maybe<UserWhereInput>;
  Caller?: Maybe<UserWhereInput>;
  Room?: Maybe<ChatRoomWhereInput>;
}

export interface CallRequestWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface ChatMessage extends Node {
  __typename?: 'ChatMessage';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<User>;
  Room?: Maybe<ChatRoom>;
  ReadedBy?: Maybe<Array<ChatMessageReaded>>;
}


export type ChatMessageCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type ChatMessageRoomArgs = {
  where?: Maybe<ChatRoomWhereInput>;
};


export type ChatMessageReadedByArgs = {
  where?: Maybe<ChatMessageReadedWhereInput>;
  orderBy?: Maybe<ChatMessageReadedOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface ChatMessageConnection {
  __typename?: 'ChatMessageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ChatMessageEdge>>;
  aggregate: AggregateChatMessage;
}

export interface ChatMessageCreateInput {
  content?: Maybe<Scalars['Json']>;
  Room?: Maybe<ChatRoomCreateOneWithoutMessagesInput>;
}

export interface ChatMessageCreateManyWithoutCreatedByInput {
  connect?: Maybe<Array<ChatMessageWhereUniqueInput>>;
}

export interface ChatMessageCreateManyWithoutRoomInput {
  connect?: Maybe<Array<ChatMessageWhereUniqueInput>>;
}

export interface ChatMessageCreateOneInput {
  connect?: Maybe<ChatMessageWhereUniqueInput>;
}

export interface ChatMessageCreateOneWithoutReadedByInput {
  connect?: Maybe<ChatMessageWhereUniqueInput>;
}

export interface ChatMessageCreateWithoutCreatedByInput {
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  Room?: Maybe<ChatRoomCreateOneWithoutMessagesInput>;
  ReadedBy?: Maybe<ChatMessageReadedCreateManyWithoutMessageInput>;
}

export interface ChatMessageCreateWithoutReadedByInput {
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<UserCreateOneWithoutMessagesInput>;
  Room?: Maybe<ChatRoomCreateOneWithoutMessagesInput>;
}

export interface ChatMessageCreateWithoutRoomInput {
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<UserCreateOneWithoutMessagesInput>;
  ReadedBy?: Maybe<ChatMessageReadedCreateManyWithoutMessageInput>;
}

/** An edge in a connection. */
export interface ChatMessageEdge {
  __typename?: 'ChatMessageEdge';
  /** The item at the end of the edge. */
  node: ChatMessage;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum ChatMessageOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CONTENT_ASC = 'content_ASC',
  CONTENT_DESC = 'content_DESC',
  CONTENTTEXT_ASC = 'contentText_ASC',
  CONTENTTEXT_DESC = 'contentText_DESC'
}

export interface ChatMessagePreviousValues {
  __typename?: 'ChatMessagePreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
}

export interface ChatMessageReaded extends Node {
  __typename?: 'ChatMessageReaded';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  Message: ChatMessage;
  User: User;
}


export type ChatMessageReadedMessageArgs = {
  where?: Maybe<ChatMessageWhereInput>;
};


export type ChatMessageReadedUserArgs = {
  where?: Maybe<UserWhereInput>;
};

/** A connection to a list of items. */
export interface ChatMessageReadedConnection {
  __typename?: 'ChatMessageReadedConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ChatMessageReadedEdge>>;
  aggregate: AggregateChatMessageReaded;
}

export interface ChatMessageReadedCreateInput {
  Message: ChatMessageCreateOneWithoutReadedByInput;
}

export interface ChatMessageReadedCreateManyWithoutMessageInput {
  connect?: Maybe<Array<ChatMessageReadedWhereUniqueInput>>;
}

export interface ChatMessageReadedCreateManyWithoutUserInput {
  connect?: Maybe<Array<ChatMessageReadedWhereUniqueInput>>;
}

export interface ChatMessageReadedCreateWithoutMessageInput {
  User: UserCreateOneWithoutReadedMessagesInput;
}

export interface ChatMessageReadedCreateWithoutUserInput {
  Message: ChatMessageCreateOneWithoutReadedByInput;
}

/** An edge in a connection. */
export interface ChatMessageReadedEdge {
  __typename?: 'ChatMessageReadedEdge';
  /** The item at the end of the edge. */
  node: ChatMessageReaded;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum ChatMessageReadedOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

export interface ChatMessageReadedPreviousValues {
  __typename?: 'ChatMessageReadedPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
}

export interface ChatMessageReadedResponse {
  __typename?: 'ChatMessageReadedResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  errors: Array<Error>;
  data?: Maybe<ChatMessageReaded>;
}

export interface ChatMessageReadedSubscriptionPayload {
  __typename?: 'ChatMessageReadedSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<ChatMessageReaded>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ChatMessageReadedPreviousValues>;
}

export interface ChatMessageReadedSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatMessageReadedSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatMessageReadedSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatMessageReadedSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ChatMessageReadedWhereInput>;
}

export interface ChatMessageReadedUpdateInput {
  Message?: Maybe<ChatMessageUpdateOneWithoutReadedByInput>;
  User?: Maybe<UserUpdateOneWithoutReadedMessagesInput>;
}

export interface ChatMessageReadedUpdateManyWithoutMessageInput {
  connect?: Maybe<Array<ChatMessageReadedWhereUniqueInput>>;
  disconnect?: Maybe<Array<ChatMessageReadedWhereUniqueInput>>;
}

export interface ChatMessageReadedUpdateManyWithoutUserInput {
  connect?: Maybe<Array<ChatMessageReadedWhereUniqueInput>>;
  disconnect?: Maybe<Array<ChatMessageReadedWhereUniqueInput>>;
}

export interface ChatMessageReadedUpdateWithWhereUniqueWithoutMessageInput {
  where: ChatMessageReadedWhereUniqueInput;
  data: ChatMessageReadedUpdateWithoutMessageDataInput;
}

export interface ChatMessageReadedUpdateWithWhereUniqueWithoutUserInput {
  where: ChatMessageReadedWhereUniqueInput;
  data: ChatMessageReadedUpdateWithoutUserDataInput;
}

export interface ChatMessageReadedUpdateWithoutMessageDataInput {
  User?: Maybe<UserUpdateOneWithoutReadedMessagesInput>;
}

export interface ChatMessageReadedUpdateWithoutUserDataInput {
  Message?: Maybe<ChatMessageUpdateOneWithoutReadedByInput>;
}

export interface ChatMessageReadedUpsertWithWhereUniqueWithoutMessageInput {
  where: ChatMessageReadedWhereUniqueInput;
}

export interface ChatMessageReadedUpsertWithWhereUniqueWithoutUserInput {
  where: ChatMessageReadedWhereUniqueInput;
}

export interface ChatMessageReadedWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatMessageReadedWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatMessageReadedWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatMessageReadedWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  Message?: Maybe<ChatMessageWhereInput>;
  User?: Maybe<UserWhereInput>;
}

export interface ChatMessageReadedWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface ChatMessageResponse {
  __typename?: 'ChatMessageResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  errors: Array<Error>;
  data?: Maybe<ChatMessage>;
}

export interface ChatMessageSubscriptionPayload {
  __typename?: 'ChatMessageSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<ChatMessage>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ChatMessagePreviousValues>;
}

export interface ChatMessageSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatMessageSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatMessageSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatMessageSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ChatMessageWhereInput>;
}

export interface ChatMessageUpdateDataInput {
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutMessagesInput>;
  Room?: Maybe<ChatRoomUpdateOneWithoutMessagesInput>;
  ReadedBy?: Maybe<ChatMessageReadedUpdateManyWithoutMessageInput>;
}

export interface ChatMessageUpdateInput {
  content?: Maybe<Scalars['Json']>;
}

export interface ChatMessageUpdateManyWithoutCreatedByInput {
  connect?: Maybe<Array<ChatMessageWhereUniqueInput>>;
  disconnect?: Maybe<Array<ChatMessageWhereUniqueInput>>;
}

export interface ChatMessageUpdateManyWithoutRoomInput {
  connect?: Maybe<Array<ChatMessageWhereUniqueInput>>;
  disconnect?: Maybe<Array<ChatMessageWhereUniqueInput>>;
}

export interface ChatMessageUpdateOneInput {
  connect?: Maybe<ChatMessageWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface ChatMessageUpdateOneWithoutReadedByInput {
  connect?: Maybe<ChatMessageWhereUniqueInput>;
}

export interface ChatMessageUpdateWithWhereUniqueWithoutCreatedByInput {
  where: ChatMessageWhereUniqueInput;
  data: ChatMessageUpdateWithoutCreatedByDataInput;
}

export interface ChatMessageUpdateWithWhereUniqueWithoutRoomInput {
  where: ChatMessageWhereUniqueInput;
  data: ChatMessageUpdateWithoutRoomDataInput;
}

export interface ChatMessageUpdateWithoutCreatedByDataInput {
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  Room?: Maybe<ChatRoomUpdateOneWithoutMessagesInput>;
  ReadedBy?: Maybe<ChatMessageReadedUpdateManyWithoutMessageInput>;
}

export interface ChatMessageUpdateWithoutReadedByDataInput {
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutMessagesInput>;
  Room?: Maybe<ChatRoomUpdateOneWithoutMessagesInput>;
}

export interface ChatMessageUpdateWithoutRoomDataInput {
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutMessagesInput>;
  ReadedBy?: Maybe<ChatMessageReadedUpdateManyWithoutMessageInput>;
}

export interface ChatMessageUpsertWithWhereUniqueWithoutCreatedByInput {
  where: ChatMessageWhereUniqueInput;
}

export interface ChatMessageUpsertWithWhereUniqueWithoutRoomInput {
  where: ChatMessageWhereUniqueInput;
}

export interface ChatMessageWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatMessageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatMessageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatMessageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  contentText?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contentText_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contentText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contentText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  contentText_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  contentText_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  contentText_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  contentText_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  contentText_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contentText_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contentText_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contentText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contentText_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  contentText_not_ends_with?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<UserWhereInput>;
  Room?: Maybe<ChatRoomWhereInput>;
  ReadedBy_every?: Maybe<ChatMessageReadedWhereInput>;
  ReadedBy_some?: Maybe<ChatMessageReadedWhereInput>;
  ReadedBy_none?: Maybe<ChatMessageReadedWhereInput>;
}

export interface ChatMessageWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface ChatRoom extends Node {
  __typename?: 'ChatRoom';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  Members?: Maybe<Array<User>>;
  CreatedBy: User;
  Messages?: Maybe<Array<ChatMessage>>;
  isPublic?: Maybe<Scalars['Boolean']>;
  Invitations?: Maybe<Array<ChatRoomInvitation>>;
  CallRequests?: Maybe<Array<CallRequest>>;
}


export type ChatRoomMembersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ChatRoomCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type ChatRoomMessagesArgs = {
  where?: Maybe<ChatMessageWhereInput>;
  orderBy?: Maybe<ChatMessageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ChatRoomInvitationsArgs = {
  where?: Maybe<ChatRoomInvitationWhereInput>;
  orderBy?: Maybe<ChatRoomInvitationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ChatRoomCallRequestsArgs = {
  where?: Maybe<CallRequestWhereInput>;
  orderBy?: Maybe<CallRequestOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface ChatRoomConnection {
  __typename?: 'ChatRoomConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ChatRoomEdge>>;
  aggregate: AggregateChatRoom;
}

export interface ChatRoomCreateInput {
  name: Scalars['String'];
  Members?: Maybe<UserCreateManyWithoutRoomsInput>;
  isPublic?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['ID']>;
}

export interface ChatRoomCreateManyWithoutCreatedByInput {
  connect?: Maybe<Array<ChatRoomWhereUniqueInput>>;
}

export interface ChatRoomCreateManyWithoutMembersInput {
  connect?: Maybe<Array<ChatRoomWhereUniqueInput>>;
}

export interface ChatRoomCreateOneWithoutCallRequestsInput {
  connect?: Maybe<ChatRoomWhereUniqueInput>;
}

export interface ChatRoomCreateOneWithoutInvitationsInput {
  connect?: Maybe<ChatRoomWhereUniqueInput>;
}

export interface ChatRoomCreateOneWithoutMessagesInput {
  to?: Maybe<Scalars['ID']>;
  connect?: Maybe<ChatRoomWhereUniqueInput>;
}

export interface ChatRoomCreateWithoutCallRequestsInput {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  Members?: Maybe<UserCreateManyWithoutRoomsInput>;
  CreatedBy: UserCreateOneWithoutCreatedRoomsInput;
  Messages?: Maybe<ChatMessageCreateManyWithoutRoomInput>;
  Invitations?: Maybe<ChatRoomInvitationCreateManyWithoutChatRoomInput>;
}

export interface ChatRoomCreateWithoutCreatedByInput {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  Members?: Maybe<UserCreateManyWithoutRoomsInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutRoomInput>;
  Invitations?: Maybe<ChatRoomInvitationCreateManyWithoutChatRoomInput>;
  CallRequests?: Maybe<CallRequestCreateManyWithoutRoomInput>;
}

export interface ChatRoomCreateWithoutInvitationsInput {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  Members?: Maybe<UserCreateManyWithoutRoomsInput>;
  CreatedBy: UserCreateOneWithoutCreatedRoomsInput;
  Messages?: Maybe<ChatMessageCreateManyWithoutRoomInput>;
  CallRequests?: Maybe<CallRequestCreateManyWithoutRoomInput>;
}

export interface ChatRoomCreateWithoutMembersInput {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  CreatedBy: UserCreateOneWithoutCreatedRoomsInput;
  Messages?: Maybe<ChatMessageCreateManyWithoutRoomInput>;
  Invitations?: Maybe<ChatRoomInvitationCreateManyWithoutChatRoomInput>;
  CallRequests?: Maybe<CallRequestCreateManyWithoutRoomInput>;
}

export interface ChatRoomCreateWithoutMessagesInput {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  Members?: Maybe<UserCreateManyWithoutRoomsInput>;
  CreatedBy: UserCreateOneWithoutCreatedRoomsInput;
  Invitations?: Maybe<ChatRoomInvitationCreateManyWithoutChatRoomInput>;
  CallRequests?: Maybe<CallRequestCreateManyWithoutRoomInput>;
}

/** An edge in a connection. */
export interface ChatRoomEdge {
  __typename?: 'ChatRoomEdge';
  /** The item at the end of the edge. */
  node: ChatRoom;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export interface ChatRoomInvitation extends Node {
  __typename?: 'ChatRoomInvitation';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  CreatedBy: User;
  User: User;
  ChatRoom: ChatRoom;
  Notice?: Maybe<Notice>;
}


export type ChatRoomInvitationCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type ChatRoomInvitationUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type ChatRoomInvitationChatRoomArgs = {
  where?: Maybe<ChatRoomWhereInput>;
};


export type ChatRoomInvitationNoticeArgs = {
  where?: Maybe<NoticeWhereInput>;
};

/** A connection to a list of items. */
export interface ChatRoomInvitationConnection {
  __typename?: 'ChatRoomInvitationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ChatRoomInvitationEdge>>;
  aggregate: AggregateChatRoomInvitation;
}

export interface ChatRoomInvitationCreateInput {
  CreatedBy: UserCreateOneInput;
  User: UserCreateOneInput;
  ChatRoom: ChatRoomCreateOneWithoutInvitationsInput;
  Notice?: Maybe<NoticeCreateOneWithoutChatRoomInvitationInput>;
}

export interface ChatRoomInvitationCreateManyWithoutChatRoomInput {
  connect?: Maybe<Array<ChatRoomInvitationWhereUniqueInput>>;
}

export interface ChatRoomInvitationCreateOneWithoutNoticeInput {
  connect?: Maybe<ChatRoomInvitationWhereUniqueInput>;
}

export interface ChatRoomInvitationCreateWithoutChatRoomInput {
  CreatedBy: UserCreateOneInput;
  User: UserCreateOneInput;
  Notice?: Maybe<NoticeCreateOneWithoutChatRoomInvitationInput>;
}

export interface ChatRoomInvitationCreateWithoutNoticeInput {
  CreatedBy: UserCreateOneInput;
  User: UserCreateOneInput;
  ChatRoom: ChatRoomCreateOneWithoutInvitationsInput;
}

/** An edge in a connection. */
export interface ChatRoomInvitationEdge {
  __typename?: 'ChatRoomInvitationEdge';
  /** The item at the end of the edge. */
  node: ChatRoomInvitation;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum ChatRoomInvitationOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

export interface ChatRoomInvitationPreviousValues {
  __typename?: 'ChatRoomInvitationPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}

export interface ChatRoomInvitationSubscriptionPayload {
  __typename?: 'ChatRoomInvitationSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<ChatRoomInvitation>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ChatRoomInvitationPreviousValues>;
}

export interface ChatRoomInvitationSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatRoomInvitationSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatRoomInvitationSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatRoomInvitationSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ChatRoomInvitationWhereInput>;
}

export interface ChatRoomInvitationUpdateInput {
  CreatedBy?: Maybe<UserUpdateOneInput>;
  User?: Maybe<UserUpdateOneInput>;
  ChatRoom?: Maybe<ChatRoomUpdateOneWithoutInvitationsInput>;
  Notice?: Maybe<NoticeUpdateOneWithoutChatRoomInvitationInput>;
}

export interface ChatRoomInvitationUpdateManyWithoutChatRoomInput {
  connect?: Maybe<Array<ChatRoomInvitationWhereUniqueInput>>;
  disconnect?: Maybe<Array<ChatRoomInvitationWhereUniqueInput>>;
}

export interface ChatRoomInvitationUpdateOneWithoutNoticeInput {
  connect?: Maybe<ChatRoomInvitationWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface ChatRoomInvitationUpdateWithWhereUniqueWithoutChatRoomInput {
  where: ChatRoomInvitationWhereUniqueInput;
  data: ChatRoomInvitationUpdateWithoutChatRoomDataInput;
}

export interface ChatRoomInvitationUpdateWithoutChatRoomDataInput {
  CreatedBy?: Maybe<UserUpdateOneInput>;
  User?: Maybe<UserUpdateOneInput>;
  Notice?: Maybe<NoticeUpdateOneWithoutChatRoomInvitationInput>;
}

export interface ChatRoomInvitationUpdateWithoutNoticeDataInput {
  CreatedBy?: Maybe<UserUpdateOneInput>;
  User?: Maybe<UserUpdateOneInput>;
  ChatRoom?: Maybe<ChatRoomUpdateOneWithoutInvitationsInput>;
}

export interface ChatRoomInvitationUpsertWithWhereUniqueWithoutChatRoomInput {
  where: ChatRoomInvitationWhereUniqueInput;
}

export interface ChatRoomInvitationWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatRoomInvitationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatRoomInvitationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatRoomInvitationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  CreatedBy?: Maybe<UserWhereInput>;
  User?: Maybe<UserWhereInput>;
  ChatRoom?: Maybe<ChatRoomWhereInput>;
  Notice?: Maybe<NoticeWhereInput>;
}

export interface ChatRoomInvitationWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface ChatRoomInviteInput {
  User: UserWhereUniqueInput;
}

export enum ChatRoomOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  IMAGE_ASC = 'image_ASC',
  IMAGE_DESC = 'image_DESC',
  CODE_ASC = 'code_ASC',
  CODE_DESC = 'code_DESC',
  ISPUBLIC_ASC = 'isPublic_ASC',
  ISPUBLIC_DESC = 'isPublic_DESC'
}

export interface ChatRoomPreviousValues {
  __typename?: 'ChatRoomPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
}

export interface ChatRoomResponse {
  __typename?: 'ChatRoomResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  errors: Array<Error>;
  data?: Maybe<ChatRoom>;
}

export interface ChatRoomSubscriptionPayload {
  __typename?: 'ChatRoomSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<ChatRoom>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ChatRoomPreviousValues>;
}

export interface ChatRoomSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatRoomSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatRoomSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatRoomSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ChatRoomWhereInput>;
}

export interface ChatRoomUpdateInput {
  name?: Maybe<Scalars['String']>;
  Members?: Maybe<UserUpdateManyWithoutRoomsInput>;
  isPublic?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['ID']>;
}

export interface ChatRoomUpdateManyWithoutCreatedByInput {
  connect?: Maybe<Array<ChatRoomWhereUniqueInput>>;
  disconnect?: Maybe<Array<ChatRoomWhereUniqueInput>>;
}

export interface ChatRoomUpdateManyWithoutMembersInput {
  connect?: Maybe<Array<ChatRoomWhereUniqueInput>>;
  disconnect?: Maybe<Array<ChatRoomWhereUniqueInput>>;
}

export interface ChatRoomUpdateOneWithoutCallRequestsInput {
  connect?: Maybe<ChatRoomWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface ChatRoomUpdateOneWithoutInvitationsInput {
  connect?: Maybe<ChatRoomWhereUniqueInput>;
}

export interface ChatRoomUpdateOneWithoutMessagesInput {
  connect?: Maybe<ChatRoomWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface ChatRoomUpdateWithWhereUniqueWithoutCreatedByInput {
  where: ChatRoomWhereUniqueInput;
  data: ChatRoomUpdateWithoutCreatedByDataInput;
}

export interface ChatRoomUpdateWithWhereUniqueWithoutMembersInput {
  where: ChatRoomWhereUniqueInput;
  data: ChatRoomUpdateWithoutMembersDataInput;
}

export interface ChatRoomUpdateWithoutCallRequestsDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  Members?: Maybe<UserUpdateManyWithoutRoomsInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedRoomsInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutRoomInput>;
  Invitations?: Maybe<ChatRoomInvitationUpdateManyWithoutChatRoomInput>;
}

export interface ChatRoomUpdateWithoutCreatedByDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  Members?: Maybe<UserUpdateManyWithoutRoomsInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutRoomInput>;
  Invitations?: Maybe<ChatRoomInvitationUpdateManyWithoutChatRoomInput>;
  CallRequests?: Maybe<CallRequestUpdateManyWithoutRoomInput>;
}

export interface ChatRoomUpdateWithoutInvitationsDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  Members?: Maybe<UserUpdateManyWithoutRoomsInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedRoomsInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutRoomInput>;
  CallRequests?: Maybe<CallRequestUpdateManyWithoutRoomInput>;
}

export interface ChatRoomUpdateWithoutMembersDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedRoomsInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutRoomInput>;
  Invitations?: Maybe<ChatRoomInvitationUpdateManyWithoutChatRoomInput>;
  CallRequests?: Maybe<CallRequestUpdateManyWithoutRoomInput>;
}

export interface ChatRoomUpdateWithoutMessagesDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  Members?: Maybe<UserUpdateManyWithoutRoomsInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedRoomsInput>;
  Invitations?: Maybe<ChatRoomInvitationUpdateManyWithoutChatRoomInput>;
  CallRequests?: Maybe<CallRequestUpdateManyWithoutRoomInput>;
}

export interface ChatRoomUpsertWithWhereUniqueWithoutCreatedByInput {
  where: ChatRoomWhereUniqueInput;
}

export interface ChatRoomUpsertWithWhereUniqueWithoutMembersInput {
  where: ChatRoomWhereUniqueInput;
}

export interface ChatRoomWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ChatRoomWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ChatRoomWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ChatRoomWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  image_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  image_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  image_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  image_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  image_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  image_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  image_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  image_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  image_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  image_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  image_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  image_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  image_not_ends_with?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  code_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  code_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  code_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  code_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  code_not_ends_with?: Maybe<Scalars['ID']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isPublic_not?: Maybe<Scalars['Boolean']>;
  Members_every?: Maybe<UserWhereInput>;
  Members_some?: Maybe<UserWhereInput>;
  Members_none?: Maybe<UserWhereInput>;
  CreatedBy?: Maybe<UserWhereInput>;
  Messages_every?: Maybe<ChatMessageWhereInput>;
  Messages_some?: Maybe<ChatMessageWhereInput>;
  Messages_none?: Maybe<ChatMessageWhereInput>;
  Invitations_every?: Maybe<ChatRoomInvitationWhereInput>;
  Invitations_some?: Maybe<ChatRoomInvitationWhereInput>;
  Invitations_none?: Maybe<ChatRoomInvitationWhereInput>;
  CallRequests_every?: Maybe<CallRequestWhereInput>;
  CallRequests_some?: Maybe<CallRequestWhereInput>;
  CallRequests_none?: Maybe<CallRequestWhereInput>;
}

export interface ChatRoomWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['ID']>;
}

export interface City extends Node {
  __typename?: 'City';
  id: Scalars['ID'];
  city_id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  alias: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
}

/** A connection to a list of items. */
export interface CityConnection {
  __typename?: 'CityConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<CityEdge>>;
  aggregate: AggregateCity;
}

export interface CityCreateInput {
  city_id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  alias: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
}

/** An edge in a connection. */
export interface CityEdge {
  __typename?: 'CityEdge';
  /** The item at the end of the edge. */
  node: City;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum CityOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CITY_ID_ASC = 'city_id_ASC',
  CITY_ID_DESC = 'city_id_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  ALIAS_ASC = 'alias_ASC',
  ALIAS_DESC = 'alias_DESC',
  LAT_ASC = 'lat_ASC',
  LAT_DESC = 'lat_DESC',
  LNG_ASC = 'lng_ASC',
  LNG_DESC = 'lng_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface CityPreviousValues {
  __typename?: 'CityPreviousValues';
  id: Scalars['ID'];
  city_id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  alias: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
}

export interface CitySubscriptionPayload {
  __typename?: 'CitySubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<City>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<CityPreviousValues>;
}

export interface CitySubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CitySubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CitySubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CitySubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<CityWhereInput>;
}

export interface CityUpdateInput {
  city_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
}

export interface CityWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CityWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CityWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CityWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  city_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  city_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  city_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  city_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  city_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  city_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  city_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  city_id_gte?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  alias_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  alias_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  alias_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  alias_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  alias_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  alias_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  alias_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  alias_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  alias_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  alias_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  alias_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  alias_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  alias_not_ends_with?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  lat_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  lat_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  lat_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  lat_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  lat_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  lat_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  lat_gte?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  lng_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  lng_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  lng_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  lng_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  lng_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  lng_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  lng_gte?: Maybe<Scalars['Float']>;
}

export interface CityWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  city_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
}

export interface Comment extends Node {
  __typename?: 'Comment';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  comment_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  type_id: Scalars['Int'];
  editor_content: Scalars['Json'];
  is_checked: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  created_by?: Maybe<User>;
  parent?: Maybe<Scalars['ID']>;
  uri: Scalars['String'];
}


export type CommentCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};

/** A connection to a list of items. */
export interface CommentConnection {
  __typename?: 'CommentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<CommentEdge>>;
  aggregate: AggregateComment;
}

export interface CommentCreateInput {
  object_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['ID']>;
  editor_content?: Maybe<Scalars['Json']>;
}

export interface CommentCreateManyWithoutCreatedByInput {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
}

export interface CommentCreateWithoutCreatedByInput {
  comment_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  editor_content: Scalars['Json'];
  is_checked?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['ID']>;
}

/** An edge in a connection. */
export interface CommentEdge {
  __typename?: 'CommentEdge';
  /** The item at the end of the edge. */
  node: Comment;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum CommentOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  COMMENT_ID_ASC = 'comment_id_ASC',
  COMMENT_ID_DESC = 'comment_id_DESC',
  OBJECT_ID_ASC = 'object_id_ASC',
  OBJECT_ID_DESC = 'object_id_DESC',
  TYPE_ID_ASC = 'type_id_ASC',
  TYPE_ID_DESC = 'type_id_DESC',
  EDITOR_CONTENT_ASC = 'editor_content_ASC',
  EDITOR_CONTENT_DESC = 'editor_content_DESC',
  IS_CHECKED_ASC = 'is_checked_ASC',
  IS_CHECKED_DESC = 'is_checked_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  PARENT_ASC = 'parent_ASC',
  PARENT_DESC = 'parent_DESC'
}

export interface CommentPreviousValues {
  __typename?: 'CommentPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  comment_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  type_id: Scalars['Int'];
  editor_content: Scalars['Json'];
  is_checked: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['ID']>;
}

export interface CommentResponse {
  __typename?: 'CommentResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<Comment>;
}

export interface CommentSubscriptionPayload {
  __typename?: 'CommentSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Comment>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<CommentPreviousValues>;
}

export interface CommentSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CommentSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CommentSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CommentSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<CommentWhereInput>;
}

export interface CommentType extends Node {
  __typename?: 'CommentType';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['Int'];
}

/** A connection to a list of items. */
export interface CommentTypeConnection {
  __typename?: 'CommentTypeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<CommentTypeEdge>>;
  aggregate: AggregateCommentType;
}

export interface CommentTypeCreateInput {
  name: Scalars['String'];
  code: Scalars['Int'];
}

/** An edge in a connection. */
export interface CommentTypeEdge {
  __typename?: 'CommentTypeEdge';
  /** The item at the end of the edge. */
  node: CommentType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum CommentTypeOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  CODE_ASC = 'code_ASC',
  CODE_DESC = 'code_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface CommentTypePreviousValues {
  __typename?: 'CommentTypePreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['Int'];
}

export interface CommentTypeSubscriptionPayload {
  __typename?: 'CommentTypeSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<CommentType>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<CommentTypePreviousValues>;
}

export interface CommentTypeSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CommentTypeSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CommentTypeSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CommentTypeSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<CommentTypeWhereInput>;
}

export interface CommentTypeUpdateInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
}

export interface CommentTypeWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CommentTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CommentTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CommentTypeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  code_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  code_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  code_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  code_gte?: Maybe<Scalars['Int']>;
}

export interface CommentTypeWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
}

export interface CommentUpdateInput {
  editor_content?: Maybe<Scalars['Json']>;
}

export interface CommentUpdateManyWithoutCreatedByInput {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
}

export interface CommentUpdateWithWhereUniqueWithoutCreatedByInput {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutCreatedByDataInput;
}

export interface CommentUpdateWithoutCreatedByDataInput {
  comment_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  editor_content?: Maybe<Scalars['Json']>;
  is_checked?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['ID']>;
}

export interface CommentUpsertWithWhereUniqueWithoutCreatedByInput {
  where: CommentWhereUniqueInput;
}

export interface CommentWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<CommentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<CommentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<CommentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  comment_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  comment_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  comment_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  comment_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  comment_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  comment_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  comment_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  comment_id_gte?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  object_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  object_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  object_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  object_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  object_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  object_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  object_id_gte?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  type_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  type_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  type_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  type_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  type_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  type_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  type_id_gte?: Maybe<Scalars['Int']>;
  is_checked?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  is_checked_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  is_checked_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  is_checked_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  is_checked_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  is_checked_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  is_checked_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  is_checked_gte?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  parent_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  parent_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  parent_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  parent_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  parent_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  parent_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  parent_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  parent_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  parent_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  parent_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  parent_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  parent_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  parent_not_ends_with?: Maybe<Scalars['ID']>;
  created_by?: Maybe<UserWhereInput>;
}

export interface CommentWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  comment_id?: Maybe<Scalars['Int']>;
}

export interface CoordsInput {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
}


export interface Error {
  __typename?: 'Error';
  key: Scalars['String'];
  message: Scalars['String'];
}

export interface EthAccount extends Node {
  __typename?: 'EthAccount';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address: Scalars['String'];
  type?: Maybe<EthAccountType>;
  CreatedBy?: Maybe<User>;
  Transaction?: Maybe<EthTransaction>;
  IncomeTransactions?: Maybe<Array<EthTransaction>>;
  OutcomeTransactions?: Maybe<Array<EthTransaction>>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  ContractSource?: Maybe<EthContractSource>;
  BlocksMined?: Maybe<Array<EthBlock>>;
  UserAuthed?: Maybe<User>;
  balance?: Maybe<Scalars['Float']>;
}


export type EthAccountCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type EthAccountTransactionArgs = {
  where?: Maybe<EthTransactionWhereInput>;
};


export type EthAccountIncomeTransactionsArgs = {
  where?: Maybe<EthTransactionWhereInput>;
  orderBy?: Maybe<EthTransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EthAccountOutcomeTransactionsArgs = {
  where?: Maybe<EthTransactionWhereInput>;
  orderBy?: Maybe<EthTransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EthAccountContractSourceArgs = {
  where?: Maybe<EthContractSourceWhereInput>;
};


export type EthAccountBlocksMinedArgs = {
  where?: Maybe<EthBlockWhereInput>;
  orderBy?: Maybe<EthBlockOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EthAccountUserAuthedArgs = {
  where?: Maybe<UserWhereInput>;
};


export type EthAccountBalanceArgs = {
  convert?: Maybe<EthAmountConvert>;
};

/** A connection to a list of items. */
export interface EthAccountConnection {
  __typename?: 'EthAccountConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<EthAccountEdge>>;
  aggregate: AggregateEthAccount;
}

export interface EthAccountCreateInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address: Scalars['String'];
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  ContractSource?: Maybe<EthContractSourceCreateOneWithoutAccountsInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutEthAccountsInput>;
  Transaction?: Maybe<EthTransactionCreateOneWithoutAccountInput>;
  IncomeTransactions?: Maybe<EthTransactionCreateManyWithoutReceiverInput>;
  OutcomeTransactions?: Maybe<EthTransactionCreateManyWithoutSenderInput>;
  BlocksMined?: Maybe<EthBlockCreateManyWithoutMinerInput>;
  UserAuthed?: Maybe<UserCreateOneInput>;
}

export interface EthAccountCreateManyWithoutContractSourceInput {
  connect?: Maybe<Array<EthAccountWhereUniqueInput>>;
}

export interface EthAccountCreateManyWithoutCreatedByInput {
  connect?: Maybe<Array<EthAccountWhereUniqueInput>>;
}

export interface EthAccountCreateOneWithoutBlocksMinedInput {
  connect?: Maybe<EthAccountWhereUniqueInput>;
}

export interface EthAccountCreateOneWithoutIncomeTransactionsInput {
  connect?: Maybe<EthAccountWhereUniqueInput>;
}

export interface EthAccountCreateOneWithoutOutcomeTransactionsInput {
  connect?: Maybe<EthAccountWhereUniqueInput>;
}

export interface EthAccountCreateOneWithoutTransactionInput {
  connect?: Maybe<EthAccountWhereUniqueInput>;
}

export interface EthAccountCreateWithoutBlocksMinedInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address: Scalars['String'];
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserCreateOneWithoutEthAccountsInput>;
  Transaction?: Maybe<EthTransactionCreateOneWithoutAccountInput>;
  IncomeTransactions?: Maybe<EthTransactionCreateManyWithoutReceiverInput>;
  OutcomeTransactions?: Maybe<EthTransactionCreateManyWithoutSenderInput>;
  ContractSource?: Maybe<EthContractSourceCreateOneWithoutAccountsInput>;
  UserAuthed?: Maybe<UserCreateOneInput>;
}

export interface EthAccountCreateWithoutContractSourceInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address: Scalars['String'];
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserCreateOneWithoutEthAccountsInput>;
  Transaction?: Maybe<EthTransactionCreateOneWithoutAccountInput>;
  IncomeTransactions?: Maybe<EthTransactionCreateManyWithoutReceiverInput>;
  OutcomeTransactions?: Maybe<EthTransactionCreateManyWithoutSenderInput>;
  BlocksMined?: Maybe<EthBlockCreateManyWithoutMinerInput>;
  UserAuthed?: Maybe<UserCreateOneInput>;
}

export interface EthAccountCreateWithoutCreatedByInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address: Scalars['String'];
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  Transaction?: Maybe<EthTransactionCreateOneWithoutAccountInput>;
  IncomeTransactions?: Maybe<EthTransactionCreateManyWithoutReceiverInput>;
  OutcomeTransactions?: Maybe<EthTransactionCreateManyWithoutSenderInput>;
  ContractSource?: Maybe<EthContractSourceCreateOneWithoutAccountsInput>;
  BlocksMined?: Maybe<EthBlockCreateManyWithoutMinerInput>;
  UserAuthed?: Maybe<UserCreateOneInput>;
}

export interface EthAccountCreateWithoutIncomeTransactionsInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address: Scalars['String'];
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserCreateOneWithoutEthAccountsInput>;
  Transaction?: Maybe<EthTransactionCreateOneWithoutAccountInput>;
  OutcomeTransactions?: Maybe<EthTransactionCreateManyWithoutSenderInput>;
  ContractSource?: Maybe<EthContractSourceCreateOneWithoutAccountsInput>;
  BlocksMined?: Maybe<EthBlockCreateManyWithoutMinerInput>;
  UserAuthed?: Maybe<UserCreateOneInput>;
}

export interface EthAccountCreateWithoutOutcomeTransactionsInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address: Scalars['String'];
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserCreateOneWithoutEthAccountsInput>;
  Transaction?: Maybe<EthTransactionCreateOneWithoutAccountInput>;
  IncomeTransactions?: Maybe<EthTransactionCreateManyWithoutReceiverInput>;
  ContractSource?: Maybe<EthContractSourceCreateOneWithoutAccountsInput>;
  BlocksMined?: Maybe<EthBlockCreateManyWithoutMinerInput>;
  UserAuthed?: Maybe<UserCreateOneInput>;
}

export interface EthAccountCreateWithoutTransactionInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address: Scalars['String'];
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserCreateOneWithoutEthAccountsInput>;
  IncomeTransactions?: Maybe<EthTransactionCreateManyWithoutReceiverInput>;
  OutcomeTransactions?: Maybe<EthTransactionCreateManyWithoutSenderInput>;
  ContractSource?: Maybe<EthContractSourceCreateOneWithoutAccountsInput>;
  BlocksMined?: Maybe<EthBlockCreateManyWithoutMinerInput>;
  UserAuthed?: Maybe<UserCreateOneInput>;
}

/** An edge in a connection. */
export interface EthAccountEdge {
  __typename?: 'EthAccountEdge';
  /** The item at the end of the edge. */
  node: EthAccount;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum EthAccountOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  ADDRESS_ASC = 'address_ASC',
  ADDRESS_DESC = 'address_DESC',
  TYPE_ASC = 'type_ASC',
  TYPE_DESC = 'type_DESC',
  SOURCE_ASC = 'source_ASC',
  SOURCE_DESC = 'source_DESC',
  BYTECODE_ASC = 'bytecode_ASC',
  BYTECODE_DESC = 'bytecode_DESC',
  ABI_ASC = 'abi_ASC',
  ABI_DESC = 'abi_DESC'
}

export interface EthAccountPreviousValues {
  __typename?: 'EthAccountPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address: Scalars['String'];
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
}

export interface EthAccountResponse {
  __typename?: 'EthAccountResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<EthAccount>;
}

export interface EthAccountSubscriptionPayload {
  __typename?: 'EthAccountSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<EthAccount>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<EthAccountPreviousValues>;
}

export interface EthAccountSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EthAccountSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EthAccountSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EthAccountSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<EthAccountWhereInput>;
}

export enum EthAccountType {
  ACCOUNT = 'Account',
  CONTRACT = 'Contract'
}

export interface EthAccountUpdateInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  ContractSource?: Maybe<EthContractSourceUpdateOneWithoutAccountsInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutEthAccountsInput>;
  Transaction?: Maybe<EthTransactionUpdateOneWithoutAccountInput>;
  IncomeTransactions?: Maybe<EthTransactionUpdateManyWithoutReceiverInput>;
  OutcomeTransactions?: Maybe<EthTransactionUpdateManyWithoutSenderInput>;
  BlocksMined?: Maybe<EthBlockUpdateManyWithoutMinerInput>;
  UserAuthed?: Maybe<UserUpdateOneInput>;
}

export interface EthAccountUpdateManyWithoutContractSourceInput {
  connect?: Maybe<Array<EthAccountWhereUniqueInput>>;
  disconnect?: Maybe<Array<EthAccountWhereUniqueInput>>;
}

export interface EthAccountUpdateManyWithoutCreatedByInput {
  connect?: Maybe<Array<EthAccountWhereUniqueInput>>;
  disconnect?: Maybe<Array<EthAccountWhereUniqueInput>>;
}

export interface EthAccountUpdateOneWithoutBlocksMinedInput {
  connect?: Maybe<EthAccountWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface EthAccountUpdateOneWithoutIncomeTransactionsInput {
  connect?: Maybe<EthAccountWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface EthAccountUpdateOneWithoutOutcomeTransactionsInput {
  connect?: Maybe<EthAccountWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface EthAccountUpdateOneWithoutTransactionInput {
  connect?: Maybe<EthAccountWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface EthAccountUpdateWithWhereUniqueWithoutContractSourceInput {
  where: EthAccountWhereUniqueInput;
  data: EthAccountUpdateWithoutContractSourceDataInput;
}

export interface EthAccountUpdateWithWhereUniqueWithoutCreatedByInput {
  where: EthAccountWhereUniqueInput;
  data: EthAccountUpdateWithoutCreatedByDataInput;
}

export interface EthAccountUpdateWithoutBlocksMinedDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutEthAccountsInput>;
  Transaction?: Maybe<EthTransactionUpdateOneWithoutAccountInput>;
  IncomeTransactions?: Maybe<EthTransactionUpdateManyWithoutReceiverInput>;
  OutcomeTransactions?: Maybe<EthTransactionUpdateManyWithoutSenderInput>;
  ContractSource?: Maybe<EthContractSourceUpdateOneWithoutAccountsInput>;
  UserAuthed?: Maybe<UserUpdateOneInput>;
}

export interface EthAccountUpdateWithoutContractSourceDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutEthAccountsInput>;
  Transaction?: Maybe<EthTransactionUpdateOneWithoutAccountInput>;
  IncomeTransactions?: Maybe<EthTransactionUpdateManyWithoutReceiverInput>;
  OutcomeTransactions?: Maybe<EthTransactionUpdateManyWithoutSenderInput>;
  BlocksMined?: Maybe<EthBlockUpdateManyWithoutMinerInput>;
  UserAuthed?: Maybe<UserUpdateOneInput>;
}

export interface EthAccountUpdateWithoutCreatedByDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  Transaction?: Maybe<EthTransactionUpdateOneWithoutAccountInput>;
  IncomeTransactions?: Maybe<EthTransactionUpdateManyWithoutReceiverInput>;
  OutcomeTransactions?: Maybe<EthTransactionUpdateManyWithoutSenderInput>;
  ContractSource?: Maybe<EthContractSourceUpdateOneWithoutAccountsInput>;
  BlocksMined?: Maybe<EthBlockUpdateManyWithoutMinerInput>;
  UserAuthed?: Maybe<UserUpdateOneInput>;
}

export interface EthAccountUpdateWithoutIncomeTransactionsDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutEthAccountsInput>;
  Transaction?: Maybe<EthTransactionUpdateOneWithoutAccountInput>;
  OutcomeTransactions?: Maybe<EthTransactionUpdateManyWithoutSenderInput>;
  ContractSource?: Maybe<EthContractSourceUpdateOneWithoutAccountsInput>;
  BlocksMined?: Maybe<EthBlockUpdateManyWithoutMinerInput>;
  UserAuthed?: Maybe<UserUpdateOneInput>;
}

export interface EthAccountUpdateWithoutOutcomeTransactionsDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutEthAccountsInput>;
  Transaction?: Maybe<EthTransactionUpdateOneWithoutAccountInput>;
  IncomeTransactions?: Maybe<EthTransactionUpdateManyWithoutReceiverInput>;
  ContractSource?: Maybe<EthContractSourceUpdateOneWithoutAccountsInput>;
  BlocksMined?: Maybe<EthBlockUpdateManyWithoutMinerInput>;
  UserAuthed?: Maybe<UserUpdateOneInput>;
}

export interface EthAccountUpdateWithoutTransactionDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EthAccountType>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutEthAccountsInput>;
  IncomeTransactions?: Maybe<EthTransactionUpdateManyWithoutReceiverInput>;
  OutcomeTransactions?: Maybe<EthTransactionUpdateManyWithoutSenderInput>;
  ContractSource?: Maybe<EthContractSourceUpdateOneWithoutAccountsInput>;
  BlocksMined?: Maybe<EthBlockUpdateManyWithoutMinerInput>;
  UserAuthed?: Maybe<UserUpdateOneInput>;
}

export interface EthAccountUpsertWithWhereUniqueWithoutContractSourceInput {
  where: EthAccountWhereUniqueInput;
}

export interface EthAccountUpsertWithWhereUniqueWithoutCreatedByInput {
  where: EthAccountWhereUniqueInput;
}

export interface EthAccountWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EthAccountWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EthAccountWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EthAccountWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<EthAccountType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<EthAccountType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<EthAccountType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<EthAccountType>>;
  source?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  source_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  source_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  source_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  source_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  source_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  source_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  source_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  source_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  source_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  source_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  source_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  source_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  source_not_ends_with?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bytecode_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bytecode_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  bytecode_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  bytecode_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  bytecode_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  bytecode_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  bytecode_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  bytecode_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  bytecode_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  bytecode_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bytecode_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  bytecode_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  bytecode_not_ends_with?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<UserWhereInput>;
  Transaction?: Maybe<EthTransactionWhereInput>;
  IncomeTransactions_every?: Maybe<EthTransactionWhereInput>;
  IncomeTransactions_some?: Maybe<EthTransactionWhereInput>;
  IncomeTransactions_none?: Maybe<EthTransactionWhereInput>;
  OutcomeTransactions_every?: Maybe<EthTransactionWhereInput>;
  OutcomeTransactions_some?: Maybe<EthTransactionWhereInput>;
  OutcomeTransactions_none?: Maybe<EthTransactionWhereInput>;
  ContractSource?: Maybe<EthContractSourceWhereInput>;
  BlocksMined_every?: Maybe<EthBlockWhereInput>;
  BlocksMined_some?: Maybe<EthBlockWhereInput>;
  BlocksMined_none?: Maybe<EthBlockWhereInput>;
  UserAuthed?: Maybe<UserWhereInput>;
}

export interface EthAccountWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  address?: Maybe<Scalars['String']>;
}

export enum EthAmountConvert {
  WEI = 'wei',
  KWEI = 'Kwei',
  MWEI = 'Mwei',
  GWEI = 'Gwei',
  NANO = 'nano',
  ETHER = 'ether',
  KETHER = 'kether',
  METHER = 'mether',
  GETHER = 'gether',
  TETHER = 'tether'
}

export interface EthBlock extends Node {
  __typename?: 'EthBlock';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  hash: Scalars['String'];
  number: Scalars['Int'];
  difficulty?: Maybe<Scalars['Float']>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  extraData?: Maybe<Scalars['String']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  mixHash?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  parentHash?: Maybe<Scalars['String']>;
  receiptsRoot?: Maybe<Scalars['String']>;
  sha3Uncles?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  stateRoot?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  Miner?: Maybe<EthAccount>;
  Transactions?: Maybe<Array<EthTransaction>>;
  transactionsRoot?: Maybe<Scalars['String']>;
  transactions_count?: Maybe<Scalars['Int']>;
  Uncles?: Maybe<Array<EthBlock>>;
}


export type EthBlockMinerArgs = {
  where?: Maybe<EthAccountWhereInput>;
};


export type EthBlockTransactionsArgs = {
  where?: Maybe<EthTransactionWhereInput>;
  orderBy?: Maybe<EthTransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type EthBlockUnclesArgs = {
  where?: Maybe<EthBlockWhereInput>;
  orderBy?: Maybe<EthBlockOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface EthBlockConnection {
  __typename?: 'EthBlockConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<EthBlockEdge>>;
  aggregate: AggregateEthBlock;
}

export interface EthBlockCreateInput {
  hash: Scalars['String'];
  number: Scalars['Int'];
  difficulty?: Maybe<Scalars['Float']>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  extraData?: Maybe<Scalars['String']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  mixHash?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  parentHash?: Maybe<Scalars['String']>;
  receiptsRoot?: Maybe<Scalars['String']>;
  sha3Uncles?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  stateRoot?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  transactionsRoot?: Maybe<Scalars['String']>;
  transactions_count?: Maybe<Scalars['Int']>;
  Miner?: Maybe<EthAccountCreateOneWithoutBlocksMinedInput>;
  Transactions?: Maybe<EthTransactionCreateManyWithoutBlockInput>;
  Uncles?: Maybe<EthBlockCreateManyInput>;
}

export interface EthBlockCreateManyInput {
  connect?: Maybe<Array<EthBlockWhereUniqueInput>>;
}

export interface EthBlockCreateManyWithoutMinerInput {
  connect?: Maybe<Array<EthBlockWhereUniqueInput>>;
}

export interface EthBlockCreateOneWithoutTransactionsInput {
  connect?: Maybe<EthBlockWhereUniqueInput>;
}

export interface EthBlockCreateWithoutMinerInput {
  hash: Scalars['String'];
  number: Scalars['Int'];
  difficulty?: Maybe<Scalars['Float']>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  extraData?: Maybe<Scalars['String']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  mixHash?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  parentHash?: Maybe<Scalars['String']>;
  receiptsRoot?: Maybe<Scalars['String']>;
  sha3Uncles?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  stateRoot?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  transactionsRoot?: Maybe<Scalars['String']>;
  transactions_count?: Maybe<Scalars['Int']>;
  Transactions?: Maybe<EthTransactionCreateManyWithoutBlockInput>;
  Uncles?: Maybe<EthBlockCreateManyInput>;
}

export interface EthBlockCreateWithoutTransactionsInput {
  hash: Scalars['String'];
  number: Scalars['Int'];
  difficulty?: Maybe<Scalars['Float']>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  extraData?: Maybe<Scalars['String']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  mixHash?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  parentHash?: Maybe<Scalars['String']>;
  receiptsRoot?: Maybe<Scalars['String']>;
  sha3Uncles?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  stateRoot?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  transactionsRoot?: Maybe<Scalars['String']>;
  transactions_count?: Maybe<Scalars['Int']>;
  Miner?: Maybe<EthAccountCreateOneWithoutBlocksMinedInput>;
  Uncles?: Maybe<EthBlockCreateManyInput>;
}

/** An edge in a connection. */
export interface EthBlockEdge {
  __typename?: 'EthBlockEdge';
  /** The item at the end of the edge. */
  node: EthBlock;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum EthBlockOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  HASH_ASC = 'hash_ASC',
  HASH_DESC = 'hash_DESC',
  NUMBER_ASC = 'number_ASC',
  NUMBER_DESC = 'number_DESC',
  DIFFICULTY_ASC = 'difficulty_ASC',
  DIFFICULTY_DESC = 'difficulty_DESC',
  TOTALDIFFICULTY_ASC = 'totalDifficulty_ASC',
  TOTALDIFFICULTY_DESC = 'totalDifficulty_DESC',
  EXTRADATA_ASC = 'extraData_ASC',
  EXTRADATA_DESC = 'extraData_DESC',
  GASLIMIT_ASC = 'gasLimit_ASC',
  GASLIMIT_DESC = 'gasLimit_DESC',
  GASUSED_ASC = 'gasUsed_ASC',
  GASUSED_DESC = 'gasUsed_DESC',
  MIXHASH_ASC = 'mixHash_ASC',
  MIXHASH_DESC = 'mixHash_DESC',
  NONCE_ASC = 'nonce_ASC',
  NONCE_DESC = 'nonce_DESC',
  PARENTHASH_ASC = 'parentHash_ASC',
  PARENTHASH_DESC = 'parentHash_DESC',
  RECEIPTSROOT_ASC = 'receiptsRoot_ASC',
  RECEIPTSROOT_DESC = 'receiptsRoot_DESC',
  SHA3UNCLES_ASC = 'sha3Uncles_ASC',
  SHA3UNCLES_DESC = 'sha3Uncles_DESC',
  SIZE_ASC = 'size_ASC',
  SIZE_DESC = 'size_DESC',
  STATEROOT_ASC = 'stateRoot_ASC',
  STATEROOT_DESC = 'stateRoot_DESC',
  DATE_ASC = 'date_ASC',
  DATE_DESC = 'date_DESC',
  TRANSACTIONSROOT_ASC = 'transactionsRoot_ASC',
  TRANSACTIONSROOT_DESC = 'transactionsRoot_DESC',
  TRANSACTIONS_COUNT_ASC = 'transactions_count_ASC',
  TRANSACTIONS_COUNT_DESC = 'transactions_count_DESC'
}

export interface EthBlockPreviousValues {
  __typename?: 'EthBlockPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  hash: Scalars['String'];
  number: Scalars['Int'];
  difficulty?: Maybe<Scalars['Float']>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  extraData?: Maybe<Scalars['String']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  mixHash?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  parentHash?: Maybe<Scalars['String']>;
  receiptsRoot?: Maybe<Scalars['String']>;
  sha3Uncles?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  stateRoot?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  transactionsRoot?: Maybe<Scalars['String']>;
  transactions_count?: Maybe<Scalars['Int']>;
}

export interface EthBlockResponse {
  __typename?: 'EthBlockResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<EthBlock>;
}

export interface EthBlockSubscriptionPayload {
  __typename?: 'EthBlockSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<EthBlock>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<EthBlockPreviousValues>;
}

export interface EthBlockSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EthBlockSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EthBlockSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EthBlockSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<EthBlockWhereInput>;
}

export interface EthBlockUpdateDataInput {
  hash?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  difficulty?: Maybe<Scalars['Float']>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  extraData?: Maybe<Scalars['String']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  mixHash?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  parentHash?: Maybe<Scalars['String']>;
  receiptsRoot?: Maybe<Scalars['String']>;
  sha3Uncles?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  stateRoot?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  transactionsRoot?: Maybe<Scalars['String']>;
  transactions_count?: Maybe<Scalars['Int']>;
  Miner?: Maybe<EthAccountUpdateOneWithoutBlocksMinedInput>;
  Transactions?: Maybe<EthTransactionUpdateManyWithoutBlockInput>;
  Uncles?: Maybe<EthBlockUpdateManyInput>;
}

export interface EthBlockUpdateInput {
  hash?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  difficulty?: Maybe<Scalars['Float']>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  extraData?: Maybe<Scalars['String']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  mixHash?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  parentHash?: Maybe<Scalars['String']>;
  receiptsRoot?: Maybe<Scalars['String']>;
  sha3Uncles?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  stateRoot?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  transactionsRoot?: Maybe<Scalars['String']>;
  transactions_count?: Maybe<Scalars['Int']>;
  Miner?: Maybe<EthAccountUpdateOneWithoutBlocksMinedInput>;
  Transactions?: Maybe<EthTransactionUpdateManyWithoutBlockInput>;
  Uncles?: Maybe<EthBlockUpdateManyInput>;
}

export interface EthBlockUpdateManyInput {
  connect?: Maybe<Array<EthBlockWhereUniqueInput>>;
  disconnect?: Maybe<Array<EthBlockWhereUniqueInput>>;
}

export interface EthBlockUpdateManyWithoutMinerInput {
  connect?: Maybe<Array<EthBlockWhereUniqueInput>>;
  disconnect?: Maybe<Array<EthBlockWhereUniqueInput>>;
}

export interface EthBlockUpdateOneWithoutTransactionsInput {
  connect?: Maybe<EthBlockWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface EthBlockUpdateWithWhereUniqueNestedInput {
  where: EthBlockWhereUniqueInput;
  data: EthBlockUpdateDataInput;
}

export interface EthBlockUpdateWithWhereUniqueWithoutMinerInput {
  where: EthBlockWhereUniqueInput;
  data: EthBlockUpdateWithoutMinerDataInput;
}

export interface EthBlockUpdateWithoutMinerDataInput {
  hash?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  difficulty?: Maybe<Scalars['Float']>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  extraData?: Maybe<Scalars['String']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  mixHash?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  parentHash?: Maybe<Scalars['String']>;
  receiptsRoot?: Maybe<Scalars['String']>;
  sha3Uncles?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  stateRoot?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  transactionsRoot?: Maybe<Scalars['String']>;
  transactions_count?: Maybe<Scalars['Int']>;
  Transactions?: Maybe<EthTransactionUpdateManyWithoutBlockInput>;
  Uncles?: Maybe<EthBlockUpdateManyInput>;
}

export interface EthBlockUpdateWithoutTransactionsDataInput {
  hash?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  difficulty?: Maybe<Scalars['Float']>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  extraData?: Maybe<Scalars['String']>;
  gasLimit?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  mixHash?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  parentHash?: Maybe<Scalars['String']>;
  receiptsRoot?: Maybe<Scalars['String']>;
  sha3Uncles?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  stateRoot?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  transactionsRoot?: Maybe<Scalars['String']>;
  transactions_count?: Maybe<Scalars['Int']>;
  Miner?: Maybe<EthAccountUpdateOneWithoutBlocksMinedInput>;
  Uncles?: Maybe<EthBlockUpdateManyInput>;
}

export interface EthBlockUpsertWithWhereUniqueNestedInput {
  where: EthBlockWhereUniqueInput;
}

export interface EthBlockUpsertWithWhereUniqueWithoutMinerInput {
  where: EthBlockWhereUniqueInput;
}

export interface EthBlockWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EthBlockWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EthBlockWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EthBlockWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  hash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  number_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  number_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  number_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  number_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  number_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  number_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  number_gte?: Maybe<Scalars['Int']>;
  difficulty?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  difficulty_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  difficulty_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  difficulty_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  difficulty_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  difficulty_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  difficulty_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  difficulty_gte?: Maybe<Scalars['Float']>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  totalDifficulty_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  totalDifficulty_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  totalDifficulty_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  totalDifficulty_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  totalDifficulty_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  totalDifficulty_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  totalDifficulty_gte?: Maybe<Scalars['Float']>;
  extraData?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  extraData_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  extraData_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  extraData_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  extraData_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  extraData_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  extraData_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  extraData_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  extraData_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  extraData_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  extraData_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  extraData_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  extraData_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  extraData_not_ends_with?: Maybe<Scalars['String']>;
  gasLimit?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  gasLimit_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  gasLimit_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  gasLimit_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  gasLimit_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  gasLimit_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  gasLimit_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  gasLimit_gte?: Maybe<Scalars['Float']>;
  gasUsed?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  gasUsed_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  gasUsed_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  gasUsed_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  gasUsed_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  gasUsed_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  gasUsed_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  gasUsed_gte?: Maybe<Scalars['Float']>;
  mixHash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mixHash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mixHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mixHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  mixHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  mixHash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  mixHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  mixHash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mixHash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mixHash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mixHash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mixHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mixHash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  mixHash_not_ends_with?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  nonce_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nonce_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  nonce_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  nonce_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  nonce_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  nonce_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  nonce_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  nonce_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  nonce_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  nonce_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  nonce_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  nonce_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  nonce_not_ends_with?: Maybe<Scalars['String']>;
  parentHash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  parentHash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  parentHash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  parentHash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  parentHash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  parentHash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  parentHash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  parentHash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  parentHash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  parentHash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  parentHash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  parentHash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  parentHash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  parentHash_not_ends_with?: Maybe<Scalars['String']>;
  receiptsRoot?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  receiptsRoot_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  receiptsRoot_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  receiptsRoot_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  receiptsRoot_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  receiptsRoot_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  receiptsRoot_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  receiptsRoot_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  receiptsRoot_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  receiptsRoot_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  receiptsRoot_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  receiptsRoot_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  receiptsRoot_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  receiptsRoot_not_ends_with?: Maybe<Scalars['String']>;
  sha3Uncles?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  sha3Uncles_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  sha3Uncles_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  sha3Uncles_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  sha3Uncles_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  sha3Uncles_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  sha3Uncles_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  sha3Uncles_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  sha3Uncles_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  sha3Uncles_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  sha3Uncles_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  sha3Uncles_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  sha3Uncles_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  sha3Uncles_not_ends_with?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Int']>;
  stateRoot?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  stateRoot_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stateRoot_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  stateRoot_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  stateRoot_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  stateRoot_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  stateRoot_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  stateRoot_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  stateRoot_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  stateRoot_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  stateRoot_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  stateRoot_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  stateRoot_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  stateRoot_not_ends_with?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['DateTime']>;
  transactionsRoot?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  transactionsRoot_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  transactionsRoot_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  transactionsRoot_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  transactionsRoot_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  transactionsRoot_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  transactionsRoot_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  transactionsRoot_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  transactionsRoot_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  transactionsRoot_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  transactionsRoot_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  transactionsRoot_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  transactionsRoot_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  transactionsRoot_not_ends_with?: Maybe<Scalars['String']>;
  transactions_count?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  transactions_count_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  transactions_count_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  transactions_count_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  transactions_count_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  transactions_count_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  transactions_count_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  transactions_count_gte?: Maybe<Scalars['Int']>;
  Miner?: Maybe<EthAccountWhereInput>;
  Transactions_every?: Maybe<EthTransactionWhereInput>;
  Transactions_some?: Maybe<EthTransactionWhereInput>;
  Transactions_none?: Maybe<EthTransactionWhereInput>;
  Uncles_every?: Maybe<EthBlockWhereInput>;
  Uncles_some?: Maybe<EthBlockWhereInput>;
  Uncles_none?: Maybe<EthBlockWhereInput>;
}

export interface EthBlockWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  hash?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
}

export interface EthContractSource extends Node {
  __typename?: 'EthContractSource';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['Json']>;
  source?: Maybe<Scalars['String']>;
  CreatedBy: User;
  Accounts?: Maybe<Array<EthAccount>>;
}


export type EthContractSourceCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type EthContractSourceAccountsArgs = {
  where?: Maybe<EthAccountWhereInput>;
  orderBy?: Maybe<EthAccountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface EthContractSourceConnection {
  __typename?: 'EthContractSourceConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<EthContractSourceEdge>>;
  aggregate: AggregateEthContractSource;
}

export interface EthContractSourceCreateInput {
  name: Scalars['String'];
  description?: Maybe<Scalars['Json']>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
}

export interface EthContractSourceCreateManyInput {
  connect?: Maybe<Array<EthContractSourceWhereUniqueInput>>;
}

export interface EthContractSourceCreateOneWithoutAccountsInput {
  connect?: Maybe<EthContractSourceWhereUniqueInput>;
}

export interface EthContractSourceCreateWithoutAccountsInput {
  name: Scalars['String'];
  description?: Maybe<Scalars['Json']>;
  source?: Maybe<Scalars['String']>;
  CreatedBy: UserCreateOneInput;
}

export interface EthContractSourceDeployInput {
  password?: Maybe<Scalars['String']>;
  params?: Maybe<Scalars['Json']>;
  gas?: Maybe<Scalars['Int']>;
  gasPrice?: Maybe<Scalars['Int']>;
}

/** An edge in a connection. */
export interface EthContractSourceEdge {
  __typename?: 'EthContractSourceEdge';
  /** The item at the end of the edge. */
  node: EthContractSource;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum EthContractSourceOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  SOURCE_ASC = 'source_ASC',
  SOURCE_DESC = 'source_DESC'
}

export interface EthContractSourcePreviousValues {
  __typename?: 'EthContractSourcePreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['Json']>;
  source?: Maybe<Scalars['String']>;
}

export interface EthContractSourceResponse {
  __typename?: 'EthContractSourceResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<EthContractSource>;
}

export interface EthContractSourceSubscriptionPayload {
  __typename?: 'EthContractSourceSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<EthContractSource>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<EthContractSourcePreviousValues>;
}

export interface EthContractSourceSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EthContractSourceSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EthContractSourceSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EthContractSourceSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<EthContractSourceWhereInput>;
}

export interface EthContractSourceUpdateDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  source?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Accounts?: Maybe<EthAccountUpdateManyWithoutContractSourceInput>;
}

export interface EthContractSourceUpdateInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  source?: Maybe<Scalars['String']>;
  bytecode?: Maybe<Scalars['String']>;
  abi?: Maybe<Scalars['Json']>;
}

export interface EthContractSourceUpdateManyInput {
  connect?: Maybe<Array<EthContractSourceWhereUniqueInput>>;
  disconnect?: Maybe<Array<EthContractSourceWhereUniqueInput>>;
}

export interface EthContractSourceUpdateOneWithoutAccountsInput {
  connect?: Maybe<EthContractSourceWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface EthContractSourceUpdateWithWhereUniqueNestedInput {
  where: EthContractSourceWhereUniqueInput;
  data: EthContractSourceUpdateDataInput;
}

export interface EthContractSourceUpdateWithoutAccountsDataInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
  source?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
}

export interface EthContractSourceUpsertWithWhereUniqueNestedInput {
  where: EthContractSourceWhereUniqueInput;
}

export interface EthContractSourceWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EthContractSourceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EthContractSourceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EthContractSourceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  source_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  source_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  source_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  source_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  source_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  source_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  source_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  source_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  source_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  source_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  source_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  source_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  source_not_ends_with?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<UserWhereInput>;
  Accounts_every?: Maybe<EthAccountWhereInput>;
  Accounts_some?: Maybe<EthAccountWhereInput>;
  Accounts_none?: Maybe<EthAccountWhereInput>;
}

export interface EthContractSourceWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface EthGetBlockWhereInput {
  hash?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
}

export interface EthGetTransactionWhereInput {
  hash: Scalars['String'];
}

export interface EthPersonalAccount {
  __typename?: 'EthPersonalAccount';
  address: Scalars['String'];
  balance?: Maybe<Scalars['Float']>;
}


export type EthPersonalAccountBalanceArgs = {
  convert?: Maybe<EthAmountConvert>;
};

export interface EthPersonalAccountCreateInput {
  password: Scalars['String'];
}

export interface EthPersonalAccountResponse {
  __typename?: 'EthPersonalAccountResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<EthPersonalAccount>;
}

export interface EthRecoverPersonalSignatureDataInput {
  from: Scalars['String'];
  message: Scalars['String'];
  signature: Scalars['String'];
}

export interface EthTransaction extends Node {
  __typename?: 'EthTransaction';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  chainId: Scalars['Int'];
  amount?: Maybe<Scalars['Float']>;
  input?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  Sender?: Maybe<EthAccount>;
  Receiver?: Maybe<EthAccount>;
  Account?: Maybe<EthAccount>;
  address: Scalars['String'];
  type?: Maybe<EthTransactionType>;
  v?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['String']>;
  Block?: Maybe<EthBlock>;
}


export type EthTransactionSenderArgs = {
  where?: Maybe<EthAccountWhereInput>;
};


export type EthTransactionReceiverArgs = {
  where?: Maybe<EthAccountWhereInput>;
};


export type EthTransactionAccountArgs = {
  where?: Maybe<EthAccountWhereInput>;
};


export type EthTransactionBlockArgs = {
  where?: Maybe<EthBlockWhereInput>;
};

/** A connection to a list of items. */
export interface EthTransactionConnection {
  __typename?: 'EthTransactionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<EthTransactionEdge>>;
  aggregate: AggregateEthTransaction;
}

export interface EthTransactionCreateInput {
  privateKey: Scalars['String'];
  type?: Maybe<EthTransactionType>;
  to?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  gasPrice?: Maybe<Scalars['Int']>;
  contractSourceId?: Maybe<Scalars['ID']>;
}

export interface EthTransactionCreateManyWithoutBlockInput {
  connect?: Maybe<Array<EthTransactionWhereUniqueInput>>;
}

export interface EthTransactionCreateManyWithoutReceiverInput {
  connect?: Maybe<Array<EthTransactionWhereUniqueInput>>;
}

export interface EthTransactionCreateManyWithoutSenderInput {
  connect?: Maybe<Array<EthTransactionWhereUniqueInput>>;
}

export interface EthTransactionCreateOneWithoutAccountInput {
  connect?: Maybe<EthTransactionWhereUniqueInput>;
}

export interface EthTransactionCreateWithoutAccountInput {
  chainId: Scalars['Int'];
  amount?: Maybe<Scalars['Float']>;
  input?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  address: Scalars['String'];
  type?: Maybe<EthTransactionType>;
  v?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['String']>;
  Sender?: Maybe<EthAccountCreateOneWithoutOutcomeTransactionsInput>;
  Receiver?: Maybe<EthAccountCreateOneWithoutIncomeTransactionsInput>;
  Block?: Maybe<EthBlockCreateOneWithoutTransactionsInput>;
}

export interface EthTransactionCreateWithoutBlockInput {
  chainId: Scalars['Int'];
  amount?: Maybe<Scalars['Float']>;
  input?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  address: Scalars['String'];
  type?: Maybe<EthTransactionType>;
  v?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['String']>;
  Sender?: Maybe<EthAccountCreateOneWithoutOutcomeTransactionsInput>;
  Receiver?: Maybe<EthAccountCreateOneWithoutIncomeTransactionsInput>;
  Account?: Maybe<EthAccountCreateOneWithoutTransactionInput>;
}

export interface EthTransactionCreateWithoutReceiverInput {
  chainId: Scalars['Int'];
  amount?: Maybe<Scalars['Float']>;
  input?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  address: Scalars['String'];
  type?: Maybe<EthTransactionType>;
  v?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['String']>;
  Sender?: Maybe<EthAccountCreateOneWithoutOutcomeTransactionsInput>;
  Account?: Maybe<EthAccountCreateOneWithoutTransactionInput>;
  Block?: Maybe<EthBlockCreateOneWithoutTransactionsInput>;
}

export interface EthTransactionCreateWithoutSenderInput {
  chainId: Scalars['Int'];
  amount?: Maybe<Scalars['Float']>;
  input?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  address: Scalars['String'];
  type?: Maybe<EthTransactionType>;
  v?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['String']>;
  Receiver?: Maybe<EthAccountCreateOneWithoutIncomeTransactionsInput>;
  Account?: Maybe<EthAccountCreateOneWithoutTransactionInput>;
  Block?: Maybe<EthBlockCreateOneWithoutTransactionsInput>;
}

/** An edge in a connection. */
export interface EthTransactionEdge {
  __typename?: 'EthTransactionEdge';
  /** The item at the end of the edge. */
  node: EthTransaction;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum EthTransactionOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CHAINID_ASC = 'chainId_ASC',
  CHAINID_DESC = 'chainId_DESC',
  AMOUNT_ASC = 'amount_ASC',
  AMOUNT_DESC = 'amount_DESC',
  INPUT_ASC = 'input_ASC',
  INPUT_DESC = 'input_DESC',
  INDEX_ASC = 'index_ASC',
  INDEX_DESC = 'index_DESC',
  ADDRESS_ASC = 'address_ASC',
  ADDRESS_DESC = 'address_DESC',
  TYPE_ASC = 'type_ASC',
  TYPE_DESC = 'type_DESC',
  V_ASC = 'v_ASC',
  V_DESC = 'v_DESC',
  R_ASC = 'r_ASC',
  R_DESC = 'r_DESC',
  S_ASC = 's_ASC',
  S_DESC = 's_DESC'
}

export interface EthTransactionPreviousValues {
  __typename?: 'EthTransactionPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  chainId: Scalars['Int'];
  amount?: Maybe<Scalars['Float']>;
  input?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  address: Scalars['String'];
  type?: Maybe<EthTransactionType>;
  v?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['String']>;
}

export interface EthTransactionResponse {
  __typename?: 'EthTransactionResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<EthTransaction>;
}

export interface EthTransactionSubscriptionPayload {
  __typename?: 'EthTransactionSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<EthTransaction>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<EthTransactionPreviousValues>;
}

export interface EthTransactionSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EthTransactionSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EthTransactionSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EthTransactionSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<EthTransactionWhereInput>;
}

export enum EthTransactionType {
  CONTRACTCREATE = 'ContractCreate',
  CONTRACTREAD = 'ContractRead',
  CONTRACTCALL = 'ContractCall',
  SENDETH = 'SendEth',
  SENDTOKEN = 'SendToken'
}

export interface EthTransactionUpdateInput {
  chainId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Float']>;
  input?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EthTransactionType>;
  v?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['String']>;
  Sender?: Maybe<EthAccountUpdateOneWithoutOutcomeTransactionsInput>;
  Receiver?: Maybe<EthAccountUpdateOneWithoutIncomeTransactionsInput>;
  Account?: Maybe<EthAccountUpdateOneWithoutTransactionInput>;
  Block?: Maybe<EthBlockUpdateOneWithoutTransactionsInput>;
}

export interface EthTransactionUpdateManyWithoutBlockInput {
  connect?: Maybe<Array<EthTransactionWhereUniqueInput>>;
  disconnect?: Maybe<Array<EthTransactionWhereUniqueInput>>;
}

export interface EthTransactionUpdateManyWithoutReceiverInput {
  connect?: Maybe<Array<EthTransactionWhereUniqueInput>>;
  disconnect?: Maybe<Array<EthTransactionWhereUniqueInput>>;
}

export interface EthTransactionUpdateManyWithoutSenderInput {
  connect?: Maybe<Array<EthTransactionWhereUniqueInput>>;
  disconnect?: Maybe<Array<EthTransactionWhereUniqueInput>>;
}

export interface EthTransactionUpdateOneWithoutAccountInput {
  connect?: Maybe<EthTransactionWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface EthTransactionUpdateWithWhereUniqueWithoutBlockInput {
  where: EthTransactionWhereUniqueInput;
  data: EthTransactionUpdateWithoutBlockDataInput;
}

export interface EthTransactionUpdateWithWhereUniqueWithoutReceiverInput {
  where: EthTransactionWhereUniqueInput;
  data: EthTransactionUpdateWithoutReceiverDataInput;
}

export interface EthTransactionUpdateWithWhereUniqueWithoutSenderInput {
  where: EthTransactionWhereUniqueInput;
  data: EthTransactionUpdateWithoutSenderDataInput;
}

export interface EthTransactionUpdateWithoutAccountDataInput {
  chainId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Float']>;
  input?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EthTransactionType>;
  v?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['String']>;
  Sender?: Maybe<EthAccountUpdateOneWithoutOutcomeTransactionsInput>;
  Receiver?: Maybe<EthAccountUpdateOneWithoutIncomeTransactionsInput>;
  Block?: Maybe<EthBlockUpdateOneWithoutTransactionsInput>;
}

export interface EthTransactionUpdateWithoutBlockDataInput {
  chainId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Float']>;
  input?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EthTransactionType>;
  v?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['String']>;
  Sender?: Maybe<EthAccountUpdateOneWithoutOutcomeTransactionsInput>;
  Receiver?: Maybe<EthAccountUpdateOneWithoutIncomeTransactionsInput>;
  Account?: Maybe<EthAccountUpdateOneWithoutTransactionInput>;
}

export interface EthTransactionUpdateWithoutReceiverDataInput {
  chainId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Float']>;
  input?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EthTransactionType>;
  v?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['String']>;
  Sender?: Maybe<EthAccountUpdateOneWithoutOutcomeTransactionsInput>;
  Account?: Maybe<EthAccountUpdateOneWithoutTransactionInput>;
  Block?: Maybe<EthBlockUpdateOneWithoutTransactionsInput>;
}

export interface EthTransactionUpdateWithoutSenderDataInput {
  chainId?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Float']>;
  input?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  type?: Maybe<EthTransactionType>;
  v?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['String']>;
  Receiver?: Maybe<EthAccountUpdateOneWithoutIncomeTransactionsInput>;
  Account?: Maybe<EthAccountUpdateOneWithoutTransactionInput>;
  Block?: Maybe<EthBlockUpdateOneWithoutTransactionsInput>;
}

export interface EthTransactionUpsertWithWhereUniqueWithoutBlockInput {
  where: EthTransactionWhereUniqueInput;
}

export interface EthTransactionUpsertWithWhereUniqueWithoutReceiverInput {
  where: EthTransactionWhereUniqueInput;
}

export interface EthTransactionUpsertWithWhereUniqueWithoutSenderInput {
  where: EthTransactionWhereUniqueInput;
}

export interface EthTransactionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<EthTransactionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<EthTransactionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<EthTransactionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  chainId?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  chainId_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  chainId_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  chainId_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  chainId_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  chainId_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  chainId_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  chainId_gte?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['Float']>;
  input?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  input_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  input_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  input_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  input_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  input_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  input_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  input_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  input_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  input_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  input_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  input_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  input_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  input_not_ends_with?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  index_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  index_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  index_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  index_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  index_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  index_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  index_gte?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>;
  type?: Maybe<EthTransactionType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<EthTransactionType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<EthTransactionType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<EthTransactionType>>;
  v?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  v_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  v_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  v_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  v_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  v_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  v_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  v_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  v_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  v_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  v_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  v_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  v_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  v_not_ends_with?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  r_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  r_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  r_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  r_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  r_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  r_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  r_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  r_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  r_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  r_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  r_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  r_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  r_not_ends_with?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  s_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  s_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  s_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  s_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  s_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  s_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  s_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  s_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  s_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  s_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  s_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  s_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  s_not_ends_with?: Maybe<Scalars['String']>;
  Sender?: Maybe<EthAccountWhereInput>;
  Receiver?: Maybe<EthAccountWhereInput>;
  Account?: Maybe<EthAccountWhereInput>;
  Block?: Maybe<EthBlockWhereInput>;
}

export interface EthTransactionWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  address?: Maybe<Scalars['String']>;
}

export interface File extends Node {
  __typename?: 'File';
  id: Scalars['ID'];
  path: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
  hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  CreatedBy: User;
  ImageResource?: Maybe<Resource>;
}


export type FileCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type FileImageResourceArgs = {
  where?: Maybe<ResourceWhereInput>;
};

/** A connection to a list of items. */
export interface FileConnection {
  __typename?: 'FileConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<FileEdge>>;
  aggregate: AggregateFile;
}

export interface FileCreateInput {
  path: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
  hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  CreatedBy: UserCreateOneWithoutFilesInput;
  ImageResource?: Maybe<ResourceCreateOneWithoutImageInput>;
}

export interface FileCreateManyWithoutCreatedByInput {
  connect?: Maybe<Array<FileWhereUniqueInput>>;
}

export interface FileCreateOneWithoutImageResourceInput {
  connect?: Maybe<FileWhereUniqueInput>;
}

export interface FileCreateWithoutCreatedByInput {
  path: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
  hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  ImageResource?: Maybe<ResourceCreateOneWithoutImageInput>;
}

export interface FileCreateWithoutImageResourceInput {
  path: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
  hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  CreatedBy: UserCreateOneWithoutFilesInput;
}

/** An edge in a connection. */
export interface FileEdge {
  __typename?: 'FileEdge';
  /** The item at the end of the edge. */
  node: File;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum FileOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  PATH_ASC = 'path_ASC',
  PATH_DESC = 'path_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  FILENAME_ASC = 'filename_ASC',
  FILENAME_DESC = 'filename_DESC',
  MIMETYPE_ASC = 'mimetype_ASC',
  MIMETYPE_DESC = 'mimetype_DESC',
  ENCODING_ASC = 'encoding_ASC',
  ENCODING_DESC = 'encoding_DESC',
  HASH_ASC = 'hash_ASC',
  HASH_DESC = 'hash_DESC',
  SIZE_ASC = 'size_ASC',
  SIZE_DESC = 'size_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface FilePreviousValues {
  __typename?: 'FilePreviousValues';
  id: Scalars['ID'];
  path: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
  hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
}

export interface FileResponse {
  __typename?: 'FileResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<File>;
}

export interface FileSubscriptionPayload {
  __typename?: 'FileSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<File>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<FilePreviousValues>;
}

export interface FileSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FileSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FileSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FileSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<FileWhereInput>;
}

export interface FileUpdateInput {
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutFilesInput>;
  ImageResource?: Maybe<ResourceUpdateOneWithoutImageInput>;
}

export interface FileUpdateManyWithoutCreatedByInput {
  connect?: Maybe<Array<FileWhereUniqueInput>>;
  disconnect?: Maybe<Array<FileWhereUniqueInput>>;
}

export interface FileUpdateOneWithoutImageResourceInput {
  connect?: Maybe<FileWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface FileUpdateWithWhereUniqueWithoutCreatedByInput {
  where: FileWhereUniqueInput;
  data: FileUpdateWithoutCreatedByDataInput;
}

export interface FileUpdateWithoutCreatedByDataInput {
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  ImageResource?: Maybe<ResourceUpdateOneWithoutImageInput>;
}

export interface FileUpdateWithoutImageResourceDataInput {
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutFilesInput>;
}

export interface FileUpsertWithWhereUniqueWithoutCreatedByInput {
  where: FileWhereUniqueInput;
}

export interface FileWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FileWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  path_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  path_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  path_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  path_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  path_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  path_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  path_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  path_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  path_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  path_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  path_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  path_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  path_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  filename_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  filename_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  filename_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  filename_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  filename_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  filename_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  filename_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  filename_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  filename_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  filename_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  filename_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  filename_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  filename_not_ends_with?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimetype_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimetype_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mimetype_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  mimetype_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  mimetype_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  mimetype_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  mimetype_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mimetype_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimetype_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimetype_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimetype_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimetype_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  mimetype_not_ends_with?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  encoding_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  encoding_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  encoding_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  encoding_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  encoding_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  encoding_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  encoding_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  encoding_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  encoding_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  encoding_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  encoding_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  encoding_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  encoding_not_ends_with?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  hash_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  hash_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  hash_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  hash_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  hash_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  hash_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  hash_not_ends_with?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>;
  CreatedBy?: Maybe<UserWhereInput>;
  ImageResource?: Maybe<ResourceWhereInput>;
}

export interface FileWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface Game extends Node {
  __typename?: 'Game';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<User>;
  Tourney?: Maybe<Tourney>;
  Users?: Maybe<Array<User>>;
  Teams?: Maybe<Array<Team>>;
  Parent?: Maybe<Game>;
  Childs?: Maybe<Array<Game>>;
  Results?: Maybe<Array<GameResult>>;
}


export type GameCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type GameTourneyArgs = {
  where?: Maybe<TourneyWhereInput>;
};


export type GameUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GameTeamsArgs = {
  where?: Maybe<TeamWhereInput>;
  orderBy?: Maybe<TeamOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GameParentArgs = {
  where?: Maybe<GameWhereInput>;
};


export type GameChildsArgs = {
  where?: Maybe<GameWhereInput>;
  orderBy?: Maybe<GameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type GameResultsArgs = {
  where?: Maybe<GameResultWhereInput>;
  orderBy?: Maybe<GameResultOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface GameConnection {
  __typename?: 'GameConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<GameEdge>>;
  aggregate: AggregateGame;
}

export interface GameCreateInput {
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Tourney?: Maybe<TourneyCreateOneWithoutGamesInput>;
  Users?: Maybe<UserCreateManyInput>;
  Teams?: Maybe<TeamCreateManyInput>;
  Parent?: Maybe<GameCreateOneWithoutChildsInput>;
  Childs?: Maybe<GameCreateManyWithoutParentInput>;
  Results?: Maybe<GameResultCreateManyWithoutGameInput>;
}

export interface GameCreateManyWithoutParentInput {
  connect?: Maybe<Array<GameWhereUniqueInput>>;
}

export interface GameCreateManyWithoutTourneyInput {
  connect?: Maybe<Array<GameWhereUniqueInput>>;
}

export interface GameCreateOneWithoutChildsInput {
  connect?: Maybe<GameWhereUniqueInput>;
}

export interface GameCreateOneWithoutResultsInput {
  connect?: Maybe<GameWhereUniqueInput>;
}

export interface GameCreateWithoutChildsInput {
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Tourney?: Maybe<TourneyCreateOneWithoutGamesInput>;
  Users?: Maybe<UserCreateManyInput>;
  Teams?: Maybe<TeamCreateManyInput>;
  Parent?: Maybe<GameCreateOneWithoutChildsInput>;
  Results?: Maybe<GameResultCreateManyWithoutGameInput>;
}

export interface GameCreateWithoutParentInput {
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Tourney?: Maybe<TourneyCreateOneWithoutGamesInput>;
  Users?: Maybe<UserCreateManyInput>;
  Teams?: Maybe<TeamCreateManyInput>;
  Childs?: Maybe<GameCreateManyWithoutParentInput>;
  Results?: Maybe<GameResultCreateManyWithoutGameInput>;
}

export interface GameCreateWithoutResultsInput {
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Tourney?: Maybe<TourneyCreateOneWithoutGamesInput>;
  Users?: Maybe<UserCreateManyInput>;
  Teams?: Maybe<TeamCreateManyInput>;
  Parent?: Maybe<GameCreateOneWithoutChildsInput>;
  Childs?: Maybe<GameCreateManyWithoutParentInput>;
}

export interface GameCreateWithoutTourneyInput {
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Users?: Maybe<UserCreateManyInput>;
  Teams?: Maybe<TeamCreateManyInput>;
  Parent?: Maybe<GameCreateOneWithoutChildsInput>;
  Childs?: Maybe<GameCreateManyWithoutParentInput>;
  Results?: Maybe<GameResultCreateManyWithoutGameInput>;
}

/** An edge in a connection. */
export interface GameEdge {
  __typename?: 'GameEdge';
  /** The item at the end of the edge. */
  node: Game;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum GameOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  START_DATE_ASC = 'start_date_ASC',
  START_DATE_DESC = 'start_date_DESC',
  END_DATE_ASC = 'end_date_ASC',
  END_DATE_DESC = 'end_date_DESC',
  SEQUENCE_ASC = 'sequence_ASC',
  SEQUENCE_DESC = 'sequence_DESC'
}

export interface GamePreviousValues {
  __typename?: 'GamePreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
}

export interface GameResponse {
  __typename?: 'GameResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  errors: Array<Error>;
  data?: Maybe<Game>;
}

export interface GameResult extends Node {
  __typename?: 'GameResult';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  date?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<User>;
  User?: Maybe<User>;
  Team?: Maybe<Team>;
  Game: Game;
  value?: Maybe<Scalars['Float']>;
}


export type GameResultCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type GameResultUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type GameResultTeamArgs = {
  where?: Maybe<TeamWhereInput>;
};


export type GameResultGameArgs = {
  where?: Maybe<GameWhereInput>;
};

/** A connection to a list of items. */
export interface GameResultConnection {
  __typename?: 'GameResultConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<GameResultEdge>>;
  aggregate: AggregateGameResult;
}

export interface GameResultCreateInput {
  date?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  User?: Maybe<UserCreateOneInput>;
  Team?: Maybe<TeamCreateOneInput>;
  Game: GameCreateOneWithoutResultsInput;
}

export interface GameResultCreateManyWithoutGameInput {
  connect?: Maybe<Array<GameResultWhereUniqueInput>>;
}

export interface GameResultCreateWithoutGameInput {
  date?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  User?: Maybe<UserCreateOneInput>;
  Team?: Maybe<TeamCreateOneInput>;
}

/** An edge in a connection. */
export interface GameResultEdge {
  __typename?: 'GameResultEdge';
  /** The item at the end of the edge. */
  node: GameResult;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum GameResultOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  DATE_ASC = 'date_ASC',
  DATE_DESC = 'date_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  VALUE_ASC = 'value_ASC',
  VALUE_DESC = 'value_DESC'
}

export interface GameResultPreviousValues {
  __typename?: 'GameResultPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  date?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
}

export interface GameResultResponse {
  __typename?: 'GameResultResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  errors: Array<Error>;
  data?: Maybe<GameResult>;
}

export interface GameResultSubscriptionPayload {
  __typename?: 'GameResultSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<GameResult>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<GameResultPreviousValues>;
}

export interface GameResultSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GameResultSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GameResultSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GameResultSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<GameResultWhereInput>;
}

export interface GameResultUpdateInput {
  date?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  User?: Maybe<UserUpdateOneInput>;
  Team?: Maybe<TeamUpdateOneInput>;
  Game?: Maybe<GameUpdateOneWithoutResultsInput>;
}

export interface GameResultUpdateManyWithoutGameInput {
  connect?: Maybe<Array<GameResultWhereUniqueInput>>;
  disconnect?: Maybe<Array<GameResultWhereUniqueInput>>;
}

export interface GameResultUpdateWithWhereUniqueWithoutGameInput {
  where: GameResultWhereUniqueInput;
  data: GameResultUpdateWithoutGameDataInput;
}

export interface GameResultUpdateWithoutGameDataInput {
  date?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  User?: Maybe<UserUpdateOneInput>;
  Team?: Maybe<TeamUpdateOneInput>;
}

export interface GameResultUpsertWithWhereUniqueWithoutGameInput {
  where: GameResultWhereUniqueInput;
}

export interface GameResultWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GameResultWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GameResultWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GameResultWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['Float']>;
  CreatedBy?: Maybe<UserWhereInput>;
  User?: Maybe<UserWhereInput>;
  Team?: Maybe<TeamWhereInput>;
  Game?: Maybe<GameWhereInput>;
}

export interface GameResultWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface GameSubscriptionPayload {
  __typename?: 'GameSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Game>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<GamePreviousValues>;
}

export interface GameSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GameSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GameSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GameSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<GameWhereInput>;
}

export interface GameUpdateInput {
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Tourney?: Maybe<TourneyUpdateOneWithoutGamesInput>;
  Users?: Maybe<UserUpdateManyInput>;
  Teams?: Maybe<TeamUpdateManyInput>;
  Parent?: Maybe<GameUpdateOneWithoutChildsInput>;
  Childs?: Maybe<GameUpdateManyWithoutParentInput>;
  Results?: Maybe<GameResultUpdateManyWithoutGameInput>;
}

export interface GameUpdateManyWithoutParentInput {
  connect?: Maybe<Array<GameWhereUniqueInput>>;
  disconnect?: Maybe<Array<GameWhereUniqueInput>>;
}

export interface GameUpdateManyWithoutTourneyInput {
  connect?: Maybe<Array<GameWhereUniqueInput>>;
  disconnect?: Maybe<Array<GameWhereUniqueInput>>;
}

export interface GameUpdateOneWithoutChildsInput {
  connect?: Maybe<GameWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface GameUpdateOneWithoutResultsInput {
  connect?: Maybe<GameWhereUniqueInput>;
}

export interface GameUpdateWithWhereUniqueWithoutParentInput {
  where: GameWhereUniqueInput;
  data: GameUpdateWithoutParentDataInput;
}

export interface GameUpdateWithWhereUniqueWithoutTourneyInput {
  where: GameWhereUniqueInput;
  data: GameUpdateWithoutTourneyDataInput;
}

export interface GameUpdateWithoutChildsDataInput {
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Tourney?: Maybe<TourneyUpdateOneWithoutGamesInput>;
  Users?: Maybe<UserUpdateManyInput>;
  Teams?: Maybe<TeamUpdateManyInput>;
  Parent?: Maybe<GameUpdateOneWithoutChildsInput>;
  Results?: Maybe<GameResultUpdateManyWithoutGameInput>;
}

export interface GameUpdateWithoutParentDataInput {
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Tourney?: Maybe<TourneyUpdateOneWithoutGamesInput>;
  Users?: Maybe<UserUpdateManyInput>;
  Teams?: Maybe<TeamUpdateManyInput>;
  Childs?: Maybe<GameUpdateManyWithoutParentInput>;
  Results?: Maybe<GameResultUpdateManyWithoutGameInput>;
}

export interface GameUpdateWithoutResultsDataInput {
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Tourney?: Maybe<TourneyUpdateOneWithoutGamesInput>;
  Users?: Maybe<UserUpdateManyInput>;
  Teams?: Maybe<TeamUpdateManyInput>;
  Parent?: Maybe<GameUpdateOneWithoutChildsInput>;
  Childs?: Maybe<GameUpdateManyWithoutParentInput>;
}

export interface GameUpdateWithoutTourneyDataInput {
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Users?: Maybe<UserUpdateManyInput>;
  Teams?: Maybe<TeamUpdateManyInput>;
  Parent?: Maybe<GameUpdateOneWithoutChildsInput>;
  Childs?: Maybe<GameUpdateManyWithoutParentInput>;
  Results?: Maybe<GameResultUpdateManyWithoutGameInput>;
}

export interface GameUpsertWithWhereUniqueWithoutParentInput {
  where: GameWhereUniqueInput;
}

export interface GameUpsertWithWhereUniqueWithoutTourneyInput {
  where: GameWhereUniqueInput;
}

export interface GameWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<GameWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<GameWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<GameWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  start_date_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  start_date_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  start_date_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  start_date_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  start_date_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  start_date_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  start_date_gte?: Maybe<Scalars['DateTime']>;
  end_date?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  end_date_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  end_date_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  end_date_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  end_date_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  end_date_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  end_date_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  end_date_gte?: Maybe<Scalars['DateTime']>;
  sequence?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  sequence_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  sequence_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  sequence_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  sequence_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  sequence_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  sequence_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  sequence_gte?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserWhereInput>;
  Tourney?: Maybe<TourneyWhereInput>;
  Users_every?: Maybe<UserWhereInput>;
  Users_some?: Maybe<UserWhereInput>;
  Users_none?: Maybe<UserWhereInput>;
  Teams_every?: Maybe<TeamWhereInput>;
  Teams_some?: Maybe<TeamWhereInput>;
  Teams_none?: Maybe<TeamWhereInput>;
  Parent?: Maybe<GameWhereInput>;
  Childs_every?: Maybe<GameWhereInput>;
  Childs_some?: Maybe<GameWhereInput>;
  Childs_none?: Maybe<GameWhereInput>;
  Results_every?: Maybe<GameResultWhereInput>;
  Results_some?: Maybe<GameResultWhereInput>;
  Results_none?: Maybe<GameResultWhereInput>;
}

export interface GameWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface IceCandidate {
  __typename?: 'IceCandidate';
  from: Scalars['String'];
  to: Scalars['String'];
  sdp: Scalars['Json'];
  callRequestId: Scalars['String'];
}


export interface LetsadsSmsMessageStatus extends Node {
  __typename?: 'LetsadsSmsMessageStatus';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<LetsadsSmsMessageStatusEnum>;
  description?: Maybe<Scalars['String']>;
  errorCode?: Maybe<LetsadsSmsMessageStatusErrorCodeEnum>;
  SmsMessage: SmsMessage;
  Items?: Maybe<Array<LetsadsSmsMessageStatusItem>>;
}


export type LetsadsSmsMessageStatusSmsMessageArgs = {
  where?: Maybe<SmsMessageWhereInput>;
};


export type LetsadsSmsMessageStatusItemsArgs = {
  where?: Maybe<LetsadsSmsMessageStatusItemWhereInput>;
  orderBy?: Maybe<LetsadsSmsMessageStatusItemOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface LetsadsSmsMessageStatusConnection {
  __typename?: 'LetsadsSmsMessageStatusConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<LetsadsSmsMessageStatusEdge>>;
  aggregate: AggregateLetsadsSmsMessageStatus;
}

export interface LetsadsSmsMessageStatusCreateInput {
  name?: Maybe<LetsadsSmsMessageStatusEnum>;
  description?: Maybe<Scalars['String']>;
  errorCode?: Maybe<LetsadsSmsMessageStatusErrorCodeEnum>;
  SmsMessage: SmsMessageCreateOneWithoutStatusInput;
  Items?: Maybe<LetsadsSmsMessageStatusItemCreateManyInput>;
}

export interface LetsadsSmsMessageStatusCreateOneWithoutSmsMessageInput {
  connect?: Maybe<LetsadsSmsMessageStatusWhereUniqueInput>;
}

export interface LetsadsSmsMessageStatusCreateWithoutSmsMessageInput {
  name?: Maybe<LetsadsSmsMessageStatusEnum>;
  description?: Maybe<Scalars['String']>;
  errorCode?: Maybe<LetsadsSmsMessageStatusErrorCodeEnum>;
  Items?: Maybe<LetsadsSmsMessageStatusItemCreateManyInput>;
}

/** An edge in a connection. */
export interface LetsadsSmsMessageStatusEdge {
  __typename?: 'LetsadsSmsMessageStatusEdge';
  /** The item at the end of the edge. */
  node: LetsadsSmsMessageStatus;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum LetsadsSmsMessageStatusEnum {
  COMPLETE = 'Complete',
  ERROR = 'Error'
}

export enum LetsadsSmsMessageStatusErrorCodeEnum {
  NO_DATA = 'NO_DATA',
  WRONG_DATA_FORMAT = 'WRONG_DATA_FORMAT',
  REQUEST_FORMAT = 'REQUEST_FORMAT',
  AUTH_DATA = 'AUTH_DATA',
  API_DISABLED = 'API_DISABLED',
  USER_NOT_MODERATED = 'USER_NOT_MODERATED',
  INCORRECT_FROM = 'INCORRECT_FROM',
  INVALID_FROM = 'INVALID_FROM',
  MESSAGE_TOO_LONG = 'MESSAGE_TOO_LONG',
  NO_MESSAGE = 'NO_MESSAGE',
  MAX_MESSAGES_COUNT = 'MAX_MESSAGES_COUNT',
  NOT_ENOUGH_MONEY = 'NOT_ENOUGH_MONEY',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

export interface LetsadsSmsMessageStatusItem extends Node {
  __typename?: 'LetsadsSmsMessageStatusItem';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  sms_id: Scalars['Int'];
}

/** A connection to a list of items. */
export interface LetsadsSmsMessageStatusItemConnection {
  __typename?: 'LetsadsSmsMessageStatusItemConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<LetsadsSmsMessageStatusItemEdge>>;
  aggregate: AggregateLetsadsSmsMessageStatusItem;
}

export interface LetsadsSmsMessageStatusItemCreateInput {
  sms_id: Scalars['Int'];
}

export interface LetsadsSmsMessageStatusItemCreateManyInput {
  connect?: Maybe<Array<LetsadsSmsMessageStatusItemWhereUniqueInput>>;
}

/** An edge in a connection. */
export interface LetsadsSmsMessageStatusItemEdge {
  __typename?: 'LetsadsSmsMessageStatusItemEdge';
  /** The item at the end of the edge. */
  node: LetsadsSmsMessageStatusItem;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum LetsadsSmsMessageStatusItemOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  SMS_ID_ASC = 'sms_id_ASC',
  SMS_ID_DESC = 'sms_id_DESC'
}

export interface LetsadsSmsMessageStatusItemPreviousValues {
  __typename?: 'LetsadsSmsMessageStatusItemPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  sms_id: Scalars['Int'];
}

export interface LetsadsSmsMessageStatusItemSubscriptionPayload {
  __typename?: 'LetsadsSmsMessageStatusItemSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<LetsadsSmsMessageStatusItem>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<LetsadsSmsMessageStatusItemPreviousValues>;
}

export interface LetsadsSmsMessageStatusItemSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LetsadsSmsMessageStatusItemSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LetsadsSmsMessageStatusItemSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LetsadsSmsMessageStatusItemSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<LetsadsSmsMessageStatusItemWhereInput>;
}

export interface LetsadsSmsMessageStatusItemUpdateDataInput {
  sms_id?: Maybe<Scalars['Int']>;
}

export interface LetsadsSmsMessageStatusItemUpdateInput {
  sms_id?: Maybe<Scalars['Int']>;
}

export interface LetsadsSmsMessageStatusItemUpdateManyInput {
  connect?: Maybe<Array<LetsadsSmsMessageStatusItemWhereUniqueInput>>;
  disconnect?: Maybe<Array<LetsadsSmsMessageStatusItemWhereUniqueInput>>;
}

export interface LetsadsSmsMessageStatusItemUpdateWithWhereUniqueNestedInput {
  where: LetsadsSmsMessageStatusItemWhereUniqueInput;
  data: LetsadsSmsMessageStatusItemUpdateDataInput;
}

export interface LetsadsSmsMessageStatusItemUpsertWithWhereUniqueNestedInput {
  where: LetsadsSmsMessageStatusItemWhereUniqueInput;
}

export interface LetsadsSmsMessageStatusItemWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LetsadsSmsMessageStatusItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LetsadsSmsMessageStatusItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LetsadsSmsMessageStatusItemWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  sms_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  sms_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  sms_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  sms_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  sms_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  sms_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  sms_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  sms_id_gte?: Maybe<Scalars['Int']>;
}

export interface LetsadsSmsMessageStatusItemWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  sms_id?: Maybe<Scalars['Int']>;
}

export enum LetsadsSmsMessageStatusOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  ERRORCODE_ASC = 'errorCode_ASC',
  ERRORCODE_DESC = 'errorCode_DESC'
}

export interface LetsadsSmsMessageStatusPreviousValues {
  __typename?: 'LetsadsSmsMessageStatusPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<LetsadsSmsMessageStatusEnum>;
  description?: Maybe<Scalars['String']>;
  errorCode?: Maybe<LetsadsSmsMessageStatusErrorCodeEnum>;
}

export interface LetsadsSmsMessageStatusSubscriptionPayload {
  __typename?: 'LetsadsSmsMessageStatusSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<LetsadsSmsMessageStatus>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<LetsadsSmsMessageStatusPreviousValues>;
}

export interface LetsadsSmsMessageStatusSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LetsadsSmsMessageStatusSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LetsadsSmsMessageStatusSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LetsadsSmsMessageStatusSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<LetsadsSmsMessageStatusWhereInput>;
}

export interface LetsadsSmsMessageStatusUpdateInput {
  name?: Maybe<LetsadsSmsMessageStatusEnum>;
  description?: Maybe<Scalars['String']>;
  errorCode?: Maybe<LetsadsSmsMessageStatusErrorCodeEnum>;
  SmsMessage?: Maybe<SmsMessageUpdateOneWithoutStatusInput>;
  Items?: Maybe<LetsadsSmsMessageStatusItemUpdateManyInput>;
}

export interface LetsadsSmsMessageStatusUpdateOneWithoutSmsMessageInput {
  connect?: Maybe<LetsadsSmsMessageStatusWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface LetsadsSmsMessageStatusUpdateWithoutSmsMessageDataInput {
  name?: Maybe<LetsadsSmsMessageStatusEnum>;
  description?: Maybe<Scalars['String']>;
  errorCode?: Maybe<LetsadsSmsMessageStatusErrorCodeEnum>;
  Items?: Maybe<LetsadsSmsMessageStatusItemUpdateManyInput>;
}

export interface LetsadsSmsMessageStatusWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LetsadsSmsMessageStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LetsadsSmsMessageStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LetsadsSmsMessageStatusWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<LetsadsSmsMessageStatusEnum>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<LetsadsSmsMessageStatusEnum>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<LetsadsSmsMessageStatusEnum>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<LetsadsSmsMessageStatusEnum>>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>;
  errorCode?: Maybe<LetsadsSmsMessageStatusErrorCodeEnum>;
  /** All values that are not equal to given value. */
  errorCode_not?: Maybe<LetsadsSmsMessageStatusErrorCodeEnum>;
  /** All values that are contained in given list. */
  errorCode_in?: Maybe<Array<LetsadsSmsMessageStatusErrorCodeEnum>>;
  /** All values that are not contained in given list. */
  errorCode_not_in?: Maybe<Array<LetsadsSmsMessageStatusErrorCodeEnum>>;
  SmsMessage?: Maybe<SmsMessageWhereInput>;
  Items_every?: Maybe<LetsadsSmsMessageStatusItemWhereInput>;
  Items_some?: Maybe<LetsadsSmsMessageStatusItemWhereInput>;
  Items_none?: Maybe<LetsadsSmsMessageStatusItemWhereInput>;
}

export interface LetsadsSmsMessageStatusWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface Letter extends Node {
  __typename?: 'Letter';
  id: Scalars['ID'];
  email: Scalars['String'];
  subject: Scalars['String'];
  message: Scalars['String'];
  status: LetterStatus;
  rank?: Maybe<Scalars['Int']>;
  deleteOnSend?: Maybe<Scalars['Boolean']>;
  replyTo?: Maybe<Scalars['String']>;
  returnTo?: Maybe<Scalars['String']>;
  Place?: Maybe<Place>;
}


export type LetterPlaceArgs = {
  where?: Maybe<PlaceWhereInput>;
};

/** A connection to a list of items. */
export interface LetterConnection {
  __typename?: 'LetterConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<LetterEdge>>;
  aggregate: AggregateLetter;
}

export interface LetterCreateInput {
  email: Scalars['String'];
  subject: Scalars['String'];
  message: Scalars['String'];
  status?: Maybe<LetterStatus>;
  rank?: Maybe<Scalars['Int']>;
  deleteOnSend?: Maybe<Scalars['Boolean']>;
  replyTo?: Maybe<Scalars['String']>;
  returnTo?: Maybe<Scalars['String']>;
  Place?: Maybe<PlaceCreateOneWithoutLettersInput>;
}

export interface LetterCreateManyWithoutPlaceInput {
  connect?: Maybe<Array<LetterWhereUniqueInput>>;
}

export interface LetterCreateWithoutPlaceInput {
  email: Scalars['String'];
  subject: Scalars['String'];
  message: Scalars['String'];
  status?: Maybe<LetterStatus>;
  rank?: Maybe<Scalars['Int']>;
  deleteOnSend?: Maybe<Scalars['Boolean']>;
  replyTo?: Maybe<Scalars['String']>;
  returnTo?: Maybe<Scalars['String']>;
}

/** An edge in a connection. */
export interface LetterEdge {
  __typename?: 'LetterEdge';
  /** The item at the end of the edge. */
  node: Letter;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum LetterOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  EMAIL_ASC = 'email_ASC',
  EMAIL_DESC = 'email_DESC',
  SUBJECT_ASC = 'subject_ASC',
  SUBJECT_DESC = 'subject_DESC',
  MESSAGE_ASC = 'message_ASC',
  MESSAGE_DESC = 'message_DESC',
  STATUS_ASC = 'status_ASC',
  STATUS_DESC = 'status_DESC',
  RANK_ASC = 'rank_ASC',
  RANK_DESC = 'rank_DESC',
  DELETEONSEND_ASC = 'deleteOnSend_ASC',
  DELETEONSEND_DESC = 'deleteOnSend_DESC',
  REPLYTO_ASC = 'replyTo_ASC',
  REPLYTO_DESC = 'replyTo_DESC',
  RETURNTO_ASC = 'returnTo_ASC',
  RETURNTO_DESC = 'returnTo_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface LetterPreviousValues {
  __typename?: 'LetterPreviousValues';
  id: Scalars['ID'];
  email: Scalars['String'];
  subject: Scalars['String'];
  message: Scalars['String'];
  status: LetterStatus;
  rank?: Maybe<Scalars['Int']>;
  deleteOnSend?: Maybe<Scalars['Boolean']>;
  replyTo?: Maybe<Scalars['String']>;
  returnTo?: Maybe<Scalars['String']>;
}

export enum LetterStatus {
  CREATED = 'Created',
  PROCESSING = 'Processing',
  SENDED = 'Sended',
  ERROR = 'Error'
}

export interface LetterSubscriptionPayload {
  __typename?: 'LetterSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Letter>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<LetterPreviousValues>;
}

export interface LetterSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LetterSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LetterSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LetterSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<LetterWhereInput>;
}

export interface LetterUpdateInput {
  email?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<LetterStatus>;
  Place?: Maybe<PlaceUpdateOneWithoutLettersInput>;
  rank?: Maybe<Scalars['Int']>;
  deleteOnSend?: Maybe<Scalars['Boolean']>;
  replyTo?: Maybe<Scalars['String']>;
  returnTo?: Maybe<Scalars['String']>;
}

export interface LetterUpdateManyWithoutPlaceInput {
  connect?: Maybe<Array<LetterWhereUniqueInput>>;
  disconnect?: Maybe<Array<LetterWhereUniqueInput>>;
}

export interface LetterUpdateWithWhereUniqueWithoutPlaceInput {
  where: LetterWhereUniqueInput;
  data: LetterUpdateWithoutPlaceDataInput;
}

export interface LetterUpdateWithoutPlaceDataInput {
  email?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<LetterStatus>;
  rank?: Maybe<Scalars['Int']>;
  deleteOnSend?: Maybe<Scalars['Boolean']>;
  replyTo?: Maybe<Scalars['String']>;
  returnTo?: Maybe<Scalars['String']>;
}

export interface LetterUpsertWithWhereUniqueWithoutPlaceInput {
  where: LetterWhereUniqueInput;
}

export interface LetterWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LetterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LetterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LetterWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  subject_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  subject_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  subject_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  subject_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  subject_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  subject_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  subject_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  subject_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  subject_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  subject_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  subject_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  subject_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  subject_not_ends_with?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  message_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  message_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  message_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  message_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  message_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  message_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  message_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  message_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  message_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  message_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  message_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  message_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  message_not_ends_with?: Maybe<Scalars['String']>;
  status?: Maybe<LetterStatus>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<LetterStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<LetterStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<LetterStatus>>;
  rank?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  rank_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  rank_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  rank_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  rank_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  rank_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  rank_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  rank_gte?: Maybe<Scalars['Int']>;
  deleteOnSend?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  deleteOnSend_not?: Maybe<Scalars['Boolean']>;
  replyTo?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  replyTo_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  replyTo_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  replyTo_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  replyTo_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  replyTo_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  replyTo_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  replyTo_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  replyTo_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  replyTo_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  replyTo_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  replyTo_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  replyTo_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  replyTo_not_ends_with?: Maybe<Scalars['String']>;
  returnTo?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  returnTo_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  returnTo_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  returnTo_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  returnTo_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  returnTo_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  returnTo_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  returnTo_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  returnTo_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  returnTo_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  returnTo_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  returnTo_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  returnTo_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  returnTo_not_ends_with?: Maybe<Scalars['String']>;
  Place?: Maybe<PlaceWhereInput>;
}

export interface LetterWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface Log extends Node {
  __typename?: 'Log';
  id: Scalars['ID'];
  level: LogLevel;
  objectType?: Maybe<Scalars['ID']>;
  message: Scalars['String'];
  stack?: Maybe<Scalars['String']>;
}

/** A connection to a list of items. */
export interface LogConnection {
  __typename?: 'LogConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<LogEdge>>;
  aggregate: AggregateLog;
}

export interface LogCreateInput {
  level?: Maybe<LogLevel>;
  objectType?: Maybe<Scalars['ID']>;
  message: Scalars['String'];
  stack?: Maybe<Scalars['String']>;
}

/** An edge in a connection. */
export interface LogEdge {
  __typename?: 'LogEdge';
  /** The item at the end of the edge. */
  node: Log;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum LogLevel {
  INFO = 'Info',
  NOTICE = 'Notice',
  WARNING = 'Warning',
  ERROR = 'Error',
  FATAL = 'Fatal'
}

export enum LogOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  LEVEL_ASC = 'level_ASC',
  LEVEL_DESC = 'level_DESC',
  OBJECTTYPE_ASC = 'objectType_ASC',
  OBJECTTYPE_DESC = 'objectType_DESC',
  MESSAGE_ASC = 'message_ASC',
  MESSAGE_DESC = 'message_DESC',
  STACK_ASC = 'stack_ASC',
  STACK_DESC = 'stack_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface LogPreviousValues {
  __typename?: 'LogPreviousValues';
  id: Scalars['ID'];
  level: LogLevel;
  objectType?: Maybe<Scalars['ID']>;
  message: Scalars['String'];
  stack?: Maybe<Scalars['String']>;
}

export interface LogSubscriptionPayload {
  __typename?: 'LogSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Log>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<LogPreviousValues>;
}

export interface LogSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LogSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LogSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LogSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<LogWhereInput>;
}

export interface LogUpdateInput {
  level?: Maybe<LogLevel>;
  objectType?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  stack?: Maybe<Scalars['String']>;
}

export interface LogWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LogWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LogWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  level?: Maybe<LogLevel>;
  /** All values that are not equal to given value. */
  level_not?: Maybe<LogLevel>;
  /** All values that are contained in given list. */
  level_in?: Maybe<Array<LogLevel>>;
  /** All values that are not contained in given list. */
  level_not_in?: Maybe<Array<LogLevel>>;
  objectType?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  objectType_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  objectType_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  objectType_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  objectType_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  objectType_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  objectType_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  objectType_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  objectType_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  objectType_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  objectType_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  objectType_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  objectType_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  objectType_not_ends_with?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  message_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  message_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  message_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  message_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  message_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  message_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  message_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  message_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  message_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  message_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  message_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  message_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  message_not_ends_with?: Maybe<Scalars['String']>;
  stack?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  stack_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stack_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  stack_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  stack_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  stack_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  stack_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  stack_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  stack_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  stack_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  stack_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  stack_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  stack_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  stack_not_ends_with?: Maybe<Scalars['String']>;
}

export interface LogWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface LogedIn extends Node {
  __typename?: 'LogedIn';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  fake?: Maybe<Scalars['Boolean']>;
  User: User;
}


export type LogedInUserArgs = {
  where?: Maybe<UserWhereInput>;
};

/** A connection to a list of items. */
export interface LogedInConnection {
  __typename?: 'LogedInConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<LogedInEdge>>;
  aggregate: AggregateLogedIn;
}

export interface LogedInCreateInput {
  fake?: Maybe<Scalars['Boolean']>;
  User: UserCreateOneWithoutLogedInsInput;
}

export interface LogedInCreateManyWithoutUserInput {
  connect?: Maybe<Array<LogedInWhereUniqueInput>>;
}

export interface LogedInCreateWithoutUserInput {
  fake?: Maybe<Scalars['Boolean']>;
}

/** An edge in a connection. */
export interface LogedInEdge {
  __typename?: 'LogedInEdge';
  /** The item at the end of the edge. */
  node: LogedIn;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum LogedInOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  FAKE_ASC = 'fake_ASC',
  FAKE_DESC = 'fake_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

export interface LogedInPreviousValues {
  __typename?: 'LogedInPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  fake?: Maybe<Scalars['Boolean']>;
}

export interface LogedInSubscriptionPayload {
  __typename?: 'LogedInSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<LogedIn>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<LogedInPreviousValues>;
}

export interface LogedInSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LogedInSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LogedInSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LogedInSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<LogedInWhereInput>;
}

export interface LogedInUpdateInput {
  fake?: Maybe<Scalars['Boolean']>;
  User?: Maybe<UserUpdateOneWithoutLogedInsInput>;
}

export interface LogedInUpdateManyWithoutUserInput {
  connect?: Maybe<Array<LogedInWhereUniqueInput>>;
  disconnect?: Maybe<Array<LogedInWhereUniqueInput>>;
}

export interface LogedInUpdateWithWhereUniqueWithoutUserInput {
  where: LogedInWhereUniqueInput;
  data: LogedInUpdateWithoutUserDataInput;
}

export interface LogedInUpdateWithoutUserDataInput {
  fake?: Maybe<Scalars['Boolean']>;
}

export interface LogedInUpsertWithWhereUniqueWithoutUserInput {
  where: LogedInWhereUniqueInput;
}

export interface LogedInWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<LogedInWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<LogedInWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<LogedInWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  fake?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  fake_not?: Maybe<Scalars['Boolean']>;
  User?: Maybe<UserWhereInput>;
}

export interface LogedInWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}


export interface MapPlaceConnection {
  __typename?: 'MapPlaceConnection';
  aggregate: AggregatePlace;
  edges: Array<PlaceEdge>;
}

export interface MapPlaceConnectionEdges {
  __typename?: 'MapPlaceConnectionEdges';
  node: Array<Place>;
}

export interface Mutation {
  __typename?: 'Mutation';
  createTopicProcessor: TopicResponse;
  updateTopicProcessor: TopicResponse;
  updatePlaceData: Place;
  updatePlaceProcessor: PlaceResponse;
  updateBeerProcessor: BeerPayload;
  createBeerProcessor: BeerPayload;
  togglePlaceBeer?: Maybe<Place>;
  updatePlaceBeerProcessor?: Maybe<PlaceBeerPayload>;
  createPlaceProcessor: PlacePayload;
  createUserTarif: UserTarif;
  createTarifRequest: TarifRequest;
  createCommentProcessor: CommentResponse;
  updateCommentProcessor: CommentResponse;
  createCity: City;
  updateCity?: Maybe<City>;
  singleUpload?: Maybe<File>;
  multipleUpload?: Maybe<Array<File>>;
  signup: AuthPayload;
  signin: AuthPayload;
  updateUserProcessor: UserResponse;
  resetPasswordProcessor: AuthPayload;
  createResetPasswordProcessor: ResetPasswordResponse;
}


export type MutationCreateTopicProcessorArgs = {
  data: TopicCreateInput;
};


export type MutationUpdateTopicProcessorArgs = {
  id?: Maybe<Scalars['ID']>;
  where?: Maybe<TopicWhereUniqueInput>;
  data: TopicUpdateInput;
};


export type MutationUpdatePlaceDataArgs = {
  where: PlaceWhereUniqueInput;
  object_data: Scalars['Json'];
};


export type MutationUpdatePlaceProcessorArgs = {
  data: PlaceUpdateInput;
  where: PlaceWhereUniqueInput;
};


export type MutationUpdateBeerProcessorArgs = {
  data: BeerUpdateInput;
  where?: Maybe<BeerWhereUniqueInput>;
};


export type MutationCreateBeerProcessorArgs = {
  data: BeerCreateInput;
};


export type MutationTogglePlaceBeerArgs = {
  placeId: Scalars['ID'];
  beerId: Scalars['ID'];
  active: Scalars['Boolean'];
};


export type MutationUpdatePlaceBeerProcessorArgs = {
  data: PlaceBeerUpdateInput;
  where: PlaceBeerWhereUniqueInput;
};


export type MutationCreatePlaceProcessorArgs = {
  data: PlaceCreateInput;
};


export type MutationCreateUserTarifArgs = {
  data: UserTarifCreateInput;
  promoCode?: Maybe<Scalars['String']>;
};


export type MutationCreateTarifRequestArgs = {
  data: TarifRequestCreateInput;
};


export type MutationCreateCommentProcessorArgs = {
  data: CommentCreateInput;
};


export type MutationUpdateCommentProcessorArgs = {
  where?: Maybe<CommentWhereUniqueInput>;
  data: CommentUpdateInput;
};


export type MutationCreateCityArgs = {
  data: CityCreateInput;
};


export type MutationUpdateCityArgs = {
  data: CityUpdateInput;
  where: CityWhereUniqueInput;
};


export type MutationSingleUploadArgs = {
  file?: Maybe<Scalars['Upload']>;
  data?: Maybe<SingleUploadInput>;
};


export type MutationMultipleUploadArgs = {
  files: Array<Scalars['Upload']>;
};


export type MutationSignupArgs = {
  data: UserCreateInput;
};


export type MutationSigninArgs = {
  where: UserWhereUniqueInput;
  data: SigninDataInput;
};


export type MutationUpdateUserProcessorArgs = {
  where?: Maybe<UserWhereUniqueInput>;
  data: UserUpdateInput;
};


export type MutationResetPasswordProcessorArgs = {
  data: ResetPasswordInput;
  where: UserWhereUniqueInput;
};


export type MutationCreateResetPasswordProcessorArgs = {
  data: ResetPasswordCreateInput;
};

export enum MutationType {
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED'
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

export interface Notice extends Node {
  __typename?: 'Notice';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  type: NoticeType;
  User: User;
  CreatedBy?: Maybe<User>;
  ChatMessage?: Maybe<ChatMessage>;
  ChatRoomInvitation?: Maybe<ChatRoomInvitation>;
}


export type NoticeUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type NoticeCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type NoticeChatMessageArgs = {
  where?: Maybe<ChatMessageWhereInput>;
};


export type NoticeChatRoomInvitationArgs = {
  where?: Maybe<ChatRoomInvitationWhereInput>;
};

/** A connection to a list of items. */
export interface NoticeConnection {
  __typename?: 'NoticeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<NoticeEdge>>;
  aggregate: AggregateNotice;
}

export interface NoticeCreateInput {
  type: NoticeType;
  User: UserCreateOneWithoutNoticesInput;
  CreatedBy?: Maybe<UserCreateOneInput>;
  ChatMessage?: Maybe<ChatMessageCreateOneInput>;
  ChatRoomInvitation?: Maybe<ChatRoomInvitationCreateOneWithoutNoticeInput>;
}

export interface NoticeCreateManyWithoutUserInput {
  connect?: Maybe<Array<NoticeWhereUniqueInput>>;
}

export interface NoticeCreateOneWithoutChatRoomInvitationInput {
  connect?: Maybe<NoticeWhereUniqueInput>;
}

export interface NoticeCreateWithoutChatRoomInvitationInput {
  type: NoticeType;
  User: UserCreateOneWithoutNoticesInput;
  CreatedBy?: Maybe<UserCreateOneInput>;
  ChatMessage?: Maybe<ChatMessageCreateOneInput>;
}

export interface NoticeCreateWithoutUserInput {
  type: NoticeType;
  CreatedBy?: Maybe<UserCreateOneInput>;
  ChatMessage?: Maybe<ChatMessageCreateOneInput>;
  ChatRoomInvitation?: Maybe<ChatRoomInvitationCreateOneWithoutNoticeInput>;
}

/** An edge in a connection. */
export interface NoticeEdge {
  __typename?: 'NoticeEdge';
  /** The item at the end of the edge. */
  node: Notice;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum NoticeOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  TYPE_ASC = 'type_ASC',
  TYPE_DESC = 'type_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

export interface NoticePreviousValues {
  __typename?: 'NoticePreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  type: NoticeType;
}

export interface NoticeSubscriptionPayload {
  __typename?: 'NoticeSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Notice>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<NoticePreviousValues>;
}

export interface NoticeSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NoticeSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NoticeSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NoticeSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<NoticeWhereInput>;
}

export enum NoticeType {
  CHATMESSAGE = 'ChatMessage',
  CALL = 'Call',
  CALLREQUEST = 'CallRequest',
  CHATROOMINVITATION = 'ChatRoomInvitation'
}

export interface NoticeUpdateInput {
  type?: Maybe<NoticeType>;
  User?: Maybe<UserUpdateOneWithoutNoticesInput>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  ChatMessage?: Maybe<ChatMessageUpdateOneInput>;
  ChatRoomInvitation?: Maybe<ChatRoomInvitationUpdateOneWithoutNoticeInput>;
}

export interface NoticeUpdateManyWithoutUserInput {
  connect?: Maybe<Array<NoticeWhereUniqueInput>>;
  disconnect?: Maybe<Array<NoticeWhereUniqueInput>>;
}

export interface NoticeUpdateOneWithoutChatRoomInvitationInput {
  connect?: Maybe<NoticeWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface NoticeUpdateWithWhereUniqueWithoutUserInput {
  where: NoticeWhereUniqueInput;
  data: NoticeUpdateWithoutUserDataInput;
}

export interface NoticeUpdateWithoutChatRoomInvitationDataInput {
  type?: Maybe<NoticeType>;
  User?: Maybe<UserUpdateOneWithoutNoticesInput>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  ChatMessage?: Maybe<ChatMessageUpdateOneInput>;
}

export interface NoticeUpdateWithoutUserDataInput {
  type?: Maybe<NoticeType>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  ChatMessage?: Maybe<ChatMessageUpdateOneInput>;
  ChatRoomInvitation?: Maybe<ChatRoomInvitationUpdateOneWithoutNoticeInput>;
}

export interface NoticeUpsertWithWhereUniqueWithoutUserInput {
  where: NoticeWhereUniqueInput;
}

export interface NoticeWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NoticeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NoticeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NoticeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  type?: Maybe<NoticeType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<NoticeType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<NoticeType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<NoticeType>>;
  User?: Maybe<UserWhereInput>;
  CreatedBy?: Maybe<UserWhereInput>;
  ChatMessage?: Maybe<ChatMessageWhereInput>;
  ChatRoomInvitation?: Maybe<ChatRoomInvitationWhereInput>;
}

export interface NoticeWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface NotificationType extends Node {
  __typename?: 'NotificationType';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  code?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  Users?: Maybe<Array<User>>;
  CreatedBy: User;
}


export type NotificationTypeUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type NotificationTypeCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};

/** A connection to a list of items. */
export interface NotificationTypeConnection {
  __typename?: 'NotificationTypeConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<NotificationTypeEdge>>;
  aggregate: AggregateNotificationType;
}

export interface NotificationTypeCreateInput {
  name: Scalars['String'];
  code?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  Users?: Maybe<UserCreateManyWithoutNotificationTypesInput>;
  CreatedBy: UserCreateOneWithoutNotificationTypesCreatedInput;
}

export interface NotificationTypeCreateManyWithoutCreatedByInput {
  connect?: Maybe<Array<NotificationTypeWhereUniqueInput>>;
}

export interface NotificationTypeCreateManyWithoutUsersInput {
  connect?: Maybe<Array<NotificationTypeWhereUniqueInput>>;
}

export interface NotificationTypeCreateWithoutCreatedByInput {
  name: Scalars['String'];
  code?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  Users?: Maybe<UserCreateManyWithoutNotificationTypesInput>;
}

export interface NotificationTypeCreateWithoutUsersInput {
  name: Scalars['String'];
  code?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  CreatedBy: UserCreateOneWithoutNotificationTypesCreatedInput;
}

/** An edge in a connection. */
export interface NotificationTypeEdge {
  __typename?: 'NotificationTypeEdge';
  /** The item at the end of the edge. */
  node: NotificationType;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum NotificationTypeOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  CODE_ASC = 'code_ASC',
  CODE_DESC = 'code_DESC',
  COMMENT_ASC = 'comment_ASC',
  COMMENT_DESC = 'comment_DESC'
}

export interface NotificationTypePreviousValues {
  __typename?: 'NotificationTypePreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  code?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
}

export interface NotificationTypeSubscriptionPayload {
  __typename?: 'NotificationTypeSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<NotificationType>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<NotificationTypePreviousValues>;
}

export interface NotificationTypeSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NotificationTypeSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NotificationTypeSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NotificationTypeSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<NotificationTypeWhereInput>;
}

export interface NotificationTypeUpdateInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  Users?: Maybe<UserUpdateManyWithoutNotificationTypesInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutNotificationTypesCreatedInput>;
}

export interface NotificationTypeUpdateManyWithoutCreatedByInput {
  connect?: Maybe<Array<NotificationTypeWhereUniqueInput>>;
  disconnect?: Maybe<Array<NotificationTypeWhereUniqueInput>>;
}

export interface NotificationTypeUpdateManyWithoutUsersInput {
  connect?: Maybe<Array<NotificationTypeWhereUniqueInput>>;
  disconnect?: Maybe<Array<NotificationTypeWhereUniqueInput>>;
}

export interface NotificationTypeUpdateWithWhereUniqueWithoutCreatedByInput {
  where: NotificationTypeWhereUniqueInput;
  data: NotificationTypeUpdateWithoutCreatedByDataInput;
}

export interface NotificationTypeUpdateWithWhereUniqueWithoutUsersInput {
  where: NotificationTypeWhereUniqueInput;
  data: NotificationTypeUpdateWithoutUsersDataInput;
}

export interface NotificationTypeUpdateWithoutCreatedByDataInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  Users?: Maybe<UserUpdateManyWithoutNotificationTypesInput>;
}

export interface NotificationTypeUpdateWithoutUsersDataInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutNotificationTypesCreatedInput>;
}

export interface NotificationTypeUpsertWithWhereUniqueWithoutCreatedByInput {
  where: NotificationTypeWhereUniqueInput;
}

export interface NotificationTypeUpsertWithWhereUniqueWithoutUsersInput {
  where: NotificationTypeWhereUniqueInput;
}

export interface NotificationTypeWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NotificationTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NotificationTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NotificationTypeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  code_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  code_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  code_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  code_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  code_not_ends_with?: Maybe<Scalars['ID']>;
  comment?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  comment_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  comment_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  comment_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  comment_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  comment_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  comment_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  comment_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  comment_not_ends_with?: Maybe<Scalars['String']>;
  Users_every?: Maybe<UserWhereInput>;
  Users_some?: Maybe<UserWhereInput>;
  Users_none?: Maybe<UserWhereInput>;
  CreatedBy?: Maybe<UserWhereInput>;
}

export interface NotificationTypeWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
}

export interface Photo extends Node {
  __typename?: 'Photo';
  id: Scalars['ID'];
  photo_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  num_comments?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  file_name?: Maybe<Scalars['String']>;
}

/** A connection to a list of items. */
export interface PhotoConnection {
  __typename?: 'PhotoConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<PhotoEdge>>;
  aggregate: AggregatePhoto;
}

export interface PhotoCreateInput {
  photo_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  num_comments?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  file_name?: Maybe<Scalars['String']>;
}

/** An edge in a connection. */
export interface PhotoEdge {
  __typename?: 'PhotoEdge';
  /** The item at the end of the edge. */
  node: Photo;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum PhotoOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  PHOTO_ID_ASC = 'photo_id_ASC',
  PHOTO_ID_DESC = 'photo_id_DESC',
  USER_ID_ASC = 'user_id_ASC',
  USER_ID_DESC = 'user_id_DESC',
  TYPE_ID_ASC = 'type_id_ASC',
  TYPE_ID_DESC = 'type_id_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  NUM_COMMENTS_ASC = 'num_comments_ASC',
  NUM_COMMENTS_DESC = 'num_comments_DESC',
  CREATED_AT_ASC = 'created_at_ASC',
  CREATED_AT_DESC = 'created_at_DESC',
  UPDATED_AT_ASC = 'updated_at_ASC',
  UPDATED_AT_DESC = 'updated_at_DESC',
  FILE_NAME_ASC = 'file_name_ASC',
  FILE_NAME_DESC = 'file_name_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface PhotoPreviousValues {
  __typename?: 'PhotoPreviousValues';
  id: Scalars['ID'];
  photo_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  num_comments?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  file_name?: Maybe<Scalars['String']>;
}

export interface PhotoSubscriptionPayload {
  __typename?: 'PhotoSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Photo>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<PhotoPreviousValues>;
}

export interface PhotoSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PhotoSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PhotoSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PhotoSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<PhotoWhereInput>;
}

export interface PhotoUpdateInput {
  photo_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  num_comments?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  file_name?: Maybe<Scalars['String']>;
}

export interface PhotoWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PhotoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PhotoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PhotoWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  photo_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  photo_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  photo_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  photo_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  photo_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  photo_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  photo_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  photo_id_gte?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  user_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  user_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  user_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  user_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  user_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  user_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  user_id_gte?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  type_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  type_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  type_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  type_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  type_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  type_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  type_id_gte?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>;
  num_comments?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  num_comments_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  num_comments_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  num_comments_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  num_comments_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  num_comments_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  num_comments_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  num_comments_gte?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  created_at_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  created_at_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  created_at_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  created_at_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  created_at_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  created_at_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  created_at_gte?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updated_at_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updated_at_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updated_at_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updated_at_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updated_at_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updated_at_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updated_at_gte?: Maybe<Scalars['DateTime']>;
  file_name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  file_name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  file_name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  file_name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  file_name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  file_name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  file_name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  file_name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  file_name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  file_name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  file_name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  file_name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  file_name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  file_name_not_ends_with?: Maybe<Scalars['String']>;
}

export interface PhotoWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  photo_id?: Maybe<Scalars['Int']>;
}

export interface Place extends Node {
  __typename?: 'Place';
  minPrice?: Maybe<Scalars['Float']>;
  maxPrice?: Maybe<Scalars['Float']>;
  uri?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  place_id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  work_hours?: Maybe<Scalars['String']>;
  metro?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  schedules?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  gallery?: Maybe<Scalars['Json']>;
  is_bar?: Maybe<Scalars['Boolean']>;
  is_shop?: Maybe<Scalars['Boolean']>;
  is_brewery?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  beers?: Maybe<Array<PlaceBeer>>;
  Owner?: Maybe<User>;
  Letters?: Maybe<Array<Letter>>;
  best?: Maybe<Scalars['Boolean']>;
  is_request?: Maybe<Scalars['Int']>;
}


export type PlaceBeersArgs = {
  where?: Maybe<PlaceBeerWhereInput>;
  orderBy?: Maybe<PlaceBeerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PlaceOwnerArgs = {
  where?: Maybe<UserWhereInput>;
};


export type PlaceLettersArgs = {
  where?: Maybe<LetterWhereInput>;
  orderBy?: Maybe<LetterOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export interface PlaceBeer extends Node {
  __typename?: 'PlaceBeer';
  id: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  Place: Place;
  Beer: Beer;
}


export type PlaceBeerPlaceArgs = {
  where?: Maybe<PlaceWhereInput>;
};


export type PlaceBeerBeerArgs = {
  where?: Maybe<BeerWhereInput>;
};

/** A connection to a list of items. */
export interface PlaceBeerConnection {
  __typename?: 'PlaceBeerConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<PlaceBeerEdge>>;
  aggregate: AggregatePlaceBeer;
}

export interface PlaceBeerCreateInput {
  price?: Maybe<Scalars['Float']>;
  Place: PlaceCreateOneWithoutBeersInput;
  Beer: BeerCreateOneWithoutPlacesInput;
}

export interface PlaceBeerCreateManyWithoutBeerInput {
  connect?: Maybe<Array<PlaceBeerWhereUniqueInput>>;
}

export interface PlaceBeerCreateManyWithoutPlaceInput {
  connect?: Maybe<Array<PlaceBeerWhereUniqueInput>>;
}

export interface PlaceBeerCreateWithoutBeerInput {
  price?: Maybe<Scalars['Float']>;
  Place: PlaceCreateOneWithoutBeersInput;
}

export interface PlaceBeerCreateWithoutPlaceInput {
  price?: Maybe<Scalars['Float']>;
  Beer: BeerCreateOneWithoutPlacesInput;
}

/** An edge in a connection. */
export interface PlaceBeerEdge {
  __typename?: 'PlaceBeerEdge';
  /** The item at the end of the edge. */
  node: PlaceBeer;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum PlaceBeerOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  PRICE_ASC = 'price_ASC',
  PRICE_DESC = 'price_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface PlaceBeerPayload {
  __typename?: 'PlaceBeerPayload';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<PlaceBeer>;
}

export interface PlaceBeerPreviousValues {
  __typename?: 'PlaceBeerPreviousValues';
  id: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
}

export interface PlaceBeerSubscriptionPayload {
  __typename?: 'PlaceBeerSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<PlaceBeer>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<PlaceBeerPreviousValues>;
}

export interface PlaceBeerSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaceBeerSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaceBeerSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaceBeerSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<PlaceBeerWhereInput>;
}

export interface PlaceBeerUpdateInput {
  price?: Maybe<Scalars['Float']>;
}

export interface PlaceBeerUpdateManyWithoutBeerInput {
  connect?: Maybe<Array<PlaceBeerWhereUniqueInput>>;
  disconnect?: Maybe<Array<PlaceBeerWhereUniqueInput>>;
}

export interface PlaceBeerUpdateManyWithoutPlaceInput {
  connect?: Maybe<Array<PlaceBeerWhereUniqueInput>>;
  disconnect?: Maybe<Array<PlaceBeerWhereUniqueInput>>;
}

export interface PlaceBeerUpdateWithWhereUniqueWithoutBeerInput {
  where: PlaceBeerWhereUniqueInput;
  data: PlaceBeerUpdateWithoutBeerDataInput;
}

export interface PlaceBeerUpdateWithWhereUniqueWithoutPlaceInput {
  where: PlaceBeerWhereUniqueInput;
  data: PlaceBeerUpdateWithoutPlaceDataInput;
}

export interface PlaceBeerUpdateWithoutBeerDataInput {
  price?: Maybe<Scalars['Float']>;
  Place?: Maybe<PlaceUpdateOneWithoutBeersInput>;
}

export interface PlaceBeerUpdateWithoutPlaceDataInput {
  price?: Maybe<Scalars['Float']>;
  Beer?: Maybe<BeerUpdateOneWithoutPlacesInput>;
}

export interface PlaceBeerUpsertWithWhereUniqueWithoutBeerInput {
  where: PlaceBeerWhereUniqueInput;
}

export interface PlaceBeerUpsertWithWhereUniqueWithoutPlaceInput {
  where: PlaceBeerWhereUniqueInput;
}

export interface PlaceBeerWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaceBeerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaceBeerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaceBeerWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars['Float']>;
  Place?: Maybe<PlaceWhereInput>;
  Beer?: Maybe<BeerWhereInput>;
}

export interface PlaceBeerWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

/** A connection to a list of items. */
export interface PlaceConnection {
  __typename?: 'PlaceConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<PlaceEdge>>;
  aggregate: AggregatePlace;
}

export interface PlaceCreateInput {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  work_hours?: Maybe<Scalars['String']>;
  metro?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  schedules?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  is_bar?: Maybe<Scalars['Boolean']>;
  is_shop?: Maybe<Scalars['Boolean']>;
  is_brewery?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  best?: Maybe<Scalars['Boolean']>;
  gallery?: Maybe<Scalars['Json']>;
}

export interface PlaceCreateManyWithoutOwnerInput {
  connect?: Maybe<Array<PlaceWhereUniqueInput>>;
}

export interface PlaceCreateOneWithoutBeersInput {
  connect?: Maybe<PlaceWhereUniqueInput>;
}

export interface PlaceCreateOneWithoutLettersInput {
  id: Scalars['ID'];
}

export interface PlaceCreateWithoutBeersInput {
  place_id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  work_hours?: Maybe<Scalars['String']>;
  metro?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  schedules?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  gallery?: Maybe<Scalars['Json']>;
  is_bar?: Maybe<Scalars['Boolean']>;
  is_shop?: Maybe<Scalars['Boolean']>;
  is_brewery?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  best?: Maybe<Scalars['Boolean']>;
  is_request?: Maybe<Scalars['Int']>;
  Owner?: Maybe<UserCreateOneWithoutPlacesInput>;
  Letters?: Maybe<LetterCreateManyWithoutPlaceInput>;
}

export interface PlaceCreateWithoutLettersInput {
  place_id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  work_hours?: Maybe<Scalars['String']>;
  metro?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  schedules?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  gallery?: Maybe<Scalars['Json']>;
  is_bar?: Maybe<Scalars['Boolean']>;
  is_shop?: Maybe<Scalars['Boolean']>;
  is_brewery?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  best?: Maybe<Scalars['Boolean']>;
  is_request?: Maybe<Scalars['Int']>;
  beers?: Maybe<PlaceBeerCreateManyWithoutPlaceInput>;
  Owner?: Maybe<UserCreateOneWithoutPlacesInput>;
}

export interface PlaceCreateWithoutOwnerInput {
  place_id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  work_hours?: Maybe<Scalars['String']>;
  metro?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  schedules?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  gallery?: Maybe<Scalars['Json']>;
  is_bar?: Maybe<Scalars['Boolean']>;
  is_shop?: Maybe<Scalars['Boolean']>;
  is_brewery?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  best?: Maybe<Scalars['Boolean']>;
  is_request?: Maybe<Scalars['Int']>;
  beers?: Maybe<PlaceBeerCreateManyWithoutPlaceInput>;
  Letters?: Maybe<LetterCreateManyWithoutPlaceInput>;
}

/** An edge in a connection. */
export interface PlaceEdge {
  __typename?: 'PlaceEdge';
  /** The item at the end of the edge. */
  node: Place;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum PlaceOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  PLACE_ID_ASC = 'place_id_ASC',
  PLACE_ID_DESC = 'place_id_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC',
  ADDRESS_ASC = 'address_ASC',
  ADDRESS_DESC = 'address_DESC',
  LNG_ASC = 'lng_ASC',
  LNG_DESC = 'lng_DESC',
  LAT_ASC = 'lat_ASC',
  LAT_DESC = 'lat_DESC',
  WEBSITE_ASC = 'website_ASC',
  WEBSITE_DESC = 'website_DESC',
  PHONE_ASC = 'phone_ASC',
  PHONE_DESC = 'phone_DESC',
  WORK_HOURS_ASC = 'work_hours_ASC',
  WORK_HOURS_DESC = 'work_hours_DESC',
  METRO_ASC = 'metro_ASC',
  METRO_DESC = 'metro_DESC',
  CONTENT_ASC = 'content_ASC',
  CONTENT_DESC = 'content_DESC',
  SCHEDULES_ASC = 'schedules_ASC',
  SCHEDULES_DESC = 'schedules_DESC',
  URL_NAME_ASC = 'url_name_ASC',
  URL_NAME_DESC = 'url_name_DESC',
  IMAGE_ASC = 'image_ASC',
  IMAGE_DESC = 'image_DESC',
  GALLERY_ASC = 'gallery_ASC',
  GALLERY_DESC = 'gallery_DESC',
  IS_BAR_ASC = 'is_bar_ASC',
  IS_BAR_DESC = 'is_bar_DESC',
  IS_SHOP_ASC = 'is_shop_ASC',
  IS_SHOP_DESC = 'is_shop_DESC',
  IS_BREWERY_ASC = 'is_brewery_ASC',
  IS_BREWERY_DESC = 'is_brewery_DESC',
  ACTIVE_ASC = 'active_ASC',
  ACTIVE_DESC = 'active_DESC',
  EMAIL_ASC = 'email_ASC',
  EMAIL_DESC = 'email_DESC',
  BEST_ASC = 'best_ASC',
  BEST_DESC = 'best_DESC',
  IS_REQUEST_ASC = 'is_request_ASC',
  IS_REQUEST_DESC = 'is_request_DESC'
}

export interface PlacePayload {
  __typename?: 'PlacePayload';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<Place>;
}

export interface PlacePreviousValues {
  __typename?: 'PlacePreviousValues';
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  place_id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  work_hours?: Maybe<Scalars['String']>;
  metro?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  schedules?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  gallery?: Maybe<Scalars['Json']>;
  is_bar?: Maybe<Scalars['Boolean']>;
  is_shop?: Maybe<Scalars['Boolean']>;
  is_brewery?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  best?: Maybe<Scalars['Boolean']>;
  is_request?: Maybe<Scalars['Int']>;
}

export interface PlaceResponse {
  __typename?: 'PlaceResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<Place>;
}

export interface PlaceSubscriptionPayload {
  __typename?: 'PlaceSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Place>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<PlacePreviousValues>;
}

export interface PlaceSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaceSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaceSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaceSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<PlaceWhereInput>;
}

export enum PlaceType {
  SHOP = 'shop',
  BAR = 'bar',
  BREWERY = 'brewery'
}

export interface PlaceUpdateInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  work_hours?: Maybe<Scalars['String']>;
  metro?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  schedules?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  is_bar?: Maybe<Scalars['Boolean']>;
  is_shop?: Maybe<Scalars['Boolean']>;
  is_brewery?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  best?: Maybe<Scalars['Boolean']>;
  Owner?: Maybe<UserUpdateOneWithoutPlacesInput>;
  gallery?: Maybe<Scalars['Json']>;
}

export interface PlaceUpdateManyWithoutOwnerInput {
  connect?: Maybe<Array<PlaceWhereUniqueInput>>;
  disconnect?: Maybe<Array<PlaceWhereUniqueInput>>;
}

export interface PlaceUpdateOneWithoutBeersInput {
  connect?: Maybe<PlaceWhereUniqueInput>;
}

export interface PlaceUpdateOneWithoutLettersInput {
  connect?: Maybe<PlaceWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface PlaceUpdateWithWhereUniqueWithoutOwnerInput {
  where: PlaceWhereUniqueInput;
  data: PlaceUpdateWithoutOwnerDataInput;
}

export interface PlaceUpdateWithoutBeersDataInput {
  place_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  work_hours?: Maybe<Scalars['String']>;
  metro?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  schedules?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  gallery?: Maybe<Scalars['Json']>;
  is_bar?: Maybe<Scalars['Boolean']>;
  is_shop?: Maybe<Scalars['Boolean']>;
  is_brewery?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  best?: Maybe<Scalars['Boolean']>;
  is_request?: Maybe<Scalars['Int']>;
  Owner?: Maybe<UserUpdateOneWithoutPlacesInput>;
  Letters?: Maybe<LetterUpdateManyWithoutPlaceInput>;
}

export interface PlaceUpdateWithoutLettersDataInput {
  place_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  work_hours?: Maybe<Scalars['String']>;
  metro?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  schedules?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  gallery?: Maybe<Scalars['Json']>;
  is_bar?: Maybe<Scalars['Boolean']>;
  is_shop?: Maybe<Scalars['Boolean']>;
  is_brewery?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  best?: Maybe<Scalars['Boolean']>;
  is_request?: Maybe<Scalars['Int']>;
  beers?: Maybe<PlaceBeerUpdateManyWithoutPlaceInput>;
  Owner?: Maybe<UserUpdateOneWithoutPlacesInput>;
}

export interface PlaceUpdateWithoutOwnerDataInput {
  place_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  work_hours?: Maybe<Scalars['String']>;
  metro?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  schedules?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  gallery?: Maybe<Scalars['Json']>;
  is_bar?: Maybe<Scalars['Boolean']>;
  is_shop?: Maybe<Scalars['Boolean']>;
  is_brewery?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  best?: Maybe<Scalars['Boolean']>;
  is_request?: Maybe<Scalars['Int']>;
  beers?: Maybe<PlaceBeerUpdateManyWithoutPlaceInput>;
  Letters?: Maybe<LetterUpdateManyWithoutPlaceInput>;
}

export interface PlaceUpsertWithWhereUniqueWithoutOwnerInput {
  where: PlaceWhereUniqueInput;
}

export interface PlaceWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PlaceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PlaceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PlaceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  place_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  place_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  place_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  place_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  place_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  place_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  place_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  place_id_gte?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  lng_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  lng_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  lng_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  lng_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  lng_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  lng_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  lng_gte?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  lat_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  lat_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  lat_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  lat_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  lat_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  lat_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  lat_gte?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  website_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  website_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  website_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  website_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  website_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  website_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  website_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  website_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  website_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  website_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  website_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  website_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  website_not_ends_with?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  phone_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  phone_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  phone_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  phone_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  phone_not_ends_with?: Maybe<Scalars['String']>;
  work_hours?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  work_hours_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  work_hours_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  work_hours_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  work_hours_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  work_hours_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  work_hours_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  work_hours_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  work_hours_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  work_hours_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  work_hours_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  work_hours_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  work_hours_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  work_hours_not_ends_with?: Maybe<Scalars['String']>;
  metro?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  metro_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metro_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  metro_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  metro_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  metro_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  metro_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  metro_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  metro_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  metro_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  metro_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  metro_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  metro_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  metro_not_ends_with?: Maybe<Scalars['String']>;
  url_name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_name_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  image_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  image_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  image_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  image_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  image_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  image_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  image_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  image_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  image_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  image_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  image_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  image_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  image_not_ends_with?: Maybe<Scalars['String']>;
  is_bar?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  is_bar_not?: Maybe<Scalars['Boolean']>;
  is_shop?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  is_shop_not?: Maybe<Scalars['Boolean']>;
  is_brewery?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  is_brewery_not?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  active_not?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>;
  best?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  best_not?: Maybe<Scalars['Boolean']>;
  is_request?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  is_request_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  is_request_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  is_request_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  is_request_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  is_request_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  is_request_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  is_request_gte?: Maybe<Scalars['Int']>;
  beers_every?: Maybe<PlaceBeerWhereInput>;
  beers_some?: Maybe<PlaceBeerWhereInput>;
  beers_none?: Maybe<PlaceBeerWhereInput>;
  Owner?: Maybe<UserWhereInput>;
  Letters_every?: Maybe<LetterWhereInput>;
  Letters_some?: Maybe<LetterWhereInput>;
  Letters_none?: Maybe<LetterWhereInput>;
}

export interface PlaceWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  place_id?: Maybe<Scalars['Int']>;
}

export interface Project extends Node {
  __typename?: 'Project';
  id: Scalars['ID'];
  domain?: Maybe<Scalars['String']>;
  PrismaResources?: Maybe<Array<Resource>>;
  PrismaUsers?: Maybe<Array<User>>;
}


export type ProjectPrismaResourcesArgs = {
  where?: Maybe<ResourceWhereInput>;
  orderBy?: Maybe<ResourceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ProjectPrismaUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface ProjectConnection {
  __typename?: 'ProjectConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ProjectEdge>>;
  aggregate: AggregateProject;
}

export interface ProjectCreateInput {
  domain?: Maybe<Scalars['String']>;
  PrismaResources?: Maybe<ResourceCreateManyWithoutPrismaProjectInput>;
  PrismaUsers?: Maybe<UserCreateManyWithoutPrismaProjectsInput>;
}

export interface ProjectCreateManyWithoutPrismaUsersInput {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
}

export interface ProjectCreateOneWithoutPrismaResourcesInput {
  connect?: Maybe<ProjectWhereUniqueInput>;
}

export interface ProjectCreateWithoutPrismaResourcesInput {
  domain?: Maybe<Scalars['String']>;
  PrismaUsers?: Maybe<UserCreateManyWithoutPrismaProjectsInput>;
}

export interface ProjectCreateWithoutPrismaUsersInput {
  domain?: Maybe<Scalars['String']>;
  PrismaResources?: Maybe<ResourceCreateManyWithoutPrismaProjectInput>;
}

/** An edge in a connection. */
export interface ProjectEdge {
  __typename?: 'ProjectEdge';
  /** The item at the end of the edge. */
  node: Project;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum ProjectOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  DOMAIN_ASC = 'domain_ASC',
  DOMAIN_DESC = 'domain_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface ProjectPreviousValues {
  __typename?: 'ProjectPreviousValues';
  id: Scalars['ID'];
  domain?: Maybe<Scalars['String']>;
}

export interface ProjectSubscriptionPayload {
  __typename?: 'ProjectSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Project>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ProjectPreviousValues>;
}

export interface ProjectSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ProjectWhereInput>;
}

export interface ProjectUpdateInput {
  domain?: Maybe<Scalars['String']>;
  PrismaResources?: Maybe<ResourceUpdateManyWithoutPrismaProjectInput>;
  PrismaUsers?: Maybe<UserUpdateManyWithoutPrismaProjectsInput>;
}

export interface ProjectUpdateManyWithoutPrismaUsersInput {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
}

export interface ProjectUpdateOneWithoutPrismaResourcesInput {
  connect?: Maybe<ProjectWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface ProjectUpdateWithWhereUniqueWithoutPrismaUsersInput {
  where: ProjectWhereUniqueInput;
  data: ProjectUpdateWithoutPrismaUsersDataInput;
}

export interface ProjectUpdateWithoutPrismaResourcesDataInput {
  domain?: Maybe<Scalars['String']>;
  PrismaUsers?: Maybe<UserUpdateManyWithoutPrismaProjectsInput>;
}

export interface ProjectUpdateWithoutPrismaUsersDataInput {
  domain?: Maybe<Scalars['String']>;
  PrismaResources?: Maybe<ResourceUpdateManyWithoutPrismaProjectInput>;
}

export interface ProjectUpsertWithWhereUniqueWithoutPrismaUsersInput {
  where: ProjectWhereUniqueInput;
}

export interface ProjectWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ProjectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ProjectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  domain?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  domain_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  domain_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  domain_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  domain_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  domain_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  domain_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  domain_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  domain_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  domain_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  domain_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  domain_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  domain_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  domain_not_ends_with?: Maybe<Scalars['String']>;
  PrismaResources_every?: Maybe<ResourceWhereInput>;
  PrismaResources_some?: Maybe<ResourceWhereInput>;
  PrismaResources_none?: Maybe<ResourceWhereInput>;
  PrismaUsers_every?: Maybe<UserWhereInput>;
  PrismaUsers_some?: Maybe<UserWhereInput>;
  PrismaUsers_none?: Maybe<UserWhereInput>;
}

export interface ProjectWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  domain?: Maybe<Scalars['String']>;
}

export interface Query {
  __typename?: 'Query';
  me?: Maybe<User>;
  mapPlacesConnection: MapPlaceConnection;
  mapGeoObjectsConnection: MapGeoObjectsConnection;
  routes: Array<Maybe<Route>>;
  userGroups: Array<Maybe<UserGroup>>;
  ethAccounts: Array<Maybe<EthAccount>>;
  ethTransactions: Array<Maybe<EthTransaction>>;
  resources: Array<Maybe<Resource>>;
  chatRooms: Array<Maybe<ChatRoom>>;
  notices: Array<Maybe<Notice>>;
  notificationTypes: Array<Maybe<NotificationType>>;
  resourceTags: Array<Maybe<ResourceTag>>;
  tags: Array<Maybe<Tag>>;
  games: Array<Maybe<Game>>;
  gameResults: Array<Maybe<GameResult>>;
  tournaments: Array<Maybe<Tournament>>;
  tournamentGroups: Array<Maybe<TournamentGroup>>;
  tourneys: Array<Maybe<Tourney>>;
  votes: Array<Maybe<Vote>>;
  callRequests: Array<Maybe<CallRequest>>;
  beers: Array<Maybe<Beer>>;
  userTarifs: Array<Maybe<UserTarif>>;
  cities: Array<Maybe<City>>;
  comments: Array<Maybe<Comment>>;
  places: Array<Maybe<Place>>;
  tarifs: Array<Maybe<Tarif>>;
  ethBlocks: Array<Maybe<EthBlock>>;
  ethContractSources: Array<Maybe<EthContractSource>>;
  users: Array<Maybe<User>>;
  chatMessages: Array<Maybe<ChatMessage>>;
  route?: Maybe<Route>;
  ethAccount?: Maybe<EthAccount>;
  ethTransaction?: Maybe<EthTransaction>;
  resource?: Maybe<Resource>;
  chatMessageReaded?: Maybe<ChatMessageReaded>;
  chatRoom?: Maybe<ChatRoom>;
  notice?: Maybe<Notice>;
  notificationType?: Maybe<NotificationType>;
  resourceTag?: Maybe<ResourceTag>;
  tag?: Maybe<Tag>;
  game?: Maybe<Game>;
  gameResult?: Maybe<GameResult>;
  tournament?: Maybe<Tournament>;
  tournamentGroup?: Maybe<TournamentGroup>;
  tourney?: Maybe<Tourney>;
  vote?: Maybe<Vote>;
  beer?: Maybe<Beer>;
  city?: Maybe<City>;
  comment?: Maybe<Comment>;
  place?: Maybe<Place>;
  topic?: Maybe<Topic>;
  ethBlock?: Maybe<EthBlock>;
  ethContractSource?: Maybe<EthContractSource>;
  user?: Maybe<User>;
  chatMessage?: Maybe<ChatMessage>;
  routesConnection: RouteConnection;
  ethAccountsConnection: EthAccountConnection;
  ethTransactionsConnection: EthTransactionConnection;
  resourcesConnection: ResourceConnection;
  chatMessageReadedsConnection: ChatMessageReadedConnection;
  chatRoomsConnection: ChatRoomConnection;
  noticesConnection: NoticeConnection;
  notificationTypesConnection: NotificationTypeConnection;
  resourceTagsConnection: ResourceTagConnection;
  tagsConnection: TagConnection;
  gamesConnection: GameConnection;
  gameResultsConnection: GameResultConnection;
  tournamentsConnection: TournamentConnection;
  tournamentGroupsConnection: TournamentGroupConnection;
  tourneysConnection: TourneyConnection;
  votesConnection: VoteConnection;
  callRequestsConnection: CallRequestConnection;
  beersConnection: BeerConnection;
  commentsConnection: CommentConnection;
  placesConnection: PlaceConnection;
  topicsConnection: TopicConnection;
  ethBlocksConnection: EthBlockConnection;
  ethContractSourcesConnection: EthContractSourceConnection;
  usersConnection: UserConnection;
  chatMessagesConnection: ChatMessageConnection;
  ethNet: EthNet;
  ethCoinbase?: Maybe<EthAccount>;
  ethPersonalAccounts: Array<Maybe<EthPersonalAccount>>;
  ethBalance?: Maybe<Scalars['Float']>;
  ethTransactionCount: Scalars['Int'];
  ethSyncState?: Maybe<EthSyncState>;
  ethGetBlockNumber: Scalars['Int'];
  ethGetBlock?: Maybe<Scalars['Json']>;
  ethGetBlockTransactionCount?: Maybe<Scalars['Int']>;
  ethGetTransaction?: Maybe<Scalars['Json']>;
}


export type QueryMapPlacesConnectionArgs = {
  where?: Maybe<PlaceWhereInput>;
  orderBy?: Maybe<PlaceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  center?: Maybe<CoordsInput>;
  type?: Maybe<Array<PlaceType>>;
};


export type QueryMapGeoObjectsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  where?: Maybe<PlaceWhereInput>;
  beerWhere?: Maybe<BeerWhereInput>;
  orderBy?: Maybe<PlaceOrderByInput>;
  center?: Maybe<CoordsInput>;
};


export type QueryRoutesArgs = {
  where?: Maybe<RouteWhereInput>;
  orderBy?: Maybe<RouteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserGroupsArgs = {
  where?: Maybe<UserGroupWhereInput>;
  orderBy?: Maybe<UserGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryEthAccountsArgs = {
  where?: Maybe<EthAccountWhereInput>;
  orderBy?: Maybe<EthAccountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryEthTransactionsArgs = {
  where?: Maybe<EthTransactionWhereInput>;
  orderBy?: Maybe<EthTransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryResourcesArgs = {
  where?: Maybe<ResourceWhereInput>;
  orderBy?: Maybe<ResourceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryChatRoomsArgs = {
  where?: Maybe<ChatRoomWhereInput>;
  orderBy?: Maybe<ChatRoomOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNoticesArgs = {
  where?: Maybe<NoticeWhereInput>;
  orderBy?: Maybe<NoticeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNotificationTypesArgs = {
  where?: Maybe<NotificationTypeWhereInput>;
  orderBy?: Maybe<NotificationTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryResourceTagsArgs = {
  where?: Maybe<ResourceTagWhereInput>;
  orderBy?: Maybe<ResourceTagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTagsArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGamesArgs = {
  where?: Maybe<GameWhereInput>;
  orderBy?: Maybe<GameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGameResultsArgs = {
  where?: Maybe<GameResultWhereInput>;
  orderBy?: Maybe<GameResultOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTournamentsArgs = {
  where?: Maybe<TournamentWhereInput>;
  orderBy?: Maybe<TournamentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTournamentGroupsArgs = {
  where?: Maybe<TournamentGroupWhereInput>;
  orderBy?: Maybe<TournamentGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTourneysArgs = {
  where?: Maybe<TourneyWhereInput>;
  orderBy?: Maybe<TourneyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryVotesArgs = {
  where?: Maybe<VoteWhereInput>;
  orderBy?: Maybe<VoteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCallRequestsArgs = {
  where?: Maybe<CallRequestWhereInput>;
  orderBy?: Maybe<CallRequestOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBeersArgs = {
  where?: Maybe<BeerWhereInput>;
  orderBy?: Maybe<BeerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserTarifsArgs = {
  where?: Maybe<UserTarifWhereInput>;
  orderBy?: Maybe<UserTarifOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCitiesArgs = {
  where?: Maybe<CityWhereInput>;
  orderBy?: Maybe<CityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPlacesArgs = {
  where?: Maybe<PlaceWhereInput>;
  orderBy?: Maybe<PlaceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTarifsArgs = {
  where?: Maybe<TarifWhereInput>;
  orderBy?: Maybe<TarifOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryEthBlocksArgs = {
  where?: Maybe<EthBlockWhereInput>;
  orderBy?: Maybe<EthBlockOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryEthContractSourcesArgs = {
  where?: Maybe<EthContractSourceWhereInput>;
  orderBy?: Maybe<EthContractSourceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryChatMessagesArgs = {
  where?: Maybe<ChatMessageWhereInput>;
  orderBy?: Maybe<ChatMessageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryRouteArgs = {
  where: RouteWhereUniqueInput;
};


export type QueryEthAccountArgs = {
  where: EthAccountWhereUniqueInput;
};


export type QueryEthTransactionArgs = {
  where: EthTransactionWhereUniqueInput;
};


export type QueryResourceArgs = {
  where: ResourceWhereUniqueInput;
};


export type QueryChatMessageReadedArgs = {
  where: ChatMessageReadedWhereUniqueInput;
};


export type QueryChatRoomArgs = {
  where: ChatRoomWhereUniqueInput;
};


export type QueryNoticeArgs = {
  where: NoticeWhereUniqueInput;
};


export type QueryNotificationTypeArgs = {
  where: NotificationTypeWhereUniqueInput;
};


export type QueryResourceTagArgs = {
  where: ResourceTagWhereUniqueInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryGameArgs = {
  where: GameWhereUniqueInput;
};


export type QueryGameResultArgs = {
  where: GameResultWhereUniqueInput;
};


export type QueryTournamentArgs = {
  where: TournamentWhereUniqueInput;
};


export type QueryTournamentGroupArgs = {
  where: TournamentGroupWhereUniqueInput;
};


export type QueryTourneyArgs = {
  where: TourneyWhereUniqueInput;
};


export type QueryVoteArgs = {
  where: VoteWhereUniqueInput;
};


export type QueryBeerArgs = {
  where: BeerWhereUniqueInput;
};


export type QueryCityArgs = {
  where: CityWhereUniqueInput;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryPlaceArgs = {
  where: PlaceWhereUniqueInput;
};


export type QueryTopicArgs = {
  where: TopicWhereUniqueInput;
};


export type QueryEthBlockArgs = {
  where: EthBlockWhereUniqueInput;
};


export type QueryEthContractSourceArgs = {
  where: EthContractSourceWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryChatMessageArgs = {
  where: ChatMessageWhereUniqueInput;
};


export type QueryRoutesConnectionArgs = {
  where?: Maybe<RouteWhereInput>;
  orderBy?: Maybe<RouteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryEthAccountsConnectionArgs = {
  where?: Maybe<EthAccountWhereInput>;
  orderBy?: Maybe<EthAccountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryEthTransactionsConnectionArgs = {
  where?: Maybe<EthTransactionWhereInput>;
  orderBy?: Maybe<EthTransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryResourcesConnectionArgs = {
  where?: Maybe<ResourceWhereInput>;
  orderBy?: Maybe<ResourceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryChatMessageReadedsConnectionArgs = {
  where?: Maybe<ChatMessageReadedWhereInput>;
  orderBy?: Maybe<ChatMessageReadedOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryChatRoomsConnectionArgs = {
  where?: Maybe<ChatRoomWhereInput>;
  orderBy?: Maybe<ChatRoomOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNoticesConnectionArgs = {
  where?: Maybe<NoticeWhereInput>;
  orderBy?: Maybe<NoticeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNotificationTypesConnectionArgs = {
  where?: Maybe<NotificationTypeWhereInput>;
  orderBy?: Maybe<NotificationTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryResourceTagsConnectionArgs = {
  where?: Maybe<ResourceTagWhereInput>;
  orderBy?: Maybe<ResourceTagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTagsConnectionArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGamesConnectionArgs = {
  where?: Maybe<GameWhereInput>;
  orderBy?: Maybe<GameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGameResultsConnectionArgs = {
  where?: Maybe<GameResultWhereInput>;
  orderBy?: Maybe<GameResultOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTournamentsConnectionArgs = {
  where?: Maybe<TournamentWhereInput>;
  orderBy?: Maybe<TournamentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTournamentGroupsConnectionArgs = {
  where?: Maybe<TournamentGroupWhereInput>;
  orderBy?: Maybe<TournamentGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTourneysConnectionArgs = {
  where?: Maybe<TourneyWhereInput>;
  orderBy?: Maybe<TourneyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryVotesConnectionArgs = {
  where?: Maybe<VoteWhereInput>;
  orderBy?: Maybe<VoteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCallRequestsConnectionArgs = {
  where?: Maybe<CallRequestWhereInput>;
  orderBy?: Maybe<CallRequestOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryBeersConnectionArgs = {
  where?: Maybe<BeerWhereInput>;
  orderBy?: Maybe<BeerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCommentsConnectionArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPlacesConnectionArgs = {
  where?: Maybe<PlaceWhereInput>;
  orderBy?: Maybe<PlaceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTopicsConnectionArgs = {
  where?: Maybe<TopicWhereInput>;
  orderBy?: Maybe<TopicOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryEthBlocksConnectionArgs = {
  where?: Maybe<EthBlockWhereInput>;
  orderBy?: Maybe<EthBlockOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryEthContractSourcesConnectionArgs = {
  where?: Maybe<EthContractSourceWhereInput>;
  orderBy?: Maybe<EthContractSourceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryChatMessagesConnectionArgs = {
  where?: Maybe<ChatMessageWhereInput>;
  orderBy?: Maybe<ChatMessageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryEthPersonalAccountsArgs = {
  where?: Maybe<Scalars['Boolean']>;
};


export type QueryEthBalanceArgs = {
  address: Scalars['String'];
  convert?: Maybe<EthAmountConvert>;
};


export type QueryEthTransactionCountArgs = {
  address: Scalars['String'];
};


export type QueryEthGetBlockArgs = {
  where: EthGetBlockWhereInput;
};


export type QueryEthGetBlockTransactionCountArgs = {
  where: EthGetBlockWhereInput;
};


export type QueryEthGetTransactionArgs = {
  where: EthGetTransactionWhereInput;
};

export interface ResetPassword extends Node {
  __typename?: 'ResetPassword';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  validTill?: Maybe<Scalars['DateTime']>;
  User?: Maybe<User>;
}


export type ResetPasswordUserArgs = {
  where?: Maybe<UserWhereInput>;
};

/** A connection to a list of items. */
export interface ResetPasswordConnection {
  __typename?: 'ResetPasswordConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ResetPasswordEdge>>;
  aggregate: AggregateResetPassword;
}

export interface ResetPasswordCreateInput {
  code?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  validTill?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserCreateOneInput>;
}

/** An edge in a connection. */
export interface ResetPasswordEdge {
  __typename?: 'ResetPasswordEdge';
  /** The item at the end of the edge. */
  node: ResetPassword;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export interface ResetPasswordInput {
  code: Scalars['ID'];
}

export enum ResetPasswordOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CODE_ASC = 'code_ASC',
  CODE_DESC = 'code_DESC',
  PASSWORD_ASC = 'password_ASC',
  PASSWORD_DESC = 'password_DESC',
  VALIDTILL_ASC = 'validTill_ASC',
  VALIDTILL_DESC = 'validTill_DESC'
}

export interface ResetPasswordPreviousValues {
  __typename?: 'ResetPasswordPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  code?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  validTill?: Maybe<Scalars['DateTime']>;
}

export interface ResetPasswordResponse {
  __typename?: 'ResetPasswordResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<ResetPassword>;
}

export interface ResetPasswordSubscriptionPayload {
  __typename?: 'ResetPasswordSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<ResetPassword>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ResetPasswordPreviousValues>;
}

export interface ResetPasswordSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ResetPasswordSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ResetPasswordSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ResetPasswordSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ResetPasswordWhereInput>;
}

export interface ResetPasswordUpdateInput {
  code?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  validTill?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneInput>;
}

export interface ResetPasswordWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ResetPasswordWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ResetPasswordWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ResetPasswordWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  code?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  code_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  code_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  code_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  code_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  code_not_ends_with?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>;
  validTill?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  validTill_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  validTill_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  validTill_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  validTill_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  validTill_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  validTill_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  validTill_gte?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserWhereInput>;
}

export interface ResetPasswordWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['ID']>;
}

export interface Resource extends Node {
  __typename?: 'Resource';
  id: Scalars['ID'];
  code?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  deleted: Scalars['Boolean'];
  hidemenu: Scalars['Boolean'];
  searchable: Scalars['Boolean'];
  uri?: Maybe<Scalars['String']>;
  isfolder: Scalars['Boolean'];
  CreatedBy: User;
  Parent?: Maybe<Resource>;
  Childs?: Maybe<Array<Resource>>;
  Image?: Maybe<File>;
  PrismaProject?: Maybe<Project>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CommentTarget?: Maybe<Resource>;
  Comments?: Maybe<Array<Resource>>;
  Votes?: Maybe<Array<Vote>>;
  Tags?: Maybe<Array<ResourceTag>>;
}


export type ResourceCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type ResourceParentArgs = {
  where?: Maybe<ResourceWhereInput>;
};


export type ResourceChildsArgs = {
  where?: Maybe<ResourceWhereInput>;
  orderBy?: Maybe<ResourceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ResourceImageArgs = {
  where?: Maybe<FileWhereInput>;
};


export type ResourcePrismaProjectArgs = {
  where?: Maybe<ProjectWhereInput>;
};


export type ResourceCommentTargetArgs = {
  where?: Maybe<ResourceWhereInput>;
};


export type ResourceCommentsArgs = {
  where?: Maybe<ResourceWhereInput>;
  orderBy?: Maybe<ResourceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ResourceVotesArgs = {
  where?: Maybe<VoteWhereInput>;
  orderBy?: Maybe<VoteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ResourceTagsArgs = {
  where?: Maybe<ResourceTagWhereInput>;
  orderBy?: Maybe<ResourceTagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface ResourceConnection {
  __typename?: 'ResourceConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ResourceEdge>>;
  aggregate: AggregateResource;
}

export interface ResourceCreateInput {
  type?: Maybe<ResourceType>;
  code?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  Parent?: Maybe<ResourceCreateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceCreateManyWithoutParentInput>;
  Image?: Maybe<FileCreateOneWithoutImageResourceInput>;
}

export interface ResourceCreateManyWithoutCommentTargetInput {
  connect?: Maybe<Array<ResourceWhereUniqueInput>>;
}

export interface ResourceCreateManyWithoutCreatedByInput {
  connect?: Maybe<Array<ResourceWhereUniqueInput>>;
}

export interface ResourceCreateManyWithoutParentInput {
  connect?: Maybe<Array<ResourceWhereUniqueInput>>;
}

export interface ResourceCreateManyWithoutPrismaProjectInput {
  connect?: Maybe<Array<ResourceWhereUniqueInput>>;
}

export interface ResourceCreateOneWithoutChildsInput {
  connect?: Maybe<ResourceWhereUniqueInput>;
}

export interface ResourceCreateOneWithoutCommentsInput {
  connect?: Maybe<ResourceWhereUniqueInput>;
}

export interface ResourceCreateOneWithoutImageInput {
  connect?: Maybe<ResourceWhereUniqueInput>;
}

export interface ResourceCreateOneWithoutTagsInput {
  connect?: Maybe<ResourceWhereUniqueInput>;
}

export interface ResourceCreateOneWithoutVotesInput {
  connect?: Maybe<ResourceWhereUniqueInput>;
}

export interface ResourceCreateWithoutChildsInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy: UserCreateOneWithoutResourcesInput;
  Parent?: Maybe<ResourceCreateOneWithoutChildsInput>;
  Image?: Maybe<FileCreateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectCreateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceCreateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceCreateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteCreateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagCreateManyWithoutResourceInput>;
}

export interface ResourceCreateWithoutCommentTargetInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy: UserCreateOneWithoutResourcesInput;
  Parent?: Maybe<ResourceCreateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceCreateManyWithoutParentInput>;
  Image?: Maybe<FileCreateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectCreateOneWithoutPrismaResourcesInput>;
  Comments?: Maybe<ResourceCreateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteCreateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagCreateManyWithoutResourceInput>;
}

export interface ResourceCreateWithoutCommentsInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy: UserCreateOneWithoutResourcesInput;
  Parent?: Maybe<ResourceCreateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceCreateManyWithoutParentInput>;
  Image?: Maybe<FileCreateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectCreateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceCreateOneWithoutCommentsInput>;
  Votes?: Maybe<VoteCreateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagCreateManyWithoutResourceInput>;
}

export interface ResourceCreateWithoutCreatedByInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  Parent?: Maybe<ResourceCreateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceCreateManyWithoutParentInput>;
  Image?: Maybe<FileCreateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectCreateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceCreateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceCreateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteCreateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagCreateManyWithoutResourceInput>;
}

export interface ResourceCreateWithoutImageInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy: UserCreateOneWithoutResourcesInput;
  Parent?: Maybe<ResourceCreateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceCreateManyWithoutParentInput>;
  PrismaProject?: Maybe<ProjectCreateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceCreateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceCreateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteCreateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagCreateManyWithoutResourceInput>;
}

export interface ResourceCreateWithoutParentInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy: UserCreateOneWithoutResourcesInput;
  Childs?: Maybe<ResourceCreateManyWithoutParentInput>;
  Image?: Maybe<FileCreateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectCreateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceCreateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceCreateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteCreateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagCreateManyWithoutResourceInput>;
}

export interface ResourceCreateWithoutPrismaProjectInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy: UserCreateOneWithoutResourcesInput;
  Parent?: Maybe<ResourceCreateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceCreateManyWithoutParentInput>;
  Image?: Maybe<FileCreateOneWithoutImageResourceInput>;
  CommentTarget?: Maybe<ResourceCreateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceCreateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteCreateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagCreateManyWithoutResourceInput>;
}

export interface ResourceCreateWithoutTagsInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy: UserCreateOneWithoutResourcesInput;
  Parent?: Maybe<ResourceCreateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceCreateManyWithoutParentInput>;
  Image?: Maybe<FileCreateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectCreateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceCreateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceCreateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteCreateManyWithoutResourceInput>;
}

export interface ResourceCreateWithoutVotesInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy: UserCreateOneWithoutResourcesInput;
  Parent?: Maybe<ResourceCreateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceCreateManyWithoutParentInput>;
  Image?: Maybe<FileCreateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectCreateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceCreateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceCreateManyWithoutCommentTargetInput>;
  Tags?: Maybe<ResourceTagCreateManyWithoutResourceInput>;
}

/** An edge in a connection. */
export interface ResourceEdge {
  __typename?: 'ResourceEdge';
  /** The item at the end of the edge. */
  node: Resource;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum ResourceOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CODE_ASC = 'code_ASC',
  CODE_DESC = 'code_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  TYPE_ASC = 'type_ASC',
  TYPE_DESC = 'type_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  LONGTITLE_ASC = 'longtitle_ASC',
  LONGTITLE_DESC = 'longtitle_DESC',
  CONTENT_ASC = 'content_ASC',
  CONTENT_DESC = 'content_DESC',
  CONTENTTEXT_ASC = 'contentText_ASC',
  CONTENTTEXT_DESC = 'contentText_DESC',
  PUBLISHED_ASC = 'published_ASC',
  PUBLISHED_DESC = 'published_DESC',
  DELETED_ASC = 'deleted_ASC',
  DELETED_DESC = 'deleted_DESC',
  HIDEMENU_ASC = 'hidemenu_ASC',
  HIDEMENU_DESC = 'hidemenu_DESC',
  SEARCHABLE_ASC = 'searchable_ASC',
  SEARCHABLE_DESC = 'searchable_DESC',
  URI_ASC = 'uri_ASC',
  URI_DESC = 'uri_DESC',
  ISFOLDER_ASC = 'isfolder_ASC',
  ISFOLDER_DESC = 'isfolder_DESC',
  RATING_ASC = 'rating_ASC',
  RATING_DESC = 'rating_DESC',
  POSITIVEVOTESCOUNT_ASC = 'positiveVotesCount_ASC',
  POSITIVEVOTESCOUNT_DESC = 'positiveVotesCount_DESC',
  NEGATIVEVOTESCOUNT_ASC = 'negativeVotesCount_ASC',
  NEGATIVEVOTESCOUNT_DESC = 'negativeVotesCount_DESC',
  NEUTRALVOTESCOUNT_ASC = 'neutralVotesCount_ASC',
  NEUTRALVOTESCOUNT_DESC = 'neutralVotesCount_DESC'
}

export interface ResourcePreviousValues {
  __typename?: 'ResourcePreviousValues';
  id: Scalars['ID'];
  code?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  deleted: Scalars['Boolean'];
  hidemenu: Scalars['Boolean'];
  searchable: Scalars['Boolean'];
  uri?: Maybe<Scalars['String']>;
  isfolder: Scalars['Boolean'];
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
}

export interface ResourceResponse {
  __typename?: 'ResourceResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<Resource>;
}

export interface ResourceSubscriptionPayload {
  __typename?: 'ResourceSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Resource>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ResourcePreviousValues>;
}

export interface ResourceSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ResourceSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ResourceSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ResourceSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ResourceWhereInput>;
}

export interface ResourceTag extends Node {
  __typename?: 'ResourceTag';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: TagStatus;
  Resource: Resource;
  Tag: Tag;
  CreatedBy: User;
}


export type ResourceTagResourceArgs = {
  where?: Maybe<ResourceWhereInput>;
};


export type ResourceTagTagArgs = {
  where?: Maybe<TagWhereInput>;
};


export type ResourceTagCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};

/** A connection to a list of items. */
export interface ResourceTagConnection {
  __typename?: 'ResourceTagConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<ResourceTagEdge>>;
  aggregate: AggregateResourceTag;
}

export interface ResourceTagCreateInput {
  status?: Maybe<TagStatus>;
  Resource: ResourceCreateOneWithoutTagsInput;
  Tag: TagCreateOneWithoutResourcesInput;
  CreatedBy: UserCreateOneWithoutResourceTagsInput;
}

export interface ResourceTagCreateManyWithoutCreatedByInput {
  connect?: Maybe<Array<ResourceTagWhereUniqueInput>>;
}

export interface ResourceTagCreateManyWithoutResourceInput {
  connect?: Maybe<Array<ResourceTagWhereUniqueInput>>;
}

export interface ResourceTagCreateManyWithoutTagInput {
  connect?: Maybe<Array<ResourceTagWhereUniqueInput>>;
}

export interface ResourceTagCreateWithoutCreatedByInput {
  status?: Maybe<TagStatus>;
  Resource: ResourceCreateOneWithoutTagsInput;
  Tag: TagCreateOneWithoutResourcesInput;
}

export interface ResourceTagCreateWithoutResourceInput {
  status?: Maybe<TagStatus>;
  Tag: TagCreateOneWithoutResourcesInput;
  CreatedBy: UserCreateOneWithoutResourceTagsInput;
}

export interface ResourceTagCreateWithoutTagInput {
  status?: Maybe<TagStatus>;
  Resource: ResourceCreateOneWithoutTagsInput;
  CreatedBy: UserCreateOneWithoutResourceTagsInput;
}

/** An edge in a connection. */
export interface ResourceTagEdge {
  __typename?: 'ResourceTagEdge';
  /** The item at the end of the edge. */
  node: ResourceTag;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum ResourceTagOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  STATUS_ASC = 'status_ASC',
  STATUS_DESC = 'status_DESC'
}

export interface ResourceTagPreviousValues {
  __typename?: 'ResourceTagPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: TagStatus;
}

export interface ResourceTagSubscriptionPayload {
  __typename?: 'ResourceTagSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<ResourceTag>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<ResourceTagPreviousValues>;
}

export interface ResourceTagSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ResourceTagSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ResourceTagSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ResourceTagSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<ResourceTagWhereInput>;
}

export interface ResourceTagUpdateInput {
  status?: Maybe<TagStatus>;
  Resource?: Maybe<ResourceUpdateOneWithoutTagsInput>;
  Tag?: Maybe<TagUpdateOneWithoutResourcesInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutResourceTagsInput>;
}

export interface ResourceTagUpdateManyWithoutCreatedByInput {
  connect?: Maybe<Array<ResourceTagWhereUniqueInput>>;
  disconnect?: Maybe<Array<ResourceTagWhereUniqueInput>>;
}

export interface ResourceTagUpdateManyWithoutResourceInput {
  connect?: Maybe<Array<ResourceTagWhereUniqueInput>>;
  disconnect?: Maybe<Array<ResourceTagWhereUniqueInput>>;
}

export interface ResourceTagUpdateManyWithoutTagInput {
  connect?: Maybe<Array<ResourceTagWhereUniqueInput>>;
  disconnect?: Maybe<Array<ResourceTagWhereUniqueInput>>;
}

export interface ResourceTagUpdateWithWhereUniqueWithoutCreatedByInput {
  where: ResourceTagWhereUniqueInput;
  data: ResourceTagUpdateWithoutCreatedByDataInput;
}

export interface ResourceTagUpdateWithWhereUniqueWithoutResourceInput {
  where: ResourceTagWhereUniqueInput;
  data: ResourceTagUpdateWithoutResourceDataInput;
}

export interface ResourceTagUpdateWithWhereUniqueWithoutTagInput {
  where: ResourceTagWhereUniqueInput;
  data: ResourceTagUpdateWithoutTagDataInput;
}

export interface ResourceTagUpdateWithoutCreatedByDataInput {
  status?: Maybe<TagStatus>;
  Resource?: Maybe<ResourceUpdateOneWithoutTagsInput>;
  Tag?: Maybe<TagUpdateOneWithoutResourcesInput>;
}

export interface ResourceTagUpdateWithoutResourceDataInput {
  status?: Maybe<TagStatus>;
  Tag?: Maybe<TagUpdateOneWithoutResourcesInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutResourceTagsInput>;
}

export interface ResourceTagUpdateWithoutTagDataInput {
  status?: Maybe<TagStatus>;
  Resource?: Maybe<ResourceUpdateOneWithoutTagsInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutResourceTagsInput>;
}

export interface ResourceTagUpsertWithWhereUniqueWithoutCreatedByInput {
  where: ResourceTagWhereUniqueInput;
}

export interface ResourceTagUpsertWithWhereUniqueWithoutResourceInput {
  where: ResourceTagWhereUniqueInput;
}

export interface ResourceTagUpsertWithWhereUniqueWithoutTagInput {
  where: ResourceTagWhereUniqueInput;
}

export interface ResourceTagWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ResourceTagWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ResourceTagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ResourceTagWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  status?: Maybe<TagStatus>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<TagStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<TagStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<TagStatus>>;
  Resource?: Maybe<ResourceWhereInput>;
  Tag?: Maybe<TagWhereInput>;
  CreatedBy?: Maybe<UserWhereInput>;
}

export interface ResourceTagWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export enum ResourceType {
  RESOURCE = 'Resource',
  BLOG = 'Blog',
  TOPIC = 'Topic',
  COMMENT = 'Comment'
}

export interface ResourceUpdateInput {
  type?: Maybe<ResourceType>;
  code?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  Parent?: Maybe<ResourceUpdateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceUpdateManyWithoutParentInput>;
  Image?: Maybe<FileUpdateOneWithoutImageResourceInput>;
}

export interface ResourceUpdateManyWithoutCommentTargetInput {
  connect?: Maybe<Array<ResourceWhereUniqueInput>>;
  disconnect?: Maybe<Array<ResourceWhereUniqueInput>>;
}

export interface ResourceUpdateManyWithoutCreatedByInput {
  connect?: Maybe<Array<ResourceWhereUniqueInput>>;
  disconnect?: Maybe<Array<ResourceWhereUniqueInput>>;
}

export interface ResourceUpdateManyWithoutParentInput {
  connect?: Maybe<Array<ResourceWhereUniqueInput>>;
  disconnect?: Maybe<Array<ResourceWhereUniqueInput>>;
}

export interface ResourceUpdateManyWithoutPrismaProjectInput {
  connect?: Maybe<Array<ResourceWhereUniqueInput>>;
  disconnect?: Maybe<Array<ResourceWhereUniqueInput>>;
}

export interface ResourceUpdateOneWithoutChildsInput {
  connect?: Maybe<ResourceWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface ResourceUpdateOneWithoutCommentsInput {
  connect?: Maybe<ResourceWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface ResourceUpdateOneWithoutImageInput {
  connect?: Maybe<ResourceWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface ResourceUpdateOneWithoutTagsInput {
  connect?: Maybe<ResourceWhereUniqueInput>;
}

export interface ResourceUpdateOneWithoutVotesInput {
  connect?: Maybe<ResourceWhereUniqueInput>;
}

export interface ResourceUpdateWithWhereUniqueWithoutCommentTargetInput {
  where: ResourceWhereUniqueInput;
  data: ResourceUpdateWithoutCommentTargetDataInput;
}

export interface ResourceUpdateWithWhereUniqueWithoutCreatedByInput {
  where: ResourceWhereUniqueInput;
  data: ResourceUpdateWithoutCreatedByDataInput;
}

export interface ResourceUpdateWithWhereUniqueWithoutParentInput {
  where: ResourceWhereUniqueInput;
  data: ResourceUpdateWithoutParentDataInput;
}

export interface ResourceUpdateWithWhereUniqueWithoutPrismaProjectInput {
  where: ResourceWhereUniqueInput;
  data: ResourceUpdateWithoutPrismaProjectDataInput;
}

export interface ResourceUpdateWithoutChildsDataInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutResourcesInput>;
  Parent?: Maybe<ResourceUpdateOneWithoutChildsInput>;
  Image?: Maybe<FileUpdateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectUpdateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceUpdateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceUpdateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteUpdateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagUpdateManyWithoutResourceInput>;
}

export interface ResourceUpdateWithoutCommentTargetDataInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutResourcesInput>;
  Parent?: Maybe<ResourceUpdateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceUpdateManyWithoutParentInput>;
  Image?: Maybe<FileUpdateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectUpdateOneWithoutPrismaResourcesInput>;
  Comments?: Maybe<ResourceUpdateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteUpdateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagUpdateManyWithoutResourceInput>;
}

export interface ResourceUpdateWithoutCommentsDataInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutResourcesInput>;
  Parent?: Maybe<ResourceUpdateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceUpdateManyWithoutParentInput>;
  Image?: Maybe<FileUpdateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectUpdateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceUpdateOneWithoutCommentsInput>;
  Votes?: Maybe<VoteUpdateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagUpdateManyWithoutResourceInput>;
}

export interface ResourceUpdateWithoutCreatedByDataInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  Parent?: Maybe<ResourceUpdateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceUpdateManyWithoutParentInput>;
  Image?: Maybe<FileUpdateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectUpdateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceUpdateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceUpdateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteUpdateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagUpdateManyWithoutResourceInput>;
}

export interface ResourceUpdateWithoutImageDataInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutResourcesInput>;
  Parent?: Maybe<ResourceUpdateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceUpdateManyWithoutParentInput>;
  PrismaProject?: Maybe<ProjectUpdateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceUpdateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceUpdateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteUpdateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagUpdateManyWithoutResourceInput>;
}

export interface ResourceUpdateWithoutParentDataInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutResourcesInput>;
  Childs?: Maybe<ResourceUpdateManyWithoutParentInput>;
  Image?: Maybe<FileUpdateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectUpdateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceUpdateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceUpdateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteUpdateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagUpdateManyWithoutResourceInput>;
}

export interface ResourceUpdateWithoutPrismaProjectDataInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutResourcesInput>;
  Parent?: Maybe<ResourceUpdateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceUpdateManyWithoutParentInput>;
  Image?: Maybe<FileUpdateOneWithoutImageResourceInput>;
  CommentTarget?: Maybe<ResourceUpdateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceUpdateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteUpdateManyWithoutResourceInput>;
  Tags?: Maybe<ResourceTagUpdateManyWithoutResourceInput>;
}

export interface ResourceUpdateWithoutTagsDataInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutResourcesInput>;
  Parent?: Maybe<ResourceUpdateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceUpdateManyWithoutParentInput>;
  Image?: Maybe<FileUpdateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectUpdateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceUpdateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceUpdateManyWithoutCommentTargetInput>;
  Votes?: Maybe<VoteUpdateManyWithoutResourceInput>;
}

export interface ResourceUpdateWithoutVotesDataInput {
  code?: Maybe<Scalars['ID']>;
  type?: Maybe<ResourceType>;
  name?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['Json']>;
  contentText?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserUpdateOneWithoutResourcesInput>;
  Parent?: Maybe<ResourceUpdateOneWithoutChildsInput>;
  Childs?: Maybe<ResourceUpdateManyWithoutParentInput>;
  Image?: Maybe<FileUpdateOneWithoutImageResourceInput>;
  PrismaProject?: Maybe<ProjectUpdateOneWithoutPrismaResourcesInput>;
  CommentTarget?: Maybe<ResourceUpdateOneWithoutCommentsInput>;
  Comments?: Maybe<ResourceUpdateManyWithoutCommentTargetInput>;
  Tags?: Maybe<ResourceTagUpdateManyWithoutResourceInput>;
}

export interface ResourceUpsertWithWhereUniqueWithoutCommentTargetInput {
  where: ResourceWhereUniqueInput;
}

export interface ResourceUpsertWithWhereUniqueWithoutCreatedByInput {
  where: ResourceWhereUniqueInput;
}

export interface ResourceUpsertWithWhereUniqueWithoutParentInput {
  where: ResourceWhereUniqueInput;
}

export interface ResourceUpsertWithWhereUniqueWithoutPrismaProjectInput {
  where: ResourceWhereUniqueInput;
}

export interface ResourceWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ResourceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ResourceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ResourceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  code_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  code_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  code_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  code_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  code_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  type?: Maybe<ResourceType>;
  /** All values that are not equal to given value. */
  type_not?: Maybe<ResourceType>;
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<ResourceType>>;
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<ResourceType>>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  longtitle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  longtitle_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  longtitle_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  longtitle_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  longtitle_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  longtitle_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  longtitle_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  longtitle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  longtitle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  longtitle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  longtitle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  longtitle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  longtitle_not_ends_with?: Maybe<Scalars['String']>;
  contentText?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contentText_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contentText_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contentText_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  contentText_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  contentText_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  contentText_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  contentText_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  contentText_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contentText_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contentText_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contentText_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contentText_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  contentText_not_ends_with?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  published_not?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  deleted_not?: Maybe<Scalars['Boolean']>;
  hidemenu?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  hidemenu_not?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  searchable_not?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  uri_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  uri_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  uri_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  uri_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  uri_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  uri_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  uri_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  uri_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  uri_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  uri_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  uri_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  uri_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  uri_not_ends_with?: Maybe<Scalars['String']>;
  isfolder?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isfolder_not?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  rating_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  rating_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  rating_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  rating_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  rating_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  rating_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  rating_gte?: Maybe<Scalars['Float']>;
  positiveVotesCount?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  positiveVotesCount_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  positiveVotesCount_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  positiveVotesCount_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  positiveVotesCount_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  positiveVotesCount_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  positiveVotesCount_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  positiveVotesCount_gte?: Maybe<Scalars['Int']>;
  negativeVotesCount?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  negativeVotesCount_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  negativeVotesCount_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  negativeVotesCount_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  negativeVotesCount_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  negativeVotesCount_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  negativeVotesCount_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  negativeVotesCount_gte?: Maybe<Scalars['Int']>;
  neutralVotesCount?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  neutralVotesCount_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  neutralVotesCount_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  neutralVotesCount_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  neutralVotesCount_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  neutralVotesCount_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  neutralVotesCount_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  neutralVotesCount_gte?: Maybe<Scalars['Int']>;
  CreatedBy?: Maybe<UserWhereInput>;
  Parent?: Maybe<ResourceWhereInput>;
  Childs_every?: Maybe<ResourceWhereInput>;
  Childs_some?: Maybe<ResourceWhereInput>;
  Childs_none?: Maybe<ResourceWhereInput>;
  Image?: Maybe<FileWhereInput>;
  PrismaProject?: Maybe<ProjectWhereInput>;
  CommentTarget?: Maybe<ResourceWhereInput>;
  Comments_every?: Maybe<ResourceWhereInput>;
  Comments_some?: Maybe<ResourceWhereInput>;
  Comments_none?: Maybe<ResourceWhereInput>;
  Votes_every?: Maybe<VoteWhereInput>;
  Votes_some?: Maybe<VoteWhereInput>;
  Votes_none?: Maybe<VoteWhereInput>;
  Tags_every?: Maybe<ResourceTagWhereInput>;
  Tags_some?: Maybe<ResourceTagWhereInput>;
  Tags_none?: Maybe<ResourceTagWhereInput>;
}

export interface ResourceWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['ID']>;
  uri?: Maybe<Scalars['String']>;
}

export interface Route extends Node {
  __typename?: 'Route';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  exact: Scalars['Boolean'];
  component: Scalars['String'];
  Parent?: Maybe<Route>;
  Childs?: Maybe<Array<Route>>;
  CreatedBy?: Maybe<User>;
}


export type RouteParentArgs = {
  where?: Maybe<RouteWhereInput>;
};


export type RouteChildsArgs = {
  where?: Maybe<RouteWhereInput>;
  orderBy?: Maybe<RouteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type RouteCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};

/** A connection to a list of items. */
export interface RouteConnection {
  __typename?: 'RouteConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<RouteEdge>>;
  aggregate: AggregateRoute;
}

export interface RouteCreateInput {
  name?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  exact?: Maybe<Scalars['Boolean']>;
  component: Scalars['String'];
  Parent?: Maybe<RouteCreateOneWithoutChildsInput>;
  Childs?: Maybe<RouteCreateManyWithoutParentInput>;
  CreatedBy?: Maybe<UserCreateOneInput>;
}

export interface RouteCreateManyWithoutParentInput {
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
}

export interface RouteCreateOneWithoutChildsInput {
  connect?: Maybe<RouteWhereUniqueInput>;
}

export interface RouteCreateWithoutChildsInput {
  name?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  exact?: Maybe<Scalars['Boolean']>;
  component: Scalars['String'];
  Parent?: Maybe<RouteCreateOneWithoutChildsInput>;
  CreatedBy?: Maybe<UserCreateOneInput>;
}

export interface RouteCreateWithoutParentInput {
  name?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  exact?: Maybe<Scalars['Boolean']>;
  component: Scalars['String'];
  Childs?: Maybe<RouteCreateManyWithoutParentInput>;
  CreatedBy?: Maybe<UserCreateOneInput>;
}

/** An edge in a connection. */
export interface RouteEdge {
  __typename?: 'RouteEdge';
  /** The item at the end of the edge. */
  node: Route;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum RouteOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  PATH_ASC = 'path_ASC',
  PATH_DESC = 'path_DESC',
  EXACT_ASC = 'exact_ASC',
  EXACT_DESC = 'exact_DESC',
  COMPONENT_ASC = 'component_ASC',
  COMPONENT_DESC = 'component_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface RoutePreviousValues {
  __typename?: 'RoutePreviousValues';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  exact: Scalars['Boolean'];
  component: Scalars['String'];
}

export interface RouteResponse {
  __typename?: 'RouteResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<Route>;
}

export interface RouteSubscriptionPayload {
  __typename?: 'RouteSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Route>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<RoutePreviousValues>;
}

export interface RouteSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RouteSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RouteSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RouteSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<RouteWhereInput>;
}

export interface RouteUpdateInput {
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  exact?: Maybe<Scalars['Boolean']>;
  component?: Maybe<Scalars['String']>;
  Parent?: Maybe<RouteUpdateOneWithoutChildsInput>;
  Childs?: Maybe<RouteUpdateManyWithoutParentInput>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
}

export interface RouteUpdateManyWithoutParentInput {
  connect?: Maybe<Array<RouteWhereUniqueInput>>;
  disconnect?: Maybe<Array<RouteWhereUniqueInput>>;
}

export interface RouteUpdateOneWithoutChildsInput {
  connect?: Maybe<RouteWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface RouteUpdateWithWhereUniqueWithoutParentInput {
  where: RouteWhereUniqueInput;
  data: RouteUpdateWithoutParentDataInput;
}

export interface RouteUpdateWithoutChildsDataInput {
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  exact?: Maybe<Scalars['Boolean']>;
  component?: Maybe<Scalars['String']>;
  Parent?: Maybe<RouteUpdateOneWithoutChildsInput>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
}

export interface RouteUpdateWithoutParentDataInput {
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  exact?: Maybe<Scalars['Boolean']>;
  component?: Maybe<Scalars['String']>;
  Childs?: Maybe<RouteUpdateManyWithoutParentInput>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
}

export interface RouteUpsertWithWhereUniqueWithoutParentInput {
  where: RouteWhereUniqueInput;
}

export interface RouteWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RouteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RouteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RouteWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  path_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  path_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  path_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  path_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  path_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  path_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  path_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  path_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  path_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  path_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  path_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  path_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  path_not_ends_with?: Maybe<Scalars['String']>;
  exact?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  exact_not?: Maybe<Scalars['Boolean']>;
  component?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  component_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  component_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  component_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  component_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  component_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  component_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  component_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  component_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  component_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  component_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  component_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  component_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  component_not_ends_with?: Maybe<Scalars['String']>;
  Parent?: Maybe<RouteWhereInput>;
  Childs_every?: Maybe<RouteWhereInput>;
  Childs_some?: Maybe<RouteWhereInput>;
  Childs_none?: Maybe<RouteWhereInput>;
  CreatedBy?: Maybe<UserWhereInput>;
}

export interface RouteWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
}

export interface SigninDataInput {
  password: Scalars['String'];
}

export interface SingleUploadInput {
  file?: Maybe<Scalars['Upload']>;
  name?: Maybe<Scalars['String']>;
  directory?: Maybe<Scalars['String']>;
}

export interface SmsMessage extends Node {
  __typename?: 'SmsMessage';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  from: Scalars['String'];
  text: Scalars['String'];
  recipients: Array<Scalars['String']>;
  Provider: SmsProvider;
  deletOnSend?: Maybe<Scalars['Boolean']>;
  CreatedBy?: Maybe<User>;
  Status?: Maybe<LetsadsSmsMessageStatus>;
}


export type SmsMessageProviderArgs = {
  where?: Maybe<SmsProviderWhereInput>;
};


export type SmsMessageCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type SmsMessageStatusArgs = {
  where?: Maybe<LetsadsSmsMessageStatusWhereInput>;
};

/** A connection to a list of items. */
export interface SmsMessageConnection {
  __typename?: 'SmsMessageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<SmsMessageEdge>>;
  aggregate: AggregateSmsMessage;
}

export interface SmsMessageCreateInput {
  from: Scalars['String'];
  text: Scalars['String'];
  deletOnSend?: Maybe<Scalars['Boolean']>;
  recipients?: Maybe<SmsMessageCreaterecipientsInput>;
  Provider: SmsProviderCreateOneInput;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Status?: Maybe<LetsadsSmsMessageStatusCreateOneWithoutSmsMessageInput>;
}

export interface SmsMessageCreateOneWithoutStatusInput {
  connect?: Maybe<SmsMessageWhereUniqueInput>;
}

export interface SmsMessageCreateWithoutStatusInput {
  from: Scalars['String'];
  text: Scalars['String'];
  deletOnSend?: Maybe<Scalars['Boolean']>;
  recipients?: Maybe<SmsMessageCreaterecipientsInput>;
  Provider: SmsProviderCreateOneInput;
  CreatedBy?: Maybe<UserCreateOneInput>;
}

export interface SmsMessageCreaterecipientsInput {
  set?: Maybe<Array<Scalars['String']>>;
}

/** An edge in a connection. */
export interface SmsMessageEdge {
  __typename?: 'SmsMessageEdge';
  /** The item at the end of the edge. */
  node: SmsMessage;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum SmsMessageOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  FROM_ASC = 'from_ASC',
  FROM_DESC = 'from_DESC',
  TEXT_ASC = 'text_ASC',
  TEXT_DESC = 'text_DESC',
  DELETONSEND_ASC = 'deletOnSend_ASC',
  DELETONSEND_DESC = 'deletOnSend_DESC'
}

export interface SmsMessagePreviousValues {
  __typename?: 'SmsMessagePreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  from: Scalars['String'];
  text: Scalars['String'];
  recipients: Array<Scalars['String']>;
  deletOnSend?: Maybe<Scalars['Boolean']>;
}

export interface SmsMessageResponse {
  __typename?: 'SmsMessageResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<SmsMessage>;
}

export interface SmsMessageSubscriptionPayload {
  __typename?: 'SmsMessageSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<SmsMessage>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<SmsMessagePreviousValues>;
}

export interface SmsMessageSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SmsMessageSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SmsMessageSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SmsMessageSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<SmsMessageWhereInput>;
}

export interface SmsMessageUpdateInput {
  from?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  deletOnSend?: Maybe<Scalars['Boolean']>;
  recipients?: Maybe<SmsMessageUpdaterecipientsInput>;
  Provider?: Maybe<SmsProviderUpdateOneInput>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Status?: Maybe<LetsadsSmsMessageStatusUpdateOneWithoutSmsMessageInput>;
}

export interface SmsMessageUpdateOneWithoutStatusInput {
  connect?: Maybe<SmsMessageWhereUniqueInput>;
}

export interface SmsMessageUpdateWithoutStatusDataInput {
  from?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  deletOnSend?: Maybe<Scalars['Boolean']>;
  recipients?: Maybe<SmsMessageUpdaterecipientsInput>;
  Provider?: Maybe<SmsProviderUpdateOneInput>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
}

export interface SmsMessageUpdaterecipientsInput {
  set?: Maybe<Array<Scalars['String']>>;
}

export interface SmsMessageWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SmsMessageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SmsMessageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SmsMessageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  from_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  from_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  from_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  from_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  from_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  from_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  from_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  from_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  from_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  from_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  from_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  from_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  from_not_ends_with?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  text_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  text_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  text_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  text_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  text_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  text_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  text_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  text_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  text_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  text_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  text_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  text_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  text_not_ends_with?: Maybe<Scalars['String']>;
  deletOnSend?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  deletOnSend_not?: Maybe<Scalars['Boolean']>;
  Provider?: Maybe<SmsProviderWhereInput>;
  CreatedBy?: Maybe<UserWhereInput>;
  Status?: Maybe<LetsadsSmsMessageStatusWhereInput>;
}

export interface SmsMessageWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface SmsProvider extends Node {
  __typename?: 'SmsProvider';
  id: Scalars['ID'];
  name: Scalars['String'];
  credentials?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<User>;
}


export type SmsProviderCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};

/** A connection to a list of items. */
export interface SmsProviderConnection {
  __typename?: 'SmsProviderConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<SmsProviderEdge>>;
  aggregate: AggregateSmsProvider;
}

export interface SmsProviderCreateInput {
  name: Scalars['String'];
  credentials?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
}

export interface SmsProviderCreateOneInput {
  connect?: Maybe<SmsProviderWhereUniqueInput>;
}

/** An edge in a connection. */
export interface SmsProviderEdge {
  __typename?: 'SmsProviderEdge';
  /** The item at the end of the edge. */
  node: SmsProvider;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum SmsProviderOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  CREDENTIALS_ASC = 'credentials_ASC',
  CREDENTIALS_DESC = 'credentials_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface SmsProviderPreviousValues {
  __typename?: 'SmsProviderPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
  credentials?: Maybe<Scalars['Json']>;
}

export interface SmsProviderResponse {
  __typename?: 'SmsProviderResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<SmsProvider>;
}

export interface SmsProviderSubscriptionPayload {
  __typename?: 'SmsProviderSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<SmsProvider>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<SmsProviderPreviousValues>;
}

export interface SmsProviderSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SmsProviderSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SmsProviderSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SmsProviderSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<SmsProviderWhereInput>;
}

export interface SmsProviderUpdateDataInput {
  name?: Maybe<Scalars['String']>;
  credentials?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
}

export interface SmsProviderUpdateInput {
  name?: Maybe<Scalars['String']>;
  credentials?: Maybe<Scalars['Json']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
}

export interface SmsProviderUpdateOneInput {
  connect?: Maybe<SmsProviderWhereUniqueInput>;
}

export interface SmsProviderWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SmsProviderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SmsProviderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SmsProviderWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  CreatedBy?: Maybe<UserWhereInput>;
}

export interface SmsProviderWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
}

export interface Subscription {
  __typename?: 'Subscription';
  route?: Maybe<RouteSubscriptionPayload>;
  ethTransaction?: Maybe<EthTransactionSubscriptionPayload>;
  chatMessageReaded?: Maybe<ChatMessageReadedSubscriptionPayload>;
  chatRoom?: Maybe<ChatRoomSubscriptionPayload>;
  notice?: Maybe<NoticeSubscriptionPayload>;
  game?: Maybe<GameSubscriptionPayload>;
  gameResult?: Maybe<GameResultSubscriptionPayload>;
  tournament?: Maybe<TournamentSubscriptionPayload>;
  tournamentGroup?: Maybe<TournamentGroupSubscriptionPayload>;
  tourney?: Maybe<TourneySubscriptionPayload>;
  callRequest?: Maybe<CallRequestSubscriptionPayload>;
  user?: Maybe<UserSubscriptionPayload>;
  chatMessage?: Maybe<ChatMessageSubscriptionPayload>;
}


export type SubscriptionRouteArgs = {
  where?: Maybe<RouteSubscriptionWhereInput>;
};


export type SubscriptionEthTransactionArgs = {
  where?: Maybe<EthTransactionSubscriptionWhereInput>;
};


export type SubscriptionChatMessageReadedArgs = {
  where?: Maybe<ChatMessageReadedSubscriptionWhereInput>;
};


export type SubscriptionChatRoomArgs = {
  where?: Maybe<ChatRoomSubscriptionWhereInput>;
};


export type SubscriptionNoticeArgs = {
  where?: Maybe<NoticeSubscriptionWhereInput>;
};


export type SubscriptionGameArgs = {
  where?: Maybe<GameSubscriptionWhereInput>;
};


export type SubscriptionGameResultArgs = {
  where?: Maybe<GameResultSubscriptionWhereInput>;
};


export type SubscriptionTournamentArgs = {
  where?: Maybe<TournamentSubscriptionWhereInput>;
};


export type SubscriptionTournamentGroupArgs = {
  where?: Maybe<TournamentGroupSubscriptionWhereInput>;
};


export type SubscriptionTourneyArgs = {
  where?: Maybe<TourneySubscriptionWhereInput>;
};


export type SubscriptionCallRequestArgs = {
  where?: Maybe<CallRequestSubscriptionWhereInput>;
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>;
};


export type SubscriptionChatMessageArgs = {
  where?: Maybe<ChatMessageSubscriptionWhereInput>;
};

export interface Tag extends Node {
  __typename?: 'Tag';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  status: TagStatus;
  Resources?: Maybe<Array<ResourceTag>>;
  CreatedBy: User;
}


export type TagResourcesArgs = {
  where?: Maybe<ResourceTagWhereInput>;
  orderBy?: Maybe<ResourceTagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TagCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};

/** A connection to a list of items. */
export interface TagConnection {
  __typename?: 'TagConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TagEdge>>;
  aggregate: AggregateTag;
}

export interface TagCreateInput {
  name: Scalars['String'];
  status?: Maybe<TagStatus>;
  Resources?: Maybe<ResourceTagCreateManyWithoutTagInput>;
  CreatedBy: UserCreateOneWithoutTagsInput;
}

export interface TagCreateManyWithoutCreatedByInput {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
}

export interface TagCreateOneWithoutResourcesInput {
  connect?: Maybe<TagWhereUniqueInput>;
}

export interface TagCreateWithoutCreatedByInput {
  name: Scalars['String'];
  status?: Maybe<TagStatus>;
  Resources?: Maybe<ResourceTagCreateManyWithoutTagInput>;
}

export interface TagCreateWithoutResourcesInput {
  name: Scalars['String'];
  status?: Maybe<TagStatus>;
  CreatedBy: UserCreateOneWithoutTagsInput;
}

/** An edge in a connection. */
export interface TagEdge {
  __typename?: 'TagEdge';
  /** The item at the end of the edge. */
  node: Tag;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum TagOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  STATUS_ASC = 'status_ASC',
  STATUS_DESC = 'status_DESC'
}

export interface TagPreviousValues {
  __typename?: 'TagPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  status: TagStatus;
}

export enum TagStatus {
  ACTIVE = 'Active',
  MODERATED = 'Moderated',
  BLOCKED = 'Blocked'
}

export interface TagSubscriptionPayload {
  __typename?: 'TagSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Tag>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TagPreviousValues>;
}

export interface TagSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TagSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TagSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TagSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TagWhereInput>;
}

export interface TagUpdateInput {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<TagStatus>;
  Resources?: Maybe<ResourceTagUpdateManyWithoutTagInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutTagsInput>;
}

export interface TagUpdateManyWithoutCreatedByInput {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
}

export interface TagUpdateOneWithoutResourcesInput {
  connect?: Maybe<TagWhereUniqueInput>;
}

export interface TagUpdateWithWhereUniqueWithoutCreatedByInput {
  where: TagWhereUniqueInput;
  data: TagUpdateWithoutCreatedByDataInput;
}

export interface TagUpdateWithoutCreatedByDataInput {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<TagStatus>;
  Resources?: Maybe<ResourceTagUpdateManyWithoutTagInput>;
}

export interface TagUpdateWithoutResourcesDataInput {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<TagStatus>;
  CreatedBy?: Maybe<UserUpdateOneWithoutTagsInput>;
}

export interface TagUpsertWithWhereUniqueWithoutCreatedByInput {
  where: TagWhereUniqueInput;
}

export interface TagWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TagWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TagWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  status?: Maybe<TagStatus>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<TagStatus>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<TagStatus>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<TagStatus>>;
  Resources_every?: Maybe<ResourceTagWhereInput>;
  Resources_some?: Maybe<ResourceTagWhereInput>;
  Resources_none?: Maybe<ResourceTagWhereInput>;
  CreatedBy?: Maybe<UserWhereInput>;
}

export interface TagWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
}

export interface Tarif extends Node {
  __typename?: 'Tarif';
  id: Scalars['ID'];
  name: Scalars['String'];
  active?: Maybe<Scalars['Boolean']>;
  maxPriceItems?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  UserTarifs?: Maybe<Array<UserTarif>>;
  allowIcon?: Maybe<Scalars['Boolean']>;
  allowBanner?: Maybe<Scalars['Boolean']>;
}


export type TarifUserTarifsArgs = {
  where?: Maybe<UserTarifWhereInput>;
  orderBy?: Maybe<UserTarifOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface TarifConnection {
  __typename?: 'TarifConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TarifEdge>>;
  aggregate: AggregateTarif;
}

export interface TarifCreateInput {
  name: Scalars['String'];
  active?: Maybe<Scalars['Boolean']>;
  maxPriceItems?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  allowIcon?: Maybe<Scalars['Boolean']>;
  allowBanner?: Maybe<Scalars['Boolean']>;
  UserTarifs?: Maybe<UserTarifCreateManyWithoutTarifInput>;
}

export interface TarifCreateOneInput {
  connect?: Maybe<TarifWhereUniqueInput>;
}

export interface TarifCreateOneWithoutUserTarifsInput {
  connect?: Maybe<TarifWhereUniqueInput>;
}

export interface TarifCreateWithoutUserTarifsInput {
  name: Scalars['String'];
  active?: Maybe<Scalars['Boolean']>;
  maxPriceItems?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  allowIcon?: Maybe<Scalars['Boolean']>;
  allowBanner?: Maybe<Scalars['Boolean']>;
}

/** An edge in a connection. */
export interface TarifEdge {
  __typename?: 'TarifEdge';
  /** The item at the end of the edge. */
  node: Tarif;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum TarifOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  ACTIVE_ASC = 'active_ASC',
  ACTIVE_DESC = 'active_DESC',
  MAXPRICEITEMS_ASC = 'maxPriceItems_ASC',
  MAXPRICEITEMS_DESC = 'maxPriceItems_DESC',
  PRICE_ASC = 'price_ASC',
  PRICE_DESC = 'price_DESC',
  ALLOWICON_ASC = 'allowIcon_ASC',
  ALLOWICON_DESC = 'allowIcon_DESC',
  ALLOWBANNER_ASC = 'allowBanner_ASC',
  ALLOWBANNER_DESC = 'allowBanner_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface TarifPreviousValues {
  __typename?: 'TarifPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
  active?: Maybe<Scalars['Boolean']>;
  maxPriceItems?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  allowIcon?: Maybe<Scalars['Boolean']>;
  allowBanner?: Maybe<Scalars['Boolean']>;
}

export interface TarifRequest extends Node {
  __typename?: 'TarifRequest';
  id: Scalars['ID'];
  User: User;
  Tarif: Tarif;
  createdAt: Scalars['DateTime'];
  executed: Scalars['Boolean'];
}


export type TarifRequestUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type TarifRequestTarifArgs = {
  where?: Maybe<TarifWhereInput>;
};

/** A connection to a list of items. */
export interface TarifRequestConnection {
  __typename?: 'TarifRequestConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TarifRequestEdge>>;
  aggregate: AggregateTarifRequest;
}

export interface TarifRequestCreateInput {
  executed?: Maybe<Scalars['Boolean']>;
  User: UserCreateOneInput;
  Tarif: TarifCreateOneInput;
}

/** An edge in a connection. */
export interface TarifRequestEdge {
  __typename?: 'TarifRequestEdge';
  /** The item at the end of the edge. */
  node: TarifRequest;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum TarifRequestOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  EXECUTED_ASC = 'executed_ASC',
  EXECUTED_DESC = 'executed_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

export interface TarifRequestPreviousValues {
  __typename?: 'TarifRequestPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  executed: Scalars['Boolean'];
}

export interface TarifRequestSubscriptionPayload {
  __typename?: 'TarifRequestSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TarifRequest>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TarifRequestPreviousValues>;
}

export interface TarifRequestSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TarifRequestSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TarifRequestSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TarifRequestSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TarifRequestWhereInput>;
}

export interface TarifRequestUpdateInput {
  executed?: Maybe<Scalars['Boolean']>;
  User?: Maybe<UserUpdateOneInput>;
  Tarif?: Maybe<TarifUpdateOneInput>;
}

export interface TarifRequestWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TarifRequestWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TarifRequestWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TarifRequestWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  executed?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  executed_not?: Maybe<Scalars['Boolean']>;
  User?: Maybe<UserWhereInput>;
  Tarif?: Maybe<TarifWhereInput>;
}

export interface TarifRequestWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface TarifSubscriptionPayload {
  __typename?: 'TarifSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Tarif>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TarifPreviousValues>;
}

export interface TarifSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TarifSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TarifSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TarifSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TarifWhereInput>;
}

export interface TarifUpdateDataInput {
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  maxPriceItems?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  allowIcon?: Maybe<Scalars['Boolean']>;
  allowBanner?: Maybe<Scalars['Boolean']>;
  UserTarifs?: Maybe<UserTarifUpdateManyWithoutTarifInput>;
}

export interface TarifUpdateInput {
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  maxPriceItems?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  allowIcon?: Maybe<Scalars['Boolean']>;
  allowBanner?: Maybe<Scalars['Boolean']>;
  UserTarifs?: Maybe<UserTarifUpdateManyWithoutTarifInput>;
}

export interface TarifUpdateOneInput {
  connect?: Maybe<TarifWhereUniqueInput>;
}

export interface TarifUpdateOneWithoutUserTarifsInput {
  connect?: Maybe<TarifWhereUniqueInput>;
}

export interface TarifUpdateWithoutUserTarifsDataInput {
  name?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  maxPriceItems?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  allowIcon?: Maybe<Scalars['Boolean']>;
  allowBanner?: Maybe<Scalars['Boolean']>;
}

export interface TarifWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TarifWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TarifWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TarifWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  active_not?: Maybe<Scalars['Boolean']>;
  maxPriceItems?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  maxPriceItems_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  maxPriceItems_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  maxPriceItems_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  maxPriceItems_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  maxPriceItems_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  maxPriceItems_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  maxPriceItems_gte?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  price_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  price_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  price_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  price_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  price_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  price_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  price_gte?: Maybe<Scalars['Float']>;
  allowIcon?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  allowIcon_not?: Maybe<Scalars['Boolean']>;
  allowBanner?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  allowBanner_not?: Maybe<Scalars['Boolean']>;
  UserTarifs_every?: Maybe<UserTarifWhereInput>;
  UserTarifs_some?: Maybe<UserTarifWhereInput>;
  UserTarifs_none?: Maybe<UserTarifWhereInput>;
}

export interface TarifWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface Team extends Node {
  __typename?: 'Team';
  id: Scalars['ID'];
}

/** A connection to a list of items. */
export interface TeamConnection {
  __typename?: 'TeamConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TeamEdge>>;
  aggregate: AggregateTeam;
}

export interface TeamCreateManyInput {
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
}

export interface TeamCreateOneInput {
  connect?: Maybe<TeamWhereUniqueInput>;
}

/** An edge in a connection. */
export interface TeamEdge {
  __typename?: 'TeamEdge';
  /** The item at the end of the edge. */
  node: Team;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum TeamOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface TeamPreviousValues {
  __typename?: 'TeamPreviousValues';
  id: Scalars['ID'];
}

export interface TeamSubscriptionPayload {
  __typename?: 'TeamSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Team>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TeamPreviousValues>;
}

export interface TeamSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TeamSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TeamSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TeamSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TeamWhereInput>;
}

export interface TeamUpdateManyInput {
  connect?: Maybe<Array<TeamWhereUniqueInput>>;
  disconnect?: Maybe<Array<TeamWhereUniqueInput>>;
}

export interface TeamUpdateOneInput {
  connect?: Maybe<TeamWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface TeamWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TeamWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TeamWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TeamWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
}

export interface TeamWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface Topic extends Node {
  __typename?: 'Topic';
  id: Scalars['ID'];
  topic_id?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  created_at: Scalars['DateTime'];
  created_by: User;
  name: Scalars['String'];
  editor_content?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  type_id: Scalars['Int'];
  published?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  uri: Scalars['String'];
}


export type TopicCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};

/** A connection to a list of items. */
export interface TopicConnection {
  __typename?: 'TopicConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TopicEdge>>;
  aggregate: AggregateTopic;
}

export interface TopicCreateInput {
  name: Scalars['String'];
  editor_content?: Maybe<Scalars['Json']>;
  published?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
}

export interface TopicCreateManyWithoutCreatedByInput {
  connect?: Maybe<Array<TopicWhereUniqueInput>>;
}

export interface TopicCreateWithoutCreatedByInput {
  topic_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['DateTime'];
  name: Scalars['String'];
  editor_content?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  type_id: Scalars['Int'];
  published?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
}

/** An edge in a connection. */
export interface TopicEdge {
  __typename?: 'TopicEdge';
  /** The item at the end of the edge. */
  node: Topic;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum TopicOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  TOPIC_ID_ASC = 'topic_id_ASC',
  TOPIC_ID_DESC = 'topic_id_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  CREATED_AT_ASC = 'created_at_ASC',
  CREATED_AT_DESC = 'created_at_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  EDITOR_CONTENT_ASC = 'editor_content_ASC',
  EDITOR_CONTENT_DESC = 'editor_content_DESC',
  URL_NAME_ASC = 'url_name_ASC',
  URL_NAME_DESC = 'url_name_DESC',
  TYPE_ID_ASC = 'type_id_ASC',
  TYPE_ID_DESC = 'type_id_DESC',
  PUBLISHED_ASC = 'published_ASC',
  PUBLISHED_DESC = 'published_DESC',
  DESCRIPTION_ASC = 'description_ASC',
  DESCRIPTION_DESC = 'description_DESC'
}

export interface TopicPreviousValues {
  __typename?: 'TopicPreviousValues';
  id: Scalars['ID'];
  topic_id?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  created_at: Scalars['DateTime'];
  name: Scalars['String'];
  editor_content?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  type_id: Scalars['Int'];
  published?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
}

export interface TopicResponse {
  __typename?: 'TopicResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<Topic>;
}

export interface TopicSubscriptionPayload {
  __typename?: 'TopicSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Topic>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TopicPreviousValues>;
}

export interface TopicSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TopicSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TopicSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TopicSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TopicWhereInput>;
}

export interface TopicUpdateInput {
  name?: Maybe<Scalars['String']>;
  editor_content?: Maybe<Scalars['Json']>;
  published?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
}

export interface TopicUpdateManyWithoutCreatedByInput {
  connect?: Maybe<Array<TopicWhereUniqueInput>>;
  disconnect?: Maybe<Array<TopicWhereUniqueInput>>;
}

export interface TopicUpdateWithWhereUniqueWithoutCreatedByInput {
  where: TopicWhereUniqueInput;
  data: TopicUpdateWithoutCreatedByDataInput;
}

export interface TopicUpdateWithoutCreatedByDataInput {
  topic_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  editor_content?: Maybe<Scalars['Json']>;
  url_name?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
}

export interface TopicUpsertWithWhereUniqueWithoutCreatedByInput {
  where: TopicWhereUniqueInput;
}

export interface TopicWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TopicWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TopicWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TopicWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  topic_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  topic_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  topic_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  topic_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  topic_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  topic_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  topic_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  topic_id_gte?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  created_at?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  created_at_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  created_at_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  created_at_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  created_at_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  created_at_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  created_at_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  created_at_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  url_name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  url_name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  url_name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  url_name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  url_name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  url_name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  url_name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  url_name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  url_name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  url_name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  url_name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  url_name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  url_name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  url_name_not_ends_with?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  type_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  type_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  type_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  type_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  type_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  type_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  type_id_gte?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  published_not?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>;
  created_by?: Maybe<UserWhereInput>;
}

export interface TopicWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  topic_id?: Maybe<Scalars['Int']>;
  url_name?: Maybe<Scalars['String']>;
}

export interface Tournament extends Node {
  __typename?: 'Tournament';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<User>;
  Tourneys?: Maybe<Array<Tourney>>;
  Group?: Maybe<TournamentGroup>;
}


export type TournamentCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type TournamentTourneysArgs = {
  where?: Maybe<TourneyWhereInput>;
  orderBy?: Maybe<TourneyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TournamentGroupArgs = {
  where?: Maybe<TournamentGroupWhereInput>;
};

/** A connection to a list of items. */
export interface TournamentConnection {
  __typename?: 'TournamentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TournamentEdge>>;
  aggregate: AggregateTournament;
}

export interface TournamentCreateInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Tourneys?: Maybe<TourneyCreateManyWithoutTournamentInput>;
  Group?: Maybe<TournamentGroupCreateOneWithoutTournamentsInput>;
}

export interface TournamentCreateManyWithoutGroupInput {
  connect?: Maybe<Array<TournamentWhereUniqueInput>>;
}

export interface TournamentCreateOneWithoutTourneysInput {
  connect?: Maybe<TournamentWhereUniqueInput>;
}

export interface TournamentCreateWithoutGroupInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Tourneys?: Maybe<TourneyCreateManyWithoutTournamentInput>;
}

export interface TournamentCreateWithoutTourneysInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Group?: Maybe<TournamentGroupCreateOneWithoutTournamentsInput>;
}

/** An edge in a connection. */
export interface TournamentEdge {
  __typename?: 'TournamentEdge';
  /** The item at the end of the edge. */
  node: Tournament;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export interface TournamentGroup extends Node {
  __typename?: 'TournamentGroup';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<User>;
  Tournaments?: Maybe<Array<Tournament>>;
}


export type TournamentGroupCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type TournamentGroupTournamentsArgs = {
  where?: Maybe<TournamentWhereInput>;
  orderBy?: Maybe<TournamentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface TournamentGroupConnection {
  __typename?: 'TournamentGroupConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TournamentGroupEdge>>;
  aggregate: AggregateTournamentGroup;
}

export interface TournamentGroupCreateInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Tournaments?: Maybe<TournamentCreateManyWithoutGroupInput>;
}

export interface TournamentGroupCreateOneWithoutTournamentsInput {
  connect?: Maybe<TournamentGroupWhereUniqueInput>;
}

export interface TournamentGroupCreateWithoutTournamentsInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
}

/** An edge in a connection. */
export interface TournamentGroupEdge {
  __typename?: 'TournamentGroupEdge';
  /** The item at the end of the edge. */
  node: TournamentGroup;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum TournamentGroupOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  CODE_ASC = 'code_ASC',
  CODE_DESC = 'code_DESC'
}

export interface TournamentGroupPreviousValues {
  __typename?: 'TournamentGroupPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
}

export interface TournamentGroupResponse {
  __typename?: 'TournamentGroupResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  errors: Array<Error>;
  data?: Maybe<TournamentGroup>;
}

export interface TournamentGroupSubscriptionPayload {
  __typename?: 'TournamentGroupSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<TournamentGroup>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TournamentGroupPreviousValues>;
}

export interface TournamentGroupSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TournamentGroupSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TournamentGroupSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TournamentGroupSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TournamentGroupWhereInput>;
}

export interface TournamentGroupUpdateInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Tournaments?: Maybe<TournamentUpdateManyWithoutGroupInput>;
}

export interface TournamentGroupUpdateOneWithoutTournamentsInput {
  connect?: Maybe<TournamentGroupWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface TournamentGroupUpdateWithoutTournamentsDataInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
}

export interface TournamentGroupWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TournamentGroupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TournamentGroupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TournamentGroupWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  code_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  code_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  code_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  code_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  code_not_ends_with?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<UserWhereInput>;
  Tournaments_every?: Maybe<TournamentWhereInput>;
  Tournaments_some?: Maybe<TournamentWhereInput>;
  Tournaments_none?: Maybe<TournamentWhereInput>;
}

export interface TournamentGroupWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['ID']>;
}

export enum TournamentOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  CODE_ASC = 'code_ASC',
  CODE_DESC = 'code_DESC'
}

export interface TournamentPreviousValues {
  __typename?: 'TournamentPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
}

export interface TournamentResponse {
  __typename?: 'TournamentResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  errors: Array<Error>;
  data?: Maybe<Tournament>;
}

export interface TournamentSubscriptionPayload {
  __typename?: 'TournamentSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Tournament>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TournamentPreviousValues>;
}

export interface TournamentSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TournamentSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TournamentSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TournamentSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TournamentWhereInput>;
}

export interface TournamentUpdateInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Tourneys?: Maybe<TourneyUpdateManyWithoutTournamentInput>;
  Group?: Maybe<TournamentGroupUpdateOneWithoutTournamentsInput>;
}

export interface TournamentUpdateManyWithoutGroupInput {
  connect?: Maybe<Array<TournamentWhereUniqueInput>>;
  disconnect?: Maybe<Array<TournamentWhereUniqueInput>>;
}

export interface TournamentUpdateOneWithoutTourneysInput {
  connect?: Maybe<TournamentWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface TournamentUpdateWithWhereUniqueWithoutGroupInput {
  where: TournamentWhereUniqueInput;
  data: TournamentUpdateWithoutGroupDataInput;
}

export interface TournamentUpdateWithoutGroupDataInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Tourneys?: Maybe<TourneyUpdateManyWithoutTournamentInput>;
}

export interface TournamentUpdateWithoutTourneysDataInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Group?: Maybe<TournamentGroupUpdateOneWithoutTournamentsInput>;
}

export interface TournamentUpsertWithWhereUniqueWithoutGroupInput {
  where: TournamentWhereUniqueInput;
}

export interface TournamentWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TournamentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TournamentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TournamentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  code_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  code_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  code_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  code_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  code_not_ends_with?: Maybe<Scalars['ID']>;
  CreatedBy?: Maybe<UserWhereInput>;
  Tourneys_every?: Maybe<TourneyWhereInput>;
  Tourneys_some?: Maybe<TourneyWhereInput>;
  Tourneys_none?: Maybe<TourneyWhereInput>;
  Group?: Maybe<TournamentGroupWhereInput>;
}

export interface TournamentWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['ID']>;
}

export interface Tourney extends Node {
  __typename?: 'Tourney';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTime']>;
  date_till?: Maybe<Scalars['DateTime']>;
  CreatedBy?: Maybe<User>;
  Tournament?: Maybe<Tournament>;
  Users?: Maybe<Array<User>>;
  Games?: Maybe<Array<Game>>;
}


export type TourneyCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type TourneyTournamentArgs = {
  where?: Maybe<TournamentWhereInput>;
};


export type TourneyUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TourneyGamesArgs = {
  where?: Maybe<GameWhereInput>;
  orderBy?: Maybe<GameOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface TourneyConnection {
  __typename?: 'TourneyConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TourneyEdge>>;
  aggregate: AggregateTourney;
}

export interface TourneyCreateInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTime']>;
  date_till?: Maybe<Scalars['DateTime']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Tournament?: Maybe<TournamentCreateOneWithoutTourneysInput>;
  Users?: Maybe<UserCreateManyInput>;
  Games?: Maybe<GameCreateManyWithoutTourneyInput>;
}

export interface TourneyCreateManyWithoutTournamentInput {
  connect?: Maybe<Array<TourneyWhereUniqueInput>>;
}

export interface TourneyCreateOneWithoutGamesInput {
  connect?: Maybe<TourneyWhereUniqueInput>;
}

export interface TourneyCreateWithoutGamesInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTime']>;
  date_till?: Maybe<Scalars['DateTime']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Tournament?: Maybe<TournamentCreateOneWithoutTourneysInput>;
  Users?: Maybe<UserCreateManyInput>;
}

export interface TourneyCreateWithoutTournamentInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTime']>;
  date_till?: Maybe<Scalars['DateTime']>;
  CreatedBy?: Maybe<UserCreateOneInput>;
  Users?: Maybe<UserCreateManyInput>;
  Games?: Maybe<GameCreateManyWithoutTourneyInput>;
}

/** An edge in a connection. */
export interface TourneyEdge {
  __typename?: 'TourneyEdge';
  /** The item at the end of the edge. */
  node: Tourney;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum TourneyOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  CODE_ASC = 'code_ASC',
  CODE_DESC = 'code_DESC',
  DATE_ASC = 'date_ASC',
  DATE_DESC = 'date_DESC',
  DATE_TILL_ASC = 'date_till_ASC',
  DATE_TILL_DESC = 'date_till_DESC'
}

export interface TourneyPreviousValues {
  __typename?: 'TourneyPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTime']>;
  date_till?: Maybe<Scalars['DateTime']>;
}

export interface TourneyResponse {
  __typename?: 'TourneyResponse';
  success: Scalars['Boolean'];
  message: Scalars['String'];
  errors: Array<Error>;
  data?: Maybe<Tourney>;
}

export interface TourneySubscriptionPayload {
  __typename?: 'TourneySubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Tourney>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TourneyPreviousValues>;
}

export interface TourneySubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TourneySubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TourneySubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TourneySubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TourneyWhereInput>;
}

export interface TourneyUpdateInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTime']>;
  date_till?: Maybe<Scalars['DateTime']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Tournament?: Maybe<TournamentUpdateOneWithoutTourneysInput>;
  Users?: Maybe<UserUpdateManyInput>;
  Games?: Maybe<GameUpdateManyWithoutTourneyInput>;
}

export interface TourneyUpdateManyWithoutTournamentInput {
  connect?: Maybe<Array<TourneyWhereUniqueInput>>;
  disconnect?: Maybe<Array<TourneyWhereUniqueInput>>;
}

export interface TourneyUpdateOneWithoutGamesInput {
  connect?: Maybe<TourneyWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface TourneyUpdateWithWhereUniqueWithoutTournamentInput {
  where: TourneyWhereUniqueInput;
  data: TourneyUpdateWithoutTournamentDataInput;
}

export interface TourneyUpdateWithoutGamesDataInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTime']>;
  date_till?: Maybe<Scalars['DateTime']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Tournament?: Maybe<TournamentUpdateOneWithoutTourneysInput>;
  Users?: Maybe<UserUpdateManyInput>;
}

export interface TourneyUpdateWithoutTournamentDataInput {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTime']>;
  date_till?: Maybe<Scalars['DateTime']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
  Users?: Maybe<UserUpdateManyInput>;
  Games?: Maybe<GameUpdateManyWithoutTourneyInput>;
}

export interface TourneyUpsertWithWhereUniqueWithoutTournamentInput {
  where: TourneyWhereUniqueInput;
}

export interface TourneyWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TourneyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TourneyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TourneyWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  code_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  code_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  code_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  code_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  code_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  code_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  code_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  code_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  code_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  code_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  code_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  code_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  code_not_ends_with?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  date_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  date_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  date_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  date_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  date_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  date_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  date_gte?: Maybe<Scalars['DateTime']>;
  date_till?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  date_till_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  date_till_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  date_till_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  date_till_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  date_till_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  date_till_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  date_till_gte?: Maybe<Scalars['DateTime']>;
  CreatedBy?: Maybe<UserWhereInput>;
  Tournament?: Maybe<TournamentWhereInput>;
  Users_every?: Maybe<UserWhereInput>;
  Users_some?: Maybe<UserWhereInput>;
  Users_none?: Maybe<UserWhereInput>;
  Games_every?: Maybe<GameWhereInput>;
  Games_some?: Maybe<GameWhereInput>;
  Games_none?: Maybe<GameWhereInput>;
}

export interface TourneyWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['ID']>;
}

export interface Transaction extends Node {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  amount: Scalars['Float'];
  Account: Account;
  CreatedBy: User;
}


export type TransactionAccountArgs = {
  where?: Maybe<AccountWhereInput>;
};


export type TransactionCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};

/** A connection to a list of items. */
export interface TransactionConnection {
  __typename?: 'TransactionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<TransactionEdge>>;
  aggregate: AggregateTransaction;
}

export interface TransactionCreateInput {
  amount: Scalars['Float'];
  Account: AccountCreateOneWithoutTransactionsInput;
  CreatedBy: UserCreateOneInput;
}

export interface TransactionCreateManyWithoutAccountInput {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
}

export interface TransactionCreateWithoutAccountInput {
  amount: Scalars['Float'];
  CreatedBy: UserCreateOneInput;
}

/** An edge in a connection. */
export interface TransactionEdge {
  __typename?: 'TransactionEdge';
  /** The item at the end of the edge. */
  node: Transaction;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum TransactionOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  AMOUNT_ASC = 'amount_ASC',
  AMOUNT_DESC = 'amount_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

export interface TransactionPreviousValues {
  __typename?: 'TransactionPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  amount: Scalars['Float'];
}

export interface TransactionSubscriptionPayload {
  __typename?: 'TransactionSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Transaction>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<TransactionPreviousValues>;
}

export interface TransactionSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TransactionSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TransactionSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TransactionSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<TransactionWhereInput>;
}

export interface TransactionUpdateInput {
  amount?: Maybe<Scalars['Float']>;
  Account?: Maybe<AccountUpdateOneWithoutTransactionsInput>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
}

export interface TransactionUpdateManyWithoutAccountInput {
  connect?: Maybe<Array<TransactionWhereUniqueInput>>;
  disconnect?: Maybe<Array<TransactionWhereUniqueInput>>;
}

export interface TransactionUpdateWithWhereUniqueWithoutAccountInput {
  where: TransactionWhereUniqueInput;
  data: TransactionUpdateWithoutAccountDataInput;
}

export interface TransactionUpdateWithoutAccountDataInput {
  amount?: Maybe<Scalars['Float']>;
  CreatedBy?: Maybe<UserUpdateOneInput>;
}

export interface TransactionUpsertWithWhereUniqueWithoutAccountInput {
  where: TransactionWhereUniqueInput;
}

export interface TransactionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TransactionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TransactionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TransactionWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  amount_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  amount_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  amount_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  amount_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<Scalars['Float']>;
  Account?: Maybe<AccountWhereInput>;
  CreatedBy?: Maybe<UserWhereInput>;
}

export interface TransactionWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}


export interface User extends Node {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<Array<UserGroup>>;
  CreatedUsers?: Maybe<Array<User>>;
  CreatedBy?: Maybe<User>;
  LogedIns?: Maybe<Array<LogedIn>>;
  Files?: Maybe<Array<File>>;
  hidden?: Maybe<Scalars['Boolean']>;
  EthContractSourcesCreated?: Maybe<Array<EthContractSource>>;
  EthAccounts?: Maybe<Array<EthAccount>>;
  Resources?: Maybe<Array<Resource>>;
  Rooms?: Maybe<Array<ChatRoom>>;
  CreatedRooms?: Maybe<Array<ChatRoom>>;
  Messages?: Maybe<Array<ChatMessage>>;
  ReadedMessages?: Maybe<Array<ChatMessageReaded>>;
  Notices?: Maybe<Array<Notice>>;
  Votes?: Maybe<Array<Vote>>;
  NotificationTypes?: Maybe<Array<NotificationType>>;
  NotificationTypesCreated?: Maybe<Array<NotificationType>>;
  Tags?: Maybe<Array<Tag>>;
  ResourceTags?: Maybe<Array<ResourceTag>>;
  PrismaProjects?: Maybe<Array<Project>>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  topics?: Maybe<Array<Topic>>;
  comments?: Maybe<Array<Comment>>;
  Tarifs?: Maybe<Array<UserTarif>>;
  Account?: Maybe<Account>;
  Places?: Maybe<Array<Place>>;
  sudo?: Maybe<Scalars['Boolean']>;
  hasEmail: Scalars['Boolean'];
  hasPhone: Scalars['Boolean'];
}


export type UserGroupsArgs = {
  where?: Maybe<UserGroupWhereInput>;
  orderBy?: Maybe<UserGroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserCreatedUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserCreatedByArgs = {
  where?: Maybe<UserWhereInput>;
};


export type UserLogedInsArgs = {
  where?: Maybe<LogedInWhereInput>;
  orderBy?: Maybe<LogedInOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserFilesArgs = {
  where?: Maybe<FileWhereInput>;
  orderBy?: Maybe<FileOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserEthContractSourcesCreatedArgs = {
  where?: Maybe<EthContractSourceWhereInput>;
  orderBy?: Maybe<EthContractSourceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserEthAccountsArgs = {
  where?: Maybe<EthAccountWhereInput>;
  orderBy?: Maybe<EthAccountOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserResourcesArgs = {
  where?: Maybe<ResourceWhereInput>;
  orderBy?: Maybe<ResourceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserRoomsArgs = {
  where?: Maybe<ChatRoomWhereInput>;
  orderBy?: Maybe<ChatRoomOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserCreatedRoomsArgs = {
  where?: Maybe<ChatRoomWhereInput>;
  orderBy?: Maybe<ChatRoomOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserMessagesArgs = {
  where?: Maybe<ChatMessageWhereInput>;
  orderBy?: Maybe<ChatMessageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserReadedMessagesArgs = {
  where?: Maybe<ChatMessageReadedWhereInput>;
  orderBy?: Maybe<ChatMessageReadedOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNoticesArgs = {
  where?: Maybe<NoticeWhereInput>;
  orderBy?: Maybe<NoticeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserVotesArgs = {
  where?: Maybe<VoteWhereInput>;
  orderBy?: Maybe<VoteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNotificationTypesArgs = {
  where?: Maybe<NotificationTypeWhereInput>;
  orderBy?: Maybe<NotificationTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNotificationTypesCreatedArgs = {
  where?: Maybe<NotificationTypeWhereInput>;
  orderBy?: Maybe<NotificationTypeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTagsArgs = {
  where?: Maybe<TagWhereInput>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserResourceTagsArgs = {
  where?: Maybe<ResourceTagWhereInput>;
  orderBy?: Maybe<ResourceTagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPrismaProjectsArgs = {
  where?: Maybe<ProjectWhereInput>;
  orderBy?: Maybe<ProjectOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTopicsArgs = {
  where?: Maybe<TopicWhereInput>;
  orderBy?: Maybe<TopicOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTarifsArgs = {
  where?: Maybe<UserTarifWhereInput>;
  orderBy?: Maybe<UserTarifOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserAccountArgs = {
  where?: Maybe<AccountWhereInput>;
};


export type UserPlacesArgs = {
  where?: Maybe<PlaceWhereInput>;
  orderBy?: Maybe<PlaceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface UserConnection {
  __typename?: 'UserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<UserEdge>>;
  aggregate: AggregateUser;
}

export interface UserCreateInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
}

export interface UserCreateManyInput {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutCreatedByInput {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutGroupsInput {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutNotificationTypesInput {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutPrismaProjectsInput {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
}

export interface UserCreateManyWithoutRoomsInput {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
}

export interface UserCreateOneInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutAccountInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutCommentsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutCreatedRoomsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutCreatedUsersInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutEthAccountsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutFilesInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutLogedInsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutMessagesInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutNoticesInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutNotificationTypesCreatedInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutPlacesInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutReadedMessagesInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutResourceTagsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutResourcesInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutTagsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutTarifsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutTopicsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateOneWithoutVotesInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutAccountInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutCommentsInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutCreatedByInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutCreatedRoomsInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutCreatedUsersInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutEthAccountsInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutFilesInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutGroupsInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutLogedInsInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutMessagesInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutNoticesInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutNotificationTypesCreatedInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutNotificationTypesInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutPlacesInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
}

export interface UserCreateWithoutPrismaProjectsInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutReadedMessagesInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutResourceTagsInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutResourcesInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutRoomsInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutTagsInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutTarifsInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutTopicsInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  Votes?: Maybe<VoteCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

export interface UserCreateWithoutVotesInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupCreateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserCreateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserCreateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInCreateManyWithoutUserInput>;
  Files?: Maybe<FileCreateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceCreateManyInput>;
  EthAccounts?: Maybe<EthAccountCreateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceCreateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomCreateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomCreateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageCreateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedCreateManyWithoutUserInput>;
  Notices?: Maybe<NoticeCreateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeCreateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeCreateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagCreateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagCreateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectCreateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicCreateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentCreateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifCreateManyWithoutUserInput>;
  Account?: Maybe<AccountCreateOneWithoutUserInput>;
  Places?: Maybe<PlaceCreateManyWithoutOwnerInput>;
}

/** An edge in a connection. */
export interface UserEdge {
  __typename?: 'UserEdge';
  /** The item at the end of the edge. */
  node: User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export interface UserGroup extends Node {
  __typename?: 'UserGroup';
  id: Scalars['ID'];
  name: Scalars['String'];
  Users?: Maybe<Array<User>>;
}


export type UserGroupUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export interface UserGroupConnection {
  __typename?: 'UserGroupConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<UserGroupEdge>>;
  aggregate: AggregateUserGroup;
}

export interface UserGroupCreateInput {
  name: Scalars['String'];
  Users?: Maybe<UserCreateManyWithoutGroupsInput>;
}

export interface UserGroupCreateManyWithoutUsersInput {
  connect?: Maybe<Array<UserGroupWhereUniqueInput>>;
}

export interface UserGroupCreateWithoutUsersInput {
  name: Scalars['String'];
}

/** An edge in a connection. */
export interface UserGroupEdge {
  __typename?: 'UserGroupEdge';
  /** The item at the end of the edge. */
  node: UserGroup;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum UserGroupOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  NAME_ASC = 'name_ASC',
  NAME_DESC = 'name_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC'
}

export interface UserGroupPreviousValues {
  __typename?: 'UserGroupPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
}

export interface UserGroupSubscriptionPayload {
  __typename?: 'UserGroupSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<UserGroup>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<UserGroupPreviousValues>;
}

export interface UserGroupSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserGroupSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserGroupSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserGroupSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<UserGroupWhereInput>;
}

export interface UserGroupUpdateInput {
  name?: Maybe<Scalars['String']>;
  Users?: Maybe<UserUpdateManyWithoutGroupsInput>;
}

export interface UserGroupUpdateManyWithoutUsersInput {
  connect?: Maybe<Array<UserGroupWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserGroupWhereUniqueInput>>;
}

export interface UserGroupUpdateWithWhereUniqueWithoutUsersInput {
  where: UserGroupWhereUniqueInput;
  data: UserGroupUpdateWithoutUsersDataInput;
}

export interface UserGroupUpdateWithoutUsersDataInput {
  name?: Maybe<Scalars['String']>;
}

export interface UserGroupUpsertWithWhereUniqueWithoutUsersInput {
  where: UserGroupWhereUniqueInput;
}

export interface UserGroupWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserGroupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserGroupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserGroupWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<Scalars['String']>;
  Users_every?: Maybe<UserWhereInput>;
  Users_some?: Maybe<UserWhereInput>;
  Users_none?: Maybe<UserWhereInput>;
}

export interface UserGroupWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
}

export enum UserOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  USERNAME_ASC = 'username_ASC',
  USERNAME_DESC = 'username_DESC',
  EMAIL_ASC = 'email_ASC',
  EMAIL_DESC = 'email_DESC',
  PHONE_ASC = 'phone_ASC',
  PHONE_DESC = 'phone_DESC',
  SHOWEMAIL_ASC = 'showEmail_ASC',
  SHOWEMAIL_DESC = 'showEmail_DESC',
  SHOWPHONE_ASC = 'showPhone_ASC',
  SHOWPHONE_DESC = 'showPhone_DESC',
  PASSWORD_ASC = 'password_ASC',
  PASSWORD_DESC = 'password_DESC',
  FULLNAME_ASC = 'fullname_ASC',
  FULLNAME_DESC = 'fullname_DESC',
  IMAGE_ASC = 'image_ASC',
  IMAGE_DESC = 'image_DESC',
  ADDRESS_ASC = 'address_ASC',
  ADDRESS_DESC = 'address_DESC',
  ACTIVE_ASC = 'active_ASC',
  ACTIVE_DESC = 'active_DESC',
  ACTIVATED_ASC = 'activated_ASC',
  ACTIVATED_DESC = 'activated_DESC',
  DELETED_ASC = 'deleted_ASC',
  DELETED_DESC = 'deleted_DESC',
  HIDDEN_ASC = 'hidden_ASC',
  HIDDEN_DESC = 'hidden_DESC',
  USER_ID_ASC = 'user_id_ASC',
  USER_ID_DESC = 'user_id_DESC',
  FIRST_NAME_ASC = 'first_name_ASC',
  FIRST_NAME_DESC = 'first_name_DESC',
  MIDDLE_NAME_ASC = 'middle_name_ASC',
  MIDDLE_NAME_DESC = 'middle_name_DESC',
  LAST_NAME_ASC = 'last_name_ASC',
  LAST_NAME_DESC = 'last_name_DESC',
  GENDER_ASC = 'gender_ASC',
  GENDER_DESC = 'gender_DESC',
  BIRTH_DATE_ASC = 'birth_date_ASC',
  BIRTH_DATE_DESC = 'birth_date_DESC',
  COUNTRY_ID_ASC = 'country_id_ASC',
  COUNTRY_ID_DESC = 'country_id_DESC',
  REGION_ID_ASC = 'region_id_ASC',
  REGION_ID_DESC = 'region_id_DESC',
  CITY_ID_ASC = 'city_id_ASC',
  CITY_ID_DESC = 'city_id_DESC',
  STATUS_ASC = 'status_ASC',
  STATUS_DESC = 'status_DESC',
  TIMEZONE_ASC = 'timezone_ASC',
  TIMEZONE_DESC = 'timezone_DESC',
  LANGUAGE_ID_ASC = 'language_id_ASC',
  LANGUAGE_ID_DESC = 'language_id_DESC',
  NUM_BLOG_POSTS_ASC = 'num_blog_posts_ASC',
  NUM_BLOG_POSTS_DESC = 'num_blog_posts_DESC',
  LAST_ASC = 'last_ASC',
  LAST_DESC = 'last_DESC',
  CREATED_AT_ASC = 'created_at_ASC',
  CREATED_AT_DESC = 'created_at_DESC',
  NOTIFICATION_ASC = 'notification_ASC',
  NOTIFICATION_DESC = 'notification_DESC',
  ICQ_ASC = 'icq_ASC',
  ICQ_DESC = 'icq_DESC',
  WWW_ASC = 'www_ASC',
  WWW_DESC = 'www_DESC',
  CONTACT_EMAIL_ASC = 'contact_email_ASC',
  CONTACT_EMAIL_DESC = 'contact_email_DESC',
  MOBILE_PHONE_ASC = 'mobile_phone_ASC',
  MOBILE_PHONE_DESC = 'mobile_phone_DESC',
  HOME_PHONE_ASC = 'home_phone_ASC',
  HOME_PHONE_DESC = 'home_phone_DESC',
  ABOUT_ASC = 'about_ASC',
  ABOUT_DESC = 'about_DESC',
  EXPERIENCE_ASC = 'experience_ASC',
  EXPERIENCE_DESC = 'experience_DESC',
  JOB_TITLE_ASC = 'job_title_ASC',
  JOB_TITLE_DESC = 'job_title_DESC',
  WORK_PLACE_ASC = 'work_place_ASC',
  WORK_PLACE_DESC = 'work_place_DESC',
  IP_ASC = 'ip_ASC',
  IP_DESC = 'ip_DESC',
  CONFIRMATION_CODE_ASC = 'confirmation_code_ASC',
  CONFIRMATION_CODE_DESC = 'confirmation_code_DESC',
  RATING_ASC = 'rating_ASC',
  RATING_DESC = 'rating_DESC',
  ETHERWALLET_ASC = 'etherwallet_ASC',
  ETHERWALLET_DESC = 'etherwallet_DESC',
  PHOTO_ASC = 'photo_ASC',
  PHOTO_DESC = 'photo_DESC',
  SUDO_ASC = 'sudo_ASC',
  SUDO_DESC = 'sudo_DESC'
}

export interface UserPreviousValues {
  __typename?: 'UserPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
}

export interface UserResponse {
  __typename?: 'UserResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  errors: Array<Error>;
  data?: Maybe<User>;
}

export interface UserSubscriptionPayload {
  __typename?: 'UserSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<User>;
}

export interface UserSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<UserWhereInput>;
}

export interface UserTarif extends Node {
  __typename?: 'UserTarif';
  id: Scalars['ID'];
  User: User;
  Tarif: Tarif;
  createdAt: Scalars['DateTime'];
  dateTill?: Maybe<Scalars['DateTime']>;
}


export type UserTarifUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type UserTarifTarifArgs = {
  where?: Maybe<TarifWhereInput>;
};

/** A connection to a list of items. */
export interface UserTarifConnection {
  __typename?: 'UserTarifConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<UserTarifEdge>>;
  aggregate: AggregateUserTarif;
}

export interface UserTarifCreateInput {
  dateTill?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutTarifsInput;
  Tarif: TarifCreateOneWithoutUserTarifsInput;
}

export interface UserTarifCreateManyWithoutTarifInput {
  connect?: Maybe<Array<UserTarifWhereUniqueInput>>;
}

export interface UserTarifCreateManyWithoutUserInput {
  connect?: Maybe<Array<UserTarifWhereUniqueInput>>;
}

export interface UserTarifCreateWithoutTarifInput {
  dateTill?: Maybe<Scalars['DateTime']>;
  User: UserCreateOneWithoutTarifsInput;
}

export interface UserTarifCreateWithoutUserInput {
  dateTill?: Maybe<Scalars['DateTime']>;
  Tarif: TarifCreateOneWithoutUserTarifsInput;
}

/** An edge in a connection. */
export interface UserTarifEdge {
  __typename?: 'UserTarifEdge';
  /** The item at the end of the edge. */
  node: UserTarif;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum UserTarifOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  DATETILL_ASC = 'dateTill_ASC',
  DATETILL_DESC = 'dateTill_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC'
}

export interface UserTarifPreviousValues {
  __typename?: 'UserTarifPreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  dateTill?: Maybe<Scalars['DateTime']>;
}

export interface UserTarifSubscriptionPayload {
  __typename?: 'UserTarifSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<UserTarif>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<UserTarifPreviousValues>;
}

export interface UserTarifSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserTarifSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserTarifSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserTarifSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<UserTarifWhereInput>;
}

export interface UserTarifUpdateInput {
  dateTill?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneWithoutTarifsInput>;
  Tarif?: Maybe<TarifUpdateOneWithoutUserTarifsInput>;
}

export interface UserTarifUpdateManyWithoutTarifInput {
  connect?: Maybe<Array<UserTarifWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserTarifWhereUniqueInput>>;
}

export interface UserTarifUpdateManyWithoutUserInput {
  connect?: Maybe<Array<UserTarifWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserTarifWhereUniqueInput>>;
}

export interface UserTarifUpdateWithWhereUniqueWithoutTarifInput {
  where: UserTarifWhereUniqueInput;
  data: UserTarifUpdateWithoutTarifDataInput;
}

export interface UserTarifUpdateWithWhereUniqueWithoutUserInput {
  where: UserTarifWhereUniqueInput;
  data: UserTarifUpdateWithoutUserDataInput;
}

export interface UserTarifUpdateWithoutTarifDataInput {
  dateTill?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserUpdateOneWithoutTarifsInput>;
}

export interface UserTarifUpdateWithoutUserDataInput {
  dateTill?: Maybe<Scalars['DateTime']>;
  Tarif?: Maybe<TarifUpdateOneWithoutUserTarifsInput>;
}

export interface UserTarifUpsertWithWhereUniqueWithoutTarifInput {
  where: UserTarifWhereUniqueInput;
}

export interface UserTarifUpsertWithWhereUniqueWithoutUserInput {
  where: UserTarifWhereUniqueInput;
}

export interface UserTarifWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserTarifWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserTarifWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserTarifWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  dateTill?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  dateTill_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  dateTill_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  dateTill_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  dateTill_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  dateTill_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  dateTill_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  dateTill_gte?: Maybe<Scalars['DateTime']>;
  User?: Maybe<UserWhereInput>;
  Tarif?: Maybe<TarifWhereInput>;
}

export interface UserTarifWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface UserUpdateDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateInput {
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
}

export interface UserUpdateManyInput {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
}

export interface UserUpdateManyWithoutCreatedByInput {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
}

export interface UserUpdateManyWithoutGroupsInput {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
}

export interface UserUpdateManyWithoutNotificationTypesInput {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
}

export interface UserUpdateManyWithoutPrismaProjectsInput {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
}

export interface UserUpdateManyWithoutRoomsInput {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
}

export interface UserUpdateOneInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutAccountInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutCommentsInput {
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface UserUpdateOneWithoutCreatedRoomsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutCreatedUsersInput {
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface UserUpdateOneWithoutEthAccountsInput {
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface UserUpdateOneWithoutFilesInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutLogedInsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutMessagesInput {
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface UserUpdateOneWithoutNoticesInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutNotificationTypesCreatedInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutPlacesInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutReadedMessagesInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutResourceTagsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutResourcesInput {
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
}

export interface UserUpdateOneWithoutTagsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutTarifsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutTopicsInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateOneWithoutVotesInput {
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput;
  data: UserUpdateDataInput;
}

export interface UserUpdateWithWhereUniqueWithoutCreatedByInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutCreatedByDataInput;
}

export interface UserUpdateWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutGroupsDataInput;
}

export interface UserUpdateWithWhereUniqueWithoutNotificationTypesInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutNotificationTypesDataInput;
}

export interface UserUpdateWithWhereUniqueWithoutPrismaProjectsInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutPrismaProjectsDataInput;
}

export interface UserUpdateWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutRoomsDataInput;
}

export interface UserUpdateWithoutAccountDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutCommentsDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutCreatedByDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutCreatedRoomsDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutCreatedUsersDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutEthAccountsDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutFilesDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutGroupsDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutLogedInsDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutMessagesDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutNoticesDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutNotificationTypesCreatedDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutNotificationTypesDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutPlacesDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
}

export interface UserUpdateWithoutPrismaProjectsDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutReadedMessagesDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutResourceTagsDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutResourcesDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutRoomsDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutTagsDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutTarifsDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutTopicsDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  Votes?: Maybe<VoteUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpdateWithoutVotesDataInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  Groups?: Maybe<UserGroupUpdateManyWithoutUsersInput>;
  CreatedUsers?: Maybe<UserUpdateManyWithoutCreatedByInput>;
  CreatedBy?: Maybe<UserUpdateOneWithoutCreatedUsersInput>;
  LogedIns?: Maybe<LogedInUpdateManyWithoutUserInput>;
  Files?: Maybe<FileUpdateManyWithoutCreatedByInput>;
  EthContractSourcesCreated?: Maybe<EthContractSourceUpdateManyInput>;
  EthAccounts?: Maybe<EthAccountUpdateManyWithoutCreatedByInput>;
  Resources?: Maybe<ResourceUpdateManyWithoutCreatedByInput>;
  Rooms?: Maybe<ChatRoomUpdateManyWithoutMembersInput>;
  CreatedRooms?: Maybe<ChatRoomUpdateManyWithoutCreatedByInput>;
  Messages?: Maybe<ChatMessageUpdateManyWithoutCreatedByInput>;
  ReadedMessages?: Maybe<ChatMessageReadedUpdateManyWithoutUserInput>;
  Notices?: Maybe<NoticeUpdateManyWithoutUserInput>;
  NotificationTypes?: Maybe<NotificationTypeUpdateManyWithoutUsersInput>;
  NotificationTypesCreated?: Maybe<NotificationTypeUpdateManyWithoutCreatedByInput>;
  Tags?: Maybe<TagUpdateManyWithoutCreatedByInput>;
  ResourceTags?: Maybe<ResourceTagUpdateManyWithoutCreatedByInput>;
  PrismaProjects?: Maybe<ProjectUpdateManyWithoutPrismaUsersInput>;
  topics?: Maybe<TopicUpdateManyWithoutCreatedByInput>;
  comments?: Maybe<CommentUpdateManyWithoutCreatedByInput>;
  Tarifs?: Maybe<UserTarifUpdateManyWithoutUserInput>;
  Account?: Maybe<AccountUpdateOneWithoutUserInput>;
  Places?: Maybe<PlaceUpdateManyWithoutOwnerInput>;
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput;
}

export interface UserUpsertWithWhereUniqueWithoutCreatedByInput {
  where: UserWhereUniqueInput;
}

export interface UserUpsertWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput;
}

export interface UserUpsertWithWhereUniqueWithoutNotificationTypesInput {
  where: UserWhereUniqueInput;
}

export interface UserUpsertWithWhereUniqueWithoutPrismaProjectsInput {
  where: UserWhereUniqueInput;
}

export interface UserUpsertWithWhereUniqueWithoutRoomsInput {
  where: UserWhereUniqueInput;
}

export interface UserWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  username_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  username_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  username_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  username_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  username_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  username_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  username_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  username_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  username_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  username_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  username_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  username_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  username_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  phone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  phone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  phone_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  phone_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  phone_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  phone_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  phone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  phone_not_ends_with?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  showEmail_not?: Maybe<Scalars['Boolean']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  showPhone_not?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  password_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  password_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  password_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fullname_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fullname_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  fullname_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  fullname_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  fullname_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  fullname_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  fullname_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  fullname_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  fullname_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  fullname_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fullname_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  fullname_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  fullname_not_ends_with?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  image_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  image_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  image_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  image_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  image_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  image_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  image_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  image_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  image_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  image_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  image_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  image_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  image_not_ends_with?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  address_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  address_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  address_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  address_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  address_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  address_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  address_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  address_not_ends_with?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  active_not?: Maybe<Scalars['Boolean']>;
  activated?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  activated_not?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  deleted_not?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  hidden_not?: Maybe<Scalars['Boolean']>;
  user_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  user_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  user_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  user_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  user_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  user_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  user_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  user_id_gte?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  first_name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  first_name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  first_name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  first_name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  first_name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  first_name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  first_name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  first_name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  first_name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  first_name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  first_name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  first_name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  first_name_not_ends_with?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  middle_name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  middle_name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  middle_name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  middle_name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  middle_name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  middle_name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  middle_name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  middle_name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  middle_name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  middle_name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  middle_name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  middle_name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  middle_name_not_ends_with?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  last_name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  last_name_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  last_name_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  last_name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  last_name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  last_name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  last_name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  last_name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  last_name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  last_name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  last_name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  last_name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  last_name_not_ends_with?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  gender_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  gender_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  gender_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  gender_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  gender_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  gender_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  gender_gte?: Maybe<Scalars['Int']>;
  birth_date?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  birth_date_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  birth_date_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  birth_date_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  birth_date_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  birth_date_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  birth_date_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  birth_date_gte?: Maybe<Scalars['DateTime']>;
  country_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  country_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  country_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  country_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  country_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  country_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  country_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  country_id_gte?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  region_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  region_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  region_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  region_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  region_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  region_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  region_id_gte?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  city_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  city_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  city_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  city_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  city_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  city_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  city_id_gte?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  status_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  status_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  status_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  status_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  status_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  status_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  status_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  status_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  status_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  status_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  status_not_ends_with?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  timezone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  timezone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  timezone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  timezone_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  timezone_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  timezone_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  timezone_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  timezone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  timezone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  timezone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  timezone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  timezone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  timezone_not_ends_with?: Maybe<Scalars['String']>;
  language_id?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  language_id_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  language_id_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  language_id_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  language_id_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  language_id_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  language_id_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  language_id_gte?: Maybe<Scalars['Int']>;
  num_blog_posts?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  num_blog_posts_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  num_blog_posts_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  num_blog_posts_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  num_blog_posts_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  num_blog_posts_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  num_blog_posts_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  num_blog_posts_gte?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  last_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  last_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  last_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  last_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  last_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  last_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  last_gte?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  created_at_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  created_at_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  created_at_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  created_at_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  created_at_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  created_at_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  created_at_gte?: Maybe<Scalars['DateTime']>;
  notification?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  notification_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  notification_in?: Maybe<Array<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  notification_not_in?: Maybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  notification_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  notification_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  notification_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  notification_gte?: Maybe<Scalars['Int']>;
  icq?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  icq_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  icq_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  icq_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  icq_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  icq_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  icq_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  icq_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  icq_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  icq_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  icq_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  icq_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  icq_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  icq_not_ends_with?: Maybe<Scalars['String']>;
  www?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  www_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  www_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  www_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  www_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  www_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  www_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  www_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  www_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  www_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  www_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  www_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  www_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  www_not_ends_with?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  contact_email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  contact_email_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  contact_email_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  contact_email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  contact_email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  contact_email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  contact_email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  contact_email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  contact_email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  contact_email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  contact_email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  contact_email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  contact_email_not_ends_with?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mobile_phone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mobile_phone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  mobile_phone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  mobile_phone_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  mobile_phone_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  mobile_phone_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  mobile_phone_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  mobile_phone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  mobile_phone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  mobile_phone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mobile_phone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  mobile_phone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  mobile_phone_not_ends_with?: Maybe<Scalars['String']>;
  home_phone?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  home_phone_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  home_phone_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  home_phone_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  home_phone_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  home_phone_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  home_phone_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  home_phone_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  home_phone_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  home_phone_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  home_phone_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  home_phone_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  home_phone_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  home_phone_not_ends_with?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  about_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  about_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  about_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  about_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  about_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  about_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  about_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  about_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  about_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  about_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  about_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  about_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  about_not_ends_with?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  experience_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  experience_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  experience_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  experience_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  experience_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  experience_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  experience_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  experience_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  experience_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  experience_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  experience_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  experience_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  experience_not_ends_with?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  job_title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  job_title_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  job_title_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  job_title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  job_title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  job_title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  job_title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  job_title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  job_title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  job_title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  job_title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  job_title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  job_title_not_ends_with?: Maybe<Scalars['String']>;
  work_place?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  work_place_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  work_place_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  work_place_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  work_place_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  work_place_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  work_place_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  work_place_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  work_place_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  work_place_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  work_place_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  work_place_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  work_place_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  work_place_not_ends_with?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  ip_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ip_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  ip_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  ip_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  ip_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  ip_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  ip_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  ip_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  ip_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  ip_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  ip_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  ip_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  ip_not_ends_with?: Maybe<Scalars['String']>;
  confirmation_code?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  confirmation_code_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  confirmation_code_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  confirmation_code_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  confirmation_code_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  confirmation_code_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  confirmation_code_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  confirmation_code_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  confirmation_code_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  confirmation_code_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  confirmation_code_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  confirmation_code_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  confirmation_code_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  confirmation_code_not_ends_with?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  rating_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  rating_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  rating_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  rating_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  rating_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  rating_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  rating_gte?: Maybe<Scalars['Float']>;
  etherwallet?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  etherwallet_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  etherwallet_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  etherwallet_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  etherwallet_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  etherwallet_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  etherwallet_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  etherwallet_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  etherwallet_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  etherwallet_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  etherwallet_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  etherwallet_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  etherwallet_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  etherwallet_not_ends_with?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  photo_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  photo_in?: Maybe<Array<Scalars['String']>>;
  /** All values that are not contained in given list. */
  photo_not_in?: Maybe<Array<Scalars['String']>>;
  /** All values less than the given value. */
  photo_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  photo_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  photo_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  photo_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  photo_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  photo_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  photo_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  photo_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  photo_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  photo_not_ends_with?: Maybe<Scalars['String']>;
  sudo?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  sudo_not?: Maybe<Scalars['Boolean']>;
  Groups_every?: Maybe<UserGroupWhereInput>;
  Groups_some?: Maybe<UserGroupWhereInput>;
  Groups_none?: Maybe<UserGroupWhereInput>;
  CreatedUsers_every?: Maybe<UserWhereInput>;
  CreatedUsers_some?: Maybe<UserWhereInput>;
  CreatedUsers_none?: Maybe<UserWhereInput>;
  CreatedBy?: Maybe<UserWhereInput>;
  LogedIns_every?: Maybe<LogedInWhereInput>;
  LogedIns_some?: Maybe<LogedInWhereInput>;
  LogedIns_none?: Maybe<LogedInWhereInput>;
  Files_every?: Maybe<FileWhereInput>;
  Files_some?: Maybe<FileWhereInput>;
  Files_none?: Maybe<FileWhereInput>;
  EthContractSourcesCreated_every?: Maybe<EthContractSourceWhereInput>;
  EthContractSourcesCreated_some?: Maybe<EthContractSourceWhereInput>;
  EthContractSourcesCreated_none?: Maybe<EthContractSourceWhereInput>;
  EthAccounts_every?: Maybe<EthAccountWhereInput>;
  EthAccounts_some?: Maybe<EthAccountWhereInput>;
  EthAccounts_none?: Maybe<EthAccountWhereInput>;
  Resources_every?: Maybe<ResourceWhereInput>;
  Resources_some?: Maybe<ResourceWhereInput>;
  Resources_none?: Maybe<ResourceWhereInput>;
  Rooms_every?: Maybe<ChatRoomWhereInput>;
  Rooms_some?: Maybe<ChatRoomWhereInput>;
  Rooms_none?: Maybe<ChatRoomWhereInput>;
  CreatedRooms_every?: Maybe<ChatRoomWhereInput>;
  CreatedRooms_some?: Maybe<ChatRoomWhereInput>;
  CreatedRooms_none?: Maybe<ChatRoomWhereInput>;
  Messages_every?: Maybe<ChatMessageWhereInput>;
  Messages_some?: Maybe<ChatMessageWhereInput>;
  Messages_none?: Maybe<ChatMessageWhereInput>;
  ReadedMessages_every?: Maybe<ChatMessageReadedWhereInput>;
  ReadedMessages_some?: Maybe<ChatMessageReadedWhereInput>;
  ReadedMessages_none?: Maybe<ChatMessageReadedWhereInput>;
  Notices_every?: Maybe<NoticeWhereInput>;
  Notices_some?: Maybe<NoticeWhereInput>;
  Notices_none?: Maybe<NoticeWhereInput>;
  Votes_every?: Maybe<VoteWhereInput>;
  Votes_some?: Maybe<VoteWhereInput>;
  Votes_none?: Maybe<VoteWhereInput>;
  NotificationTypes_every?: Maybe<NotificationTypeWhereInput>;
  NotificationTypes_some?: Maybe<NotificationTypeWhereInput>;
  NotificationTypes_none?: Maybe<NotificationTypeWhereInput>;
  NotificationTypesCreated_every?: Maybe<NotificationTypeWhereInput>;
  NotificationTypesCreated_some?: Maybe<NotificationTypeWhereInput>;
  NotificationTypesCreated_none?: Maybe<NotificationTypeWhereInput>;
  Tags_every?: Maybe<TagWhereInput>;
  Tags_some?: Maybe<TagWhereInput>;
  Tags_none?: Maybe<TagWhereInput>;
  ResourceTags_every?: Maybe<ResourceTagWhereInput>;
  ResourceTags_some?: Maybe<ResourceTagWhereInput>;
  ResourceTags_none?: Maybe<ResourceTagWhereInput>;
  PrismaProjects_every?: Maybe<ProjectWhereInput>;
  PrismaProjects_some?: Maybe<ProjectWhereInput>;
  PrismaProjects_none?: Maybe<ProjectWhereInput>;
  topics_every?: Maybe<TopicWhereInput>;
  topics_some?: Maybe<TopicWhereInput>;
  topics_none?: Maybe<TopicWhereInput>;
  comments_every?: Maybe<CommentWhereInput>;
  comments_some?: Maybe<CommentWhereInput>;
  comments_none?: Maybe<CommentWhereInput>;
  Tarifs_every?: Maybe<UserTarifWhereInput>;
  Tarifs_some?: Maybe<UserTarifWhereInput>;
  Tarifs_none?: Maybe<UserTarifWhereInput>;
  Account?: Maybe<AccountWhereInput>;
  Places_every?: Maybe<PlaceWhereInput>;
  Places_some?: Maybe<PlaceWhereInput>;
  Places_none?: Maybe<PlaceWhereInput>;
  search?: Maybe<Scalars['String']>;
  showHidden?: Maybe<Scalars['Boolean']>;
}

export interface UserWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
}

export interface Vote extends Node {
  __typename?: 'Vote';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  Resource: Resource;
  User: User;
  value: Scalars['Float'];
}


export type VoteResourceArgs = {
  where?: Maybe<ResourceWhereInput>;
};


export type VoteUserArgs = {
  where?: Maybe<UserWhereInput>;
};

/** A connection to a list of items. */
export interface VoteConnection {
  __typename?: 'VoteConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: Array<Maybe<VoteEdge>>;
  aggregate: AggregateVote;
}

export interface VoteCreateInput {
  value: Scalars['Float'];
  Resource: ResourceCreateOneWithoutVotesInput;
  User: UserCreateOneWithoutVotesInput;
}

export interface VoteCreateManyWithoutResourceInput {
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
}

export interface VoteCreateManyWithoutUserInput {
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
}

export interface VoteCreateWithoutResourceInput {
  value: Scalars['Float'];
  User: UserCreateOneWithoutVotesInput;
}

export interface VoteCreateWithoutUserInput {
  value: Scalars['Float'];
  Resource: ResourceCreateOneWithoutVotesInput;
}

/** An edge in a connection. */
export interface VoteEdge {
  __typename?: 'VoteEdge';
  /** The item at the end of the edge. */
  node: Vote;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
}

export enum VoteOrderByInput {
  ID_ASC = 'id_ASC',
  ID_DESC = 'id_DESC',
  CREATEDAT_ASC = 'createdAt_ASC',
  CREATEDAT_DESC = 'createdAt_DESC',
  UPDATEDAT_ASC = 'updatedAt_ASC',
  UPDATEDAT_DESC = 'updatedAt_DESC',
  VALUE_ASC = 'value_ASC',
  VALUE_DESC = 'value_DESC'
}

export interface VotePreviousValues {
  __typename?: 'VotePreviousValues';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Float'];
}

export interface VoteSubscriptionPayload {
  __typename?: 'VoteSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Vote>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<VotePreviousValues>;
}

export interface VoteSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<VoteSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<VoteSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<VoteSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<VoteWhereInput>;
}

export interface VoteUpdateInput {
  value?: Maybe<Scalars['Float']>;
  Resource?: Maybe<ResourceUpdateOneWithoutVotesInput>;
  User?: Maybe<UserUpdateOneWithoutVotesInput>;
}

export interface VoteUpdateManyWithoutResourceInput {
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
  disconnect?: Maybe<Array<VoteWhereUniqueInput>>;
}

export interface VoteUpdateManyWithoutUserInput {
  connect?: Maybe<Array<VoteWhereUniqueInput>>;
  disconnect?: Maybe<Array<VoteWhereUniqueInput>>;
}

export interface VoteUpdateWithWhereUniqueWithoutResourceInput {
  where: VoteWhereUniqueInput;
  data: VoteUpdateWithoutResourceDataInput;
}

export interface VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput;
  data: VoteUpdateWithoutUserDataInput;
}

export interface VoteUpdateWithoutResourceDataInput {
  value?: Maybe<Scalars['Float']>;
  User?: Maybe<UserUpdateOneWithoutVotesInput>;
}

export interface VoteUpdateWithoutUserDataInput {
  value?: Maybe<Scalars['Float']>;
  Resource?: Maybe<ResourceUpdateOneWithoutVotesInput>;
}

export interface VoteUpsertWithWhereUniqueWithoutResourceInput {
  where: VoteWhereUniqueInput;
}

export interface VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput;
}

export interface VoteWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<VoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<VoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<VoteWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  value_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  value_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  value_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  value_gte?: Maybe<Scalars['Float']>;
  Resource?: Maybe<ResourceWhereInput>;
  User?: Maybe<UserWhereInput>;
}

export interface VoteWhereUniqueInput {
  id?: Maybe<Scalars['ID']>;
}

export interface EthNet {
  __typename?: 'ethNet';
  id: Scalars['Int'];
  isListening: Scalars['Boolean'];
  peerCount: Scalars['Int'];
  networkType: Scalars['String'];
}

export interface EthSyncState {
  __typename?: 'ethSyncState';
  /** The block number where the sync started */
  startingBlock: Scalars['Int'];
  /** The block number where at which block the node currently synced to already */
  currentBlock: Scalars['Int'];
  /** The estimated block number to sync to */
  highestBlock: Scalars['Int'];
  /** The estimated states to download */
  knownStates: Scalars['Int'];
  /** The already downloaded states */
  pulledStates: Scalars['Int'];
}

export interface MapGeoObjectsConnection {
  __typename?: 'mapGeoObjectsConnection';
  aggregate: AggregatePlace;
  objects: Array<Place>;
}
