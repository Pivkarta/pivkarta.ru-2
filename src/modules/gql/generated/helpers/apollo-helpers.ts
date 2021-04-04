import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AccountKeySpecifier = ('id' | 'balance' | 'User' | 'Transactions' | AccountKeySpecifier)[];
export type AccountFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	Transactions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | AccountConnectionKeySpecifier)[];
export type AccountConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountEdgeKeySpecifier = ('node' | 'cursor' | AccountEdgeKeySpecifier)[];
export type AccountEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountPreviousValuesKeySpecifier = ('id' | 'balance' | AccountPreviousValuesKeySpecifier)[];
export type AccountPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | AccountSubscriptionPayloadKeySpecifier)[];
export type AccountSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateAccountKeySpecifier = ('count' | AggregateAccountKeySpecifier)[];
export type AggregateAccountFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateBeerKeySpecifier = ('count' | AggregateBeerKeySpecifier)[];
export type AggregateBeerFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateCallRequestKeySpecifier = ('count' | AggregateCallRequestKeySpecifier)[];
export type AggregateCallRequestFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateChatMessageKeySpecifier = ('count' | AggregateChatMessageKeySpecifier)[];
export type AggregateChatMessageFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateChatMessageReadedKeySpecifier = ('count' | AggregateChatMessageReadedKeySpecifier)[];
export type AggregateChatMessageReadedFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateChatRoomKeySpecifier = ('count' | AggregateChatRoomKeySpecifier)[];
export type AggregateChatRoomFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateChatRoomInvitationKeySpecifier = ('count' | AggregateChatRoomInvitationKeySpecifier)[];
export type AggregateChatRoomInvitationFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateCityKeySpecifier = ('count' | AggregateCityKeySpecifier)[];
export type AggregateCityFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateCommentKeySpecifier = ('count' | AggregateCommentKeySpecifier)[];
export type AggregateCommentFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateCommentTypeKeySpecifier = ('count' | AggregateCommentTypeKeySpecifier)[];
export type AggregateCommentTypeFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateEthAccountKeySpecifier = ('count' | AggregateEthAccountKeySpecifier)[];
export type AggregateEthAccountFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateEthBlockKeySpecifier = ('count' | AggregateEthBlockKeySpecifier)[];
export type AggregateEthBlockFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateEthContractSourceKeySpecifier = ('count' | AggregateEthContractSourceKeySpecifier)[];
export type AggregateEthContractSourceFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateEthTransactionKeySpecifier = ('count' | AggregateEthTransactionKeySpecifier)[];
export type AggregateEthTransactionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateFileKeySpecifier = ('count' | AggregateFileKeySpecifier)[];
export type AggregateFileFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateGameKeySpecifier = ('count' | AggregateGameKeySpecifier)[];
export type AggregateGameFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateGameResultKeySpecifier = ('count' | AggregateGameResultKeySpecifier)[];
export type AggregateGameResultFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateLetsadsSmsMessageStatusKeySpecifier = ('count' | AggregateLetsadsSmsMessageStatusKeySpecifier)[];
export type AggregateLetsadsSmsMessageStatusFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateLetsadsSmsMessageStatusItemKeySpecifier = ('count' | AggregateLetsadsSmsMessageStatusItemKeySpecifier)[];
export type AggregateLetsadsSmsMessageStatusItemFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateLetterKeySpecifier = ('count' | AggregateLetterKeySpecifier)[];
export type AggregateLetterFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateLogKeySpecifier = ('count' | AggregateLogKeySpecifier)[];
export type AggregateLogFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateLogedInKeySpecifier = ('count' | AggregateLogedInKeySpecifier)[];
export type AggregateLogedInFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNoticeKeySpecifier = ('count' | AggregateNoticeKeySpecifier)[];
export type AggregateNoticeFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNotificationTypeKeySpecifier = ('count' | AggregateNotificationTypeKeySpecifier)[];
export type AggregateNotificationTypeFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregatePhotoKeySpecifier = ('count' | AggregatePhotoKeySpecifier)[];
export type AggregatePhotoFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregatePlaceKeySpecifier = ('count' | AggregatePlaceKeySpecifier)[];
export type AggregatePlaceFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregatePlaceBeerKeySpecifier = ('count' | AggregatePlaceBeerKeySpecifier)[];
export type AggregatePlaceBeerFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateProjectKeySpecifier = ('count' | AggregateProjectKeySpecifier)[];
export type AggregateProjectFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateResetPasswordKeySpecifier = ('count' | AggregateResetPasswordKeySpecifier)[];
export type AggregateResetPasswordFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateResourceKeySpecifier = ('count' | AggregateResourceKeySpecifier)[];
export type AggregateResourceFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateResourceTagKeySpecifier = ('count' | AggregateResourceTagKeySpecifier)[];
export type AggregateResourceTagFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateRouteKeySpecifier = ('count' | AggregateRouteKeySpecifier)[];
export type AggregateRouteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateSmsMessageKeySpecifier = ('count' | AggregateSmsMessageKeySpecifier)[];
export type AggregateSmsMessageFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateSmsProviderKeySpecifier = ('count' | AggregateSmsProviderKeySpecifier)[];
export type AggregateSmsProviderFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTagKeySpecifier = ('count' | AggregateTagKeySpecifier)[];
export type AggregateTagFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTarifKeySpecifier = ('count' | AggregateTarifKeySpecifier)[];
export type AggregateTarifFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTarifRequestKeySpecifier = ('count' | AggregateTarifRequestKeySpecifier)[];
export type AggregateTarifRequestFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTeamKeySpecifier = ('count' | AggregateTeamKeySpecifier)[];
export type AggregateTeamFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTopicKeySpecifier = ('count' | AggregateTopicKeySpecifier)[];
export type AggregateTopicFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTournamentKeySpecifier = ('count' | AggregateTournamentKeySpecifier)[];
export type AggregateTournamentFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTournamentGroupKeySpecifier = ('count' | AggregateTournamentGroupKeySpecifier)[];
export type AggregateTournamentGroupFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTourneyKeySpecifier = ('count' | AggregateTourneyKeySpecifier)[];
export type AggregateTourneyFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTransactionKeySpecifier = ('count' | AggregateTransactionKeySpecifier)[];
export type AggregateTransactionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateUserKeySpecifier = ('count' | AggregateUserKeySpecifier)[];
export type AggregateUserFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateUserGroupKeySpecifier = ('count' | AggregateUserGroupKeySpecifier)[];
export type AggregateUserGroupFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateUserTarifKeySpecifier = ('count' | AggregateUserTarifKeySpecifier)[];
export type AggregateUserTarifFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateVoteKeySpecifier = ('count' | AggregateVoteKeySpecifier)[];
export type AggregateVoteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthPayloadKeySpecifier = ('success' | 'message' | 'errors' | 'token' | 'data' | AuthPayloadKeySpecifier)[];
export type AuthPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchPayloadKeySpecifier = ('count' | BatchPayloadKeySpecifier)[];
export type BatchPayloadFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BeerKeySpecifier = ('container_str' | 'uri' | 'id' | 'createdAt' | 'updatedAt' | 'beer_id' | 'name' | 'url_name' | 'description' | 'editor_content' | 'country' | 'image' | 'num_comments' | 'num_photos' | 'manufacturer' | 'region' | 'manufacture_years' | 'container' | 'alcohol' | 'wort_percent' | 'components' | 'bitter' | 'type_id' | 'color' | 'is_request' | 'rating' | 'add_user_id' | 'created_at' | 'gallery' | 'places' | 'filtered' | 'pasteurized' | BeerKeySpecifier)[];
export type BeerFieldPolicy = {
	container_str?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	beer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url_name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	editor_content?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	num_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	num_photos?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacture_years?: FieldPolicy<any> | FieldReadFunction<any>,
	container?: FieldPolicy<any> | FieldReadFunction<any>,
	alcohol?: FieldPolicy<any> | FieldReadFunction<any>,
	wort_percent?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	bitter?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	is_request?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	add_user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	places?: FieldPolicy<any> | FieldReadFunction<any>,
	filtered?: FieldPolicy<any> | FieldReadFunction<any>,
	pasteurized?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BeerConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | BeerConnectionKeySpecifier)[];
export type BeerConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BeerEdgeKeySpecifier = ('node' | 'cursor' | BeerEdgeKeySpecifier)[];
export type BeerEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BeerPayloadKeySpecifier = ('success' | 'message' | 'errors' | 'data' | BeerPayloadKeySpecifier)[];
export type BeerPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BeerPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'beer_id' | 'name' | 'url_name' | 'description' | 'editor_content' | 'country' | 'image' | 'num_comments' | 'num_photos' | 'manufacturer' | 'region' | 'manufacture_years' | 'container' | 'alcohol' | 'wort_percent' | 'components' | 'bitter' | 'type_id' | 'color' | 'is_request' | 'rating' | 'add_user_id' | 'created_at' | 'gallery' | 'filtered' | 'pasteurized' | BeerPreviousValuesKeySpecifier)[];
export type BeerPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	beer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url_name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	editor_content?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	num_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	num_photos?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacturer?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	manufacture_years?: FieldPolicy<any> | FieldReadFunction<any>,
	container?: FieldPolicy<any> | FieldReadFunction<any>,
	alcohol?: FieldPolicy<any> | FieldReadFunction<any>,
	wort_percent?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	bitter?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	is_request?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	add_user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	filtered?: FieldPolicy<any> | FieldReadFunction<any>,
	pasteurized?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BeerSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | BeerSubscriptionPayloadKeySpecifier)[];
export type BeerSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CallRequestKeySpecifier = ('id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Called' | 'Caller' | 'Room' | CallRequestKeySpecifier)[];
export type CallRequestFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	called_descriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	caller_descriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	Called?: FieldPolicy<any> | FieldReadFunction<any>,
	Caller?: FieldPolicy<any> | FieldReadFunction<any>,
	Room?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CallRequestConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | CallRequestConnectionKeySpecifier)[];
export type CallRequestConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CallRequestEdgeKeySpecifier = ('node' | 'cursor' | CallRequestEdgeKeySpecifier)[];
export type CallRequestEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CallRequestPreviousValuesKeySpecifier = ('id' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | CallRequestPreviousValuesKeySpecifier)[];
export type CallRequestPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	called_descriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	caller_descriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CallRequestResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | CallRequestResponseKeySpecifier)[];
export type CallRequestResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CallRequestSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | CallRequestSubscriptionPayloadKeySpecifier)[];
export type CallRequestSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room' | 'ReadedBy' | ChatMessageKeySpecifier)[];
export type ChatMessageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Room?: FieldPolicy<any> | FieldReadFunction<any>,
	ReadedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ChatMessageConnectionKeySpecifier)[];
export type ChatMessageConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageEdgeKeySpecifier = ('node' | 'cursor' | ChatMessageEdgeKeySpecifier)[];
export type ChatMessageEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessagePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | ChatMessagePreviousValuesKeySpecifier)[];
export type ChatMessagePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageReadedKeySpecifier = ('id' | 'createdAt' | 'Message' | 'User' | ChatMessageReadedKeySpecifier)[];
export type ChatMessageReadedFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	Message?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageReadedConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ChatMessageReadedConnectionKeySpecifier)[];
export type ChatMessageReadedConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageReadedEdgeKeySpecifier = ('node' | 'cursor' | ChatMessageReadedEdgeKeySpecifier)[];
export type ChatMessageReadedEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageReadedPreviousValuesKeySpecifier = ('id' | 'createdAt' | ChatMessageReadedPreviousValuesKeySpecifier)[];
export type ChatMessageReadedPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageReadedResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ChatMessageReadedResponseKeySpecifier)[];
export type ChatMessageReadedResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageReadedSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ChatMessageReadedSubscriptionPayloadKeySpecifier)[];
export type ChatMessageReadedSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ChatMessageResponseKeySpecifier)[];
export type ChatMessageResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ChatMessageSubscriptionPayloadKeySpecifier)[];
export type ChatMessageSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'Members' | 'CreatedBy' | 'Messages' | 'isPublic' | 'Invitations' | 'CallRequests' | ChatRoomKeySpecifier)[];
export type ChatRoomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	Members?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Messages?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	Invitations?: FieldPolicy<any> | FieldReadFunction<any>,
	CallRequests?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ChatRoomConnectionKeySpecifier)[];
export type ChatRoomConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomEdgeKeySpecifier = ('node' | 'cursor' | ChatRoomEdgeKeySpecifier)[];
export type ChatRoomEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomInvitationKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'User' | 'ChatRoom' | 'Notice' | ChatRoomInvitationKeySpecifier)[];
export type ChatRoomInvitationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	ChatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	Notice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomInvitationConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ChatRoomInvitationConnectionKeySpecifier)[];
export type ChatRoomInvitationConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomInvitationEdgeKeySpecifier = ('node' | 'cursor' | ChatRoomInvitationEdgeKeySpecifier)[];
export type ChatRoomInvitationEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomInvitationPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | ChatRoomInvitationPreviousValuesKeySpecifier)[];
export type ChatRoomInvitationPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomInvitationSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ChatRoomInvitationSubscriptionPayloadKeySpecifier)[];
export type ChatRoomInvitationSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | ChatRoomPreviousValuesKeySpecifier)[];
export type ChatRoomPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ChatRoomResponseKeySpecifier)[];
export type ChatRoomResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ChatRoomSubscriptionPayloadKeySpecifier)[];
export type ChatRoomSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CityKeySpecifier = ('id' | 'city_id' | 'name' | 'alias' | 'lat' | 'lng' | CityKeySpecifier)[];
export type CityFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	city_id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CityConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | CityConnectionKeySpecifier)[];
export type CityConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CityEdgeKeySpecifier = ('node' | 'cursor' | CityEdgeKeySpecifier)[];
export type CityEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CityPreviousValuesKeySpecifier = ('id' | 'city_id' | 'name' | 'alias' | 'lat' | 'lng' | CityPreviousValuesKeySpecifier)[];
export type CityPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	city_id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CitySubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | CitySubscriptionPayloadKeySpecifier)[];
export type CitySubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'comment_id' | 'object_id' | 'type_id' | 'editor_content' | 'is_checked' | 'name' | 'created_by' | 'parent' | 'uri' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	comment_id?: FieldPolicy<any> | FieldReadFunction<any>,
	object_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	editor_content?: FieldPolicy<any> | FieldReadFunction<any>,
	is_checked?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | CommentConnectionKeySpecifier)[];
export type CommentConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentEdgeKeySpecifier = ('node' | 'cursor' | CommentEdgeKeySpecifier)[];
export type CommentEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'comment_id' | 'object_id' | 'type_id' | 'editor_content' | 'is_checked' | 'name' | 'parent' | CommentPreviousValuesKeySpecifier)[];
export type CommentPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	comment_id?: FieldPolicy<any> | FieldReadFunction<any>,
	object_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	editor_content?: FieldPolicy<any> | FieldReadFunction<any>,
	is_checked?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | CommentResponseKeySpecifier)[];
export type CommentResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | CommentSubscriptionPayloadKeySpecifier)[];
export type CommentSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentTypeKeySpecifier = ('id' | 'name' | 'code' | CommentTypeKeySpecifier)[];
export type CommentTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | CommentTypeConnectionKeySpecifier)[];
export type CommentTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentTypeEdgeKeySpecifier = ('node' | 'cursor' | CommentTypeEdgeKeySpecifier)[];
export type CommentTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentTypePreviousValuesKeySpecifier = ('id' | 'name' | 'code' | CommentTypePreviousValuesKeySpecifier)[];
export type CommentTypePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentTypeSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | CommentTypeSubscriptionPayloadKeySpecifier)[];
export type CommentTypeSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorKeySpecifier = ('key' | 'message' | ErrorKeySpecifier)[];
export type ErrorFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'CreatedBy' | 'Transaction' | 'IncomeTransactions' | 'OutcomeTransactions' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'BlocksMined' | 'UserAuthed' | 'balance' | EthAccountKeySpecifier)[];
export type EthAccountFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Transaction?: FieldPolicy<any> | FieldReadFunction<any>,
	IncomeTransactions?: FieldPolicy<any> | FieldReadFunction<any>,
	OutcomeTransactions?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	bytecode?: FieldPolicy<any> | FieldReadFunction<any>,
	abi?: FieldPolicy<any> | FieldReadFunction<any>,
	ContractSource?: FieldPolicy<any> | FieldReadFunction<any>,
	BlocksMined?: FieldPolicy<any> | FieldReadFunction<any>,
	UserAuthed?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | EthAccountConnectionKeySpecifier)[];
export type EthAccountConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountEdgeKeySpecifier = ('node' | 'cursor' | EthAccountEdgeKeySpecifier)[];
export type EthAccountEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | EthAccountPreviousValuesKeySpecifier)[];
export type EthAccountPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	bytecode?: FieldPolicy<any> | FieldReadFunction<any>,
	abi?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | EthAccountResponseKeySpecifier)[];
export type EthAccountResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | EthAccountSubscriptionPayloadKeySpecifier)[];
export type EthAccountSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthBlockKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'hash' | 'number' | 'difficulty' | 'totalDifficulty' | 'extraData' | 'gasLimit' | 'gasUsed' | 'mixHash' | 'nonce' | 'parentHash' | 'receiptsRoot' | 'sha3Uncles' | 'size' | 'stateRoot' | 'date' | 'Miner' | 'Transactions' | 'transactionsRoot' | 'transactions_count' | 'Uncles' | EthBlockKeySpecifier)[];
export type EthBlockFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	difficulty?: FieldPolicy<any> | FieldReadFunction<any>,
	totalDifficulty?: FieldPolicy<any> | FieldReadFunction<any>,
	extraData?: FieldPolicy<any> | FieldReadFunction<any>,
	gasLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	gasUsed?: FieldPolicy<any> | FieldReadFunction<any>,
	mixHash?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	parentHash?: FieldPolicy<any> | FieldReadFunction<any>,
	receiptsRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	sha3Uncles?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	stateRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	Miner?: FieldPolicy<any> | FieldReadFunction<any>,
	Transactions?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionsRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions_count?: FieldPolicy<any> | FieldReadFunction<any>,
	Uncles?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthBlockConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | EthBlockConnectionKeySpecifier)[];
export type EthBlockConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthBlockEdgeKeySpecifier = ('node' | 'cursor' | EthBlockEdgeKeySpecifier)[];
export type EthBlockEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthBlockPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'hash' | 'number' | 'difficulty' | 'totalDifficulty' | 'extraData' | 'gasLimit' | 'gasUsed' | 'mixHash' | 'nonce' | 'parentHash' | 'receiptsRoot' | 'sha3Uncles' | 'size' | 'stateRoot' | 'date' | 'transactionsRoot' | 'transactions_count' | EthBlockPreviousValuesKeySpecifier)[];
export type EthBlockPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	difficulty?: FieldPolicy<any> | FieldReadFunction<any>,
	totalDifficulty?: FieldPolicy<any> | FieldReadFunction<any>,
	extraData?: FieldPolicy<any> | FieldReadFunction<any>,
	gasLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	gasUsed?: FieldPolicy<any> | FieldReadFunction<any>,
	mixHash?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	parentHash?: FieldPolicy<any> | FieldReadFunction<any>,
	receiptsRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	sha3Uncles?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	stateRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionsRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthBlockResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | EthBlockResponseKeySpecifier)[];
export type EthBlockResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthBlockSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | EthBlockSubscriptionPayloadKeySpecifier)[];
export type EthBlockSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthContractSourceKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'source' | 'CreatedBy' | 'Accounts' | EthContractSourceKeySpecifier)[];
export type EthContractSourceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Accounts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthContractSourceConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | EthContractSourceConnectionKeySpecifier)[];
export type EthContractSourceConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthContractSourceEdgeKeySpecifier = ('node' | 'cursor' | EthContractSourceEdgeKeySpecifier)[];
export type EthContractSourceEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthContractSourcePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'source' | EthContractSourcePreviousValuesKeySpecifier)[];
export type EthContractSourcePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthContractSourceResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | EthContractSourceResponseKeySpecifier)[];
export type EthContractSourceResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthContractSourceSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | EthContractSourceSubscriptionPayloadKeySpecifier)[];
export type EthContractSourceSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthPersonalAccountKeySpecifier = ('address' | 'balance' | EthPersonalAccountKeySpecifier)[];
export type EthPersonalAccountFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthPersonalAccountResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | EthPersonalAccountResponseKeySpecifier)[];
export type EthPersonalAccountResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthTransactionKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'Sender' | 'Receiver' | 'Account' | 'address' | 'type' | 'v' | 'r' | 's' | 'Block' | EthTransactionKeySpecifier)[];
export type EthTransactionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	chainId?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	input?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	Sender?: FieldPolicy<any> | FieldReadFunction<any>,
	Receiver?: FieldPolicy<any> | FieldReadFunction<any>,
	Account?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	v?: FieldPolicy<any> | FieldReadFunction<any>,
	r?: FieldPolicy<any> | FieldReadFunction<any>,
	s?: FieldPolicy<any> | FieldReadFunction<any>,
	Block?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthTransactionConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | EthTransactionConnectionKeySpecifier)[];
export type EthTransactionConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthTransactionEdgeKeySpecifier = ('node' | 'cursor' | EthTransactionEdgeKeySpecifier)[];
export type EthTransactionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthTransactionPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'address' | 'type' | 'v' | 'r' | 's' | EthTransactionPreviousValuesKeySpecifier)[];
export type EthTransactionPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	chainId?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	input?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	v?: FieldPolicy<any> | FieldReadFunction<any>,
	r?: FieldPolicy<any> | FieldReadFunction<any>,
	s?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthTransactionResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | EthTransactionResponseKeySpecifier)[];
export type EthTransactionResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthTransactionSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | EthTransactionSubscriptionPayloadKeySpecifier)[];
export type EthTransactionSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileKeySpecifier = ('id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'CreatedBy' | 'ImageResource' | FileKeySpecifier)[];
export type FileFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	ImageResource?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | FileConnectionKeySpecifier)[];
export type FileConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileEdgeKeySpecifier = ('node' | 'cursor' | FileEdgeKeySpecifier)[];
export type FileEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilePreviousValuesKeySpecifier = ('id' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | FilePreviousValuesKeySpecifier)[];
export type FilePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | FileResponseKeySpecifier)[];
export type FileResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | FileSubscriptionPayloadKeySpecifier)[];
export type FileSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'CreatedBy' | 'Tourney' | 'Users' | 'Teams' | 'Parent' | 'Childs' | 'Results' | GameKeySpecifier)[];
export type GameFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Tourney?: FieldPolicy<any> | FieldReadFunction<any>,
	Users?: FieldPolicy<any> | FieldReadFunction<any>,
	Teams?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	Childs?: FieldPolicy<any> | FieldReadFunction<any>,
	Results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | GameConnectionKeySpecifier)[];
export type GameConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameEdgeKeySpecifier = ('node' | 'cursor' | GameEdgeKeySpecifier)[];
export type GameEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GamePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | GamePreviousValuesKeySpecifier)[];
export type GamePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | GameResponseKeySpecifier)[];
export type GameResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResultKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'CreatedBy' | 'User' | 'Team' | 'Game' | 'value' | GameResultKeySpecifier)[];
export type GameResultFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	Team?: FieldPolicy<any> | FieldReadFunction<any>,
	Game?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResultConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | GameResultConnectionKeySpecifier)[];
export type GameResultConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResultEdgeKeySpecifier = ('node' | 'cursor' | GameResultEdgeKeySpecifier)[];
export type GameResultEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResultPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | GameResultPreviousValuesKeySpecifier)[];
export type GameResultPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResultResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | GameResultResponseKeySpecifier)[];
export type GameResultResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResultSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | GameResultSubscriptionPayloadKeySpecifier)[];
export type GameResultSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | GameSubscriptionPayloadKeySpecifier)[];
export type GameSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IceCandidateKeySpecifier = ('from' | 'to' | 'sdp' | 'callRequestId' | IceCandidateKeySpecifier)[];
export type IceCandidateFieldPolicy = {
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>,
	sdp?: FieldPolicy<any> | FieldReadFunction<any>,
	callRequestId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'errorCode' | 'SmsMessage' | 'Items' | LetsadsSmsMessageStatusKeySpecifier)[];
export type LetsadsSmsMessageStatusFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	errorCode?: FieldPolicy<any> | FieldReadFunction<any>,
	SmsMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	Items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | LetsadsSmsMessageStatusConnectionKeySpecifier)[];
export type LetsadsSmsMessageStatusConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusEdgeKeySpecifier = ('node' | 'cursor' | LetsadsSmsMessageStatusEdgeKeySpecifier)[];
export type LetsadsSmsMessageStatusEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusItemKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'sms_id' | LetsadsSmsMessageStatusItemKeySpecifier)[];
export type LetsadsSmsMessageStatusItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	sms_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusItemConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | LetsadsSmsMessageStatusItemConnectionKeySpecifier)[];
export type LetsadsSmsMessageStatusItemConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusItemEdgeKeySpecifier = ('node' | 'cursor' | LetsadsSmsMessageStatusItemEdgeKeySpecifier)[];
export type LetsadsSmsMessageStatusItemEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusItemPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'sms_id' | LetsadsSmsMessageStatusItemPreviousValuesKeySpecifier)[];
export type LetsadsSmsMessageStatusItemPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	sms_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusItemSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | LetsadsSmsMessageStatusItemSubscriptionPayloadKeySpecifier)[];
export type LetsadsSmsMessageStatusItemSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'errorCode' | LetsadsSmsMessageStatusPreviousValuesKeySpecifier)[];
export type LetsadsSmsMessageStatusPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	errorCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | LetsadsSmsMessageStatusSubscriptionPayloadKeySpecifier)[];
export type LetsadsSmsMessageStatusSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetterKeySpecifier = ('id' | 'email' | 'subject' | 'message' | 'status' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'Place' | LetterKeySpecifier)[];
export type LetterFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOnSend?: FieldPolicy<any> | FieldReadFunction<any>,
	replyTo?: FieldPolicy<any> | FieldReadFunction<any>,
	returnTo?: FieldPolicy<any> | FieldReadFunction<any>,
	Place?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetterConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | LetterConnectionKeySpecifier)[];
export type LetterConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetterEdgeKeySpecifier = ('node' | 'cursor' | LetterEdgeKeySpecifier)[];
export type LetterEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetterPreviousValuesKeySpecifier = ('id' | 'email' | 'subject' | 'message' | 'status' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | LetterPreviousValuesKeySpecifier)[];
export type LetterPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOnSend?: FieldPolicy<any> | FieldReadFunction<any>,
	replyTo?: FieldPolicy<any> | FieldReadFunction<any>,
	returnTo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetterSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | LetterSubscriptionPayloadKeySpecifier)[];
export type LetterSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogKeySpecifier = ('id' | 'level' | 'objectType' | 'message' | 'stack' | LogKeySpecifier)[];
export type LogFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	objectType?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	stack?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | LogConnectionKeySpecifier)[];
export type LogConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogEdgeKeySpecifier = ('node' | 'cursor' | LogEdgeKeySpecifier)[];
export type LogEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogPreviousValuesKeySpecifier = ('id' | 'level' | 'objectType' | 'message' | 'stack' | LogPreviousValuesKeySpecifier)[];
export type LogPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	objectType?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	stack?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | LogSubscriptionPayloadKeySpecifier)[];
export type LogSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogedInKeySpecifier = ('id' | 'createdAt' | 'fake' | 'User' | LogedInKeySpecifier)[];
export type LogedInFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	fake?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogedInConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | LogedInConnectionKeySpecifier)[];
export type LogedInConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogedInEdgeKeySpecifier = ('node' | 'cursor' | LogedInEdgeKeySpecifier)[];
export type LogedInEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogedInPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'fake' | LogedInPreviousValuesKeySpecifier)[];
export type LogedInPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	fake?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogedInSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | LogedInSubscriptionPayloadKeySpecifier)[];
export type LogedInSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MapPlaceConnectionKeySpecifier = ('aggregate' | 'edges' | MapPlaceConnectionKeySpecifier)[];
export type MapPlaceConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MapPlaceConnectionEdgesKeySpecifier = ('node' | MapPlaceConnectionEdgesKeySpecifier)[];
export type MapPlaceConnectionEdgesFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createTopicProcessor' | 'updateTopicProcessor' | 'updatePlaceData' | 'updatePlaceProcessor' | 'updateBeerProcessor' | 'createBeerProcessor' | 'togglePlaceBeer' | 'updatePlaceBeerProcessor' | 'createPlaceProcessor' | 'createUserTarif' | 'createTarifRequest' | 'createCommentProcessor' | 'updateCommentProcessor' | 'createCity' | 'updateCity' | 'singleUpload' | 'multipleUpload' | 'signup' | 'signin' | 'updateUserProcessor' | 'resetPasswordProcessor' | 'createResetPasswordProcessor' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createTopicProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTopicProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePlaceData?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePlaceProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBeerProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createBeerProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	togglePlaceBeer?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePlaceBeerProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createPlaceProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createUserTarif?: FieldPolicy<any> | FieldReadFunction<any>,
	createTarifRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	createCommentProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCommentProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createCity?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCity?: FieldPolicy<any> | FieldReadFunction<any>,
	singleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	multipleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	signup?: FieldPolicy<any> | FieldReadFunction<any>,
	signin?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPasswordProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createResetPasswordProcessor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeKeySpecifier = ('id' | 'createdAt' | 'type' | 'User' | 'CreatedBy' | 'ChatMessage' | 'ChatRoomInvitation' | NoticeKeySpecifier)[];
export type NoticeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	ChatMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	ChatRoomInvitation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | NoticeConnectionKeySpecifier)[];
export type NoticeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeEdgeKeySpecifier = ('node' | 'cursor' | NoticeEdgeKeySpecifier)[];
export type NoticeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'type' | NoticePreviousValuesKeySpecifier)[];
export type NoticePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | NoticeSubscriptionPayloadKeySpecifier)[];
export type NoticeSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypeKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'Users' | 'CreatedBy' | NotificationTypeKeySpecifier)[];
export type NotificationTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	Users?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | NotificationTypeConnectionKeySpecifier)[];
export type NotificationTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypeEdgeKeySpecifier = ('node' | 'cursor' | NotificationTypeEdgeKeySpecifier)[];
export type NotificationTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | NotificationTypePreviousValuesKeySpecifier)[];
export type NotificationTypePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypeSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | NotificationTypeSubscriptionPayloadKeySpecifier)[];
export type NotificationTypeSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhotoKeySpecifier = ('id' | 'photo_id' | 'user_id' | 'type_id' | 'name' | 'description' | 'num_comments' | 'created_at' | 'updated_at' | 'file_name' | PhotoKeySpecifier)[];
export type PhotoFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	photo_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	num_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	file_name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhotoConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | PhotoConnectionKeySpecifier)[];
export type PhotoConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhotoEdgeKeySpecifier = ('node' | 'cursor' | PhotoEdgeKeySpecifier)[];
export type PhotoEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhotoPreviousValuesKeySpecifier = ('id' | 'photo_id' | 'user_id' | 'type_id' | 'name' | 'description' | 'num_comments' | 'created_at' | 'updated_at' | 'file_name' | PhotoPreviousValuesKeySpecifier)[];
export type PhotoPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	photo_id?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	num_comments?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	file_name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhotoSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | PhotoSubscriptionPayloadKeySpecifier)[];
export type PhotoSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceKeySpecifier = ('minPrice' | 'maxPrice' | 'uri' | 'id' | 'updatedAt' | 'createdAt' | 'place_id' | 'name' | 'description' | 'address' | 'lng' | 'lat' | 'website' | 'phone' | 'work_hours' | 'metro' | 'content' | 'schedules' | 'url_name' | 'image' | 'gallery' | 'is_bar' | 'is_shop' | 'is_brewery' | 'active' | 'email' | 'beers' | 'Owner' | 'Letters' | 'best' | 'is_request' | PlaceKeySpecifier)[];
export type PlaceFieldPolicy = {
	minPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	maxPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	place_id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>,
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	work_hours?: FieldPolicy<any> | FieldReadFunction<any>,
	metro?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	schedules?: FieldPolicy<any> | FieldReadFunction<any>,
	url_name?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	is_bar?: FieldPolicy<any> | FieldReadFunction<any>,
	is_shop?: FieldPolicy<any> | FieldReadFunction<any>,
	is_brewery?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	beers?: FieldPolicy<any> | FieldReadFunction<any>,
	Owner?: FieldPolicy<any> | FieldReadFunction<any>,
	Letters?: FieldPolicy<any> | FieldReadFunction<any>,
	best?: FieldPolicy<any> | FieldReadFunction<any>,
	is_request?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceBeerKeySpecifier = ('id' | 'price' | 'Place' | 'Beer' | PlaceBeerKeySpecifier)[];
export type PlaceBeerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	Place?: FieldPolicy<any> | FieldReadFunction<any>,
	Beer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceBeerConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | PlaceBeerConnectionKeySpecifier)[];
export type PlaceBeerConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceBeerEdgeKeySpecifier = ('node' | 'cursor' | PlaceBeerEdgeKeySpecifier)[];
export type PlaceBeerEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceBeerPayloadKeySpecifier = ('success' | 'message' | 'errors' | 'data' | PlaceBeerPayloadKeySpecifier)[];
export type PlaceBeerPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceBeerPreviousValuesKeySpecifier = ('id' | 'price' | PlaceBeerPreviousValuesKeySpecifier)[];
export type PlaceBeerPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceBeerSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | PlaceBeerSubscriptionPayloadKeySpecifier)[];
export type PlaceBeerSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | PlaceConnectionKeySpecifier)[];
export type PlaceConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceEdgeKeySpecifier = ('node' | 'cursor' | PlaceEdgeKeySpecifier)[];
export type PlaceEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlacePayloadKeySpecifier = ('success' | 'message' | 'errors' | 'data' | PlacePayloadKeySpecifier)[];
export type PlacePayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlacePreviousValuesKeySpecifier = ('id' | 'updatedAt' | 'createdAt' | 'place_id' | 'name' | 'description' | 'address' | 'lng' | 'lat' | 'website' | 'phone' | 'work_hours' | 'metro' | 'content' | 'schedules' | 'url_name' | 'image' | 'gallery' | 'is_bar' | 'is_shop' | 'is_brewery' | 'active' | 'email' | 'best' | 'is_request' | PlacePreviousValuesKeySpecifier)[];
export type PlacePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	place_id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>,
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	work_hours?: FieldPolicy<any> | FieldReadFunction<any>,
	metro?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	schedules?: FieldPolicy<any> | FieldReadFunction<any>,
	url_name?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	is_bar?: FieldPolicy<any> | FieldReadFunction<any>,
	is_shop?: FieldPolicy<any> | FieldReadFunction<any>,
	is_brewery?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	best?: FieldPolicy<any> | FieldReadFunction<any>,
	is_request?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | PlaceResponseKeySpecifier)[];
export type PlaceResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlaceSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | PlaceSubscriptionPayloadKeySpecifier)[];
export type PlaceSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectKeySpecifier = ('id' | 'domain' | 'PrismaResources' | 'PrismaUsers' | ProjectKeySpecifier)[];
export type ProjectFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	PrismaResources?: FieldPolicy<any> | FieldReadFunction<any>,
	PrismaUsers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ProjectConnectionKeySpecifier)[];
export type ProjectConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectEdgeKeySpecifier = ('node' | 'cursor' | ProjectEdgeKeySpecifier)[];
export type ProjectEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectPreviousValuesKeySpecifier = ('id' | 'domain' | ProjectPreviousValuesKeySpecifier)[];
export type ProjectPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ProjectSubscriptionPayloadKeySpecifier)[];
export type ProjectSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('me' | 'mapPlacesConnection' | 'mapGeoObjectsConnection' | 'routes' | 'userGroups' | 'ethAccounts' | 'ethTransactions' | 'resources' | 'chatRooms' | 'notices' | 'notificationTypes' | 'resourceTags' | 'tags' | 'games' | 'gameResults' | 'tournaments' | 'tournamentGroups' | 'tourneys' | 'votes' | 'callRequests' | 'beers' | 'userTarifs' | 'cities' | 'comments' | 'places' | 'tarifs' | 'ethBlocks' | 'ethContractSources' | 'users' | 'chatMessages' | 'route' | 'ethAccount' | 'ethTransaction' | 'resource' | 'chatMessageReaded' | 'chatRoom' | 'notice' | 'notificationType' | 'resourceTag' | 'tag' | 'game' | 'gameResult' | 'tournament' | 'tournamentGroup' | 'tourney' | 'vote' | 'beer' | 'city' | 'comment' | 'place' | 'topic' | 'ethBlock' | 'ethContractSource' | 'user' | 'chatMessage' | 'routesConnection' | 'ethAccountsConnection' | 'ethTransactionsConnection' | 'resourcesConnection' | 'chatMessageReadedsConnection' | 'chatRoomsConnection' | 'noticesConnection' | 'notificationTypesConnection' | 'resourceTagsConnection' | 'tagsConnection' | 'gamesConnection' | 'gameResultsConnection' | 'tournamentsConnection' | 'tournamentGroupsConnection' | 'tourneysConnection' | 'votesConnection' | 'callRequestsConnection' | 'beersConnection' | 'commentsConnection' | 'placesConnection' | 'topicsConnection' | 'ethBlocksConnection' | 'ethContractSourcesConnection' | 'usersConnection' | 'chatMessagesConnection' | 'ethNet' | 'ethCoinbase' | 'ethPersonalAccounts' | 'ethBalance' | 'ethTransactionCount' | 'ethSyncState' | 'ethGetBlockNumber' | 'ethGetBlock' | 'ethGetBlockTransactionCount' | 'ethGetTransaction' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	mapPlacesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	mapGeoObjectsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	routes?: FieldPolicy<any> | FieldReadFunction<any>,
	userGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	ethAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	ethTransactions?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRooms?: FieldPolicy<any> | FieldReadFunction<any>,
	notices?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceTags?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	games?: FieldPolicy<any> | FieldReadFunction<any>,
	gameResults?: FieldPolicy<any> | FieldReadFunction<any>,
	tournaments?: FieldPolicy<any> | FieldReadFunction<any>,
	tournamentGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	tourneys?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>,
	callRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	beers?: FieldPolicy<any> | FieldReadFunction<any>,
	userTarifs?: FieldPolicy<any> | FieldReadFunction<any>,
	cities?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	places?: FieldPolicy<any> | FieldReadFunction<any>,
	tarifs?: FieldPolicy<any> | FieldReadFunction<any>,
	ethBlocks?: FieldPolicy<any> | FieldReadFunction<any>,
	ethContractSources?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	route?: FieldPolicy<any> | FieldReadFunction<any>,
	ethAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	ethTransaction?: FieldPolicy<any> | FieldReadFunction<any>,
	resource?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessageReaded?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	notice?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationType?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceTag?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>,
	game?: FieldPolicy<any> | FieldReadFunction<any>,
	gameResult?: FieldPolicy<any> | FieldReadFunction<any>,
	tournament?: FieldPolicy<any> | FieldReadFunction<any>,
	tournamentGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	tourney?: FieldPolicy<any> | FieldReadFunction<any>,
	vote?: FieldPolicy<any> | FieldReadFunction<any>,
	beer?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	place?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>,
	ethBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	ethContractSource?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	routesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	ethAccountsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	ethTransactionsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessageReadedsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRoomsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	noticesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTypesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceTagsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	tagsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	gamesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	gameResultsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	tournamentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	tournamentGroupsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	tourneysConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	votesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	callRequestsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	beersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	placesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	topicsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	ethBlocksConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	ethContractSourcesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	usersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessagesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	ethNet?: FieldPolicy<any> | FieldReadFunction<any>,
	ethCoinbase?: FieldPolicy<any> | FieldReadFunction<any>,
	ethPersonalAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	ethBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	ethTransactionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	ethSyncState?: FieldPolicy<any> | FieldReadFunction<any>,
	ethGetBlockNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	ethGetBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	ethGetBlockTransactionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	ethGetTransaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User' | ResetPasswordKeySpecifier)[];
export type ResetPasswordFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	validTill?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ResetPasswordConnectionKeySpecifier)[];
export type ResetPasswordConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordEdgeKeySpecifier = ('node' | 'cursor' | ResetPasswordEdgeKeySpecifier)[];
export type ResetPasswordEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | ResetPasswordPreviousValuesKeySpecifier)[];
export type ResetPasswordPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	validTill?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ResetPasswordResponseKeySpecifier)[];
export type ResetPasswordResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ResetPasswordSubscriptionPayloadKeySpecifier)[];
export type ResetPasswordSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceKeySpecifier = ('id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'CreatedBy' | 'Parent' | 'Childs' | 'Image' | 'PrismaProject' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'CommentTarget' | 'Comments' | 'Votes' | 'Tags' | ResourceKeySpecifier)[];
export type ResourceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	hidemenu?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	isfolder?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	Childs?: FieldPolicy<any> | FieldReadFunction<any>,
	Image?: FieldPolicy<any> | FieldReadFunction<any>,
	PrismaProject?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	positiveVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	negativeVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	neutralVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	CommentTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	Votes?: FieldPolicy<any> | FieldReadFunction<any>,
	Tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ResourceConnectionKeySpecifier)[];
export type ResourceConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceEdgeKeySpecifier = ('node' | 'cursor' | ResourceEdgeKeySpecifier)[];
export type ResourceEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourcePreviousValuesKeySpecifier = ('id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | ResourcePreviousValuesKeySpecifier)[];
export type ResourcePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	hidemenu?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	isfolder?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	positiveVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	negativeVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	neutralVotesCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ResourceResponseKeySpecifier)[];
export type ResourceResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ResourceSubscriptionPayloadKeySpecifier)[];
export type ResourceSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTagKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'status' | 'Resource' | 'Tag' | 'CreatedBy' | ResourceTagKeySpecifier)[];
export type ResourceTagFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	Tag?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTagConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ResourceTagConnectionKeySpecifier)[];
export type ResourceTagConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTagEdgeKeySpecifier = ('node' | 'cursor' | ResourceTagEdgeKeySpecifier)[];
export type ResourceTagEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTagPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'status' | ResourceTagPreviousValuesKeySpecifier)[];
export type ResourceTagPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTagSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ResourceTagSubscriptionPayloadKeySpecifier)[];
export type ResourceTagSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteKeySpecifier = ('id' | 'name' | 'path' | 'exact' | 'component' | 'Parent' | 'Childs' | 'CreatedBy' | RouteKeySpecifier)[];
export type RouteFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	exact?: FieldPolicy<any> | FieldReadFunction<any>,
	component?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	Childs?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | RouteConnectionKeySpecifier)[];
export type RouteConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteEdgeKeySpecifier = ('node' | 'cursor' | RouteEdgeKeySpecifier)[];
export type RouteEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoutePreviousValuesKeySpecifier = ('id' | 'name' | 'path' | 'exact' | 'component' | RoutePreviousValuesKeySpecifier)[];
export type RoutePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	exact?: FieldPolicy<any> | FieldReadFunction<any>,
	component?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | RouteResponseKeySpecifier)[];
export type RouteResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | RouteSubscriptionPayloadKeySpecifier)[];
export type RouteSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessageKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'recipients' | 'Provider' | 'deletOnSend' | 'CreatedBy' | 'Status' | SmsMessageKeySpecifier)[];
export type SmsMessageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	recipients?: FieldPolicy<any> | FieldReadFunction<any>,
	Provider?: FieldPolicy<any> | FieldReadFunction<any>,
	deletOnSend?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessageConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | SmsMessageConnectionKeySpecifier)[];
export type SmsMessageConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessageEdgeKeySpecifier = ('node' | 'cursor' | SmsMessageEdgeKeySpecifier)[];
export type SmsMessageEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessagePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'recipients' | 'deletOnSend' | SmsMessagePreviousValuesKeySpecifier)[];
export type SmsMessagePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	recipients?: FieldPolicy<any> | FieldReadFunction<any>,
	deletOnSend?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessageResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | SmsMessageResponseKeySpecifier)[];
export type SmsMessageResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessageSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | SmsMessageSubscriptionPayloadKeySpecifier)[];
export type SmsMessageSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderKeySpecifier = ('id' | 'name' | 'credentials' | 'CreatedBy' | SmsProviderKeySpecifier)[];
export type SmsProviderFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	credentials?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | SmsProviderConnectionKeySpecifier)[];
export type SmsProviderConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderEdgeKeySpecifier = ('node' | 'cursor' | SmsProviderEdgeKeySpecifier)[];
export type SmsProviderEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderPreviousValuesKeySpecifier = ('id' | 'name' | 'credentials' | SmsProviderPreviousValuesKeySpecifier)[];
export type SmsProviderPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	credentials?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | SmsProviderResponseKeySpecifier)[];
export type SmsProviderResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | SmsProviderSubscriptionPayloadKeySpecifier)[];
export type SmsProviderSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('route' | 'ethTransaction' | 'chatMessageReaded' | 'chatRoom' | 'notice' | 'game' | 'gameResult' | 'tournament' | 'tournamentGroup' | 'tourney' | 'callRequest' | 'user' | 'chatMessage' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	route?: FieldPolicy<any> | FieldReadFunction<any>,
	ethTransaction?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessageReaded?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	notice?: FieldPolicy<any> | FieldReadFunction<any>,
	game?: FieldPolicy<any> | FieldReadFunction<any>,
	gameResult?: FieldPolicy<any> | FieldReadFunction<any>,
	tournament?: FieldPolicy<any> | FieldReadFunction<any>,
	tournamentGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	tourney?: FieldPolicy<any> | FieldReadFunction<any>,
	callRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'Resources' | 'CreatedBy' | TagKeySpecifier)[];
export type TagFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	Resources?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TagConnectionKeySpecifier)[];
export type TagConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagEdgeKeySpecifier = ('node' | 'cursor' | TagEdgeKeySpecifier)[];
export type TagEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | TagPreviousValuesKeySpecifier)[];
export type TagPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TagSubscriptionPayloadKeySpecifier)[];
export type TagSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TarifKeySpecifier = ('id' | 'name' | 'active' | 'maxPriceItems' | 'price' | 'UserTarifs' | 'allowIcon' | 'allowBanner' | TarifKeySpecifier)[];
export type TarifFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	maxPriceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	UserTarifs?: FieldPolicy<any> | FieldReadFunction<any>,
	allowIcon?: FieldPolicy<any> | FieldReadFunction<any>,
	allowBanner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TarifConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TarifConnectionKeySpecifier)[];
export type TarifConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TarifEdgeKeySpecifier = ('node' | 'cursor' | TarifEdgeKeySpecifier)[];
export type TarifEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TarifPreviousValuesKeySpecifier = ('id' | 'name' | 'active' | 'maxPriceItems' | 'price' | 'allowIcon' | 'allowBanner' | TarifPreviousValuesKeySpecifier)[];
export type TarifPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	maxPriceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	allowIcon?: FieldPolicy<any> | FieldReadFunction<any>,
	allowBanner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TarifRequestKeySpecifier = ('id' | 'User' | 'Tarif' | 'createdAt' | 'executed' | TarifRequestKeySpecifier)[];
export type TarifRequestFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	Tarif?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	executed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TarifRequestConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TarifRequestConnectionKeySpecifier)[];
export type TarifRequestConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TarifRequestEdgeKeySpecifier = ('node' | 'cursor' | TarifRequestEdgeKeySpecifier)[];
export type TarifRequestEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TarifRequestPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'executed' | TarifRequestPreviousValuesKeySpecifier)[];
export type TarifRequestPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	executed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TarifRequestSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TarifRequestSubscriptionPayloadKeySpecifier)[];
export type TarifRequestSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TarifSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TarifSubscriptionPayloadKeySpecifier)[];
export type TarifSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamKeySpecifier = ('id' | TeamKeySpecifier)[];
export type TeamFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TeamConnectionKeySpecifier)[];
export type TeamConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamEdgeKeySpecifier = ('node' | 'cursor' | TeamEdgeKeySpecifier)[];
export type TeamEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamPreviousValuesKeySpecifier = ('id' | TeamPreviousValuesKeySpecifier)[];
export type TeamPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TeamSubscriptionPayloadKeySpecifier)[];
export type TeamSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicKeySpecifier = ('id' | 'topic_id' | 'updatedAt' | 'createdAt' | 'created_at' | 'created_by' | 'name' | 'editor_content' | 'url_name' | 'type_id' | 'published' | 'description' | 'uri' | TopicKeySpecifier)[];
export type TopicFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	topic_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	created_by?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	editor_content?: FieldPolicy<any> | FieldReadFunction<any>,
	url_name?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TopicConnectionKeySpecifier)[];
export type TopicConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicEdgeKeySpecifier = ('node' | 'cursor' | TopicEdgeKeySpecifier)[];
export type TopicEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicPreviousValuesKeySpecifier = ('id' | 'topic_id' | 'updatedAt' | 'createdAt' | 'created_at' | 'name' | 'editor_content' | 'url_name' | 'type_id' | 'published' | 'description' | TopicPreviousValuesKeySpecifier)[];
export type TopicPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	topic_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	editor_content?: FieldPolicy<any> | FieldReadFunction<any>,
	url_name?: FieldPolicy<any> | FieldReadFunction<any>,
	type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TopicResponseKeySpecifier)[];
export type TopicResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TopicSubscriptionPayloadKeySpecifier)[];
export type TopicSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Tourneys' | 'Group' | TournamentKeySpecifier)[];
export type TournamentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Tourneys?: FieldPolicy<any> | FieldReadFunction<any>,
	Group?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TournamentConnectionKeySpecifier)[];
export type TournamentConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentEdgeKeySpecifier = ('node' | 'cursor' | TournamentEdgeKeySpecifier)[];
export type TournamentEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentGroupKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Tournaments' | TournamentGroupKeySpecifier)[];
export type TournamentGroupFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Tournaments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentGroupConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TournamentGroupConnectionKeySpecifier)[];
export type TournamentGroupConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentGroupEdgeKeySpecifier = ('node' | 'cursor' | TournamentGroupEdgeKeySpecifier)[];
export type TournamentGroupEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentGroupPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | TournamentGroupPreviousValuesKeySpecifier)[];
export type TournamentGroupPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentGroupResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TournamentGroupResponseKeySpecifier)[];
export type TournamentGroupResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentGroupSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TournamentGroupSubscriptionPayloadKeySpecifier)[];
export type TournamentGroupSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | TournamentPreviousValuesKeySpecifier)[];
export type TournamentPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TournamentResponseKeySpecifier)[];
export type TournamentResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TournamentSubscriptionPayloadKeySpecifier)[];
export type TournamentSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'CreatedBy' | 'Tournament' | 'Users' | 'Games' | TourneyKeySpecifier)[];
export type TourneyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	date_till?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Tournament?: FieldPolicy<any> | FieldReadFunction<any>,
	Users?: FieldPolicy<any> | FieldReadFunction<any>,
	Games?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TourneyConnectionKeySpecifier)[];
export type TourneyConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyEdgeKeySpecifier = ('node' | 'cursor' | TourneyEdgeKeySpecifier)[];
export type TourneyEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | TourneyPreviousValuesKeySpecifier)[];
export type TourneyPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	date_till?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TourneyResponseKeySpecifier)[];
export type TourneyResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneySubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TourneySubscriptionPayloadKeySpecifier)[];
export type TourneySubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionKeySpecifier = ('id' | 'createdAt' | 'amount' | 'Account' | 'CreatedBy' | TransactionKeySpecifier)[];
export type TransactionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	Account?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TransactionConnectionKeySpecifier)[];
export type TransactionConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionEdgeKeySpecifier = ('node' | 'cursor' | TransactionEdgeKeySpecifier)[];
export type TransactionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'amount' | TransactionPreviousValuesKeySpecifier)[];
export type TransactionPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransactionSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TransactionSubscriptionPayloadKeySpecifier)[];
export type TransactionSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'Groups' | 'CreatedUsers' | 'CreatedBy' | 'LogedIns' | 'Files' | 'hidden' | 'EthContractSourcesCreated' | 'EthAccounts' | 'Resources' | 'Rooms' | 'CreatedRooms' | 'Messages' | 'ReadedMessages' | 'Notices' | 'Votes' | 'NotificationTypes' | 'NotificationTypesCreated' | 'Tags' | 'ResourceTags' | 'PrismaProjects' | 'user_id' | 'first_name' | 'middle_name' | 'last_name' | 'gender' | 'birth_date' | 'country_id' | 'region_id' | 'city_id' | 'status' | 'timezone' | 'language_id' | 'num_blog_posts' | 'last' | 'created_at' | 'notification' | 'icq' | 'www' | 'contact_email' | 'mobile_phone' | 'home_phone' | 'about' | 'experience' | 'job_title' | 'work_place' | 'ip' | 'confirmation_code' | 'rating' | 'etherwallet' | 'photo' | 'topics' | 'comments' | 'Tarifs' | 'Account' | 'Places' | 'sudo' | 'hasEmail' | 'hasPhone' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	showEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	showPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	activated?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	Groups?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	LogedIns?: FieldPolicy<any> | FieldReadFunction<any>,
	Files?: FieldPolicy<any> | FieldReadFunction<any>,
	hidden?: FieldPolicy<any> | FieldReadFunction<any>,
	EthContractSourcesCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	EthAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	Resources?: FieldPolicy<any> | FieldReadFunction<any>,
	Rooms?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedRooms?: FieldPolicy<any> | FieldReadFunction<any>,
	Messages?: FieldPolicy<any> | FieldReadFunction<any>,
	ReadedMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	Notices?: FieldPolicy<any> | FieldReadFunction<any>,
	Votes?: FieldPolicy<any> | FieldReadFunction<any>,
	NotificationTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	NotificationTypesCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	Tags?: FieldPolicy<any> | FieldReadFunction<any>,
	ResourceTags?: FieldPolicy<any> | FieldReadFunction<any>,
	PrismaProjects?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	middle_name?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	birth_date?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>,
	city_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	timezone?: FieldPolicy<any> | FieldReadFunction<any>,
	language_id?: FieldPolicy<any> | FieldReadFunction<any>,
	num_blog_posts?: FieldPolicy<any> | FieldReadFunction<any>,
	last?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	notification?: FieldPolicy<any> | FieldReadFunction<any>,
	icq?: FieldPolicy<any> | FieldReadFunction<any>,
	www?: FieldPolicy<any> | FieldReadFunction<any>,
	contact_email?: FieldPolicy<any> | FieldReadFunction<any>,
	mobile_phone?: FieldPolicy<any> | FieldReadFunction<any>,
	home_phone?: FieldPolicy<any> | FieldReadFunction<any>,
	about?: FieldPolicy<any> | FieldReadFunction<any>,
	experience?: FieldPolicy<any> | FieldReadFunction<any>,
	job_title?: FieldPolicy<any> | FieldReadFunction<any>,
	work_place?: FieldPolicy<any> | FieldReadFunction<any>,
	ip?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmation_code?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	etherwallet?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	Tarifs?: FieldPolicy<any> | FieldReadFunction<any>,
	Account?: FieldPolicy<any> | FieldReadFunction<any>,
	Places?: FieldPolicy<any> | FieldReadFunction<any>,
	sudo?: FieldPolicy<any> | FieldReadFunction<any>,
	hasEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPhone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | UserConnectionKeySpecifier)[];
export type UserConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEdgeKeySpecifier = ('node' | 'cursor' | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupKeySpecifier = ('id' | 'name' | 'Users' | UserGroupKeySpecifier)[];
export type UserGroupFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	Users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | UserGroupConnectionKeySpecifier)[];
export type UserGroupConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupEdgeKeySpecifier = ('node' | 'cursor' | UserGroupEdgeKeySpecifier)[];
export type UserGroupEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupPreviousValuesKeySpecifier = ('id' | 'name' | UserGroupPreviousValuesKeySpecifier)[];
export type UserGroupPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | UserGroupSubscriptionPayloadKeySpecifier)[];
export type UserGroupSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'user_id' | 'first_name' | 'middle_name' | 'last_name' | 'gender' | 'birth_date' | 'country_id' | 'region_id' | 'city_id' | 'status' | 'timezone' | 'language_id' | 'num_blog_posts' | 'last' | 'created_at' | 'notification' | 'icq' | 'www' | 'contact_email' | 'mobile_phone' | 'home_phone' | 'about' | 'experience' | 'job_title' | 'work_place' | 'ip' | 'confirmation_code' | 'rating' | 'etherwallet' | 'photo' | 'sudo' | UserPreviousValuesKeySpecifier)[];
export type UserPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	showEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	showPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	activated?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	hidden?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	middle_name?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	birth_date?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	region_id?: FieldPolicy<any> | FieldReadFunction<any>,
	city_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	timezone?: FieldPolicy<any> | FieldReadFunction<any>,
	language_id?: FieldPolicy<any> | FieldReadFunction<any>,
	num_blog_posts?: FieldPolicy<any> | FieldReadFunction<any>,
	last?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	notification?: FieldPolicy<any> | FieldReadFunction<any>,
	icq?: FieldPolicy<any> | FieldReadFunction<any>,
	www?: FieldPolicy<any> | FieldReadFunction<any>,
	contact_email?: FieldPolicy<any> | FieldReadFunction<any>,
	mobile_phone?: FieldPolicy<any> | FieldReadFunction<any>,
	home_phone?: FieldPolicy<any> | FieldReadFunction<any>,
	about?: FieldPolicy<any> | FieldReadFunction<any>,
	experience?: FieldPolicy<any> | FieldReadFunction<any>,
	job_title?: FieldPolicy<any> | FieldReadFunction<any>,
	work_place?: FieldPolicy<any> | FieldReadFunction<any>,
	ip?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmation_code?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	etherwallet?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	sudo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | UserResponseKeySpecifier)[];
export type UserResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | UserSubscriptionPayloadKeySpecifier)[];
export type UserSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTarifKeySpecifier = ('id' | 'User' | 'Tarif' | 'createdAt' | 'dateTill' | UserTarifKeySpecifier)[];
export type UserTarifFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	Tarif?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	dateTill?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTarifConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | UserTarifConnectionKeySpecifier)[];
export type UserTarifConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTarifEdgeKeySpecifier = ('node' | 'cursor' | UserTarifEdgeKeySpecifier)[];
export type UserTarifEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTarifPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'dateTill' | UserTarifPreviousValuesKeySpecifier)[];
export type UserTarifPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	dateTill?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTarifSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | UserTarifSubscriptionPayloadKeySpecifier)[];
export type UserTarifSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoteKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'Resource' | 'User' | 'value' | VoteKeySpecifier)[];
export type VoteFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoteConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | VoteConnectionKeySpecifier)[];
export type VoteConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoteEdgeKeySpecifier = ('node' | 'cursor' | VoteEdgeKeySpecifier)[];
export type VoteEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VotePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'value' | VotePreviousValuesKeySpecifier)[];
export type VotePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoteSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | VoteSubscriptionPayloadKeySpecifier)[];
export type VoteSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ethNetKeySpecifier = ('id' | 'isListening' | 'peerCount' | 'networkType' | ethNetKeySpecifier)[];
export type ethNetFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isListening?: FieldPolicy<any> | FieldReadFunction<any>,
	peerCount?: FieldPolicy<any> | FieldReadFunction<any>,
	networkType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ethSyncStateKeySpecifier = ('startingBlock' | 'currentBlock' | 'highestBlock' | 'knownStates' | 'pulledStates' | ethSyncStateKeySpecifier)[];
export type ethSyncStateFieldPolicy = {
	startingBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	currentBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	highestBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	knownStates?: FieldPolicy<any> | FieldReadFunction<any>,
	pulledStates?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mapGeoObjectsConnectionKeySpecifier = ('aggregate' | 'objects' | mapGeoObjectsConnectionKeySpecifier)[];
export type mapGeoObjectsConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	objects?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Account?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountKeySpecifier | (() => undefined | AccountKeySpecifier),
		fields?: AccountFieldPolicy,
	},
	AccountConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountConnectionKeySpecifier | (() => undefined | AccountConnectionKeySpecifier),
		fields?: AccountConnectionFieldPolicy,
	},
	AccountEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountEdgeKeySpecifier | (() => undefined | AccountEdgeKeySpecifier),
		fields?: AccountEdgeFieldPolicy,
	},
	AccountPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountPreviousValuesKeySpecifier | (() => undefined | AccountPreviousValuesKeySpecifier),
		fields?: AccountPreviousValuesFieldPolicy,
	},
	AccountSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountSubscriptionPayloadKeySpecifier | (() => undefined | AccountSubscriptionPayloadKeySpecifier),
		fields?: AccountSubscriptionPayloadFieldPolicy,
	},
	AggregateAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateAccountKeySpecifier | (() => undefined | AggregateAccountKeySpecifier),
		fields?: AggregateAccountFieldPolicy,
	},
	AggregateBeer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateBeerKeySpecifier | (() => undefined | AggregateBeerKeySpecifier),
		fields?: AggregateBeerFieldPolicy,
	},
	AggregateCallRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateCallRequestKeySpecifier | (() => undefined | AggregateCallRequestKeySpecifier),
		fields?: AggregateCallRequestFieldPolicy,
	},
	AggregateChatMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateChatMessageKeySpecifier | (() => undefined | AggregateChatMessageKeySpecifier),
		fields?: AggregateChatMessageFieldPolicy,
	},
	AggregateChatMessageReaded?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateChatMessageReadedKeySpecifier | (() => undefined | AggregateChatMessageReadedKeySpecifier),
		fields?: AggregateChatMessageReadedFieldPolicy,
	},
	AggregateChatRoom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateChatRoomKeySpecifier | (() => undefined | AggregateChatRoomKeySpecifier),
		fields?: AggregateChatRoomFieldPolicy,
	},
	AggregateChatRoomInvitation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateChatRoomInvitationKeySpecifier | (() => undefined | AggregateChatRoomInvitationKeySpecifier),
		fields?: AggregateChatRoomInvitationFieldPolicy,
	},
	AggregateCity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateCityKeySpecifier | (() => undefined | AggregateCityKeySpecifier),
		fields?: AggregateCityFieldPolicy,
	},
	AggregateComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateCommentKeySpecifier | (() => undefined | AggregateCommentKeySpecifier),
		fields?: AggregateCommentFieldPolicy,
	},
	AggregateCommentType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateCommentTypeKeySpecifier | (() => undefined | AggregateCommentTypeKeySpecifier),
		fields?: AggregateCommentTypeFieldPolicy,
	},
	AggregateEthAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateEthAccountKeySpecifier | (() => undefined | AggregateEthAccountKeySpecifier),
		fields?: AggregateEthAccountFieldPolicy,
	},
	AggregateEthBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateEthBlockKeySpecifier | (() => undefined | AggregateEthBlockKeySpecifier),
		fields?: AggregateEthBlockFieldPolicy,
	},
	AggregateEthContractSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateEthContractSourceKeySpecifier | (() => undefined | AggregateEthContractSourceKeySpecifier),
		fields?: AggregateEthContractSourceFieldPolicy,
	},
	AggregateEthTransaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateEthTransactionKeySpecifier | (() => undefined | AggregateEthTransactionKeySpecifier),
		fields?: AggregateEthTransactionFieldPolicy,
	},
	AggregateFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateFileKeySpecifier | (() => undefined | AggregateFileKeySpecifier),
		fields?: AggregateFileFieldPolicy,
	},
	AggregateGame?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateGameKeySpecifier | (() => undefined | AggregateGameKeySpecifier),
		fields?: AggregateGameFieldPolicy,
	},
	AggregateGameResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateGameResultKeySpecifier | (() => undefined | AggregateGameResultKeySpecifier),
		fields?: AggregateGameResultFieldPolicy,
	},
	AggregateLetsadsSmsMessageStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateLetsadsSmsMessageStatusKeySpecifier | (() => undefined | AggregateLetsadsSmsMessageStatusKeySpecifier),
		fields?: AggregateLetsadsSmsMessageStatusFieldPolicy,
	},
	AggregateLetsadsSmsMessageStatusItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateLetsadsSmsMessageStatusItemKeySpecifier | (() => undefined | AggregateLetsadsSmsMessageStatusItemKeySpecifier),
		fields?: AggregateLetsadsSmsMessageStatusItemFieldPolicy,
	},
	AggregateLetter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateLetterKeySpecifier | (() => undefined | AggregateLetterKeySpecifier),
		fields?: AggregateLetterFieldPolicy,
	},
	AggregateLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateLogKeySpecifier | (() => undefined | AggregateLogKeySpecifier),
		fields?: AggregateLogFieldPolicy,
	},
	AggregateLogedIn?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateLogedInKeySpecifier | (() => undefined | AggregateLogedInKeySpecifier),
		fields?: AggregateLogedInFieldPolicy,
	},
	AggregateNotice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNoticeKeySpecifier | (() => undefined | AggregateNoticeKeySpecifier),
		fields?: AggregateNoticeFieldPolicy,
	},
	AggregateNotificationType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNotificationTypeKeySpecifier | (() => undefined | AggregateNotificationTypeKeySpecifier),
		fields?: AggregateNotificationTypeFieldPolicy,
	},
	AggregatePhoto?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregatePhotoKeySpecifier | (() => undefined | AggregatePhotoKeySpecifier),
		fields?: AggregatePhotoFieldPolicy,
	},
	AggregatePlace?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregatePlaceKeySpecifier | (() => undefined | AggregatePlaceKeySpecifier),
		fields?: AggregatePlaceFieldPolicy,
	},
	AggregatePlaceBeer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregatePlaceBeerKeySpecifier | (() => undefined | AggregatePlaceBeerKeySpecifier),
		fields?: AggregatePlaceBeerFieldPolicy,
	},
	AggregateProject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateProjectKeySpecifier | (() => undefined | AggregateProjectKeySpecifier),
		fields?: AggregateProjectFieldPolicy,
	},
	AggregateResetPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateResetPasswordKeySpecifier | (() => undefined | AggregateResetPasswordKeySpecifier),
		fields?: AggregateResetPasswordFieldPolicy,
	},
	AggregateResource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateResourceKeySpecifier | (() => undefined | AggregateResourceKeySpecifier),
		fields?: AggregateResourceFieldPolicy,
	},
	AggregateResourceTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateResourceTagKeySpecifier | (() => undefined | AggregateResourceTagKeySpecifier),
		fields?: AggregateResourceTagFieldPolicy,
	},
	AggregateRoute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateRouteKeySpecifier | (() => undefined | AggregateRouteKeySpecifier),
		fields?: AggregateRouteFieldPolicy,
	},
	AggregateSmsMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateSmsMessageKeySpecifier | (() => undefined | AggregateSmsMessageKeySpecifier),
		fields?: AggregateSmsMessageFieldPolicy,
	},
	AggregateSmsProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateSmsProviderKeySpecifier | (() => undefined | AggregateSmsProviderKeySpecifier),
		fields?: AggregateSmsProviderFieldPolicy,
	},
	AggregateTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTagKeySpecifier | (() => undefined | AggregateTagKeySpecifier),
		fields?: AggregateTagFieldPolicy,
	},
	AggregateTarif?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTarifKeySpecifier | (() => undefined | AggregateTarifKeySpecifier),
		fields?: AggregateTarifFieldPolicy,
	},
	AggregateTarifRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTarifRequestKeySpecifier | (() => undefined | AggregateTarifRequestKeySpecifier),
		fields?: AggregateTarifRequestFieldPolicy,
	},
	AggregateTeam?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTeamKeySpecifier | (() => undefined | AggregateTeamKeySpecifier),
		fields?: AggregateTeamFieldPolicy,
	},
	AggregateTopic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTopicKeySpecifier | (() => undefined | AggregateTopicKeySpecifier),
		fields?: AggregateTopicFieldPolicy,
	},
	AggregateTournament?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTournamentKeySpecifier | (() => undefined | AggregateTournamentKeySpecifier),
		fields?: AggregateTournamentFieldPolicy,
	},
	AggregateTournamentGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTournamentGroupKeySpecifier | (() => undefined | AggregateTournamentGroupKeySpecifier),
		fields?: AggregateTournamentGroupFieldPolicy,
	},
	AggregateTourney?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTourneyKeySpecifier | (() => undefined | AggregateTourneyKeySpecifier),
		fields?: AggregateTourneyFieldPolicy,
	},
	AggregateTransaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTransactionKeySpecifier | (() => undefined | AggregateTransactionKeySpecifier),
		fields?: AggregateTransactionFieldPolicy,
	},
	AggregateUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateUserKeySpecifier | (() => undefined | AggregateUserKeySpecifier),
		fields?: AggregateUserFieldPolicy,
	},
	AggregateUserGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateUserGroupKeySpecifier | (() => undefined | AggregateUserGroupKeySpecifier),
		fields?: AggregateUserGroupFieldPolicy,
	},
	AggregateUserTarif?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateUserTarifKeySpecifier | (() => undefined | AggregateUserTarifKeySpecifier),
		fields?: AggregateUserTarifFieldPolicy,
	},
	AggregateVote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateVoteKeySpecifier | (() => undefined | AggregateVoteKeySpecifier),
		fields?: AggregateVoteFieldPolicy,
	},
	AuthPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthPayloadKeySpecifier | (() => undefined | AuthPayloadKeySpecifier),
		fields?: AuthPayloadFieldPolicy,
	},
	BatchPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchPayloadKeySpecifier | (() => undefined | BatchPayloadKeySpecifier),
		fields?: BatchPayloadFieldPolicy,
	},
	Beer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BeerKeySpecifier | (() => undefined | BeerKeySpecifier),
		fields?: BeerFieldPolicy,
	},
	BeerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BeerConnectionKeySpecifier | (() => undefined | BeerConnectionKeySpecifier),
		fields?: BeerConnectionFieldPolicy,
	},
	BeerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BeerEdgeKeySpecifier | (() => undefined | BeerEdgeKeySpecifier),
		fields?: BeerEdgeFieldPolicy,
	},
	BeerPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BeerPayloadKeySpecifier | (() => undefined | BeerPayloadKeySpecifier),
		fields?: BeerPayloadFieldPolicy,
	},
	BeerPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BeerPreviousValuesKeySpecifier | (() => undefined | BeerPreviousValuesKeySpecifier),
		fields?: BeerPreviousValuesFieldPolicy,
	},
	BeerSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BeerSubscriptionPayloadKeySpecifier | (() => undefined | BeerSubscriptionPayloadKeySpecifier),
		fields?: BeerSubscriptionPayloadFieldPolicy,
	},
	CallRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CallRequestKeySpecifier | (() => undefined | CallRequestKeySpecifier),
		fields?: CallRequestFieldPolicy,
	},
	CallRequestConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CallRequestConnectionKeySpecifier | (() => undefined | CallRequestConnectionKeySpecifier),
		fields?: CallRequestConnectionFieldPolicy,
	},
	CallRequestEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CallRequestEdgeKeySpecifier | (() => undefined | CallRequestEdgeKeySpecifier),
		fields?: CallRequestEdgeFieldPolicy,
	},
	CallRequestPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CallRequestPreviousValuesKeySpecifier | (() => undefined | CallRequestPreviousValuesKeySpecifier),
		fields?: CallRequestPreviousValuesFieldPolicy,
	},
	CallRequestResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CallRequestResponseKeySpecifier | (() => undefined | CallRequestResponseKeySpecifier),
		fields?: CallRequestResponseFieldPolicy,
	},
	CallRequestSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CallRequestSubscriptionPayloadKeySpecifier | (() => undefined | CallRequestSubscriptionPayloadKeySpecifier),
		fields?: CallRequestSubscriptionPayloadFieldPolicy,
	},
	ChatMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageKeySpecifier | (() => undefined | ChatMessageKeySpecifier),
		fields?: ChatMessageFieldPolicy,
	},
	ChatMessageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageConnectionKeySpecifier | (() => undefined | ChatMessageConnectionKeySpecifier),
		fields?: ChatMessageConnectionFieldPolicy,
	},
	ChatMessageEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageEdgeKeySpecifier | (() => undefined | ChatMessageEdgeKeySpecifier),
		fields?: ChatMessageEdgeFieldPolicy,
	},
	ChatMessagePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessagePreviousValuesKeySpecifier | (() => undefined | ChatMessagePreviousValuesKeySpecifier),
		fields?: ChatMessagePreviousValuesFieldPolicy,
	},
	ChatMessageReaded?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageReadedKeySpecifier | (() => undefined | ChatMessageReadedKeySpecifier),
		fields?: ChatMessageReadedFieldPolicy,
	},
	ChatMessageReadedConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageReadedConnectionKeySpecifier | (() => undefined | ChatMessageReadedConnectionKeySpecifier),
		fields?: ChatMessageReadedConnectionFieldPolicy,
	},
	ChatMessageReadedEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageReadedEdgeKeySpecifier | (() => undefined | ChatMessageReadedEdgeKeySpecifier),
		fields?: ChatMessageReadedEdgeFieldPolicy,
	},
	ChatMessageReadedPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageReadedPreviousValuesKeySpecifier | (() => undefined | ChatMessageReadedPreviousValuesKeySpecifier),
		fields?: ChatMessageReadedPreviousValuesFieldPolicy,
	},
	ChatMessageReadedResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageReadedResponseKeySpecifier | (() => undefined | ChatMessageReadedResponseKeySpecifier),
		fields?: ChatMessageReadedResponseFieldPolicy,
	},
	ChatMessageReadedSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageReadedSubscriptionPayloadKeySpecifier | (() => undefined | ChatMessageReadedSubscriptionPayloadKeySpecifier),
		fields?: ChatMessageReadedSubscriptionPayloadFieldPolicy,
	},
	ChatMessageResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageResponseKeySpecifier | (() => undefined | ChatMessageResponseKeySpecifier),
		fields?: ChatMessageResponseFieldPolicy,
	},
	ChatMessageSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageSubscriptionPayloadKeySpecifier | (() => undefined | ChatMessageSubscriptionPayloadKeySpecifier),
		fields?: ChatMessageSubscriptionPayloadFieldPolicy,
	},
	ChatRoom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomKeySpecifier | (() => undefined | ChatRoomKeySpecifier),
		fields?: ChatRoomFieldPolicy,
	},
	ChatRoomConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomConnectionKeySpecifier | (() => undefined | ChatRoomConnectionKeySpecifier),
		fields?: ChatRoomConnectionFieldPolicy,
	},
	ChatRoomEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomEdgeKeySpecifier | (() => undefined | ChatRoomEdgeKeySpecifier),
		fields?: ChatRoomEdgeFieldPolicy,
	},
	ChatRoomInvitation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomInvitationKeySpecifier | (() => undefined | ChatRoomInvitationKeySpecifier),
		fields?: ChatRoomInvitationFieldPolicy,
	},
	ChatRoomInvitationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomInvitationConnectionKeySpecifier | (() => undefined | ChatRoomInvitationConnectionKeySpecifier),
		fields?: ChatRoomInvitationConnectionFieldPolicy,
	},
	ChatRoomInvitationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomInvitationEdgeKeySpecifier | (() => undefined | ChatRoomInvitationEdgeKeySpecifier),
		fields?: ChatRoomInvitationEdgeFieldPolicy,
	},
	ChatRoomInvitationPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomInvitationPreviousValuesKeySpecifier | (() => undefined | ChatRoomInvitationPreviousValuesKeySpecifier),
		fields?: ChatRoomInvitationPreviousValuesFieldPolicy,
	},
	ChatRoomInvitationSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomInvitationSubscriptionPayloadKeySpecifier | (() => undefined | ChatRoomInvitationSubscriptionPayloadKeySpecifier),
		fields?: ChatRoomInvitationSubscriptionPayloadFieldPolicy,
	},
	ChatRoomPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomPreviousValuesKeySpecifier | (() => undefined | ChatRoomPreviousValuesKeySpecifier),
		fields?: ChatRoomPreviousValuesFieldPolicy,
	},
	ChatRoomResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomResponseKeySpecifier | (() => undefined | ChatRoomResponseKeySpecifier),
		fields?: ChatRoomResponseFieldPolicy,
	},
	ChatRoomSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomSubscriptionPayloadKeySpecifier | (() => undefined | ChatRoomSubscriptionPayloadKeySpecifier),
		fields?: ChatRoomSubscriptionPayloadFieldPolicy,
	},
	City?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CityKeySpecifier | (() => undefined | CityKeySpecifier),
		fields?: CityFieldPolicy,
	},
	CityConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CityConnectionKeySpecifier | (() => undefined | CityConnectionKeySpecifier),
		fields?: CityConnectionFieldPolicy,
	},
	CityEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CityEdgeKeySpecifier | (() => undefined | CityEdgeKeySpecifier),
		fields?: CityEdgeFieldPolicy,
	},
	CityPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CityPreviousValuesKeySpecifier | (() => undefined | CityPreviousValuesKeySpecifier),
		fields?: CityPreviousValuesFieldPolicy,
	},
	CitySubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CitySubscriptionPayloadKeySpecifier | (() => undefined | CitySubscriptionPayloadKeySpecifier),
		fields?: CitySubscriptionPayloadFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	CommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentConnectionKeySpecifier | (() => undefined | CommentConnectionKeySpecifier),
		fields?: CommentConnectionFieldPolicy,
	},
	CommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentEdgeKeySpecifier | (() => undefined | CommentEdgeKeySpecifier),
		fields?: CommentEdgeFieldPolicy,
	},
	CommentPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentPreviousValuesKeySpecifier | (() => undefined | CommentPreviousValuesKeySpecifier),
		fields?: CommentPreviousValuesFieldPolicy,
	},
	CommentResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentResponseKeySpecifier | (() => undefined | CommentResponseKeySpecifier),
		fields?: CommentResponseFieldPolicy,
	},
	CommentSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentSubscriptionPayloadKeySpecifier | (() => undefined | CommentSubscriptionPayloadKeySpecifier),
		fields?: CommentSubscriptionPayloadFieldPolicy,
	},
	CommentType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentTypeKeySpecifier | (() => undefined | CommentTypeKeySpecifier),
		fields?: CommentTypeFieldPolicy,
	},
	CommentTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentTypeConnectionKeySpecifier | (() => undefined | CommentTypeConnectionKeySpecifier),
		fields?: CommentTypeConnectionFieldPolicy,
	},
	CommentTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentTypeEdgeKeySpecifier | (() => undefined | CommentTypeEdgeKeySpecifier),
		fields?: CommentTypeEdgeFieldPolicy,
	},
	CommentTypePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentTypePreviousValuesKeySpecifier | (() => undefined | CommentTypePreviousValuesKeySpecifier),
		fields?: CommentTypePreviousValuesFieldPolicy,
	},
	CommentTypeSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentTypeSubscriptionPayloadKeySpecifier | (() => undefined | CommentTypeSubscriptionPayloadKeySpecifier),
		fields?: CommentTypeSubscriptionPayloadFieldPolicy,
	},
	Error?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorKeySpecifier | (() => undefined | ErrorKeySpecifier),
		fields?: ErrorFieldPolicy,
	},
	EthAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountKeySpecifier | (() => undefined | EthAccountKeySpecifier),
		fields?: EthAccountFieldPolicy,
	},
	EthAccountConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountConnectionKeySpecifier | (() => undefined | EthAccountConnectionKeySpecifier),
		fields?: EthAccountConnectionFieldPolicy,
	},
	EthAccountEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountEdgeKeySpecifier | (() => undefined | EthAccountEdgeKeySpecifier),
		fields?: EthAccountEdgeFieldPolicy,
	},
	EthAccountPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountPreviousValuesKeySpecifier | (() => undefined | EthAccountPreviousValuesKeySpecifier),
		fields?: EthAccountPreviousValuesFieldPolicy,
	},
	EthAccountResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountResponseKeySpecifier | (() => undefined | EthAccountResponseKeySpecifier),
		fields?: EthAccountResponseFieldPolicy,
	},
	EthAccountSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountSubscriptionPayloadKeySpecifier | (() => undefined | EthAccountSubscriptionPayloadKeySpecifier),
		fields?: EthAccountSubscriptionPayloadFieldPolicy,
	},
	EthBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthBlockKeySpecifier | (() => undefined | EthBlockKeySpecifier),
		fields?: EthBlockFieldPolicy,
	},
	EthBlockConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthBlockConnectionKeySpecifier | (() => undefined | EthBlockConnectionKeySpecifier),
		fields?: EthBlockConnectionFieldPolicy,
	},
	EthBlockEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthBlockEdgeKeySpecifier | (() => undefined | EthBlockEdgeKeySpecifier),
		fields?: EthBlockEdgeFieldPolicy,
	},
	EthBlockPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthBlockPreviousValuesKeySpecifier | (() => undefined | EthBlockPreviousValuesKeySpecifier),
		fields?: EthBlockPreviousValuesFieldPolicy,
	},
	EthBlockResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthBlockResponseKeySpecifier | (() => undefined | EthBlockResponseKeySpecifier),
		fields?: EthBlockResponseFieldPolicy,
	},
	EthBlockSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthBlockSubscriptionPayloadKeySpecifier | (() => undefined | EthBlockSubscriptionPayloadKeySpecifier),
		fields?: EthBlockSubscriptionPayloadFieldPolicy,
	},
	EthContractSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthContractSourceKeySpecifier | (() => undefined | EthContractSourceKeySpecifier),
		fields?: EthContractSourceFieldPolicy,
	},
	EthContractSourceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthContractSourceConnectionKeySpecifier | (() => undefined | EthContractSourceConnectionKeySpecifier),
		fields?: EthContractSourceConnectionFieldPolicy,
	},
	EthContractSourceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthContractSourceEdgeKeySpecifier | (() => undefined | EthContractSourceEdgeKeySpecifier),
		fields?: EthContractSourceEdgeFieldPolicy,
	},
	EthContractSourcePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthContractSourcePreviousValuesKeySpecifier | (() => undefined | EthContractSourcePreviousValuesKeySpecifier),
		fields?: EthContractSourcePreviousValuesFieldPolicy,
	},
	EthContractSourceResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthContractSourceResponseKeySpecifier | (() => undefined | EthContractSourceResponseKeySpecifier),
		fields?: EthContractSourceResponseFieldPolicy,
	},
	EthContractSourceSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthContractSourceSubscriptionPayloadKeySpecifier | (() => undefined | EthContractSourceSubscriptionPayloadKeySpecifier),
		fields?: EthContractSourceSubscriptionPayloadFieldPolicy,
	},
	EthPersonalAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthPersonalAccountKeySpecifier | (() => undefined | EthPersonalAccountKeySpecifier),
		fields?: EthPersonalAccountFieldPolicy,
	},
	EthPersonalAccountResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthPersonalAccountResponseKeySpecifier | (() => undefined | EthPersonalAccountResponseKeySpecifier),
		fields?: EthPersonalAccountResponseFieldPolicy,
	},
	EthTransaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthTransactionKeySpecifier | (() => undefined | EthTransactionKeySpecifier),
		fields?: EthTransactionFieldPolicy,
	},
	EthTransactionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthTransactionConnectionKeySpecifier | (() => undefined | EthTransactionConnectionKeySpecifier),
		fields?: EthTransactionConnectionFieldPolicy,
	},
	EthTransactionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthTransactionEdgeKeySpecifier | (() => undefined | EthTransactionEdgeKeySpecifier),
		fields?: EthTransactionEdgeFieldPolicy,
	},
	EthTransactionPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthTransactionPreviousValuesKeySpecifier | (() => undefined | EthTransactionPreviousValuesKeySpecifier),
		fields?: EthTransactionPreviousValuesFieldPolicy,
	},
	EthTransactionResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthTransactionResponseKeySpecifier | (() => undefined | EthTransactionResponseKeySpecifier),
		fields?: EthTransactionResponseFieldPolicy,
	},
	EthTransactionSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthTransactionSubscriptionPayloadKeySpecifier | (() => undefined | EthTransactionSubscriptionPayloadKeySpecifier),
		fields?: EthTransactionSubscriptionPayloadFieldPolicy,
	},
	File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileKeySpecifier | (() => undefined | FileKeySpecifier),
		fields?: FileFieldPolicy,
	},
	FileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileConnectionKeySpecifier | (() => undefined | FileConnectionKeySpecifier),
		fields?: FileConnectionFieldPolicy,
	},
	FileEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileEdgeKeySpecifier | (() => undefined | FileEdgeKeySpecifier),
		fields?: FileEdgeFieldPolicy,
	},
	FilePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilePreviousValuesKeySpecifier | (() => undefined | FilePreviousValuesKeySpecifier),
		fields?: FilePreviousValuesFieldPolicy,
	},
	FileResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileResponseKeySpecifier | (() => undefined | FileResponseKeySpecifier),
		fields?: FileResponseFieldPolicy,
	},
	FileSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileSubscriptionPayloadKeySpecifier | (() => undefined | FileSubscriptionPayloadKeySpecifier),
		fields?: FileSubscriptionPayloadFieldPolicy,
	},
	Game?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameKeySpecifier | (() => undefined | GameKeySpecifier),
		fields?: GameFieldPolicy,
	},
	GameConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameConnectionKeySpecifier | (() => undefined | GameConnectionKeySpecifier),
		fields?: GameConnectionFieldPolicy,
	},
	GameEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameEdgeKeySpecifier | (() => undefined | GameEdgeKeySpecifier),
		fields?: GameEdgeFieldPolicy,
	},
	GamePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GamePreviousValuesKeySpecifier | (() => undefined | GamePreviousValuesKeySpecifier),
		fields?: GamePreviousValuesFieldPolicy,
	},
	GameResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResponseKeySpecifier | (() => undefined | GameResponseKeySpecifier),
		fields?: GameResponseFieldPolicy,
	},
	GameResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResultKeySpecifier | (() => undefined | GameResultKeySpecifier),
		fields?: GameResultFieldPolicy,
	},
	GameResultConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResultConnectionKeySpecifier | (() => undefined | GameResultConnectionKeySpecifier),
		fields?: GameResultConnectionFieldPolicy,
	},
	GameResultEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResultEdgeKeySpecifier | (() => undefined | GameResultEdgeKeySpecifier),
		fields?: GameResultEdgeFieldPolicy,
	},
	GameResultPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResultPreviousValuesKeySpecifier | (() => undefined | GameResultPreviousValuesKeySpecifier),
		fields?: GameResultPreviousValuesFieldPolicy,
	},
	GameResultResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResultResponseKeySpecifier | (() => undefined | GameResultResponseKeySpecifier),
		fields?: GameResultResponseFieldPolicy,
	},
	GameResultSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResultSubscriptionPayloadKeySpecifier | (() => undefined | GameResultSubscriptionPayloadKeySpecifier),
		fields?: GameResultSubscriptionPayloadFieldPolicy,
	},
	GameSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameSubscriptionPayloadKeySpecifier | (() => undefined | GameSubscriptionPayloadKeySpecifier),
		fields?: GameSubscriptionPayloadFieldPolicy,
	},
	IceCandidate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IceCandidateKeySpecifier | (() => undefined | IceCandidateKeySpecifier),
		fields?: IceCandidateFieldPolicy,
	},
	LetsadsSmsMessageStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusKeySpecifier | (() => undefined | LetsadsSmsMessageStatusKeySpecifier),
		fields?: LetsadsSmsMessageStatusFieldPolicy,
	},
	LetsadsSmsMessageStatusConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusConnectionKeySpecifier | (() => undefined | LetsadsSmsMessageStatusConnectionKeySpecifier),
		fields?: LetsadsSmsMessageStatusConnectionFieldPolicy,
	},
	LetsadsSmsMessageStatusEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusEdgeKeySpecifier | (() => undefined | LetsadsSmsMessageStatusEdgeKeySpecifier),
		fields?: LetsadsSmsMessageStatusEdgeFieldPolicy,
	},
	LetsadsSmsMessageStatusItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusItemKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemKeySpecifier),
		fields?: LetsadsSmsMessageStatusItemFieldPolicy,
	},
	LetsadsSmsMessageStatusItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusItemConnectionKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemConnectionKeySpecifier),
		fields?: LetsadsSmsMessageStatusItemConnectionFieldPolicy,
	},
	LetsadsSmsMessageStatusItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusItemEdgeKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemEdgeKeySpecifier),
		fields?: LetsadsSmsMessageStatusItemEdgeFieldPolicy,
	},
	LetsadsSmsMessageStatusItemPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusItemPreviousValuesKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemPreviousValuesKeySpecifier),
		fields?: LetsadsSmsMessageStatusItemPreviousValuesFieldPolicy,
	},
	LetsadsSmsMessageStatusItemSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusItemSubscriptionPayloadKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemSubscriptionPayloadKeySpecifier),
		fields?: LetsadsSmsMessageStatusItemSubscriptionPayloadFieldPolicy,
	},
	LetsadsSmsMessageStatusPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusPreviousValuesKeySpecifier | (() => undefined | LetsadsSmsMessageStatusPreviousValuesKeySpecifier),
		fields?: LetsadsSmsMessageStatusPreviousValuesFieldPolicy,
	},
	LetsadsSmsMessageStatusSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusSubscriptionPayloadKeySpecifier | (() => undefined | LetsadsSmsMessageStatusSubscriptionPayloadKeySpecifier),
		fields?: LetsadsSmsMessageStatusSubscriptionPayloadFieldPolicy,
	},
	Letter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetterKeySpecifier | (() => undefined | LetterKeySpecifier),
		fields?: LetterFieldPolicy,
	},
	LetterConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetterConnectionKeySpecifier | (() => undefined | LetterConnectionKeySpecifier),
		fields?: LetterConnectionFieldPolicy,
	},
	LetterEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetterEdgeKeySpecifier | (() => undefined | LetterEdgeKeySpecifier),
		fields?: LetterEdgeFieldPolicy,
	},
	LetterPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetterPreviousValuesKeySpecifier | (() => undefined | LetterPreviousValuesKeySpecifier),
		fields?: LetterPreviousValuesFieldPolicy,
	},
	LetterSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetterSubscriptionPayloadKeySpecifier | (() => undefined | LetterSubscriptionPayloadKeySpecifier),
		fields?: LetterSubscriptionPayloadFieldPolicy,
	},
	Log?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogKeySpecifier | (() => undefined | LogKeySpecifier),
		fields?: LogFieldPolicy,
	},
	LogConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogConnectionKeySpecifier | (() => undefined | LogConnectionKeySpecifier),
		fields?: LogConnectionFieldPolicy,
	},
	LogEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogEdgeKeySpecifier | (() => undefined | LogEdgeKeySpecifier),
		fields?: LogEdgeFieldPolicy,
	},
	LogPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogPreviousValuesKeySpecifier | (() => undefined | LogPreviousValuesKeySpecifier),
		fields?: LogPreviousValuesFieldPolicy,
	},
	LogSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogSubscriptionPayloadKeySpecifier | (() => undefined | LogSubscriptionPayloadKeySpecifier),
		fields?: LogSubscriptionPayloadFieldPolicy,
	},
	LogedIn?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogedInKeySpecifier | (() => undefined | LogedInKeySpecifier),
		fields?: LogedInFieldPolicy,
	},
	LogedInConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogedInConnectionKeySpecifier | (() => undefined | LogedInConnectionKeySpecifier),
		fields?: LogedInConnectionFieldPolicy,
	},
	LogedInEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogedInEdgeKeySpecifier | (() => undefined | LogedInEdgeKeySpecifier),
		fields?: LogedInEdgeFieldPolicy,
	},
	LogedInPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogedInPreviousValuesKeySpecifier | (() => undefined | LogedInPreviousValuesKeySpecifier),
		fields?: LogedInPreviousValuesFieldPolicy,
	},
	LogedInSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogedInSubscriptionPayloadKeySpecifier | (() => undefined | LogedInSubscriptionPayloadKeySpecifier),
		fields?: LogedInSubscriptionPayloadFieldPolicy,
	},
	MapPlaceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MapPlaceConnectionKeySpecifier | (() => undefined | MapPlaceConnectionKeySpecifier),
		fields?: MapPlaceConnectionFieldPolicy,
	},
	MapPlaceConnectionEdges?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MapPlaceConnectionEdgesKeySpecifier | (() => undefined | MapPlaceConnectionEdgesKeySpecifier),
		fields?: MapPlaceConnectionEdgesFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	Notice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeKeySpecifier | (() => undefined | NoticeKeySpecifier),
		fields?: NoticeFieldPolicy,
	},
	NoticeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeConnectionKeySpecifier | (() => undefined | NoticeConnectionKeySpecifier),
		fields?: NoticeConnectionFieldPolicy,
	},
	NoticeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeEdgeKeySpecifier | (() => undefined | NoticeEdgeKeySpecifier),
		fields?: NoticeEdgeFieldPolicy,
	},
	NoticePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticePreviousValuesKeySpecifier | (() => undefined | NoticePreviousValuesKeySpecifier),
		fields?: NoticePreviousValuesFieldPolicy,
	},
	NoticeSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeSubscriptionPayloadKeySpecifier | (() => undefined | NoticeSubscriptionPayloadKeySpecifier),
		fields?: NoticeSubscriptionPayloadFieldPolicy,
	},
	NotificationType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypeKeySpecifier | (() => undefined | NotificationTypeKeySpecifier),
		fields?: NotificationTypeFieldPolicy,
	},
	NotificationTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypeConnectionKeySpecifier | (() => undefined | NotificationTypeConnectionKeySpecifier),
		fields?: NotificationTypeConnectionFieldPolicy,
	},
	NotificationTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypeEdgeKeySpecifier | (() => undefined | NotificationTypeEdgeKeySpecifier),
		fields?: NotificationTypeEdgeFieldPolicy,
	},
	NotificationTypePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypePreviousValuesKeySpecifier | (() => undefined | NotificationTypePreviousValuesKeySpecifier),
		fields?: NotificationTypePreviousValuesFieldPolicy,
	},
	NotificationTypeSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypeSubscriptionPayloadKeySpecifier | (() => undefined | NotificationTypeSubscriptionPayloadKeySpecifier),
		fields?: NotificationTypeSubscriptionPayloadFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Photo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhotoKeySpecifier | (() => undefined | PhotoKeySpecifier),
		fields?: PhotoFieldPolicy,
	},
	PhotoConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhotoConnectionKeySpecifier | (() => undefined | PhotoConnectionKeySpecifier),
		fields?: PhotoConnectionFieldPolicy,
	},
	PhotoEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhotoEdgeKeySpecifier | (() => undefined | PhotoEdgeKeySpecifier),
		fields?: PhotoEdgeFieldPolicy,
	},
	PhotoPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhotoPreviousValuesKeySpecifier | (() => undefined | PhotoPreviousValuesKeySpecifier),
		fields?: PhotoPreviousValuesFieldPolicy,
	},
	PhotoSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhotoSubscriptionPayloadKeySpecifier | (() => undefined | PhotoSubscriptionPayloadKeySpecifier),
		fields?: PhotoSubscriptionPayloadFieldPolicy,
	},
	Place?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceKeySpecifier | (() => undefined | PlaceKeySpecifier),
		fields?: PlaceFieldPolicy,
	},
	PlaceBeer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceBeerKeySpecifier | (() => undefined | PlaceBeerKeySpecifier),
		fields?: PlaceBeerFieldPolicy,
	},
	PlaceBeerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceBeerConnectionKeySpecifier | (() => undefined | PlaceBeerConnectionKeySpecifier),
		fields?: PlaceBeerConnectionFieldPolicy,
	},
	PlaceBeerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceBeerEdgeKeySpecifier | (() => undefined | PlaceBeerEdgeKeySpecifier),
		fields?: PlaceBeerEdgeFieldPolicy,
	},
	PlaceBeerPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceBeerPayloadKeySpecifier | (() => undefined | PlaceBeerPayloadKeySpecifier),
		fields?: PlaceBeerPayloadFieldPolicy,
	},
	PlaceBeerPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceBeerPreviousValuesKeySpecifier | (() => undefined | PlaceBeerPreviousValuesKeySpecifier),
		fields?: PlaceBeerPreviousValuesFieldPolicy,
	},
	PlaceBeerSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceBeerSubscriptionPayloadKeySpecifier | (() => undefined | PlaceBeerSubscriptionPayloadKeySpecifier),
		fields?: PlaceBeerSubscriptionPayloadFieldPolicy,
	},
	PlaceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceConnectionKeySpecifier | (() => undefined | PlaceConnectionKeySpecifier),
		fields?: PlaceConnectionFieldPolicy,
	},
	PlaceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceEdgeKeySpecifier | (() => undefined | PlaceEdgeKeySpecifier),
		fields?: PlaceEdgeFieldPolicy,
	},
	PlacePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlacePayloadKeySpecifier | (() => undefined | PlacePayloadKeySpecifier),
		fields?: PlacePayloadFieldPolicy,
	},
	PlacePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlacePreviousValuesKeySpecifier | (() => undefined | PlacePreviousValuesKeySpecifier),
		fields?: PlacePreviousValuesFieldPolicy,
	},
	PlaceResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceResponseKeySpecifier | (() => undefined | PlaceResponseKeySpecifier),
		fields?: PlaceResponseFieldPolicy,
	},
	PlaceSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlaceSubscriptionPayloadKeySpecifier | (() => undefined | PlaceSubscriptionPayloadKeySpecifier),
		fields?: PlaceSubscriptionPayloadFieldPolicy,
	},
	Project?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectKeySpecifier | (() => undefined | ProjectKeySpecifier),
		fields?: ProjectFieldPolicy,
	},
	ProjectConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectConnectionKeySpecifier | (() => undefined | ProjectConnectionKeySpecifier),
		fields?: ProjectConnectionFieldPolicy,
	},
	ProjectEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectEdgeKeySpecifier | (() => undefined | ProjectEdgeKeySpecifier),
		fields?: ProjectEdgeFieldPolicy,
	},
	ProjectPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectPreviousValuesKeySpecifier | (() => undefined | ProjectPreviousValuesKeySpecifier),
		fields?: ProjectPreviousValuesFieldPolicy,
	},
	ProjectSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectSubscriptionPayloadKeySpecifier | (() => undefined | ProjectSubscriptionPayloadKeySpecifier),
		fields?: ProjectSubscriptionPayloadFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	ResetPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordKeySpecifier | (() => undefined | ResetPasswordKeySpecifier),
		fields?: ResetPasswordFieldPolicy,
	},
	ResetPasswordConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordConnectionKeySpecifier | (() => undefined | ResetPasswordConnectionKeySpecifier),
		fields?: ResetPasswordConnectionFieldPolicy,
	},
	ResetPasswordEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordEdgeKeySpecifier | (() => undefined | ResetPasswordEdgeKeySpecifier),
		fields?: ResetPasswordEdgeFieldPolicy,
	},
	ResetPasswordPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordPreviousValuesKeySpecifier | (() => undefined | ResetPasswordPreviousValuesKeySpecifier),
		fields?: ResetPasswordPreviousValuesFieldPolicy,
	},
	ResetPasswordResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordResponseKeySpecifier | (() => undefined | ResetPasswordResponseKeySpecifier),
		fields?: ResetPasswordResponseFieldPolicy,
	},
	ResetPasswordSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordSubscriptionPayloadKeySpecifier | (() => undefined | ResetPasswordSubscriptionPayloadKeySpecifier),
		fields?: ResetPasswordSubscriptionPayloadFieldPolicy,
	},
	Resource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceKeySpecifier | (() => undefined | ResourceKeySpecifier),
		fields?: ResourceFieldPolicy,
	},
	ResourceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceConnectionKeySpecifier | (() => undefined | ResourceConnectionKeySpecifier),
		fields?: ResourceConnectionFieldPolicy,
	},
	ResourceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceEdgeKeySpecifier | (() => undefined | ResourceEdgeKeySpecifier),
		fields?: ResourceEdgeFieldPolicy,
	},
	ResourcePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourcePreviousValuesKeySpecifier | (() => undefined | ResourcePreviousValuesKeySpecifier),
		fields?: ResourcePreviousValuesFieldPolicy,
	},
	ResourceResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceResponseKeySpecifier | (() => undefined | ResourceResponseKeySpecifier),
		fields?: ResourceResponseFieldPolicy,
	},
	ResourceSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceSubscriptionPayloadKeySpecifier | (() => undefined | ResourceSubscriptionPayloadKeySpecifier),
		fields?: ResourceSubscriptionPayloadFieldPolicy,
	},
	ResourceTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTagKeySpecifier | (() => undefined | ResourceTagKeySpecifier),
		fields?: ResourceTagFieldPolicy,
	},
	ResourceTagConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTagConnectionKeySpecifier | (() => undefined | ResourceTagConnectionKeySpecifier),
		fields?: ResourceTagConnectionFieldPolicy,
	},
	ResourceTagEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTagEdgeKeySpecifier | (() => undefined | ResourceTagEdgeKeySpecifier),
		fields?: ResourceTagEdgeFieldPolicy,
	},
	ResourceTagPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTagPreviousValuesKeySpecifier | (() => undefined | ResourceTagPreviousValuesKeySpecifier),
		fields?: ResourceTagPreviousValuesFieldPolicy,
	},
	ResourceTagSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTagSubscriptionPayloadKeySpecifier | (() => undefined | ResourceTagSubscriptionPayloadKeySpecifier),
		fields?: ResourceTagSubscriptionPayloadFieldPolicy,
	},
	Route?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteKeySpecifier | (() => undefined | RouteKeySpecifier),
		fields?: RouteFieldPolicy,
	},
	RouteConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteConnectionKeySpecifier | (() => undefined | RouteConnectionKeySpecifier),
		fields?: RouteConnectionFieldPolicy,
	},
	RouteEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteEdgeKeySpecifier | (() => undefined | RouteEdgeKeySpecifier),
		fields?: RouteEdgeFieldPolicy,
	},
	RoutePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoutePreviousValuesKeySpecifier | (() => undefined | RoutePreviousValuesKeySpecifier),
		fields?: RoutePreviousValuesFieldPolicy,
	},
	RouteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteResponseKeySpecifier | (() => undefined | RouteResponseKeySpecifier),
		fields?: RouteResponseFieldPolicy,
	},
	RouteSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteSubscriptionPayloadKeySpecifier | (() => undefined | RouteSubscriptionPayloadKeySpecifier),
		fields?: RouteSubscriptionPayloadFieldPolicy,
	},
	SmsMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessageKeySpecifier | (() => undefined | SmsMessageKeySpecifier),
		fields?: SmsMessageFieldPolicy,
	},
	SmsMessageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessageConnectionKeySpecifier | (() => undefined | SmsMessageConnectionKeySpecifier),
		fields?: SmsMessageConnectionFieldPolicy,
	},
	SmsMessageEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessageEdgeKeySpecifier | (() => undefined | SmsMessageEdgeKeySpecifier),
		fields?: SmsMessageEdgeFieldPolicy,
	},
	SmsMessagePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessagePreviousValuesKeySpecifier | (() => undefined | SmsMessagePreviousValuesKeySpecifier),
		fields?: SmsMessagePreviousValuesFieldPolicy,
	},
	SmsMessageResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessageResponseKeySpecifier | (() => undefined | SmsMessageResponseKeySpecifier),
		fields?: SmsMessageResponseFieldPolicy,
	},
	SmsMessageSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessageSubscriptionPayloadKeySpecifier | (() => undefined | SmsMessageSubscriptionPayloadKeySpecifier),
		fields?: SmsMessageSubscriptionPayloadFieldPolicy,
	},
	SmsProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsProviderKeySpecifier | (() => undefined | SmsProviderKeySpecifier),
		fields?: SmsProviderFieldPolicy,
	},
	SmsProviderConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsProviderConnectionKeySpecifier | (() => undefined | SmsProviderConnectionKeySpecifier),
		fields?: SmsProviderConnectionFieldPolicy,
	},
	SmsProviderEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsProviderEdgeKeySpecifier | (() => undefined | SmsProviderEdgeKeySpecifier),
		fields?: SmsProviderEdgeFieldPolicy,
	},
	SmsProviderPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsProviderPreviousValuesKeySpecifier | (() => undefined | SmsProviderPreviousValuesKeySpecifier),
		fields?: SmsProviderPreviousValuesFieldPolicy,
	},
	SmsProviderResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsProviderResponseKeySpecifier | (() => undefined | SmsProviderResponseKeySpecifier),
		fields?: SmsProviderResponseFieldPolicy,
	},
	SmsProviderSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsProviderSubscriptionPayloadKeySpecifier | (() => undefined | SmsProviderSubscriptionPayloadKeySpecifier),
		fields?: SmsProviderSubscriptionPayloadFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	Tag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier),
		fields?: TagFieldPolicy,
	},
	TagConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagConnectionKeySpecifier | (() => undefined | TagConnectionKeySpecifier),
		fields?: TagConnectionFieldPolicy,
	},
	TagEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagEdgeKeySpecifier | (() => undefined | TagEdgeKeySpecifier),
		fields?: TagEdgeFieldPolicy,
	},
	TagPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagPreviousValuesKeySpecifier | (() => undefined | TagPreviousValuesKeySpecifier),
		fields?: TagPreviousValuesFieldPolicy,
	},
	TagSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagSubscriptionPayloadKeySpecifier | (() => undefined | TagSubscriptionPayloadKeySpecifier),
		fields?: TagSubscriptionPayloadFieldPolicy,
	},
	Tarif?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TarifKeySpecifier | (() => undefined | TarifKeySpecifier),
		fields?: TarifFieldPolicy,
	},
	TarifConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TarifConnectionKeySpecifier | (() => undefined | TarifConnectionKeySpecifier),
		fields?: TarifConnectionFieldPolicy,
	},
	TarifEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TarifEdgeKeySpecifier | (() => undefined | TarifEdgeKeySpecifier),
		fields?: TarifEdgeFieldPolicy,
	},
	TarifPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TarifPreviousValuesKeySpecifier | (() => undefined | TarifPreviousValuesKeySpecifier),
		fields?: TarifPreviousValuesFieldPolicy,
	},
	TarifRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TarifRequestKeySpecifier | (() => undefined | TarifRequestKeySpecifier),
		fields?: TarifRequestFieldPolicy,
	},
	TarifRequestConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TarifRequestConnectionKeySpecifier | (() => undefined | TarifRequestConnectionKeySpecifier),
		fields?: TarifRequestConnectionFieldPolicy,
	},
	TarifRequestEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TarifRequestEdgeKeySpecifier | (() => undefined | TarifRequestEdgeKeySpecifier),
		fields?: TarifRequestEdgeFieldPolicy,
	},
	TarifRequestPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TarifRequestPreviousValuesKeySpecifier | (() => undefined | TarifRequestPreviousValuesKeySpecifier),
		fields?: TarifRequestPreviousValuesFieldPolicy,
	},
	TarifRequestSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TarifRequestSubscriptionPayloadKeySpecifier | (() => undefined | TarifRequestSubscriptionPayloadKeySpecifier),
		fields?: TarifRequestSubscriptionPayloadFieldPolicy,
	},
	TarifSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TarifSubscriptionPayloadKeySpecifier | (() => undefined | TarifSubscriptionPayloadKeySpecifier),
		fields?: TarifSubscriptionPayloadFieldPolicy,
	},
	Team?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamKeySpecifier | (() => undefined | TeamKeySpecifier),
		fields?: TeamFieldPolicy,
	},
	TeamConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamConnectionKeySpecifier | (() => undefined | TeamConnectionKeySpecifier),
		fields?: TeamConnectionFieldPolicy,
	},
	TeamEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamEdgeKeySpecifier | (() => undefined | TeamEdgeKeySpecifier),
		fields?: TeamEdgeFieldPolicy,
	},
	TeamPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamPreviousValuesKeySpecifier | (() => undefined | TeamPreviousValuesKeySpecifier),
		fields?: TeamPreviousValuesFieldPolicy,
	},
	TeamSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamSubscriptionPayloadKeySpecifier | (() => undefined | TeamSubscriptionPayloadKeySpecifier),
		fields?: TeamSubscriptionPayloadFieldPolicy,
	},
	Topic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicKeySpecifier | (() => undefined | TopicKeySpecifier),
		fields?: TopicFieldPolicy,
	},
	TopicConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicConnectionKeySpecifier | (() => undefined | TopicConnectionKeySpecifier),
		fields?: TopicConnectionFieldPolicy,
	},
	TopicEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicEdgeKeySpecifier | (() => undefined | TopicEdgeKeySpecifier),
		fields?: TopicEdgeFieldPolicy,
	},
	TopicPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicPreviousValuesKeySpecifier | (() => undefined | TopicPreviousValuesKeySpecifier),
		fields?: TopicPreviousValuesFieldPolicy,
	},
	TopicResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicResponseKeySpecifier | (() => undefined | TopicResponseKeySpecifier),
		fields?: TopicResponseFieldPolicy,
	},
	TopicSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicSubscriptionPayloadKeySpecifier | (() => undefined | TopicSubscriptionPayloadKeySpecifier),
		fields?: TopicSubscriptionPayloadFieldPolicy,
	},
	Tournament?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentKeySpecifier | (() => undefined | TournamentKeySpecifier),
		fields?: TournamentFieldPolicy,
	},
	TournamentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentConnectionKeySpecifier | (() => undefined | TournamentConnectionKeySpecifier),
		fields?: TournamentConnectionFieldPolicy,
	},
	TournamentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentEdgeKeySpecifier | (() => undefined | TournamentEdgeKeySpecifier),
		fields?: TournamentEdgeFieldPolicy,
	},
	TournamentGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentGroupKeySpecifier | (() => undefined | TournamentGroupKeySpecifier),
		fields?: TournamentGroupFieldPolicy,
	},
	TournamentGroupConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentGroupConnectionKeySpecifier | (() => undefined | TournamentGroupConnectionKeySpecifier),
		fields?: TournamentGroupConnectionFieldPolicy,
	},
	TournamentGroupEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentGroupEdgeKeySpecifier | (() => undefined | TournamentGroupEdgeKeySpecifier),
		fields?: TournamentGroupEdgeFieldPolicy,
	},
	TournamentGroupPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentGroupPreviousValuesKeySpecifier | (() => undefined | TournamentGroupPreviousValuesKeySpecifier),
		fields?: TournamentGroupPreviousValuesFieldPolicy,
	},
	TournamentGroupResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentGroupResponseKeySpecifier | (() => undefined | TournamentGroupResponseKeySpecifier),
		fields?: TournamentGroupResponseFieldPolicy,
	},
	TournamentGroupSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentGroupSubscriptionPayloadKeySpecifier | (() => undefined | TournamentGroupSubscriptionPayloadKeySpecifier),
		fields?: TournamentGroupSubscriptionPayloadFieldPolicy,
	},
	TournamentPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentPreviousValuesKeySpecifier | (() => undefined | TournamentPreviousValuesKeySpecifier),
		fields?: TournamentPreviousValuesFieldPolicy,
	},
	TournamentResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentResponseKeySpecifier | (() => undefined | TournamentResponseKeySpecifier),
		fields?: TournamentResponseFieldPolicy,
	},
	TournamentSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentSubscriptionPayloadKeySpecifier | (() => undefined | TournamentSubscriptionPayloadKeySpecifier),
		fields?: TournamentSubscriptionPayloadFieldPolicy,
	},
	Tourney?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyKeySpecifier | (() => undefined | TourneyKeySpecifier),
		fields?: TourneyFieldPolicy,
	},
	TourneyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyConnectionKeySpecifier | (() => undefined | TourneyConnectionKeySpecifier),
		fields?: TourneyConnectionFieldPolicy,
	},
	TourneyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyEdgeKeySpecifier | (() => undefined | TourneyEdgeKeySpecifier),
		fields?: TourneyEdgeFieldPolicy,
	},
	TourneyPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyPreviousValuesKeySpecifier | (() => undefined | TourneyPreviousValuesKeySpecifier),
		fields?: TourneyPreviousValuesFieldPolicy,
	},
	TourneyResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyResponseKeySpecifier | (() => undefined | TourneyResponseKeySpecifier),
		fields?: TourneyResponseFieldPolicy,
	},
	TourneySubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneySubscriptionPayloadKeySpecifier | (() => undefined | TourneySubscriptionPayloadKeySpecifier),
		fields?: TourneySubscriptionPayloadFieldPolicy,
	},
	Transaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionKeySpecifier | (() => undefined | TransactionKeySpecifier),
		fields?: TransactionFieldPolicy,
	},
	TransactionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionConnectionKeySpecifier | (() => undefined | TransactionConnectionKeySpecifier),
		fields?: TransactionConnectionFieldPolicy,
	},
	TransactionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionEdgeKeySpecifier | (() => undefined | TransactionEdgeKeySpecifier),
		fields?: TransactionEdgeFieldPolicy,
	},
	TransactionPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionPreviousValuesKeySpecifier | (() => undefined | TransactionPreviousValuesKeySpecifier),
		fields?: TransactionPreviousValuesFieldPolicy,
	},
	TransactionSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransactionSubscriptionPayloadKeySpecifier | (() => undefined | TransactionSubscriptionPayloadKeySpecifier),
		fields?: TransactionSubscriptionPayloadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionKeySpecifier | (() => undefined | UserConnectionKeySpecifier),
		fields?: UserConnectionFieldPolicy,
	},
	UserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEdgeKeySpecifier | (() => undefined | UserEdgeKeySpecifier),
		fields?: UserEdgeFieldPolicy,
	},
	UserGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGroupKeySpecifier | (() => undefined | UserGroupKeySpecifier),
		fields?: UserGroupFieldPolicy,
	},
	UserGroupConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGroupConnectionKeySpecifier | (() => undefined | UserGroupConnectionKeySpecifier),
		fields?: UserGroupConnectionFieldPolicy,
	},
	UserGroupEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGroupEdgeKeySpecifier | (() => undefined | UserGroupEdgeKeySpecifier),
		fields?: UserGroupEdgeFieldPolicy,
	},
	UserGroupPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGroupPreviousValuesKeySpecifier | (() => undefined | UserGroupPreviousValuesKeySpecifier),
		fields?: UserGroupPreviousValuesFieldPolicy,
	},
	UserGroupSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGroupSubscriptionPayloadKeySpecifier | (() => undefined | UserGroupSubscriptionPayloadKeySpecifier),
		fields?: UserGroupSubscriptionPayloadFieldPolicy,
	},
	UserPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPreviousValuesKeySpecifier | (() => undefined | UserPreviousValuesKeySpecifier),
		fields?: UserPreviousValuesFieldPolicy,
	},
	UserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserResponseKeySpecifier | (() => undefined | UserResponseKeySpecifier),
		fields?: UserResponseFieldPolicy,
	},
	UserSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSubscriptionPayloadKeySpecifier | (() => undefined | UserSubscriptionPayloadKeySpecifier),
		fields?: UserSubscriptionPayloadFieldPolicy,
	},
	UserTarif?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTarifKeySpecifier | (() => undefined | UserTarifKeySpecifier),
		fields?: UserTarifFieldPolicy,
	},
	UserTarifConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTarifConnectionKeySpecifier | (() => undefined | UserTarifConnectionKeySpecifier),
		fields?: UserTarifConnectionFieldPolicy,
	},
	UserTarifEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTarifEdgeKeySpecifier | (() => undefined | UserTarifEdgeKeySpecifier),
		fields?: UserTarifEdgeFieldPolicy,
	},
	UserTarifPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTarifPreviousValuesKeySpecifier | (() => undefined | UserTarifPreviousValuesKeySpecifier),
		fields?: UserTarifPreviousValuesFieldPolicy,
	},
	UserTarifSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTarifSubscriptionPayloadKeySpecifier | (() => undefined | UserTarifSubscriptionPayloadKeySpecifier),
		fields?: UserTarifSubscriptionPayloadFieldPolicy,
	},
	Vote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoteKeySpecifier | (() => undefined | VoteKeySpecifier),
		fields?: VoteFieldPolicy,
	},
	VoteConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoteConnectionKeySpecifier | (() => undefined | VoteConnectionKeySpecifier),
		fields?: VoteConnectionFieldPolicy,
	},
	VoteEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoteEdgeKeySpecifier | (() => undefined | VoteEdgeKeySpecifier),
		fields?: VoteEdgeFieldPolicy,
	},
	VotePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VotePreviousValuesKeySpecifier | (() => undefined | VotePreviousValuesKeySpecifier),
		fields?: VotePreviousValuesFieldPolicy,
	},
	VoteSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoteSubscriptionPayloadKeySpecifier | (() => undefined | VoteSubscriptionPayloadKeySpecifier),
		fields?: VoteSubscriptionPayloadFieldPolicy,
	},
	ethNet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ethNetKeySpecifier | (() => undefined | ethNetKeySpecifier),
		fields?: ethNetFieldPolicy,
	},
	ethSyncState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ethSyncStateKeySpecifier | (() => undefined | ethSyncStateKeySpecifier),
		fields?: ethSyncStateFieldPolicy,
	},
	mapGeoObjectsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | mapGeoObjectsConnectionKeySpecifier | (() => undefined | mapGeoObjectsConnectionKeySpecifier),
		fields?: mapGeoObjectsConnectionFieldPolicy,
	}
};