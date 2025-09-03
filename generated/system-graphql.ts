import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  GraphQLBigInt: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  Hash: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Void: { input: any; output: any; }
  permissions_me_type: { input: any; output: any; }
};

export enum SystemEventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type SystemMutation = {
  __typename?: 'Mutation';
  auth_login?: Maybe<SystemAuth_Tokens>;
  auth_logout?: Maybe<Scalars['Boolean']['output']>;
  auth_password_request?: Maybe<Scalars['Boolean']['output']>;
  auth_password_reset?: Maybe<Scalars['Boolean']['output']>;
  auth_refresh?: Maybe<SystemAuth_Tokens>;
  create_access_item?: Maybe<SystemDirectus_Access>;
  create_access_items: Array<SystemDirectus_Access>;
  create_collections_item?: Maybe<SystemWrite_Directus_Collections>;
  create_comments_item?: Maybe<SystemDirectus_Comments>;
  create_comments_items: Array<SystemDirectus_Comments>;
  create_dashboards_item?: Maybe<SystemDirectus_Dashboards>;
  create_dashboards_items: Array<SystemDirectus_Dashboards>;
  create_fields_item?: Maybe<SystemWrite_Directus_Fields>;
  create_files_item?: Maybe<SystemDirectus_Files>;
  create_files_items: Array<SystemDirectus_Files>;
  create_flows_item?: Maybe<SystemDirectus_Flows>;
  create_flows_items: Array<SystemDirectus_Flows>;
  create_folders_item?: Maybe<SystemDirectus_Folders>;
  create_folders_items: Array<SystemDirectus_Folders>;
  create_notifications_item?: Maybe<SystemDirectus_Notifications>;
  create_notifications_items: Array<SystemDirectus_Notifications>;
  create_operations_item?: Maybe<SystemDirectus_Operations>;
  create_operations_items: Array<SystemDirectus_Operations>;
  create_panels_item?: Maybe<SystemDirectus_Panels>;
  create_panels_items: Array<SystemDirectus_Panels>;
  create_permissions_item?: Maybe<SystemDirectus_Permissions>;
  create_permissions_items: Array<SystemDirectus_Permissions>;
  create_policies_item?: Maybe<SystemDirectus_Policies>;
  create_policies_items: Array<SystemDirectus_Policies>;
  create_presets_item?: Maybe<SystemDirectus_Presets>;
  create_presets_items: Array<SystemDirectus_Presets>;
  create_relations_item?: Maybe<SystemWrite_Directus_Relations>;
  create_roles_item?: Maybe<SystemDirectus_Roles>;
  create_roles_items: Array<SystemDirectus_Roles>;
  create_shares_item?: Maybe<SystemDirectus_Shares>;
  create_shares_items: Array<SystemDirectus_Shares>;
  create_translations_item?: Maybe<SystemDirectus_Translations>;
  create_translations_items: Array<SystemDirectus_Translations>;
  create_users_item?: Maybe<SystemDirectus_Users>;
  create_users_items: Array<SystemDirectus_Users>;
  create_versions_item?: Maybe<SystemDirectus_Versions>;
  create_versions_items: Array<SystemDirectus_Versions>;
  create_webhooks_item?: Maybe<SystemDirectus_Webhooks>;
  create_webhooks_items: Array<SystemDirectus_Webhooks>;
  delete_access_item?: Maybe<SystemDelete_One>;
  delete_access_items?: Maybe<SystemDelete_Many>;
  delete_collections_item?: Maybe<SystemDelete_Collection>;
  delete_comments_item?: Maybe<SystemDelete_One>;
  delete_comments_items?: Maybe<SystemDelete_Many>;
  delete_dashboards_item?: Maybe<SystemDelete_One>;
  delete_dashboards_items?: Maybe<SystemDelete_Many>;
  delete_fields_item?: Maybe<SystemDelete_Field>;
  delete_files_item?: Maybe<SystemDelete_One>;
  delete_files_items?: Maybe<SystemDelete_Many>;
  delete_flows_item?: Maybe<SystemDelete_One>;
  delete_flows_items?: Maybe<SystemDelete_Many>;
  delete_folders_item?: Maybe<SystemDelete_One>;
  delete_folders_items?: Maybe<SystemDelete_Many>;
  delete_notifications_item?: Maybe<SystemDelete_One>;
  delete_notifications_items?: Maybe<SystemDelete_Many>;
  delete_operations_item?: Maybe<SystemDelete_One>;
  delete_operations_items?: Maybe<SystemDelete_Many>;
  delete_panels_item?: Maybe<SystemDelete_One>;
  delete_panels_items?: Maybe<SystemDelete_Many>;
  delete_permissions_item?: Maybe<SystemDelete_One>;
  delete_permissions_items?: Maybe<SystemDelete_Many>;
  delete_policies_item?: Maybe<SystemDelete_One>;
  delete_policies_items?: Maybe<SystemDelete_Many>;
  delete_presets_item?: Maybe<SystemDelete_One>;
  delete_presets_items?: Maybe<SystemDelete_Many>;
  delete_relations_item?: Maybe<SystemDelete_Relation>;
  delete_roles_item?: Maybe<SystemDelete_One>;
  delete_roles_items?: Maybe<SystemDelete_Many>;
  delete_shares_item?: Maybe<SystemDelete_One>;
  delete_shares_items?: Maybe<SystemDelete_Many>;
  delete_translations_item?: Maybe<SystemDelete_One>;
  delete_translations_items?: Maybe<SystemDelete_Many>;
  delete_users_item?: Maybe<SystemDelete_One>;
  delete_users_items?: Maybe<SystemDelete_Many>;
  delete_versions_item?: Maybe<SystemDelete_One>;
  delete_versions_items?: Maybe<SystemDelete_Many>;
  delete_webhooks_item?: Maybe<SystemDelete_One>;
  delete_webhooks_items?: Maybe<SystemDelete_Many>;
  import_file?: Maybe<SystemDirectus_Files>;
  update_access_batch: Array<SystemDirectus_Access>;
  update_access_item?: Maybe<SystemDirectus_Access>;
  update_access_items: Array<SystemDirectus_Access>;
  update_collections_item?: Maybe<SystemWrite_Directus_Collections>;
  update_comments_batch: Array<SystemDirectus_Comments>;
  update_comments_item?: Maybe<SystemDirectus_Comments>;
  update_comments_items: Array<SystemDirectus_Comments>;
  update_dashboards_batch: Array<SystemDirectus_Dashboards>;
  update_dashboards_item?: Maybe<SystemDirectus_Dashboards>;
  update_dashboards_items: Array<SystemDirectus_Dashboards>;
  update_extensions_item?: Maybe<SystemDirectus_Extensions>;
  update_fields_item?: Maybe<SystemWrite_Directus_Fields>;
  update_files_batch: Array<SystemDirectus_Files>;
  update_files_item?: Maybe<SystemDirectus_Files>;
  update_files_items: Array<SystemDirectus_Files>;
  update_flows_batch: Array<SystemDirectus_Flows>;
  update_flows_item?: Maybe<SystemDirectus_Flows>;
  update_flows_items: Array<SystemDirectus_Flows>;
  update_folders_batch: Array<SystemDirectus_Folders>;
  update_folders_item?: Maybe<SystemDirectus_Folders>;
  update_folders_items: Array<SystemDirectus_Folders>;
  update_notifications_batch: Array<SystemDirectus_Notifications>;
  update_notifications_item?: Maybe<SystemDirectus_Notifications>;
  update_notifications_items: Array<SystemDirectus_Notifications>;
  update_operations_batch: Array<SystemDirectus_Operations>;
  update_operations_item?: Maybe<SystemDirectus_Operations>;
  update_operations_items: Array<SystemDirectus_Operations>;
  update_panels_batch: Array<SystemDirectus_Panels>;
  update_panels_item?: Maybe<SystemDirectus_Panels>;
  update_panels_items: Array<SystemDirectus_Panels>;
  update_permissions_batch: Array<SystemDirectus_Permissions>;
  update_permissions_item?: Maybe<SystemDirectus_Permissions>;
  update_permissions_items: Array<SystemDirectus_Permissions>;
  update_policies_batch: Array<SystemDirectus_Policies>;
  update_policies_item?: Maybe<SystemDirectus_Policies>;
  update_policies_items: Array<SystemDirectus_Policies>;
  update_presets_batch: Array<SystemDirectus_Presets>;
  update_presets_item?: Maybe<SystemDirectus_Presets>;
  update_presets_items: Array<SystemDirectus_Presets>;
  update_relations_item?: Maybe<SystemWrite_Directus_Relations>;
  update_roles_batch: Array<SystemDirectus_Roles>;
  update_roles_item?: Maybe<SystemDirectus_Roles>;
  update_roles_items: Array<SystemDirectus_Roles>;
  update_settings?: Maybe<SystemDirectus_Settings>;
  update_shares_batch: Array<SystemDirectus_Shares>;
  update_shares_item?: Maybe<SystemDirectus_Shares>;
  update_shares_items: Array<SystemDirectus_Shares>;
  update_translations_batch: Array<SystemDirectus_Translations>;
  update_translations_item?: Maybe<SystemDirectus_Translations>;
  update_translations_items: Array<SystemDirectus_Translations>;
  update_users_batch: Array<SystemDirectus_Users>;
  update_users_item?: Maybe<SystemDirectus_Users>;
  update_users_items: Array<SystemDirectus_Users>;
  update_users_me?: Maybe<SystemDirectus_Users>;
  update_versions_batch: Array<SystemDirectus_Versions>;
  update_versions_item?: Maybe<SystemDirectus_Versions>;
  update_versions_items: Array<SystemDirectus_Versions>;
  update_webhooks_batch: Array<SystemDirectus_Webhooks>;
  update_webhooks_item?: Maybe<SystemDirectus_Webhooks>;
  update_webhooks_items: Array<SystemDirectus_Webhooks>;
  users_invite?: Maybe<Scalars['Boolean']['output']>;
  users_invite_accept?: Maybe<Scalars['Boolean']['output']>;
  users_me_tfa_disable?: Maybe<Scalars['Boolean']['output']>;
  users_me_tfa_enable?: Maybe<Scalars['Boolean']['output']>;
  users_me_tfa_generate?: Maybe<SystemUsers_Me_Tfa_Generate_Data>;
  users_register?: Maybe<Scalars['Boolean']['output']>;
  users_register_verify?: Maybe<Scalars['Boolean']['output']>;
  utils_cache_clear?: Maybe<Scalars['Void']['output']>;
  utils_hash_generate?: Maybe<Scalars['String']['output']>;
  utils_hash_verify?: Maybe<Scalars['Boolean']['output']>;
  utils_random_string?: Maybe<Scalars['String']['output']>;
  utils_revert?: Maybe<Scalars['Boolean']['output']>;
  utils_sort?: Maybe<Scalars['Boolean']['output']>;
};


export type SystemMutationAuth_LoginArgs = {
  email: Scalars['String']['input'];
  mode?: InputMaybe<SystemAuth_Mode>;
  otp?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};


export type SystemMutationAuth_LogoutArgs = {
  mode?: InputMaybe<SystemAuth_Mode>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
};


export type SystemMutationAuth_Password_RequestArgs = {
  email: Scalars['String']['input'];
  reset_url?: InputMaybe<Scalars['String']['input']>;
};


export type SystemMutationAuth_Password_ResetArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type SystemMutationAuth_RefreshArgs = {
  mode?: InputMaybe<SystemAuth_Mode>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
};


export type SystemMutationCreate_Access_ItemArgs = {
  data: SystemCreate_Directus_Access_Input;
};


export type SystemMutationCreate_Access_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Access_Input>>;
  filter?: InputMaybe<SystemDirectus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Collections_ItemArgs = {
  data: SystemWrite_Directus_Collections_Input;
};


export type SystemMutationCreate_Comments_ItemArgs = {
  data: SystemCreate_Directus_Comments_Input;
};


export type SystemMutationCreate_Comments_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Comments_Input>>;
  filter?: InputMaybe<SystemDirectus_Comments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Dashboards_ItemArgs = {
  data: SystemCreate_Directus_Dashboards_Input;
};


export type SystemMutationCreate_Dashboards_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Dashboards_Input>>;
  filter?: InputMaybe<SystemDirectus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Fields_ItemArgs = {
  collection: Scalars['String']['input'];
  data: SystemWrite_Directus_Fields_Input;
};


export type SystemMutationCreate_Files_ItemArgs = {
  data: SystemCreate_Directus_Files_Input;
};


export type SystemMutationCreate_Files_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Files_Input>>;
  filter?: InputMaybe<SystemDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Flows_ItemArgs = {
  data: SystemCreate_Directus_Flows_Input;
};


export type SystemMutationCreate_Flows_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Flows_Input>>;
  filter?: InputMaybe<SystemDirectus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Folders_ItemArgs = {
  data: SystemCreate_Directus_Folders_Input;
};


export type SystemMutationCreate_Folders_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Folders_Input>>;
  filter?: InputMaybe<SystemDirectus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Notifications_ItemArgs = {
  data: SystemCreate_Directus_Notifications_Input;
};


export type SystemMutationCreate_Notifications_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Notifications_Input>>;
  filter?: InputMaybe<SystemDirectus_Notifications_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Operations_ItemArgs = {
  data: SystemCreate_Directus_Operations_Input;
};


export type SystemMutationCreate_Operations_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Operations_Input>>;
  filter?: InputMaybe<SystemDirectus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Panels_ItemArgs = {
  data: SystemCreate_Directus_Panels_Input;
};


export type SystemMutationCreate_Panels_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Panels_Input>>;
  filter?: InputMaybe<SystemDirectus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Permissions_ItemArgs = {
  data: SystemCreate_Directus_Permissions_Input;
};


export type SystemMutationCreate_Permissions_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Permissions_Input>>;
  filter?: InputMaybe<SystemDirectus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Policies_ItemArgs = {
  data: SystemCreate_Directus_Policies_Input;
};


export type SystemMutationCreate_Policies_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Policies_Input>>;
  filter?: InputMaybe<SystemDirectus_Policies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Presets_ItemArgs = {
  data: SystemCreate_Directus_Presets_Input;
};


export type SystemMutationCreate_Presets_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Presets_Input>>;
  filter?: InputMaybe<SystemDirectus_Presets_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Relations_ItemArgs = {
  data: SystemWrite_Directus_Relations_Input;
};


export type SystemMutationCreate_Roles_ItemArgs = {
  data: SystemCreate_Directus_Roles_Input;
};


export type SystemMutationCreate_Roles_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Roles_Input>>;
  filter?: InputMaybe<SystemDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Shares_ItemArgs = {
  data: SystemCreate_Directus_Shares_Input;
};


export type SystemMutationCreate_Shares_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Shares_Input>>;
  filter?: InputMaybe<SystemDirectus_Shares_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Translations_ItemArgs = {
  data: SystemCreate_Directus_Translations_Input;
};


export type SystemMutationCreate_Translations_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Translations_Input>>;
  filter?: InputMaybe<SystemDirectus_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Users_ItemArgs = {
  data: SystemCreate_Directus_Users_Input;
};


export type SystemMutationCreate_Users_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Users_Input>>;
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Versions_ItemArgs = {
  data: SystemCreate_Directus_Versions_Input;
};


export type SystemMutationCreate_Versions_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Versions_Input>>;
  filter?: InputMaybe<SystemDirectus_Versions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationCreate_Webhooks_ItemArgs = {
  data: SystemCreate_Directus_Webhooks_Input;
};


export type SystemMutationCreate_Webhooks_ItemsArgs = {
  data?: InputMaybe<Array<SystemCreate_Directus_Webhooks_Input>>;
  filter?: InputMaybe<SystemDirectus_Webhooks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationDelete_Access_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Access_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Collections_ItemArgs = {
  collection: Scalars['String']['input'];
};


export type SystemMutationDelete_Comments_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Comments_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Dashboards_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Dashboards_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Fields_ItemArgs = {
  collection: Scalars['String']['input'];
  field: Scalars['String']['input'];
};


export type SystemMutationDelete_Files_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Files_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Flows_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Flows_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Folders_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Folders_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Notifications_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Notifications_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Operations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Operations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Panels_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Panels_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Permissions_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Permissions_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Policies_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Policies_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Presets_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Presets_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Relations_ItemArgs = {
  collection: Scalars['String']['input'];
  field: Scalars['String']['input'];
};


export type SystemMutationDelete_Roles_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Roles_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Shares_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Shares_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Users_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Users_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Versions_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Versions_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationDelete_Webhooks_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type SystemMutationDelete_Webhooks_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type SystemMutationImport_FileArgs = {
  data?: InputMaybe<SystemCreate_Directus_Files_Input>;
  url: Scalars['String']['input'];
};


export type SystemMutationUpdate_Access_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Access_Input>>;
  filter?: InputMaybe<SystemDirectus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Access_ItemArgs = {
  data: SystemUpdate_Directus_Access_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Access_ItemsArgs = {
  data: SystemUpdate_Directus_Access_Input;
  filter?: InputMaybe<SystemDirectus_Access_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Collections_ItemArgs = {
  collection: Scalars['String']['input'];
  data: SystemWrite_Directus_Collections_Input;
};


export type SystemMutationUpdate_Comments_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Comments_Input>>;
  filter?: InputMaybe<SystemDirectus_Comments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Comments_ItemArgs = {
  data: SystemUpdate_Directus_Comments_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Comments_ItemsArgs = {
  data: SystemUpdate_Directus_Comments_Input;
  filter?: InputMaybe<SystemDirectus_Comments_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Dashboards_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Dashboards_Input>>;
  filter?: InputMaybe<SystemDirectus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Dashboards_ItemArgs = {
  data: SystemUpdate_Directus_Dashboards_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Dashboards_ItemsArgs = {
  data: SystemUpdate_Directus_Dashboards_Input;
  filter?: InputMaybe<SystemDirectus_Dashboards_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Extensions_ItemArgs = {
  data?: InputMaybe<SystemUpdate_Directus_Extensions_InputInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type SystemMutationUpdate_Fields_ItemArgs = {
  collection: Scalars['String']['input'];
  data: SystemWrite_Directus_Fields_Input;
  field: Scalars['String']['input'];
};


export type SystemMutationUpdate_Files_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Files_Input>>;
  filter?: InputMaybe<SystemDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Files_ItemArgs = {
  data: SystemUpdate_Directus_Files_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Files_ItemsArgs = {
  data: SystemUpdate_Directus_Files_Input;
  filter?: InputMaybe<SystemDirectus_Files_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Flows_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Flows_Input>>;
  filter?: InputMaybe<SystemDirectus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Flows_ItemArgs = {
  data: SystemUpdate_Directus_Flows_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Flows_ItemsArgs = {
  data: SystemUpdate_Directus_Flows_Input;
  filter?: InputMaybe<SystemDirectus_Flows_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Folders_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Folders_Input>>;
  filter?: InputMaybe<SystemDirectus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Folders_ItemArgs = {
  data: SystemUpdate_Directus_Folders_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Folders_ItemsArgs = {
  data: SystemUpdate_Directus_Folders_Input;
  filter?: InputMaybe<SystemDirectus_Folders_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Notifications_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Notifications_Input>>;
  filter?: InputMaybe<SystemDirectus_Notifications_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Notifications_ItemArgs = {
  data: SystemUpdate_Directus_Notifications_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Notifications_ItemsArgs = {
  data: SystemUpdate_Directus_Notifications_Input;
  filter?: InputMaybe<SystemDirectus_Notifications_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Operations_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Operations_Input>>;
  filter?: InputMaybe<SystemDirectus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Operations_ItemArgs = {
  data: SystemUpdate_Directus_Operations_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Operations_ItemsArgs = {
  data: SystemUpdate_Directus_Operations_Input;
  filter?: InputMaybe<SystemDirectus_Operations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Panels_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Panels_Input>>;
  filter?: InputMaybe<SystemDirectus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Panels_ItemArgs = {
  data: SystemUpdate_Directus_Panels_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Panels_ItemsArgs = {
  data: SystemUpdate_Directus_Panels_Input;
  filter?: InputMaybe<SystemDirectus_Panels_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Permissions_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Permissions_Input>>;
  filter?: InputMaybe<SystemDirectus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Permissions_ItemArgs = {
  data: SystemUpdate_Directus_Permissions_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Permissions_ItemsArgs = {
  data: SystemUpdate_Directus_Permissions_Input;
  filter?: InputMaybe<SystemDirectus_Permissions_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Policies_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Policies_Input>>;
  filter?: InputMaybe<SystemDirectus_Policies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Policies_ItemArgs = {
  data: SystemUpdate_Directus_Policies_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Policies_ItemsArgs = {
  data: SystemUpdate_Directus_Policies_Input;
  filter?: InputMaybe<SystemDirectus_Policies_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Presets_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Presets_Input>>;
  filter?: InputMaybe<SystemDirectus_Presets_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Presets_ItemArgs = {
  data: SystemUpdate_Directus_Presets_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Presets_ItemsArgs = {
  data: SystemUpdate_Directus_Presets_Input;
  filter?: InputMaybe<SystemDirectus_Presets_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Relations_ItemArgs = {
  collection: Scalars['String']['input'];
  data: SystemWrite_Directus_Relations_Input;
  field: Scalars['String']['input'];
};


export type SystemMutationUpdate_Roles_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Roles_Input>>;
  filter?: InputMaybe<SystemDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Roles_ItemArgs = {
  data: SystemUpdate_Directus_Roles_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Roles_ItemsArgs = {
  data: SystemUpdate_Directus_Roles_Input;
  filter?: InputMaybe<SystemDirectus_Roles_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_SettingsArgs = {
  data: SystemUpdate_Directus_Settings_Input;
};


export type SystemMutationUpdate_Shares_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Shares_Input>>;
  filter?: InputMaybe<SystemDirectus_Shares_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Shares_ItemArgs = {
  data: SystemUpdate_Directus_Shares_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Shares_ItemsArgs = {
  data: SystemUpdate_Directus_Shares_Input;
  filter?: InputMaybe<SystemDirectus_Shares_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Translations_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Translations_Input>>;
  filter?: InputMaybe<SystemDirectus_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Translations_ItemArgs = {
  data: SystemUpdate_Directus_Translations_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Translations_ItemsArgs = {
  data: SystemUpdate_Directus_Translations_Input;
  filter?: InputMaybe<SystemDirectus_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Users_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Users_Input>>;
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Users_ItemArgs = {
  data: SystemUpdate_Directus_Users_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Users_ItemsArgs = {
  data: SystemUpdate_Directus_Users_Input;
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Users_MeArgs = {
  data?: InputMaybe<SystemUpdate_Directus_Users_Input>;
};


export type SystemMutationUpdate_Versions_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Versions_Input>>;
  filter?: InputMaybe<SystemDirectus_Versions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Versions_ItemArgs = {
  data: SystemUpdate_Directus_Versions_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Versions_ItemsArgs = {
  data: SystemUpdate_Directus_Versions_Input;
  filter?: InputMaybe<SystemDirectus_Versions_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Webhooks_BatchArgs = {
  data?: InputMaybe<Array<SystemUpdate_Directus_Webhooks_Input>>;
  filter?: InputMaybe<SystemDirectus_Webhooks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUpdate_Webhooks_ItemArgs = {
  data: SystemUpdate_Directus_Webhooks_Input;
  id: Scalars['ID']['input'];
};


export type SystemMutationUpdate_Webhooks_ItemsArgs = {
  data: SystemUpdate_Directus_Webhooks_Input;
  filter?: InputMaybe<SystemDirectus_Webhooks_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemMutationUsers_InviteArgs = {
  email: Scalars['String']['input'];
  invite_url?: InputMaybe<Scalars['String']['input']>;
  role: Scalars['String']['input'];
};


export type SystemMutationUsers_Invite_AcceptArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type SystemMutationUsers_Me_Tfa_DisableArgs = {
  otp: Scalars['String']['input'];
};


export type SystemMutationUsers_Me_Tfa_EnableArgs = {
  otp: Scalars['String']['input'];
  secret: Scalars['String']['input'];
};


export type SystemMutationUsers_Me_Tfa_GenerateArgs = {
  password: Scalars['String']['input'];
};


export type SystemMutationUsers_RegisterArgs = {
  email: Scalars['String']['input'];
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  verification_url?: InputMaybe<Scalars['String']['input']>;
};


export type SystemMutationUsers_Register_VerifyArgs = {
  token: Scalars['String']['input'];
};


export type SystemMutationUtils_Hash_GenerateArgs = {
  string: Scalars['String']['input'];
};


export type SystemMutationUtils_Hash_VerifyArgs = {
  hash: Scalars['String']['input'];
  string: Scalars['String']['input'];
};


export type SystemMutationUtils_Random_StringArgs = {
  length?: InputMaybe<Scalars['Int']['input']>;
};


export type SystemMutationUtils_RevertArgs = {
  revision: Scalars['ID']['input'];
};


export type SystemMutationUtils_SortArgs = {
  collection: Scalars['String']['input'];
  item: Scalars['ID']['input'];
  to: Scalars['ID']['input'];
};

export type SystemQuery = {
  __typename?: 'Query';
  access: Array<SystemDirectus_Access>;
  access_aggregated: Array<SystemDirectus_Access_Aggregated>;
  access_by_id?: Maybe<SystemDirectus_Access>;
  activity: Array<SystemDirectus_Activity>;
  activity_aggregated: Array<SystemDirectus_Activity_Aggregated>;
  activity_by_id?: Maybe<SystemDirectus_Activity>;
  collections: Array<SystemDirectus_Collections>;
  collections_by_name?: Maybe<SystemDirectus_Collections>;
  comments: Array<SystemDirectus_Comments>;
  comments_aggregated: Array<SystemDirectus_Comments_Aggregated>;
  comments_by_id?: Maybe<SystemDirectus_Comments>;
  dashboards: Array<SystemDirectus_Dashboards>;
  dashboards_aggregated: Array<SystemDirectus_Dashboards_Aggregated>;
  dashboards_by_id?: Maybe<SystemDirectus_Dashboards>;
  extensions: Array<SystemDirectus_Extensions>;
  fields: Array<SystemDirectus_Fields>;
  fields_by_name?: Maybe<SystemDirectus_Fields>;
  fields_in_collection: Array<SystemDirectus_Fields>;
  files: Array<SystemDirectus_Files>;
  files_aggregated: Array<SystemDirectus_Files_Aggregated>;
  files_by_id?: Maybe<SystemDirectus_Files>;
  flows: Array<SystemDirectus_Flows>;
  flows_aggregated: Array<SystemDirectus_Flows_Aggregated>;
  flows_by_id?: Maybe<SystemDirectus_Flows>;
  folders: Array<SystemDirectus_Folders>;
  folders_aggregated: Array<SystemDirectus_Folders_Aggregated>;
  folders_by_id?: Maybe<SystemDirectus_Folders>;
  notifications: Array<SystemDirectus_Notifications>;
  notifications_aggregated: Array<SystemDirectus_Notifications_Aggregated>;
  notifications_by_id?: Maybe<SystemDirectus_Notifications>;
  operations: Array<SystemDirectus_Operations>;
  operations_aggregated: Array<SystemDirectus_Operations_Aggregated>;
  operations_by_id?: Maybe<SystemDirectus_Operations>;
  panels: Array<SystemDirectus_Panels>;
  panels_aggregated: Array<SystemDirectus_Panels_Aggregated>;
  panels_by_id?: Maybe<SystemDirectus_Panels>;
  permissions: Array<SystemDirectus_Permissions>;
  permissions_aggregated: Array<SystemDirectus_Permissions_Aggregated>;
  permissions_by_id?: Maybe<SystemDirectus_Permissions>;
  permissions_me?: Maybe<Scalars['permissions_me_type']['output']>;
  policies: Array<SystemDirectus_Policies>;
  policies_aggregated: Array<SystemDirectus_Policies_Aggregated>;
  policies_by_id?: Maybe<SystemDirectus_Policies>;
  policies_me_globals?: Maybe<SystemPolicy_Me_Globals_Type>;
  presets: Array<SystemDirectus_Presets>;
  presets_aggregated: Array<SystemDirectus_Presets_Aggregated>;
  presets_by_id?: Maybe<SystemDirectus_Presets>;
  relations: Array<SystemDirectus_Relations>;
  relations_by_name?: Maybe<SystemDirectus_Relations>;
  relations_in_collection: Array<SystemDirectus_Relations>;
  revisions: Array<SystemDirectus_Revisions>;
  revisions_aggregated: Array<SystemDirectus_Revisions_Aggregated>;
  revisions_by_id?: Maybe<SystemDirectus_Revisions>;
  roles: Array<SystemDirectus_Roles>;
  roles_aggregated: Array<SystemDirectus_Roles_Aggregated>;
  roles_by_id?: Maybe<SystemDirectus_Roles>;
  roles_me?: Maybe<Array<Maybe<SystemDirectus_Roles>>>;
  server_health?: Maybe<Scalars['JSON']['output']>;
  server_info?: Maybe<SystemServer_Info>;
  server_ping?: Maybe<Scalars['String']['output']>;
  server_specs_graphql?: Maybe<Scalars['String']['output']>;
  server_specs_oas?: Maybe<Scalars['JSON']['output']>;
  settings?: Maybe<SystemDirectus_Settings>;
  shares: Array<SystemDirectus_Shares>;
  shares_aggregated: Array<SystemDirectus_Shares_Aggregated>;
  shares_by_id?: Maybe<SystemDirectus_Shares>;
  translations: Array<SystemDirectus_Translations>;
  translations_aggregated: Array<SystemDirectus_Translations_Aggregated>;
  translations_by_id?: Maybe<SystemDirectus_Translations>;
  users: Array<SystemDirectus_Users>;
  users_aggregated: Array<SystemDirectus_Users_Aggregated>;
  users_by_id?: Maybe<SystemDirectus_Users>;
  users_me?: Maybe<SystemDirectus_Users>;
  versions: Array<SystemDirectus_Versions>;
  versions_aggregated: Array<SystemDirectus_Versions_Aggregated>;
  versions_by_id?: Maybe<SystemDirectus_Versions>;
  webhooks: Array<SystemDirectus_Webhooks>;
  webhooks_aggregated: Array<SystemDirectus_Webhooks_Aggregated>;
  webhooks_by_id?: Maybe<SystemDirectus_Webhooks>;
};


export type SystemQueryAccessArgs = {
  filter?: InputMaybe<SystemDirectus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryAccess_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Access_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryAccess_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryActivityArgs = {
  filter?: InputMaybe<SystemDirectus_Activity_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryActivity_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Activity_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryActivity_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryCollections_By_NameArgs = {
  name: Scalars['String']['input'];
};


export type SystemQueryCommentsArgs = {
  filter?: InputMaybe<SystemDirectus_Comments_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryComments_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Comments_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryComments_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryDashboardsArgs = {
  filter?: InputMaybe<SystemDirectus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryDashboards_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Dashboards_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryDashboards_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryFields_By_NameArgs = {
  collection: Scalars['String']['input'];
  field: Scalars['String']['input'];
};


export type SystemQueryFields_In_CollectionArgs = {
  collection: Scalars['String']['input'];
};


export type SystemQueryFilesArgs = {
  filter?: InputMaybe<SystemDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryFiles_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryFiles_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryFlowsArgs = {
  filter?: InputMaybe<SystemDirectus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryFlows_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Flows_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryFlows_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryFoldersArgs = {
  filter?: InputMaybe<SystemDirectus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryFolders_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Folders_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryFolders_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryNotificationsArgs = {
  filter?: InputMaybe<SystemDirectus_Notifications_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryNotifications_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Notifications_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryNotifications_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryOperationsArgs = {
  filter?: InputMaybe<SystemDirectus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryOperations_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Operations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryOperations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryPanelsArgs = {
  filter?: InputMaybe<SystemDirectus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryPanels_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Panels_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryPanels_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryPermissionsArgs = {
  filter?: InputMaybe<SystemDirectus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryPermissions_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Permissions_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryPermissions_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryPoliciesArgs = {
  filter?: InputMaybe<SystemDirectus_Policies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryPolicies_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Policies_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryPolicies_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryPresetsArgs = {
  filter?: InputMaybe<SystemDirectus_Presets_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryPresets_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Presets_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryPresets_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryRelations_By_NameArgs = {
  collection: Scalars['String']['input'];
  field: Scalars['String']['input'];
};


export type SystemQueryRelations_In_CollectionArgs = {
  collection: Scalars['String']['input'];
};


export type SystemQueryRevisionsArgs = {
  filter?: InputMaybe<SystemDirectus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryRevisions_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Revisions_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryRevisions_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryRolesArgs = {
  filter?: InputMaybe<SystemDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryRoles_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Roles_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryRoles_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryServer_Specs_GraphqlArgs = {
  scope?: InputMaybe<SystemGraphql_Sdl_Scope>;
};


export type SystemQuerySettingsArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQuerySharesArgs = {
  filter?: InputMaybe<SystemDirectus_Shares_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryShares_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Shares_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryShares_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryTranslationsArgs = {
  filter?: InputMaybe<SystemDirectus_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryTranslations_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryTranslations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryUsersArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryUsers_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryUsers_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryVersionsArgs = {
  filter?: InputMaybe<SystemDirectus_Versions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryVersions_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Versions_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryVersions_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type SystemQueryWebhooksArgs = {
  filter?: InputMaybe<SystemDirectus_Webhooks_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryWebhooks_AggregatedArgs = {
  filter?: InputMaybe<SystemDirectus_Webhooks_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemQueryWebhooks_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

export type SystemSubscription = {
  __typename?: 'Subscription';
  boutiques_mutated?: Maybe<SystemBoutiques_Mutated>;
  categories_mutated?: Maybe<SystemCategories_Mutated>;
  directus_access_mutated?: Maybe<SystemDirectus_Access_Mutated>;
  directus_activity_mutated?: Maybe<SystemDirectus_Activity_Mutated>;
  directus_comments_mutated?: Maybe<SystemDirectus_Comments_Mutated>;
  directus_dashboards_mutated?: Maybe<SystemDirectus_Dashboards_Mutated>;
  directus_files_mutated?: Maybe<SystemDirectus_Files_Mutated>;
  directus_flows_mutated?: Maybe<SystemDirectus_Flows_Mutated>;
  directus_folders_mutated?: Maybe<SystemDirectus_Folders_Mutated>;
  directus_notifications_mutated?: Maybe<SystemDirectus_Notifications_Mutated>;
  directus_operations_mutated?: Maybe<SystemDirectus_Operations_Mutated>;
  directus_panels_mutated?: Maybe<SystemDirectus_Panels_Mutated>;
  directus_permissions_mutated?: Maybe<SystemDirectus_Permissions_Mutated>;
  directus_policies_mutated?: Maybe<SystemDirectus_Policies_Mutated>;
  directus_presets_mutated?: Maybe<SystemDirectus_Presets_Mutated>;
  directus_revisions_mutated?: Maybe<SystemDirectus_Revisions_Mutated>;
  directus_roles_mutated?: Maybe<SystemDirectus_Roles_Mutated>;
  directus_settings_mutated?: Maybe<SystemDirectus_Settings_Mutated>;
  directus_shares_mutated?: Maybe<SystemDirectus_Shares_Mutated>;
  directus_translations_mutated?: Maybe<SystemDirectus_Translations_Mutated>;
  directus_users_mutated?: Maybe<SystemDirectus_Users_Mutated>;
  directus_versions_mutated?: Maybe<SystemDirectus_Versions_Mutated>;
  directus_webhooks_mutated?: Maybe<SystemDirectus_Webhooks_Mutated>;
  order_items_mutated?: Maybe<SystemOrder_Items_Mutated>;
  orders_mutated?: Maybe<SystemOrders_Mutated>;
  payments_mutated?: Maybe<SystemPayments_Mutated>;
  products_mutated?: Maybe<SystemProducts_Mutated>;
  users_mutated?: Maybe<SystemUsers_Mutated>;
};


export type SystemSubscriptionBoutiques_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionCategories_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Access_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Activity_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Comments_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Dashboards_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Flows_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Folders_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Notifications_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Operations_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Panels_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Permissions_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Policies_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Presets_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Revisions_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Roles_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Settings_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Shares_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Translations_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Users_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Versions_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionDirectus_Webhooks_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionOrder_Items_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionOrders_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionPayments_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionProducts_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};


export type SystemSubscriptionUsers_MutatedArgs = {
  event?: InputMaybe<SystemEventEnum>;
};

export enum SystemAuth_Mode {
  Cookie = 'cookie',
  Json = 'json',
  Session = 'session'
}

export type SystemAuth_Tokens = {
  __typename?: 'auth_tokens';
  access_token?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['GraphQLBigInt']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
};

export type SystemBig_Int_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemBoolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemBoutiques = {
  __typename?: 'boutiques';
  address?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<SystemDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<SystemDatetime_Functions>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['JSON']['output']>;
  images_func?: Maybe<SystemCount_Functions>;
  main_image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user?: Maybe<SystemDirectus_Users>;
  user_created?: Maybe<SystemDirectus_Users>;
  user_updated?: Maybe<SystemDirectus_Users>;
};


export type SystemBoutiquesUserArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemBoutiquesUser_CreatedArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemBoutiquesUser_UpdatedArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemBoutiques_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemBoutiques_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemBoutiques_Filter>>>;
  address?: InputMaybe<SystemString_Filter_Operators>;
  date_created?: InputMaybe<SystemDate_Filter_Operators>;
  date_created_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<SystemDate_Filter_Operators>;
  date_updated_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  images?: InputMaybe<SystemString_Filter_Operators>;
  images_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  main_image?: InputMaybe<SystemString_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  sort?: InputMaybe<SystemNumber_Filter_Operators>;
  stars?: InputMaybe<SystemNumber_Filter_Operators>;
  status?: InputMaybe<SystemString_Filter_Operators>;
  user?: InputMaybe<SystemDirectus_Users_Filter>;
  user_created?: InputMaybe<SystemDirectus_Users_Filter>;
  user_updated?: InputMaybe<SystemDirectus_Users_Filter>;
};

export type SystemBoutiques_Mutated = {
  __typename?: 'boutiques_mutated';
  data?: Maybe<SystemBoutiques>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemCategories = {
  __typename?: 'categories';
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<SystemDatetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<SystemDatetime_Functions>;
};

export type SystemCategories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemCategories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemCategories_Filter>>>;
  created_at?: InputMaybe<SystemDate_Filter_Operators>;
  created_at_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  description?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  updated_at?: InputMaybe<SystemDate_Filter_Operators>;
  updated_at_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
};

export type SystemCategories_Mutated = {
  __typename?: 'categories_mutated';
  data?: Maybe<SystemCategories>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemCount_Function_Filter_Operators = {
  count?: InputMaybe<SystemNumber_Filter_Operators>;
};

export type SystemCount_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type SystemCreate_Directus_Access_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  policy?: InputMaybe<SystemCreate_Directus_Policies_Input>;
  role?: InputMaybe<SystemCreate_Directus_Roles_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<SystemCreate_Directus_Users_Input>;
};

export type SystemCreate_Directus_Comments_Input = {
  collection: Scalars['String']['input'];
  comment: Scalars['String']['input'];
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item: Scalars['String']['input'];
  user_created?: InputMaybe<SystemCreate_Directus_Users_Input>;
  user_updated?: InputMaybe<SystemCreate_Directus_Users_Input>;
};

export type SystemCreate_Directus_Dashboards_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  panels?: InputMaybe<Array<InputMaybe<SystemCreate_Directus_Panels_Input>>>;
  user_created?: InputMaybe<SystemCreate_Directus_Users_Input>;
};

export type SystemCreate_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  created_on?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download: Scalars['String']['input'];
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  focal_point_x?: InputMaybe<Scalars['Int']['input']>;
  focal_point_y?: InputMaybe<Scalars['Int']['input']>;
  folder?: InputMaybe<SystemCreate_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<SystemCreate_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage: Scalars['String']['input'];
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tus_data?: InputMaybe<Scalars['JSON']['input']>;
  tus_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<SystemCreate_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemCreate_Directus_Flows_Input = {
  accountability?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  operation?: InputMaybe<SystemCreate_Directus_Operations_Input>;
  operations?: InputMaybe<Array<InputMaybe<SystemCreate_Directus_Operations_Input>>>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  trigger?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<SystemCreate_Directus_Users_Input>;
};

export type SystemCreate_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<SystemCreate_Directus_Folders_Input>;
};

export type SystemCreate_Directus_Notifications_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  recipient?: InputMaybe<SystemCreate_Directus_Users_Input>;
  sender?: InputMaybe<SystemCreate_Directus_Users_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['Date']['input']>;
};

export type SystemCreate_Directus_Operations_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  flow?: InputMaybe<SystemCreate_Directus_Flows_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  key: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position_x: Scalars['Int']['input'];
  position_y: Scalars['Int']['input'];
  reject?: InputMaybe<SystemCreate_Directus_Operations_Input>;
  resolve?: InputMaybe<SystemCreate_Directus_Operations_Input>;
  type: Scalars['String']['input'];
  user_created?: InputMaybe<SystemCreate_Directus_Users_Input>;
};

export type SystemCreate_Directus_Panels_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  dashboard?: InputMaybe<SystemCreate_Directus_Dashboards_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  height: Scalars['Int']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position_x: Scalars['Int']['input'];
  position_y: Scalars['Int']['input'];
  show_header: Scalars['Boolean']['input'];
  type: Scalars['String']['input'];
  user_created?: InputMaybe<SystemCreate_Directus_Users_Input>;
  width: Scalars['Int']['input'];
};

export type SystemCreate_Directus_Permissions_Input = {
  action: Scalars['String']['input'];
  collection: Scalars['String']['input'];
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  policy?: InputMaybe<SystemCreate_Directus_Policies_Input>;
  presets?: InputMaybe<Scalars['JSON']['input']>;
  validation?: InputMaybe<Scalars['JSON']['input']>;
};

export type SystemCreate_Directus_Policies_Input = {
  admin_access: Scalars['Boolean']['input'];
  app_access: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa: Scalars['Boolean']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<Array<InputMaybe<SystemCreate_Directus_Permissions_Input>>>;
  roles?: InputMaybe<Array<InputMaybe<SystemCreate_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<SystemCreate_Directus_Access_Input>>>;
};

export type SystemCreate_Directus_Presets_Input = {
  bookmark?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSON']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<Scalars['String']['input']>;
  layout_options?: InputMaybe<Scalars['JSON']['input']>;
  layout_query?: InputMaybe<Scalars['JSON']['input']>;
  refresh_interval?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<SystemCreate_Directus_Roles_Input>;
  search?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<SystemCreate_Directus_Users_Input>;
};

export type SystemCreate_Directus_Roles_Input = {
  children?: InputMaybe<Array<InputMaybe<SystemCreate_Directus_Roles_Input>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<SystemCreate_Directus_Roles_Input>;
  policies?: InputMaybe<Array<InputMaybe<SystemCreate_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<SystemCreate_Directus_Users_Input>>>;
};

export type SystemCreate_Directus_Shares_Input = {
  collection: Scalars['String']['input'];
  date_created?: InputMaybe<Scalars['Date']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: InputMaybe<Scalars['Date']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item: Scalars['String']['input'];
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** $t:shared_leave_blank_for_passwordless_access */
  password?: InputMaybe<Scalars['Hash']['input']>;
  role?: InputMaybe<SystemCreate_Directus_Roles_Input>;
  times_used?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<SystemCreate_Directus_Users_Input>;
};

export type SystemCreate_Directus_Translations_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  key: Scalars['String']['input'];
  language: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type SystemCreate_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['JSON']['input']>;
  avatar?: InputMaybe<SystemCreate_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['Date']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['Hash']['input']>;
  policies?: InputMaybe<Array<InputMaybe<SystemCreate_Directus_Access_Input>>>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<SystemCreate_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  text_direction?: InputMaybe<Scalars['String']['input']>;
  tfa_secret?: InputMaybe<Scalars['Hash']['input']>;
  theme_dark?: InputMaybe<Scalars['String']['input']>;
  theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>;
  theme_light?: InputMaybe<Scalars['String']['input']>;
  theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['Hash']['input']>;
};

export type SystemCreate_Directus_Versions_Input = {
  collection: Scalars['String']['input'];
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  delta?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item: Scalars['String']['input'];
  key: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<SystemCreate_Directus_Users_Input>;
  user_updated?: InputMaybe<SystemCreate_Directus_Users_Input>;
};

export type SystemCreate_Directus_Webhooks_Input = {
  actions: Array<InputMaybe<Scalars['String']['input']>>;
  collections: Array<InputMaybe<Scalars['String']['input']>>;
  data?: InputMaybe<Scalars['Boolean']['input']>;
  headers?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  migrated_flow?: InputMaybe<SystemCreate_Directus_Flows_Input>;
  name: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
  was_active_before_deprecation: Scalars['Boolean']['input'];
};

export type SystemDate_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemDatetime_Function_Filter_Operators = {
  day?: InputMaybe<SystemNumber_Filter_Operators>;
  hour?: InputMaybe<SystemNumber_Filter_Operators>;
  minute?: InputMaybe<SystemNumber_Filter_Operators>;
  month?: InputMaybe<SystemNumber_Filter_Operators>;
  second?: InputMaybe<SystemNumber_Filter_Operators>;
  week?: InputMaybe<SystemNumber_Filter_Operators>;
  weekday?: InputMaybe<SystemNumber_Filter_Operators>;
  year?: InputMaybe<SystemNumber_Filter_Operators>;
};

export type SystemDatetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type SystemDelete_Collection = {
  __typename?: 'delete_collection';
  collection?: Maybe<Scalars['String']['output']>;
};

export type SystemDelete_Field = {
  __typename?: 'delete_field';
  collection?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
};

export type SystemDelete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']['output']>>;
};

export type SystemDelete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID']['output'];
};

export type SystemDelete_Relation = {
  __typename?: 'delete_relation';
  collection?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
};

export type SystemDirectus_Access = {
  __typename?: 'directus_access';
  id: Scalars['ID']['output'];
  policy?: Maybe<SystemDirectus_Policies>;
  role?: Maybe<SystemDirectus_Roles>;
  sort?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<SystemDirectus_Users>;
};


export type SystemDirectus_AccessPolicyArgs = {
  filter?: InputMaybe<SystemDirectus_Policies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_AccessRoleArgs = {
  filter?: InputMaybe<SystemDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_AccessUserArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Access_Aggregated = {
  __typename?: 'directus_access_aggregated';
  avg?: Maybe<SystemDirectus_Access_Aggregated_Fields>;
  avgDistinct?: Maybe<SystemDirectus_Access_Aggregated_Fields>;
  count?: Maybe<SystemDirectus_Access_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Access_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<SystemDirectus_Access_Aggregated_Fields>;
  min?: Maybe<SystemDirectus_Access_Aggregated_Fields>;
  sum?: Maybe<SystemDirectus_Access_Aggregated_Fields>;
  sumDistinct?: Maybe<SystemDirectus_Access_Aggregated_Fields>;
};

export type SystemDirectus_Access_Aggregated_Count = {
  __typename?: 'directus_access_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  policy?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Access_Aggregated_Fields = {
  __typename?: 'directus_access_aggregated_fields';
  sort?: Maybe<Scalars['Float']['output']>;
};

export type SystemDirectus_Access_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Access_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Access_Filter>>>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  policy?: InputMaybe<SystemDirectus_Policies_Filter>;
  role?: InputMaybe<SystemDirectus_Roles_Filter>;
  sort?: InputMaybe<SystemNumber_Filter_Operators>;
  user?: InputMaybe<SystemDirectus_Users_Filter>;
};

export type SystemDirectus_Access_Mutated = {
  __typename?: 'directus_access_mutated';
  data?: Maybe<SystemDirectus_Access>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Access_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Access_Filter>>>;
  _none?: InputMaybe<SystemDirectus_Access_Filter>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Access_Filter>>>;
  _some?: InputMaybe<SystemDirectus_Access_Filter>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  policy?: InputMaybe<SystemDirectus_Policies_Filter>;
  role?: InputMaybe<SystemDirectus_Roles_Filter>;
  sort?: InputMaybe<SystemNumber_Filter_Operators>;
  user?: InputMaybe<SystemDirectus_Users_Filter>;
};

export type SystemDirectus_Activity = {
  __typename?: 'directus_activity';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  item: Scalars['String']['output'];
  origin?: Maybe<Scalars['String']['output']>;
  revisions?: Maybe<Array<Maybe<SystemDirectus_Revisions>>>;
  revisions_func?: Maybe<SystemCount_Functions>;
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<SystemDatetime_Functions>;
  user?: Maybe<SystemDirectus_Users>;
  user_agent?: Maybe<Scalars['String']['output']>;
};


export type SystemDirectus_ActivityRevisionsArgs = {
  filter?: InputMaybe<SystemDirectus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_ActivityUserArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Activity_Aggregated = {
  __typename?: 'directus_activity_aggregated';
  avg?: Maybe<SystemDirectus_Activity_Aggregated_Fields>;
  avgDistinct?: Maybe<SystemDirectus_Activity_Aggregated_Fields>;
  count?: Maybe<SystemDirectus_Activity_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Activity_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<SystemDirectus_Activity_Aggregated_Fields>;
  min?: Maybe<SystemDirectus_Activity_Aggregated_Fields>;
  sum?: Maybe<SystemDirectus_Activity_Aggregated_Fields>;
  sumDistinct?: Maybe<SystemDirectus_Activity_Aggregated_Fields>;
};

export type SystemDirectus_Activity_Aggregated_Count = {
  __typename?: 'directus_activity_aggregated_count';
  action?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ip?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  origin?: Maybe<Scalars['Int']['output']>;
  revisions?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Scalars['Int']['output']>;
  user_agent?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Activity_Aggregated_Fields = {
  __typename?: 'directus_activity_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type SystemDirectus_Activity_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Activity_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Activity_Filter>>>;
  action?: InputMaybe<SystemString_Filter_Operators>;
  collection?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  ip?: InputMaybe<SystemString_Filter_Operators>;
  item?: InputMaybe<SystemString_Filter_Operators>;
  origin?: InputMaybe<SystemString_Filter_Operators>;
  revisions?: InputMaybe<SystemDirectus_Revisions_Quantifier_Filter>;
  revisions_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  timestamp?: InputMaybe<SystemDate_Filter_Operators>;
  timestamp_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  user?: InputMaybe<SystemDirectus_Users_Filter>;
  user_agent?: InputMaybe<SystemString_Filter_Operators>;
};

export type SystemDirectus_Activity_Mutated = {
  __typename?: 'directus_activity_mutated';
  data?: Maybe<SystemDirectus_Activity>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Collections = {
  __typename?: 'directus_collections';
  collection?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<SystemDirectus_Collections_Meta>;
  schema?: Maybe<SystemDirectus_Collections_Schema>;
};

export type SystemDirectus_Collections_Meta = {
  __typename?: 'directus_collections_meta';
  accountability?: Maybe<Scalars['String']['output']>;
  archive_app_filter: Scalars['Boolean']['output'];
  archive_field?: Maybe<Scalars['String']['output']>;
  archive_value?: Maybe<Scalars['String']['output']>;
  collapse: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  color?: Maybe<Scalars['String']['output']>;
  display_template?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  hidden: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  item_duplication_fields?: Maybe<Scalars['JSON']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  preview_url?: Maybe<Scalars['String']['output']>;
  singleton: Scalars['Boolean']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  sort_field?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  unarchive_value?: Maybe<Scalars['String']['output']>;
  versioning: Scalars['Boolean']['output'];
};

export type SystemDirectus_Collections_Schema = {
  __typename?: 'directus_collections_schema';
  comment?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemDirectus_Comments = {
  __typename?: 'directus_comments';
  collection: Scalars['String']['output'];
  comment: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<SystemDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<SystemDatetime_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  user_created?: Maybe<SystemDirectus_Users>;
  user_updated?: Maybe<SystemDirectus_Users>;
};


export type SystemDirectus_CommentsUser_CreatedArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_CommentsUser_UpdatedArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Comments_Aggregated = {
  __typename?: 'directus_comments_aggregated';
  count?: Maybe<SystemDirectus_Comments_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Comments_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type SystemDirectus_Comments_Aggregated_Count = {
  __typename?: 'directus_comments_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Comments_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Comments_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Comments_Filter>>>;
  collection?: InputMaybe<SystemString_Filter_Operators>;
  comment?: InputMaybe<SystemString_Filter_Operators>;
  date_created?: InputMaybe<SystemDate_Filter_Operators>;
  date_created_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<SystemDate_Filter_Operators>;
  date_updated_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  item?: InputMaybe<SystemString_Filter_Operators>;
  user_created?: InputMaybe<SystemDirectus_Users_Filter>;
  user_updated?: InputMaybe<SystemDirectus_Users_Filter>;
};

export type SystemDirectus_Comments_Mutated = {
  __typename?: 'directus_comments_mutated';
  data?: Maybe<SystemDirectus_Comments>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Dashboards = {
  __typename?: 'directus_dashboards';
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<SystemDatetime_Functions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  panels?: Maybe<Array<Maybe<SystemDirectus_Panels>>>;
  panels_func?: Maybe<SystemCount_Functions>;
  user_created?: Maybe<SystemDirectus_Users>;
};


export type SystemDirectus_DashboardsPanelsArgs = {
  filter?: InputMaybe<SystemDirectus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_DashboardsUser_CreatedArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Dashboards_Aggregated = {
  __typename?: 'directus_dashboards_aggregated';
  count?: Maybe<SystemDirectus_Dashboards_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Dashboards_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type SystemDirectus_Dashboards_Aggregated_Count = {
  __typename?: 'directus_dashboards_aggregated_count';
  color?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['Int']['output']>;
  panels?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Dashboards_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Dashboards_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Dashboards_Filter>>>;
  color?: InputMaybe<SystemString_Filter_Operators>;
  date_created?: InputMaybe<SystemDate_Filter_Operators>;
  date_created_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  icon?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  note?: InputMaybe<SystemString_Filter_Operators>;
  panels?: InputMaybe<SystemDirectus_Panels_Quantifier_Filter>;
  panels_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  user_created?: InputMaybe<SystemDirectus_Users_Filter>;
};

export type SystemDirectus_Dashboards_Mutated = {
  __typename?: 'directus_dashboards_mutated';
  data?: Maybe<SystemDirectus_Dashboards>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Extensions = {
  __typename?: 'directus_extensions';
  bundle?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<SystemDirectus_Extensions_Meta>;
  name: Scalars['String']['output'];
  schema?: Maybe<SystemDirectus_Extensions_Schema>;
};

export type SystemDirectus_Extensions_Meta = {
  __typename?: 'directus_extensions_meta';
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

export type SystemDirectus_Extensions_Schema = {
  __typename?: 'directus_extensions_schema';
  local?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SystemDirectus_Fields = {
  __typename?: 'directus_fields';
  collection?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<SystemDirectus_Fields_Meta>;
  schema?: Maybe<SystemDirectus_Fields_Schema>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SystemDirectus_Fields_Meta = {
  __typename?: 'directus_fields_meta';
  collection: Scalars['String']['output'];
  conditions?: Maybe<Scalars['JSON']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  display_options?: Maybe<Scalars['JSON']['output']>;
  field: Scalars['String']['output'];
  group?: Maybe<Scalars['String']['output']>;
  hidden: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  interface?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  readonly: Scalars['Boolean']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  special?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translations?: Maybe<Scalars['JSON']['output']>;
  validation?: Maybe<Scalars['JSON']['output']>;
  validation_message?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type SystemDirectus_Fields_Schema = {
  __typename?: 'directus_fields_schema';
  comment?: Maybe<Scalars['String']['output']>;
  data_type?: Maybe<Scalars['String']['output']>;
  default_value?: Maybe<Scalars['String']['output']>;
  foreign_key_column?: Maybe<Scalars['String']['output']>;
  foreign_key_table?: Maybe<Scalars['String']['output']>;
  generation_expression?: Maybe<Scalars['String']['output']>;
  has_auto_increment?: Maybe<Scalars['Boolean']['output']>;
  is_generated?: Maybe<Scalars['Boolean']['output']>;
  is_indexed?: Maybe<Scalars['Boolean']['output']>;
  is_nullable?: Maybe<Scalars['Boolean']['output']>;
  is_primary_key?: Maybe<Scalars['Boolean']['output']>;
  is_unique?: Maybe<Scalars['Boolean']['output']>;
  max_length?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numeric_precision?: Maybe<Scalars['Int']['output']>;
  numeric_scale?: Maybe<Scalars['Int']['output']>;
  table?: Maybe<Scalars['String']['output']>;
};

export type SystemDirectus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']['output']>;
  created_on?: Maybe<Scalars['Date']['output']>;
  created_on_func?: Maybe<SystemDatetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
  focal_point_x?: Maybe<Scalars['Int']['output']>;
  focal_point_y?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<SystemDirectus_Folders>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<SystemCount_Functions>;
  modified_by?: Maybe<SystemDirectus_Users>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<SystemDatetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<SystemCount_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  tus_data?: Maybe<Scalars['JSON']['output']>;
  tus_data_func?: Maybe<SystemCount_Functions>;
  tus_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<SystemDirectus_Users>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<SystemDatetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type SystemDirectus_FilesFolderArgs = {
  filter?: InputMaybe<SystemDirectus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_FilesModified_ByArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Files_Aggregated = {
  __typename?: 'directus_files_aggregated';
  avg?: Maybe<SystemDirectus_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<SystemDirectus_Files_Aggregated_Fields>;
  count?: Maybe<SystemDirectus_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<SystemDirectus_Files_Aggregated_Fields>;
  min?: Maybe<SystemDirectus_Files_Aggregated_Fields>;
  sum?: Maybe<SystemDirectus_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<SystemDirectus_Files_Aggregated_Fields>;
};

export type SystemDirectus_Files_Aggregated_Count = {
  __typename?: 'directus_files_aggregated_count';
  charset?: Maybe<Scalars['Int']['output']>;
  created_on?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['Int']['output']>;
  filename_disk?: Maybe<Scalars['Int']['output']>;
  filename_download?: Maybe<Scalars['Int']['output']>;
  filesize?: Maybe<Scalars['Int']['output']>;
  focal_point_x?: Maybe<Scalars['Int']['output']>;
  focal_point_y?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['Int']['output']>;
  modified_by?: Maybe<Scalars['Int']['output']>;
  modified_on?: Maybe<Scalars['Int']['output']>;
  storage?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  tus_data?: Maybe<Scalars['Int']['output']>;
  tus_id?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  uploaded_by?: Maybe<Scalars['Int']['output']>;
  uploaded_on?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Files_Aggregated_Fields = {
  __typename?: 'directus_files_aggregated_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focal_point_x?: Maybe<Scalars['Float']['output']>;
  focal_point_y?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type SystemDirectus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Files_Filter>>>;
  charset?: InputMaybe<SystemString_Filter_Operators>;
  created_on?: InputMaybe<SystemDate_Filter_Operators>;
  created_on_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  description?: InputMaybe<SystemString_Filter_Operators>;
  duration?: InputMaybe<SystemNumber_Filter_Operators>;
  embed?: InputMaybe<SystemString_Filter_Operators>;
  filename_disk?: InputMaybe<SystemString_Filter_Operators>;
  filename_download?: InputMaybe<SystemString_Filter_Operators>;
  filesize?: InputMaybe<SystemBig_Int_Filter_Operators>;
  focal_point_x?: InputMaybe<SystemNumber_Filter_Operators>;
  focal_point_y?: InputMaybe<SystemNumber_Filter_Operators>;
  folder?: InputMaybe<SystemDirectus_Folders_Filter>;
  height?: InputMaybe<SystemNumber_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  location?: InputMaybe<SystemString_Filter_Operators>;
  metadata?: InputMaybe<SystemString_Filter_Operators>;
  metadata_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  modified_by?: InputMaybe<SystemDirectus_Users_Filter>;
  modified_on?: InputMaybe<SystemDate_Filter_Operators>;
  modified_on_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  storage?: InputMaybe<SystemString_Filter_Operators>;
  tags?: InputMaybe<SystemString_Filter_Operators>;
  tags_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  title?: InputMaybe<SystemString_Filter_Operators>;
  tus_data?: InputMaybe<SystemString_Filter_Operators>;
  tus_data_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  tus_id?: InputMaybe<SystemString_Filter_Operators>;
  type?: InputMaybe<SystemString_Filter_Operators>;
  uploaded_by?: InputMaybe<SystemDirectus_Users_Filter>;
  uploaded_on?: InputMaybe<SystemDate_Filter_Operators>;
  uploaded_on_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  width?: InputMaybe<SystemNumber_Filter_Operators>;
};

export type SystemDirectus_Files_Mutated = {
  __typename?: 'directus_files_mutated';
  data?: Maybe<SystemDirectus_Files>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Flows = {
  __typename?: 'directus_flows';
  accountability?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<SystemDatetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  operation?: Maybe<SystemDirectus_Operations>;
  operations?: Maybe<Array<Maybe<SystemDirectus_Operations>>>;
  operations_func?: Maybe<SystemCount_Functions>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<SystemCount_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  trigger?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<SystemDirectus_Users>;
};


export type SystemDirectus_FlowsOperationArgs = {
  filter?: InputMaybe<SystemDirectus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_FlowsOperationsArgs = {
  filter?: InputMaybe<SystemDirectus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_FlowsUser_CreatedArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Flows_Aggregated = {
  __typename?: 'directus_flows_aggregated';
  count?: Maybe<SystemDirectus_Flows_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Flows_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type SystemDirectus_Flows_Aggregated_Count = {
  __typename?: 'directus_flows_aggregated_count';
  accountability?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  operation?: Maybe<Scalars['Int']['output']>;
  operations?: Maybe<Scalars['Int']['output']>;
  options?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  trigger?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Flows_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Flows_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Flows_Filter>>>;
  accountability?: InputMaybe<SystemString_Filter_Operators>;
  color?: InputMaybe<SystemString_Filter_Operators>;
  date_created?: InputMaybe<SystemDate_Filter_Operators>;
  date_created_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  description?: InputMaybe<SystemString_Filter_Operators>;
  icon?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  operation?: InputMaybe<SystemDirectus_Operations_Filter>;
  operations?: InputMaybe<SystemDirectus_Operations_Quantifier_Filter>;
  operations_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  options?: InputMaybe<SystemString_Filter_Operators>;
  options_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  status?: InputMaybe<SystemString_Filter_Operators>;
  trigger?: InputMaybe<SystemString_Filter_Operators>;
  user_created?: InputMaybe<SystemDirectus_Users_Filter>;
};

export type SystemDirectus_Flows_Mutated = {
  __typename?: 'directus_flows_mutated';
  data?: Maybe<SystemDirectus_Flows>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Folders = {
  __typename?: 'directus_folders';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<SystemDirectus_Folders>;
};


export type SystemDirectus_FoldersParentArgs = {
  filter?: InputMaybe<SystemDirectus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Folders_Aggregated = {
  __typename?: 'directus_folders_aggregated';
  count?: Maybe<SystemDirectus_Folders_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Folders_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type SystemDirectus_Folders_Aggregated_Count = {
  __typename?: 'directus_folders_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Folders_Filter>>>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  parent?: InputMaybe<SystemDirectus_Folders_Filter>;
};

export type SystemDirectus_Folders_Mutated = {
  __typename?: 'directus_folders_mutated';
  data?: Maybe<SystemDirectus_Folders>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Notifications = {
  __typename?: 'directus_notifications';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  recipient?: Maybe<SystemDirectus_Users>;
  sender?: Maybe<SystemDirectus_Users>;
  status?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<SystemDatetime_Functions>;
};


export type SystemDirectus_NotificationsRecipientArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_NotificationsSenderArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Notifications_Aggregated = {
  __typename?: 'directus_notifications_aggregated';
  avg?: Maybe<SystemDirectus_Notifications_Aggregated_Fields>;
  avgDistinct?: Maybe<SystemDirectus_Notifications_Aggregated_Fields>;
  count?: Maybe<SystemDirectus_Notifications_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Notifications_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<SystemDirectus_Notifications_Aggregated_Fields>;
  min?: Maybe<SystemDirectus_Notifications_Aggregated_Fields>;
  sum?: Maybe<SystemDirectus_Notifications_Aggregated_Fields>;
  sumDistinct?: Maybe<SystemDirectus_Notifications_Aggregated_Fields>;
};

export type SystemDirectus_Notifications_Aggregated_Count = {
  __typename?: 'directus_notifications_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['Int']['output']>;
  recipient?: Maybe<Scalars['Int']['output']>;
  sender?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  subject?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Notifications_Aggregated_Fields = {
  __typename?: 'directus_notifications_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type SystemDirectus_Notifications_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Notifications_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Notifications_Filter>>>;
  collection?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  item?: InputMaybe<SystemString_Filter_Operators>;
  message?: InputMaybe<SystemString_Filter_Operators>;
  recipient?: InputMaybe<SystemDirectus_Users_Filter>;
  sender?: InputMaybe<SystemDirectus_Users_Filter>;
  status?: InputMaybe<SystemString_Filter_Operators>;
  subject?: InputMaybe<SystemString_Filter_Operators>;
  timestamp?: InputMaybe<SystemDate_Filter_Operators>;
  timestamp_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
};

export type SystemDirectus_Notifications_Mutated = {
  __typename?: 'directus_notifications_mutated';
  data?: Maybe<SystemDirectus_Notifications>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Operations = {
  __typename?: 'directus_operations';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<SystemDatetime_Functions>;
  flow?: Maybe<SystemDirectus_Flows>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<SystemCount_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  reject?: Maybe<SystemDirectus_Operations>;
  resolve?: Maybe<SystemDirectus_Operations>;
  type: Scalars['String']['output'];
  user_created?: Maybe<SystemDirectus_Users>;
};


export type SystemDirectus_OperationsFlowArgs = {
  filter?: InputMaybe<SystemDirectus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_OperationsRejectArgs = {
  filter?: InputMaybe<SystemDirectus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_OperationsResolveArgs = {
  filter?: InputMaybe<SystemDirectus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_OperationsUser_CreatedArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Operations_Aggregated = {
  __typename?: 'directus_operations_aggregated';
  avg?: Maybe<SystemDirectus_Operations_Aggregated_Fields>;
  avgDistinct?: Maybe<SystemDirectus_Operations_Aggregated_Fields>;
  count?: Maybe<SystemDirectus_Operations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Operations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<SystemDirectus_Operations_Aggregated_Fields>;
  min?: Maybe<SystemDirectus_Operations_Aggregated_Fields>;
  sum?: Maybe<SystemDirectus_Operations_Aggregated_Fields>;
  sumDistinct?: Maybe<SystemDirectus_Operations_Aggregated_Fields>;
};

export type SystemDirectus_Operations_Aggregated_Count = {
  __typename?: 'directus_operations_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  flow?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  options?: Maybe<Scalars['Int']['output']>;
  position_x?: Maybe<Scalars['Int']['output']>;
  position_y?: Maybe<Scalars['Int']['output']>;
  reject?: Maybe<Scalars['Int']['output']>;
  resolve?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Operations_Aggregated_Fields = {
  __typename?: 'directus_operations_aggregated_fields';
  position_x?: Maybe<Scalars['Float']['output']>;
  position_y?: Maybe<Scalars['Float']['output']>;
};

export type SystemDirectus_Operations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Operations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Operations_Filter>>>;
  date_created?: InputMaybe<SystemDate_Filter_Operators>;
  date_created_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  flow?: InputMaybe<SystemDirectus_Flows_Filter>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  key?: InputMaybe<SystemString_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  options?: InputMaybe<SystemString_Filter_Operators>;
  options_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  position_x?: InputMaybe<SystemNumber_Filter_Operators>;
  position_y?: InputMaybe<SystemNumber_Filter_Operators>;
  reject?: InputMaybe<SystemDirectus_Operations_Filter>;
  resolve?: InputMaybe<SystemDirectus_Operations_Filter>;
  type?: InputMaybe<SystemString_Filter_Operators>;
  user_created?: InputMaybe<SystemDirectus_Users_Filter>;
};

export type SystemDirectus_Operations_Mutated = {
  __typename?: 'directus_operations_mutated';
  data?: Maybe<SystemDirectus_Operations>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Operations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Operations_Filter>>>;
  _none?: InputMaybe<SystemDirectus_Operations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Operations_Filter>>>;
  _some?: InputMaybe<SystemDirectus_Operations_Filter>;
  date_created?: InputMaybe<SystemDate_Filter_Operators>;
  date_created_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  flow?: InputMaybe<SystemDirectus_Flows_Filter>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  key?: InputMaybe<SystemString_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  options?: InputMaybe<SystemString_Filter_Operators>;
  options_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  position_x?: InputMaybe<SystemNumber_Filter_Operators>;
  position_y?: InputMaybe<SystemNumber_Filter_Operators>;
  reject?: InputMaybe<SystemDirectus_Operations_Filter>;
  resolve?: InputMaybe<SystemDirectus_Operations_Filter>;
  type?: InputMaybe<SystemString_Filter_Operators>;
  user_created?: InputMaybe<SystemDirectus_Users_Filter>;
};

export type SystemDirectus_Panels = {
  __typename?: 'directus_panels';
  color?: Maybe<Scalars['String']['output']>;
  dashboard?: Maybe<SystemDirectus_Dashboards>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<SystemDatetime_Functions>;
  height: Scalars['Int']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<SystemCount_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  show_header: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  user_created?: Maybe<SystemDirectus_Users>;
  width: Scalars['Int']['output'];
};


export type SystemDirectus_PanelsDashboardArgs = {
  filter?: InputMaybe<SystemDirectus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_PanelsUser_CreatedArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Panels_Aggregated = {
  __typename?: 'directus_panels_aggregated';
  avg?: Maybe<SystemDirectus_Panels_Aggregated_Fields>;
  avgDistinct?: Maybe<SystemDirectus_Panels_Aggregated_Fields>;
  count?: Maybe<SystemDirectus_Panels_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Panels_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<SystemDirectus_Panels_Aggregated_Fields>;
  min?: Maybe<SystemDirectus_Panels_Aggregated_Fields>;
  sum?: Maybe<SystemDirectus_Panels_Aggregated_Fields>;
  sumDistinct?: Maybe<SystemDirectus_Panels_Aggregated_Fields>;
};

export type SystemDirectus_Panels_Aggregated_Count = {
  __typename?: 'directus_panels_aggregated_count';
  color?: Maybe<Scalars['Int']['output']>;
  dashboard?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['Int']['output']>;
  options?: Maybe<Scalars['Int']['output']>;
  position_x?: Maybe<Scalars['Int']['output']>;
  position_y?: Maybe<Scalars['Int']['output']>;
  show_header?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Panels_Aggregated_Fields = {
  __typename?: 'directus_panels_aggregated_fields';
  height?: Maybe<Scalars['Float']['output']>;
  position_x?: Maybe<Scalars['Float']['output']>;
  position_y?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type SystemDirectus_Panels_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Panels_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Panels_Filter>>>;
  color?: InputMaybe<SystemString_Filter_Operators>;
  dashboard?: InputMaybe<SystemDirectus_Dashboards_Filter>;
  date_created?: InputMaybe<SystemDate_Filter_Operators>;
  date_created_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  height?: InputMaybe<SystemNumber_Filter_Operators>;
  icon?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  note?: InputMaybe<SystemString_Filter_Operators>;
  options?: InputMaybe<SystemString_Filter_Operators>;
  options_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  position_x?: InputMaybe<SystemNumber_Filter_Operators>;
  position_y?: InputMaybe<SystemNumber_Filter_Operators>;
  show_header?: InputMaybe<SystemBoolean_Filter_Operators>;
  type?: InputMaybe<SystemString_Filter_Operators>;
  user_created?: InputMaybe<SystemDirectus_Users_Filter>;
  width?: InputMaybe<SystemNumber_Filter_Operators>;
};

export type SystemDirectus_Panels_Mutated = {
  __typename?: 'directus_panels_mutated';
  data?: Maybe<SystemDirectus_Panels>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Panels_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Panels_Filter>>>;
  _none?: InputMaybe<SystemDirectus_Panels_Filter>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Panels_Filter>>>;
  _some?: InputMaybe<SystemDirectus_Panels_Filter>;
  color?: InputMaybe<SystemString_Filter_Operators>;
  dashboard?: InputMaybe<SystemDirectus_Dashboards_Filter>;
  date_created?: InputMaybe<SystemDate_Filter_Operators>;
  date_created_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  height?: InputMaybe<SystemNumber_Filter_Operators>;
  icon?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  note?: InputMaybe<SystemString_Filter_Operators>;
  options?: InputMaybe<SystemString_Filter_Operators>;
  options_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  position_x?: InputMaybe<SystemNumber_Filter_Operators>;
  position_y?: InputMaybe<SystemNumber_Filter_Operators>;
  show_header?: InputMaybe<SystemBoolean_Filter_Operators>;
  type?: InputMaybe<SystemString_Filter_Operators>;
  user_created?: InputMaybe<SystemDirectus_Users_Filter>;
  width?: InputMaybe<SystemNumber_Filter_Operators>;
};

export type SystemDirectus_Permissions = {
  __typename?: 'directus_permissions';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  permissions?: Maybe<Scalars['JSON']['output']>;
  permissions_func?: Maybe<SystemCount_Functions>;
  policy?: Maybe<SystemDirectus_Policies>;
  presets?: Maybe<Scalars['JSON']['output']>;
  presets_func?: Maybe<SystemCount_Functions>;
  validation?: Maybe<Scalars['JSON']['output']>;
  validation_func?: Maybe<SystemCount_Functions>;
};


export type SystemDirectus_PermissionsPolicyArgs = {
  filter?: InputMaybe<SystemDirectus_Policies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Permissions_Aggregated = {
  __typename?: 'directus_permissions_aggregated';
  avg?: Maybe<SystemDirectus_Permissions_Aggregated_Fields>;
  avgDistinct?: Maybe<SystemDirectus_Permissions_Aggregated_Fields>;
  count?: Maybe<SystemDirectus_Permissions_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Permissions_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<SystemDirectus_Permissions_Aggregated_Fields>;
  min?: Maybe<SystemDirectus_Permissions_Aggregated_Fields>;
  sum?: Maybe<SystemDirectus_Permissions_Aggregated_Fields>;
  sumDistinct?: Maybe<SystemDirectus_Permissions_Aggregated_Fields>;
};

export type SystemDirectus_Permissions_Aggregated_Count = {
  __typename?: 'directus_permissions_aggregated_count';
  action?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Scalars['Int']['output']>;
  fields?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  permissions?: Maybe<Scalars['Int']['output']>;
  policy?: Maybe<Scalars['Int']['output']>;
  presets?: Maybe<Scalars['Int']['output']>;
  validation?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Permissions_Aggregated_Fields = {
  __typename?: 'directus_permissions_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type SystemDirectus_Permissions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Permissions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Permissions_Filter>>>;
  action?: InputMaybe<SystemString_Filter_Operators>;
  collection?: InputMaybe<SystemString_Filter_Operators>;
  fields?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  permissions?: InputMaybe<SystemString_Filter_Operators>;
  permissions_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  policy?: InputMaybe<SystemDirectus_Policies_Filter>;
  presets?: InputMaybe<SystemString_Filter_Operators>;
  presets_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  validation?: InputMaybe<SystemString_Filter_Operators>;
  validation_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
};

export type SystemDirectus_Permissions_Mutated = {
  __typename?: 'directus_permissions_mutated';
  data?: Maybe<SystemDirectus_Permissions>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Permissions_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Permissions_Filter>>>;
  _none?: InputMaybe<SystemDirectus_Permissions_Filter>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Permissions_Filter>>>;
  _some?: InputMaybe<SystemDirectus_Permissions_Filter>;
  action?: InputMaybe<SystemString_Filter_Operators>;
  collection?: InputMaybe<SystemString_Filter_Operators>;
  fields?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  permissions?: InputMaybe<SystemString_Filter_Operators>;
  permissions_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  policy?: InputMaybe<SystemDirectus_Policies_Filter>;
  presets?: InputMaybe<SystemString_Filter_Operators>;
  presets_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  validation?: InputMaybe<SystemString_Filter_Operators>;
  validation_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
};

export type SystemDirectus_Policies = {
  __typename?: 'directus_policies';
  admin_access: Scalars['Boolean']['output'];
  app_access: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip_access?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Maybe<SystemDirectus_Permissions>>>;
  permissions_func?: Maybe<SystemCount_Functions>;
  roles?: Maybe<Array<Maybe<SystemDirectus_Access>>>;
  roles_func?: Maybe<SystemCount_Functions>;
  users?: Maybe<Array<Maybe<SystemDirectus_Access>>>;
  users_func?: Maybe<SystemCount_Functions>;
};


export type SystemDirectus_PoliciesPermissionsArgs = {
  filter?: InputMaybe<SystemDirectus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_PoliciesRolesArgs = {
  filter?: InputMaybe<SystemDirectus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_PoliciesUsersArgs = {
  filter?: InputMaybe<SystemDirectus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Policies_Aggregated = {
  __typename?: 'directus_policies_aggregated';
  count?: Maybe<SystemDirectus_Policies_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Policies_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type SystemDirectus_Policies_Aggregated_Count = {
  __typename?: 'directus_policies_aggregated_count';
  admin_access?: Maybe<Scalars['Int']['output']>;
  app_access?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ip_access?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  permissions?: Maybe<Scalars['Int']['output']>;
  roles?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Policies_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Policies_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Policies_Filter>>>;
  admin_access?: InputMaybe<SystemBoolean_Filter_Operators>;
  app_access?: InputMaybe<SystemBoolean_Filter_Operators>;
  description?: InputMaybe<SystemString_Filter_Operators>;
  enforce_tfa?: InputMaybe<SystemBoolean_Filter_Operators>;
  icon?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  ip_access?: InputMaybe<SystemString_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  permissions?: InputMaybe<SystemDirectus_Permissions_Quantifier_Filter>;
  permissions_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  roles?: InputMaybe<SystemDirectus_Access_Quantifier_Filter>;
  roles_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  users?: InputMaybe<SystemDirectus_Access_Quantifier_Filter>;
  users_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
};

export type SystemDirectus_Policies_Mutated = {
  __typename?: 'directus_policies_mutated';
  data?: Maybe<SystemDirectus_Policies>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Presets = {
  __typename?: 'directus_presets';
  bookmark?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<Scalars['JSON']['output']>;
  filter_func?: Maybe<SystemCount_Functions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  layout?: Maybe<Scalars['String']['output']>;
  layout_options?: Maybe<Scalars['JSON']['output']>;
  layout_options_func?: Maybe<SystemCount_Functions>;
  layout_query?: Maybe<Scalars['JSON']['output']>;
  layout_query_func?: Maybe<SystemCount_Functions>;
  refresh_interval?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<SystemDirectus_Roles>;
  search?: Maybe<Scalars['String']['output']>;
  user?: Maybe<SystemDirectus_Users>;
};


export type SystemDirectus_PresetsRoleArgs = {
  filter?: InputMaybe<SystemDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_PresetsUserArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Presets_Aggregated = {
  __typename?: 'directus_presets_aggregated';
  avg?: Maybe<SystemDirectus_Presets_Aggregated_Fields>;
  avgDistinct?: Maybe<SystemDirectus_Presets_Aggregated_Fields>;
  count?: Maybe<SystemDirectus_Presets_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Presets_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<SystemDirectus_Presets_Aggregated_Fields>;
  min?: Maybe<SystemDirectus_Presets_Aggregated_Fields>;
  sum?: Maybe<SystemDirectus_Presets_Aggregated_Fields>;
  sumDistinct?: Maybe<SystemDirectus_Presets_Aggregated_Fields>;
};

export type SystemDirectus_Presets_Aggregated_Count = {
  __typename?: 'directus_presets_aggregated_count';
  bookmark?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['Int']['output']>;
  filter?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  layout?: Maybe<Scalars['Int']['output']>;
  layout_options?: Maybe<Scalars['Int']['output']>;
  layout_query?: Maybe<Scalars['Int']['output']>;
  refresh_interval?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  search?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Presets_Aggregated_Fields = {
  __typename?: 'directus_presets_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  refresh_interval?: Maybe<Scalars['Float']['output']>;
};

export type SystemDirectus_Presets_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Presets_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Presets_Filter>>>;
  bookmark?: InputMaybe<SystemString_Filter_Operators>;
  collection?: InputMaybe<SystemString_Filter_Operators>;
  color?: InputMaybe<SystemString_Filter_Operators>;
  filter?: InputMaybe<SystemString_Filter_Operators>;
  filter_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  icon?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  layout?: InputMaybe<SystemString_Filter_Operators>;
  layout_options?: InputMaybe<SystemString_Filter_Operators>;
  layout_options_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  layout_query?: InputMaybe<SystemString_Filter_Operators>;
  layout_query_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  refresh_interval?: InputMaybe<SystemNumber_Filter_Operators>;
  role?: InputMaybe<SystemDirectus_Roles_Filter>;
  search?: InputMaybe<SystemString_Filter_Operators>;
  user?: InputMaybe<SystemDirectus_Users_Filter>;
};

export type SystemDirectus_Presets_Mutated = {
  __typename?: 'directus_presets_mutated';
  data?: Maybe<SystemDirectus_Presets>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Relations = {
  __typename?: 'directus_relations';
  collection?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<SystemDirectus_Relations_Meta>;
  related_collection?: Maybe<Scalars['String']['output']>;
  schema?: Maybe<SystemDirectus_Relations_Schema>;
};

export type SystemDirectus_Relations_Meta = {
  __typename?: 'directus_relations_meta';
  id?: Maybe<Scalars['Int']['output']>;
  junction_field?: Maybe<Scalars['String']['output']>;
  many_collection?: Maybe<Scalars['String']['output']>;
  many_field?: Maybe<Scalars['String']['output']>;
  one_allowed_collections?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  one_collection?: Maybe<Scalars['String']['output']>;
  one_collection_field?: Maybe<Scalars['String']['output']>;
  one_deselect_action?: Maybe<Scalars['String']['output']>;
  one_field?: Maybe<Scalars['String']['output']>;
  sort_field?: Maybe<Scalars['String']['output']>;
};

export type SystemDirectus_Relations_Schema = {
  __typename?: 'directus_relations_schema';
  column: Scalars['String']['output'];
  constraint_name?: Maybe<Scalars['String']['output']>;
  foreign_key_column: Scalars['String']['output'];
  foreign_key_table: Scalars['String']['output'];
  on_delete: Scalars['String']['output'];
  on_update: Scalars['String']['output'];
  table: Scalars['String']['output'];
};

export type SystemDirectus_Revisions = {
  __typename?: 'directus_revisions';
  activity?: Maybe<SystemDirectus_Activity>;
  collection: Scalars['String']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  data_func?: Maybe<SystemCount_Functions>;
  delta?: Maybe<Scalars['JSON']['output']>;
  delta_func?: Maybe<SystemCount_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  parent?: Maybe<SystemDirectus_Revisions>;
  version?: Maybe<SystemDirectus_Versions>;
};


export type SystemDirectus_RevisionsActivityArgs = {
  filter?: InputMaybe<SystemDirectus_Activity_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_RevisionsParentArgs = {
  filter?: InputMaybe<SystemDirectus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_RevisionsVersionArgs = {
  filter?: InputMaybe<SystemDirectus_Versions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Revisions_Aggregated = {
  __typename?: 'directus_revisions_aggregated';
  avg?: Maybe<SystemDirectus_Revisions_Aggregated_Fields>;
  avgDistinct?: Maybe<SystemDirectus_Revisions_Aggregated_Fields>;
  count?: Maybe<SystemDirectus_Revisions_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Revisions_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<SystemDirectus_Revisions_Aggregated_Fields>;
  min?: Maybe<SystemDirectus_Revisions_Aggregated_Fields>;
  sum?: Maybe<SystemDirectus_Revisions_Aggregated_Fields>;
  sumDistinct?: Maybe<SystemDirectus_Revisions_Aggregated_Fields>;
};

export type SystemDirectus_Revisions_Aggregated_Count = {
  __typename?: 'directus_revisions_aggregated_count';
  activity?: Maybe<Scalars['Int']['output']>;
  collection?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Scalars['Int']['output']>;
  delta?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Revisions_Aggregated_Fields = {
  __typename?: 'directus_revisions_aggregated_fields';
  activity?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  parent?: Maybe<Scalars['Float']['output']>;
};

export type SystemDirectus_Revisions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Revisions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Revisions_Filter>>>;
  activity?: InputMaybe<SystemDirectus_Activity_Filter>;
  collection?: InputMaybe<SystemString_Filter_Operators>;
  data?: InputMaybe<SystemString_Filter_Operators>;
  data_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  delta?: InputMaybe<SystemString_Filter_Operators>;
  delta_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  item?: InputMaybe<SystemString_Filter_Operators>;
  parent?: InputMaybe<SystemDirectus_Revisions_Filter>;
  version?: InputMaybe<SystemDirectus_Versions_Filter>;
};

export type SystemDirectus_Revisions_Mutated = {
  __typename?: 'directus_revisions_mutated';
  data?: Maybe<SystemDirectus_Revisions>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Revisions_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Revisions_Filter>>>;
  _none?: InputMaybe<SystemDirectus_Revisions_Filter>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Revisions_Filter>>>;
  _some?: InputMaybe<SystemDirectus_Revisions_Filter>;
  activity?: InputMaybe<SystemDirectus_Activity_Filter>;
  collection?: InputMaybe<SystemString_Filter_Operators>;
  data?: InputMaybe<SystemString_Filter_Operators>;
  data_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  delta?: InputMaybe<SystemString_Filter_Operators>;
  delta_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  item?: InputMaybe<SystemString_Filter_Operators>;
  parent?: InputMaybe<SystemDirectus_Revisions_Filter>;
  version?: InputMaybe<SystemDirectus_Versions_Filter>;
};

export type SystemDirectus_Roles = {
  __typename?: 'directus_roles';
  children?: Maybe<Array<Maybe<SystemDirectus_Roles>>>;
  children_func?: Maybe<SystemCount_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<SystemDirectus_Roles>;
  policies?: Maybe<Array<Maybe<SystemDirectus_Access>>>;
  policies_func?: Maybe<SystemCount_Functions>;
  users?: Maybe<Array<Maybe<SystemDirectus_Users>>>;
  users_func?: Maybe<SystemCount_Functions>;
};


export type SystemDirectus_RolesChildrenArgs = {
  filter?: InputMaybe<SystemDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_RolesParentArgs = {
  filter?: InputMaybe<SystemDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_RolesPoliciesArgs = {
  filter?: InputMaybe<SystemDirectus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_RolesUsersArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Roles_Aggregated = {
  __typename?: 'directus_roles_aggregated';
  count?: Maybe<SystemDirectus_Roles_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Roles_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type SystemDirectus_Roles_Aggregated_Count = {
  __typename?: 'directus_roles_aggregated_count';
  /** $t:field_options.directus_roles.children_note */
  children?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  /** $t:field_options.directus_roles.parent_note */
  parent?: Maybe<Scalars['Int']['output']>;
  policies?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Roles_Filter>>>;
  children?: InputMaybe<SystemDirectus_Roles_Quantifier_Filter>;
  children_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  description?: InputMaybe<SystemString_Filter_Operators>;
  icon?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  parent?: InputMaybe<SystemDirectus_Roles_Filter>;
  policies?: InputMaybe<SystemDirectus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  users?: InputMaybe<SystemDirectus_Users_Quantifier_Filter>;
  users_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
};

export type SystemDirectus_Roles_Mutated = {
  __typename?: 'directus_roles_mutated';
  data?: Maybe<SystemDirectus_Roles>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Roles_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Roles_Filter>>>;
  _none?: InputMaybe<SystemDirectus_Roles_Filter>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Roles_Filter>>>;
  _some?: InputMaybe<SystemDirectus_Roles_Filter>;
  children?: InputMaybe<SystemDirectus_Roles_Quantifier_Filter>;
  children_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  description?: InputMaybe<SystemString_Filter_Operators>;
  icon?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  parent?: InputMaybe<SystemDirectus_Roles_Filter>;
  policies?: InputMaybe<SystemDirectus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  users?: InputMaybe<SystemDirectus_Users_Quantifier_Filter>;
  users_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
};

export type SystemDirectus_Settings = {
  __typename?: 'directus_settings';
  accepted_terms?: Maybe<Scalars['Boolean']['output']>;
  auth_login_attempts?: Maybe<Scalars['Int']['output']>;
  auth_password_policy?: Maybe<Scalars['String']['output']>;
  basemaps?: Maybe<Scalars['JSON']['output']>;
  basemaps_func?: Maybe<SystemCount_Functions>;
  custom_aspect_ratios?: Maybe<Scalars['JSON']['output']>;
  custom_aspect_ratios_func?: Maybe<SystemCount_Functions>;
  custom_css?: Maybe<Scalars['String']['output']>;
  default_appearance?: Maybe<Scalars['String']['output']>;
  default_language?: Maybe<Scalars['String']['output']>;
  default_theme_dark?: Maybe<Scalars['String']['output']>;
  default_theme_light?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mapbox_key?: Maybe<Scalars['String']['output']>;
  module_bar?: Maybe<Scalars['JSON']['output']>;
  module_bar_func?: Maybe<SystemCount_Functions>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color?: Maybe<Scalars['String']['output']>;
  project_descriptor?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  project_logo?: Maybe<SystemDirectus_Files>;
  project_name?: Maybe<Scalars['String']['output']>;
  project_url?: Maybe<Scalars['String']['output']>;
  public_background?: Maybe<SystemDirectus_Files>;
  public_favicon?: Maybe<SystemDirectus_Files>;
  public_foreground?: Maybe<SystemDirectus_Files>;
  public_note?: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.public_registration_note */
  public_registration: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.public_registration_email_filter_note */
  public_registration_email_filter?: Maybe<Scalars['JSON']['output']>;
  public_registration_email_filter_func?: Maybe<SystemCount_Functions>;
  public_registration_role?: Maybe<SystemDirectus_Roles>;
  /** $t:fields.directus_settings.public_registration_verify_email_note */
  public_registration_verify_email?: Maybe<Scalars['Boolean']['output']>;
  report_bug_url?: Maybe<Scalars['String']['output']>;
  report_error_url?: Maybe<Scalars['String']['output']>;
  report_feature_url?: Maybe<Scalars['String']['output']>;
  storage_asset_presets?: Maybe<Scalars['JSON']['output']>;
  storage_asset_presets_func?: Maybe<SystemCount_Functions>;
  storage_asset_transform?: Maybe<Scalars['String']['output']>;
  storage_default_folder?: Maybe<SystemDirectus_Folders>;
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func?: Maybe<SystemCount_Functions>;
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func?: Maybe<SystemCount_Functions>;
  visual_editor_urls?: Maybe<Scalars['JSON']['output']>;
  visual_editor_urls_func?: Maybe<SystemCount_Functions>;
};


export type SystemDirectus_SettingsProject_LogoArgs = {
  filter?: InputMaybe<SystemDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_SettingsPublic_BackgroundArgs = {
  filter?: InputMaybe<SystemDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_SettingsPublic_FaviconArgs = {
  filter?: InputMaybe<SystemDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_SettingsPublic_ForegroundArgs = {
  filter?: InputMaybe<SystemDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_SettingsPublic_Registration_RoleArgs = {
  filter?: InputMaybe<SystemDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_SettingsStorage_Default_FolderArgs = {
  filter?: InputMaybe<SystemDirectus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Settings_Mutated = {
  __typename?: 'directus_settings_mutated';
  data?: Maybe<SystemDirectus_Settings>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Shares = {
  __typename?: 'directus_shares';
  collection: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<SystemDatetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Date']['output']>;
  date_end_func?: Maybe<SystemDatetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Date']['output']>;
  date_start_func?: Maybe<SystemDatetime_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_passwordless_access */
  password?: Maybe<Scalars['Hash']['output']>;
  role?: Maybe<SystemDirectus_Roles>;
  times_used?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<SystemDirectus_Users>;
};


export type SystemDirectus_SharesRoleArgs = {
  filter?: InputMaybe<SystemDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_SharesUser_CreatedArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Shares_Aggregated = {
  __typename?: 'directus_shares_aggregated';
  avg?: Maybe<SystemDirectus_Shares_Aggregated_Fields>;
  avgDistinct?: Maybe<SystemDirectus_Shares_Aggregated_Fields>;
  count?: Maybe<SystemDirectus_Shares_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Shares_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<SystemDirectus_Shares_Aggregated_Fields>;
  min?: Maybe<SystemDirectus_Shares_Aggregated_Fields>;
  sum?: Maybe<SystemDirectus_Shares_Aggregated_Fields>;
  sumDistinct?: Maybe<SystemDirectus_Shares_Aggregated_Fields>;
};

export type SystemDirectus_Shares_Aggregated_Count = {
  __typename?: 'directus_shares_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Int']['output']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  /** $t:shared_leave_blank_for_passwordless_access */
  password?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  times_used?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Shares_Aggregated_Fields = {
  __typename?: 'directus_shares_aggregated_fields';
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Float']['output']>;
  times_used?: Maybe<Scalars['Float']['output']>;
};

export type SystemDirectus_Shares_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Shares_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Shares_Filter>>>;
  collection?: InputMaybe<SystemString_Filter_Operators>;
  date_created?: InputMaybe<SystemDate_Filter_Operators>;
  date_created_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  date_end?: InputMaybe<SystemDate_Filter_Operators>;
  date_end_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  date_start?: InputMaybe<SystemDate_Filter_Operators>;
  date_start_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  item?: InputMaybe<SystemString_Filter_Operators>;
  max_uses?: InputMaybe<SystemNumber_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  password?: InputMaybe<SystemHash_Filter_Operators>;
  role?: InputMaybe<SystemDirectus_Roles_Filter>;
  times_used?: InputMaybe<SystemNumber_Filter_Operators>;
  user_created?: InputMaybe<SystemDirectus_Users_Filter>;
};

export type SystemDirectus_Shares_Mutated = {
  __typename?: 'directus_shares_mutated';
  data?: Maybe<SystemDirectus_Shares>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Translations = {
  __typename?: 'directus_translations';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  language: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type SystemDirectus_Translations_Aggregated = {
  __typename?: 'directus_translations_aggregated';
  count?: Maybe<SystemDirectus_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type SystemDirectus_Translations_Aggregated_Count = {
  __typename?: 'directus_translations_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Translations_Filter>>>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  key?: InputMaybe<SystemString_Filter_Operators>;
  language?: InputMaybe<SystemString_Filter_Operators>;
  value?: InputMaybe<SystemString_Filter_Operators>;
};

export type SystemDirectus_Translations_Mutated = {
  __typename?: 'directus_translations_mutated';
  data?: Maybe<SystemDirectus_Translations>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Users = {
  __typename?: 'directus_users';
  appearance?: Maybe<Scalars['String']['output']>;
  auth_data?: Maybe<Scalars['JSON']['output']>;
  auth_data_func?: Maybe<SystemCount_Functions>;
  avatar?: Maybe<SystemDirectus_Files>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_notifications?: Maybe<Scalars['Boolean']['output']>;
  external_identifier?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  last_access?: Maybe<Scalars['Date']['output']>;
  last_access_func?: Maybe<SystemDatetime_Functions>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_page?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['Hash']['output']>;
  policies?: Maybe<Array<Maybe<SystemDirectus_Access>>>;
  policies_func?: Maybe<SystemCount_Functions>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<SystemDirectus_Roles>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<SystemCount_Functions>;
  text_direction?: Maybe<Scalars['String']['output']>;
  tfa_secret?: Maybe<Scalars['Hash']['output']>;
  theme_dark?: Maybe<Scalars['String']['output']>;
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func?: Maybe<SystemCount_Functions>;
  theme_light?: Maybe<Scalars['String']['output']>;
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func?: Maybe<SystemCount_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['Hash']['output']>;
};


export type SystemDirectus_UsersAvatarArgs = {
  filter?: InputMaybe<SystemDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_UsersPoliciesArgs = {
  filter?: InputMaybe<SystemDirectus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_UsersRoleArgs = {
  filter?: InputMaybe<SystemDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Users_Aggregated = {
  __typename?: 'directus_users_aggregated';
  count?: Maybe<SystemDirectus_Users_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Users_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type SystemDirectus_Users_Aggregated_Count = {
  __typename?: 'directus_users_aggregated_count';
  appearance?: Maybe<Scalars['Int']['output']>;
  auth_data?: Maybe<Scalars['Int']['output']>;
  avatar?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  email_notifications?: Maybe<Scalars['Int']['output']>;
  external_identifier?: Maybe<Scalars['Int']['output']>;
  first_name?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Int']['output']>;
  last_access?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['Int']['output']>;
  last_page?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<Scalars['Int']['output']>;
  policies?: Maybe<Scalars['Int']['output']>;
  provider?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  text_direction?: Maybe<Scalars['Int']['output']>;
  tfa_secret?: Maybe<Scalars['Int']['output']>;
  theme_dark?: Maybe<Scalars['Int']['output']>;
  theme_dark_overrides?: Maybe<Scalars['Int']['output']>;
  theme_light?: Maybe<Scalars['Int']['output']>;
  theme_light_overrides?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Users_Filter>>>;
  appearance?: InputMaybe<SystemString_Filter_Operators>;
  auth_data?: InputMaybe<SystemString_Filter_Operators>;
  auth_data_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  avatar?: InputMaybe<SystemDirectus_Files_Filter>;
  description?: InputMaybe<SystemString_Filter_Operators>;
  email?: InputMaybe<SystemString_Filter_Operators>;
  email_notifications?: InputMaybe<SystemBoolean_Filter_Operators>;
  external_identifier?: InputMaybe<SystemString_Filter_Operators>;
  first_name?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  language?: InputMaybe<SystemString_Filter_Operators>;
  last_access?: InputMaybe<SystemDate_Filter_Operators>;
  last_access_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  last_name?: InputMaybe<SystemString_Filter_Operators>;
  last_page?: InputMaybe<SystemString_Filter_Operators>;
  location?: InputMaybe<SystemString_Filter_Operators>;
  password?: InputMaybe<SystemHash_Filter_Operators>;
  policies?: InputMaybe<SystemDirectus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  provider?: InputMaybe<SystemString_Filter_Operators>;
  role?: InputMaybe<SystemDirectus_Roles_Filter>;
  status?: InputMaybe<SystemString_Filter_Operators>;
  tags?: InputMaybe<SystemString_Filter_Operators>;
  tags_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  text_direction?: InputMaybe<SystemString_Filter_Operators>;
  tfa_secret?: InputMaybe<SystemHash_Filter_Operators>;
  theme_dark?: InputMaybe<SystemString_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<SystemString_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  theme_light?: InputMaybe<SystemString_Filter_Operators>;
  theme_light_overrides?: InputMaybe<SystemString_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  title?: InputMaybe<SystemString_Filter_Operators>;
  token?: InputMaybe<SystemHash_Filter_Operators>;
};

export type SystemDirectus_Users_Mutated = {
  __typename?: 'directus_users_mutated';
  data?: Maybe<SystemDirectus_Users>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Users_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Users_Filter>>>;
  _none?: InputMaybe<SystemDirectus_Users_Filter>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Users_Filter>>>;
  _some?: InputMaybe<SystemDirectus_Users_Filter>;
  appearance?: InputMaybe<SystemString_Filter_Operators>;
  auth_data?: InputMaybe<SystemString_Filter_Operators>;
  auth_data_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  avatar?: InputMaybe<SystemDirectus_Files_Filter>;
  description?: InputMaybe<SystemString_Filter_Operators>;
  email?: InputMaybe<SystemString_Filter_Operators>;
  email_notifications?: InputMaybe<SystemBoolean_Filter_Operators>;
  external_identifier?: InputMaybe<SystemString_Filter_Operators>;
  first_name?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  language?: InputMaybe<SystemString_Filter_Operators>;
  last_access?: InputMaybe<SystemDate_Filter_Operators>;
  last_access_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  last_name?: InputMaybe<SystemString_Filter_Operators>;
  last_page?: InputMaybe<SystemString_Filter_Operators>;
  location?: InputMaybe<SystemString_Filter_Operators>;
  password?: InputMaybe<SystemHash_Filter_Operators>;
  policies?: InputMaybe<SystemDirectus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  provider?: InputMaybe<SystemString_Filter_Operators>;
  role?: InputMaybe<SystemDirectus_Roles_Filter>;
  status?: InputMaybe<SystemString_Filter_Operators>;
  tags?: InputMaybe<SystemString_Filter_Operators>;
  tags_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  text_direction?: InputMaybe<SystemString_Filter_Operators>;
  tfa_secret?: InputMaybe<SystemHash_Filter_Operators>;
  theme_dark?: InputMaybe<SystemString_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<SystemString_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  theme_light?: InputMaybe<SystemString_Filter_Operators>;
  theme_light_overrides?: InputMaybe<SystemString_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  title?: InputMaybe<SystemString_Filter_Operators>;
  token?: InputMaybe<SystemHash_Filter_Operators>;
};

export type SystemDirectus_Versions = {
  __typename?: 'directus_versions';
  collection: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<SystemDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<SystemDatetime_Functions>;
  delta?: Maybe<Scalars['JSON']['output']>;
  delta_func?: Maybe<SystemCount_Functions>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<SystemDirectus_Users>;
  user_updated?: Maybe<SystemDirectus_Users>;
};


export type SystemDirectus_VersionsUser_CreatedArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemDirectus_VersionsUser_UpdatedArgs = {
  filter?: InputMaybe<SystemDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Versions_Aggregated = {
  __typename?: 'directus_versions_aggregated';
  count?: Maybe<SystemDirectus_Versions_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Versions_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type SystemDirectus_Versions_Aggregated_Count = {
  __typename?: 'directus_versions_aggregated_count';
  collection?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  delta?: Maybe<Scalars['Int']['output']>;
  hash?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  item?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Versions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Versions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Versions_Filter>>>;
  collection?: InputMaybe<SystemString_Filter_Operators>;
  date_created?: InputMaybe<SystemDate_Filter_Operators>;
  date_created_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<SystemDate_Filter_Operators>;
  date_updated_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  delta?: InputMaybe<SystemString_Filter_Operators>;
  delta_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  hash?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemId_Filter_Operators>;
  item?: InputMaybe<SystemString_Filter_Operators>;
  key?: InputMaybe<SystemString_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  user_created?: InputMaybe<SystemDirectus_Users_Filter>;
  user_updated?: InputMaybe<SystemDirectus_Users_Filter>;
};

export type SystemDirectus_Versions_Mutated = {
  __typename?: 'directus_versions_mutated';
  data?: Maybe<SystemDirectus_Versions>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemDirectus_Webhooks = {
  __typename?: 'directus_webhooks';
  actions: Array<Maybe<Scalars['String']['output']>>;
  collections: Array<Maybe<Scalars['String']['output']>>;
  data?: Maybe<Scalars['Boolean']['output']>;
  headers?: Maybe<Scalars['JSON']['output']>;
  headers_func?: Maybe<SystemCount_Functions>;
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  migrated_flow?: Maybe<SystemDirectus_Flows>;
  name: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  was_active_before_deprecation: Scalars['Boolean']['output'];
};


export type SystemDirectus_WebhooksMigrated_FlowArgs = {
  filter?: InputMaybe<SystemDirectus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemDirectus_Webhooks_Aggregated = {
  __typename?: 'directus_webhooks_aggregated';
  avg?: Maybe<SystemDirectus_Webhooks_Aggregated_Fields>;
  avgDistinct?: Maybe<SystemDirectus_Webhooks_Aggregated_Fields>;
  count?: Maybe<SystemDirectus_Webhooks_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<SystemDirectus_Webhooks_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<SystemDirectus_Webhooks_Aggregated_Fields>;
  min?: Maybe<SystemDirectus_Webhooks_Aggregated_Fields>;
  sum?: Maybe<SystemDirectus_Webhooks_Aggregated_Fields>;
  sumDistinct?: Maybe<SystemDirectus_Webhooks_Aggregated_Fields>;
};

export type SystemDirectus_Webhooks_Aggregated_Count = {
  __typename?: 'directus_webhooks_aggregated_count';
  actions?: Maybe<Scalars['Int']['output']>;
  collections?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Scalars['Int']['output']>;
  headers?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  method?: Maybe<Scalars['Int']['output']>;
  migrated_flow?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Int']['output']>;
  was_active_before_deprecation?: Maybe<Scalars['Int']['output']>;
};

export type SystemDirectus_Webhooks_Aggregated_Fields = {
  __typename?: 'directus_webhooks_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type SystemDirectus_Webhooks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemDirectus_Webhooks_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemDirectus_Webhooks_Filter>>>;
  actions?: InputMaybe<SystemString_Filter_Operators>;
  collections?: InputMaybe<SystemString_Filter_Operators>;
  data?: InputMaybe<SystemBoolean_Filter_Operators>;
  headers?: InputMaybe<SystemString_Filter_Operators>;
  headers_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  method?: InputMaybe<SystemString_Filter_Operators>;
  migrated_flow?: InputMaybe<SystemDirectus_Flows_Filter>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  status?: InputMaybe<SystemString_Filter_Operators>;
  url?: InputMaybe<SystemString_Filter_Operators>;
  was_active_before_deprecation?: InputMaybe<SystemBoolean_Filter_Operators>;
};

export type SystemDirectus_Webhooks_Mutated = {
  __typename?: 'directus_webhooks_mutated';
  data?: Maybe<SystemDirectus_Webhooks>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export enum SystemGraphql_Sdl_Scope {
  Items = 'items',
  System = 'system'
}

export type SystemHash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemId_Filter_Operators = {
  _contains?: InputMaybe<Scalars['ID']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['ID']['input']>;
  _eq?: InputMaybe<Scalars['ID']['input']>;
  _icontains?: InputMaybe<Scalars['ID']['input']>;
  _iends_with?: InputMaybe<Scalars['ID']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['ID']['input']>;
  _ncontains?: InputMaybe<Scalars['ID']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['ID']['input']>;
  _neq?: InputMaybe<Scalars['ID']['input']>;
  _niends_with?: InputMaybe<Scalars['ID']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['ID']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['ID']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export type SystemNumber_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemOrder_Items = {
  __typename?: 'order_items';
  id: Scalars['ID']['output'];
  order_id?: Maybe<SystemOrders>;
  price?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<SystemProducts>;
  quantity?: Maybe<Scalars['Int']['output']>;
};


export type SystemOrder_ItemsOrder_IdArgs = {
  filter?: InputMaybe<SystemOrders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemOrder_ItemsProduct_IdArgs = {
  filter?: InputMaybe<SystemProducts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemOrder_Items_Mutated = {
  __typename?: 'order_items_mutated';
  data?: Maybe<SystemOrder_Items>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemOrders = {
  __typename?: 'orders';
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<SystemDatetime_Functions>;
  id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
  total_price?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<SystemDatetime_Functions>;
  user_id?: Maybe<SystemUsers>;
};


export type SystemOrdersUser_IdArgs = {
  filter?: InputMaybe<SystemUsers_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemOrders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemOrders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemOrders_Filter>>>;
  created_at?: InputMaybe<SystemDate_Filter_Operators>;
  created_at_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  status?: InputMaybe<SystemString_Filter_Operators>;
  total_price?: InputMaybe<SystemNumber_Filter_Operators>;
  updated_at?: InputMaybe<SystemDate_Filter_Operators>;
  updated_at_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  user_id?: InputMaybe<SystemUsers_Filter>;
};

export type SystemOrders_Mutated = {
  __typename?: 'orders_mutated';
  data?: Maybe<SystemOrders>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemPayments = {
  __typename?: 'payments';
  amount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  order_id?: Maybe<SystemOrders>;
  paid_at?: Maybe<Scalars['Date']['output']>;
  paid_at_func?: Maybe<SystemDatetime_Functions>;
  payment_method?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};


export type SystemPaymentsOrder_IdArgs = {
  filter?: InputMaybe<SystemOrders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemPayments_Mutated = {
  __typename?: 'payments_mutated';
  data?: Maybe<SystemPayments>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemPolicy_Me_Globals_Type = {
  __typename?: 'policy_me_globals_type';
  admin_access?: Maybe<Scalars['Boolean']['output']>;
  app_access?: Maybe<Scalars['Boolean']['output']>;
  enforce_tfa?: Maybe<Scalars['Boolean']['output']>;
};

export type SystemProducts = {
  __typename?: 'products';
  barcode?: Maybe<Scalars['String']['output']>;
  boutique_id?: Maybe<SystemBoutiques>;
  brand?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<SystemCategories>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<SystemDatetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['JSON']['output']>;
  images_func?: Maybe<SystemCount_Functions>;
  is_on_sale?: Maybe<Scalars['Boolean']['output']>;
  main_image?: Maybe<Scalars['String']['output']>;
  market_price?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  rating_avg?: Maybe<Scalars['Float']['output']>;
  seller_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  total_reviews?: Maybe<Scalars['Int']['output']>;
  total_sales_volume?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<SystemDatetime_Functions>;
  video_url?: Maybe<Scalars['String']['output']>;
};


export type SystemProductsBoutique_IdArgs = {
  filter?: InputMaybe<SystemBoutiques_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SystemProductsCategory_IdArgs = {
  filter?: InputMaybe<SystemCategories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SystemProducts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemProducts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemProducts_Filter>>>;
  barcode?: InputMaybe<SystemString_Filter_Operators>;
  boutique_id?: InputMaybe<SystemBoutiques_Filter>;
  brand?: InputMaybe<SystemString_Filter_Operators>;
  category_id?: InputMaybe<SystemCategories_Filter>;
  created_at?: InputMaybe<SystemDate_Filter_Operators>;
  created_at_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  description?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  images?: InputMaybe<SystemString_Filter_Operators>;
  images_func?: InputMaybe<SystemCount_Function_Filter_Operators>;
  is_on_sale?: InputMaybe<SystemBoolean_Filter_Operators>;
  main_image?: InputMaybe<SystemString_Filter_Operators>;
  market_price?: InputMaybe<SystemNumber_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  price?: InputMaybe<SystemNumber_Filter_Operators>;
  rating_avg?: InputMaybe<SystemNumber_Filter_Operators>;
  seller_id?: InputMaybe<SystemNumber_Filter_Operators>;
  status?: InputMaybe<SystemString_Filter_Operators>;
  stock?: InputMaybe<SystemNumber_Filter_Operators>;
  subtitle?: InputMaybe<SystemString_Filter_Operators>;
  total_reviews?: InputMaybe<SystemNumber_Filter_Operators>;
  total_sales_volume?: InputMaybe<SystemNumber_Filter_Operators>;
  updated_at?: InputMaybe<SystemDate_Filter_Operators>;
  updated_at_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  video_url?: InputMaybe<SystemString_Filter_Operators>;
};

export type SystemProducts_Mutated = {
  __typename?: 'products_mutated';
  data?: Maybe<SystemProducts>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemServer_Info = {
  __typename?: 'server_info';
  project?: Maybe<SystemServer_Info_Project>;
  queryLimit?: Maybe<SystemServer_Info_Query_Limit>;
  rateLimit?: Maybe<Scalars['Boolean']['output']>;
  rateLimitGlobal?: Maybe<Scalars['Boolean']['output']>;
  websocket?: Maybe<SystemServer_Info_Websocket>;
};

export type SystemServer_Info_Project = {
  __typename?: 'server_info_project';
  custom_css?: Maybe<Scalars['String']['output']>;
  default_language?: Maybe<Scalars['String']['output']>;
  project_color?: Maybe<Scalars['String']['output']>;
  project_descriptor?: Maybe<Scalars['String']['output']>;
  project_logo?: Maybe<Scalars['String']['output']>;
  project_name?: Maybe<Scalars['String']['output']>;
  public_background?: Maybe<Scalars['String']['output']>;
  public_foreground?: Maybe<Scalars['String']['output']>;
  public_note?: Maybe<Scalars['String']['output']>;
  public_registration?: Maybe<Scalars['Boolean']['output']>;
  public_registration_verify_email?: Maybe<Scalars['Boolean']['output']>;
};

export type SystemServer_Info_Query_Limit = {
  __typename?: 'server_info_query_limit';
  default?: Maybe<Scalars['Int']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
};

export type SystemServer_Info_Websocket = {
  __typename?: 'server_info_websocket';
  graphql?: Maybe<SystemServer_Info_Websocket_Graphql>;
  heartbeat?: Maybe<Scalars['Int']['output']>;
  rest?: Maybe<SystemServer_Info_Websocket_Rest>;
};

export type SystemServer_Info_Websocket_Graphql = {
  __typename?: 'server_info_websocket_graphql';
  authentication?: Maybe<SystemServer_Info_Websocket_Graphql_Authentication>;
  path?: Maybe<Scalars['String']['output']>;
};

export enum SystemServer_Info_Websocket_Graphql_Authentication {
  Handshake = 'handshake',
  Public = 'public',
  Strict = 'strict'
}

export type SystemServer_Info_Websocket_Rest = {
  __typename?: 'server_info_websocket_rest';
  authentication?: Maybe<SystemServer_Info_Websocket_Rest_Authentication>;
  path?: Maybe<Scalars['String']['output']>;
};

export enum SystemServer_Info_Websocket_Rest_Authentication {
  Handshake = 'handshake',
  Public = 'public',
  Strict = 'strict'
}

export type SystemString_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUpdate_Directus_Access_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  policy?: InputMaybe<SystemUpdate_Directus_Policies_Input>;
  role?: InputMaybe<SystemUpdate_Directus_Roles_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<SystemUpdate_Directus_Users_Input>;
};

export type SystemUpdate_Directus_Comments_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<SystemUpdate_Directus_Users_Input>;
  user_updated?: InputMaybe<SystemUpdate_Directus_Users_Input>;
};

export type SystemUpdate_Directus_Dashboards_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  panels?: InputMaybe<Array<InputMaybe<SystemUpdate_Directus_Panels_Input>>>;
  user_created?: InputMaybe<SystemUpdate_Directus_Users_Input>;
};

export type SystemUpdate_Directus_Extensions_InputInput = {
  meta?: InputMaybe<SystemUpdate_Directus_Extensions_Input_MetaInput>;
};

export type SystemUpdate_Directus_Extensions_Input_MetaInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemUpdate_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  created_on?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  focal_point_x?: InputMaybe<Scalars['Int']['input']>;
  focal_point_y?: InputMaybe<Scalars['Int']['input']>;
  folder?: InputMaybe<SystemUpdate_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<SystemUpdate_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tus_data?: InputMaybe<Scalars['JSON']['input']>;
  tus_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<SystemUpdate_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemUpdate_Directus_Flows_Input = {
  accountability?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operation?: InputMaybe<SystemUpdate_Directus_Operations_Input>;
  operations?: InputMaybe<Array<InputMaybe<SystemUpdate_Directus_Operations_Input>>>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  trigger?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<SystemUpdate_Directus_Users_Input>;
};

export type SystemUpdate_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<SystemUpdate_Directus_Folders_Input>;
};

export type SystemUpdate_Directus_Notifications_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  recipient?: InputMaybe<SystemUpdate_Directus_Users_Input>;
  sender?: InputMaybe<SystemUpdate_Directus_Users_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Date']['input']>;
};

export type SystemUpdate_Directus_Operations_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  flow?: InputMaybe<SystemUpdate_Directus_Flows_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position_x?: InputMaybe<Scalars['Int']['input']>;
  position_y?: InputMaybe<Scalars['Int']['input']>;
  reject?: InputMaybe<SystemUpdate_Directus_Operations_Input>;
  resolve?: InputMaybe<SystemUpdate_Directus_Operations_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<SystemUpdate_Directus_Users_Input>;
};

export type SystemUpdate_Directus_Panels_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  dashboard?: InputMaybe<SystemUpdate_Directus_Dashboards_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  position_x?: InputMaybe<Scalars['Int']['input']>;
  position_y?: InputMaybe<Scalars['Int']['input']>;
  show_header?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<SystemUpdate_Directus_Users_Input>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemUpdate_Directus_Permissions_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  policy?: InputMaybe<SystemUpdate_Directus_Policies_Input>;
  presets?: InputMaybe<Scalars['JSON']['input']>;
  validation?: InputMaybe<Scalars['JSON']['input']>;
};

export type SystemUpdate_Directus_Policies_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']['input']>;
  app_access?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<SystemUpdate_Directus_Permissions_Input>>>;
  roles?: InputMaybe<Array<InputMaybe<SystemUpdate_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<SystemUpdate_Directus_Access_Input>>>;
};

export type SystemUpdate_Directus_Presets_Input = {
  bookmark?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['JSON']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<Scalars['String']['input']>;
  layout_options?: InputMaybe<Scalars['JSON']['input']>;
  layout_query?: InputMaybe<Scalars['JSON']['input']>;
  refresh_interval?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<SystemUpdate_Directus_Roles_Input>;
  search?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<SystemUpdate_Directus_Users_Input>;
};

export type SystemUpdate_Directus_Roles_Input = {
  children?: InputMaybe<Array<InputMaybe<SystemUpdate_Directus_Roles_Input>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<SystemUpdate_Directus_Roles_Input>;
  policies?: InputMaybe<Array<InputMaybe<SystemUpdate_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<SystemUpdate_Directus_Users_Input>>>;
};

export type SystemUpdate_Directus_Settings_Input = {
  accepted_terms?: InputMaybe<Scalars['Boolean']['input']>;
  auth_login_attempts?: InputMaybe<Scalars['Int']['input']>;
  auth_password_policy?: InputMaybe<Scalars['String']['input']>;
  basemaps?: InputMaybe<Scalars['JSON']['input']>;
  custom_aspect_ratios?: InputMaybe<Scalars['JSON']['input']>;
  custom_css?: InputMaybe<Scalars['String']['input']>;
  default_appearance?: InputMaybe<Scalars['String']['input']>;
  default_language?: InputMaybe<Scalars['String']['input']>;
  default_theme_dark?: InputMaybe<Scalars['String']['input']>;
  default_theme_light?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  mapbox_key?: InputMaybe<Scalars['String']['input']>;
  module_bar?: InputMaybe<Scalars['JSON']['input']>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color?: InputMaybe<Scalars['String']['input']>;
  project_descriptor?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  project_logo?: InputMaybe<SystemUpdate_Directus_Files_Input>;
  project_name?: InputMaybe<Scalars['String']['input']>;
  project_url?: InputMaybe<Scalars['String']['input']>;
  public_background?: InputMaybe<SystemUpdate_Directus_Files_Input>;
  public_favicon?: InputMaybe<SystemUpdate_Directus_Files_Input>;
  public_foreground?: InputMaybe<SystemUpdate_Directus_Files_Input>;
  public_note?: InputMaybe<Scalars['String']['input']>;
  /** $t:fields.directus_settings.public_registration_note */
  public_registration?: InputMaybe<Scalars['Boolean']['input']>;
  /** $t:fields.directus_settings.public_registration_email_filter_note */
  public_registration_email_filter?: InputMaybe<Scalars['JSON']['input']>;
  public_registration_role?: InputMaybe<SystemUpdate_Directus_Roles_Input>;
  /** $t:fields.directus_settings.public_registration_verify_email_note */
  public_registration_verify_email?: InputMaybe<Scalars['Boolean']['input']>;
  report_bug_url?: InputMaybe<Scalars['String']['input']>;
  report_error_url?: InputMaybe<Scalars['String']['input']>;
  report_feature_url?: InputMaybe<Scalars['String']['input']>;
  storage_asset_presets?: InputMaybe<Scalars['JSON']['input']>;
  storage_asset_transform?: InputMaybe<Scalars['String']['input']>;
  storage_default_folder?: InputMaybe<SystemUpdate_Directus_Folders_Input>;
  theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>;
  theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>;
  visual_editor_urls?: InputMaybe<Scalars['JSON']['input']>;
};

export type SystemUpdate_Directus_Shares_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: InputMaybe<Scalars['Date']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** $t:shared_leave_blank_for_passwordless_access */
  password?: InputMaybe<Scalars['Hash']['input']>;
  role?: InputMaybe<SystemUpdate_Directus_Roles_Input>;
  times_used?: InputMaybe<Scalars['Int']['input']>;
  user_created?: InputMaybe<SystemUpdate_Directus_Users_Input>;
};

export type SystemUpdate_Directus_Translations_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUpdate_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['JSON']['input']>;
  avatar?: InputMaybe<SystemUpdate_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['Date']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['Hash']['input']>;
  policies?: InputMaybe<Array<InputMaybe<SystemUpdate_Directus_Access_Input>>>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<SystemUpdate_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  text_direction?: InputMaybe<Scalars['String']['input']>;
  tfa_secret?: InputMaybe<Scalars['Hash']['input']>;
  theme_dark?: InputMaybe<Scalars['String']['input']>;
  theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>;
  theme_light?: InputMaybe<Scalars['String']['input']>;
  theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['Hash']['input']>;
};

export type SystemUpdate_Directus_Versions_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  delta?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  item?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<SystemUpdate_Directus_Users_Input>;
  user_updated?: InputMaybe<SystemUpdate_Directus_Users_Input>;
};

export type SystemUpdate_Directus_Webhooks_Input = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  data?: InputMaybe<Scalars['Boolean']['input']>;
  headers?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  migrated_flow?: InputMaybe<SystemUpdate_Directus_Flows_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  was_active_before_deprecation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemUsers = {
  __typename?: 'users';
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<SystemDatetime_Functions>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<SystemDatetime_Functions>;
};

export type SystemUsers_Filter = {
  _and?: InputMaybe<Array<InputMaybe<SystemUsers_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<SystemUsers_Filter>>>;
  created_at?: InputMaybe<SystemDate_Filter_Operators>;
  created_at_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
  email?: InputMaybe<SystemString_Filter_Operators>;
  id?: InputMaybe<SystemNumber_Filter_Operators>;
  name?: InputMaybe<SystemString_Filter_Operators>;
  password?: InputMaybe<SystemString_Filter_Operators>;
  updated_at?: InputMaybe<SystemDate_Filter_Operators>;
  updated_at_func?: InputMaybe<SystemDatetime_Function_Filter_Operators>;
};

export type SystemUsers_Me_Tfa_Generate_Data = {
  __typename?: 'users_me_tfa_generate_data';
  otpauth_url?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
};

export type SystemUsers_Mutated = {
  __typename?: 'users_mutated';
  data?: Maybe<SystemUsers>;
  event?: Maybe<SystemEventEnum>;
  key: Scalars['ID']['output'];
};

export type SystemWrite_Directus_Collections = {
  __typename?: 'write_directus_collections';
  collection?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<SystemWrite_Directus_Collections_Meta>;
  schema?: Maybe<SystemWrite_Directus_Collections_Schema>;
};

export type SystemWrite_Directus_Collections_Input = {
  fields?: InputMaybe<Array<SystemWrite_Directus_Fields_Input>>;
  meta?: InputMaybe<SystemWrite_Directus_Collections_Meta_Input>;
};

export type SystemWrite_Directus_Collections_Meta = {
  __typename?: 'write_directus_collections_meta';
  accountability?: Maybe<Scalars['String']['output']>;
  archive_app_filter?: Maybe<Scalars['Boolean']['output']>;
  archive_field?: Maybe<Scalars['String']['output']>;
  archive_value?: Maybe<Scalars['String']['output']>;
  collapse?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  display_template?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  item_duplication_fields?: Maybe<Scalars['JSON']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  preview_url?: Maybe<Scalars['String']['output']>;
  singleton?: Maybe<Scalars['Boolean']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  sort_field?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  unarchive_value?: Maybe<Scalars['String']['output']>;
  versioning?: Maybe<Scalars['Boolean']['output']>;
};

export type SystemWrite_Directus_Collections_Meta_Input = {
  accountability?: InputMaybe<Scalars['String']['input']>;
  archive_app_filter?: InputMaybe<Scalars['Boolean']['input']>;
  archive_field?: InputMaybe<Scalars['String']['input']>;
  archive_value?: InputMaybe<Scalars['String']['input']>;
  collapse?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  display_template?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  item_duplication_fields?: InputMaybe<Scalars['JSON']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  preview_url?: InputMaybe<Scalars['String']['input']>;
  singleton?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  sort_field?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Scalars['JSON']['input']>;
  unarchive_value?: InputMaybe<Scalars['String']['input']>;
  versioning?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SystemWrite_Directus_Collections_Schema = {
  __typename?: 'write_directus_collections_schema';
  comment?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SystemWrite_Directus_Fields = {
  __typename?: 'write_directus_fields';
  collection?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<SystemWrite_Directus_Fields_Meta>;
  schema?: Maybe<SystemWrite_Directus_Fields_Schema>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SystemWrite_Directus_Fields_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<SystemWrite_Directus_Fields_Meta_Input>;
  schema?: InputMaybe<SystemWrite_Directus_Fields_Schema_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type SystemWrite_Directus_Fields_Meta = {
  __typename?: 'write_directus_fields_meta';
  collection?: Maybe<Scalars['String']['output']>;
  conditions?: Maybe<Scalars['JSON']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  display_options?: Maybe<Scalars['JSON']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Scalars['String']['output']>;
  hidden?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  interface?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  required?: Maybe<Scalars['Boolean']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  special?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  translations?: Maybe<Scalars['JSON']['output']>;
  validation?: Maybe<Scalars['JSON']['output']>;
  validation_message?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type SystemWrite_Directus_Fields_Meta_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  conditions?: InputMaybe<Scalars['JSON']['input']>;
  display?: InputMaybe<Scalars['String']['input']>;
  display_options?: InputMaybe<Scalars['JSON']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interface?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['JSON']['input']>;
  readonly?: InputMaybe<Scalars['Boolean']['input']>;
  required?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  special?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  translations?: InputMaybe<Scalars['JSON']['input']>;
  validation?: InputMaybe<Scalars['JSON']['input']>;
  validation_message?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
};

export type SystemWrite_Directus_Fields_Schema = {
  __typename?: 'write_directus_fields_schema';
  comment?: Maybe<Scalars['String']['output']>;
  data_type?: Maybe<Scalars['String']['output']>;
  default_value?: Maybe<Scalars['String']['output']>;
  foreign_key_column?: Maybe<Scalars['String']['output']>;
  foreign_key_table?: Maybe<Scalars['String']['output']>;
  generation_expression?: Maybe<Scalars['String']['output']>;
  has_auto_increment?: Maybe<Scalars['Boolean']['output']>;
  is_generated?: Maybe<Scalars['Boolean']['output']>;
  is_indexed?: Maybe<Scalars['Boolean']['output']>;
  is_nullable?: Maybe<Scalars['Boolean']['output']>;
  is_primary_key?: Maybe<Scalars['Boolean']['output']>;
  is_unique?: Maybe<Scalars['Boolean']['output']>;
  max_length?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numeric_precision?: Maybe<Scalars['Int']['output']>;
  numeric_scale?: Maybe<Scalars['Int']['output']>;
  table?: Maybe<Scalars['String']['output']>;
};

export type SystemWrite_Directus_Fields_Schema_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  data_type?: InputMaybe<Scalars['String']['input']>;
  default_value?: InputMaybe<Scalars['String']['input']>;
  foreign_key_column?: InputMaybe<Scalars['String']['input']>;
  foreign_key_table?: InputMaybe<Scalars['String']['input']>;
  generation_expression?: InputMaybe<Scalars['String']['input']>;
  has_auto_increment?: InputMaybe<Scalars['Boolean']['input']>;
  is_generated?: InputMaybe<Scalars['Boolean']['input']>;
  is_indexed?: InputMaybe<Scalars['Boolean']['input']>;
  is_nullable?: InputMaybe<Scalars['Boolean']['input']>;
  is_primary_key?: InputMaybe<Scalars['Boolean']['input']>;
  is_unique?: InputMaybe<Scalars['Boolean']['input']>;
  max_length?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  numeric_precision?: InputMaybe<Scalars['Int']['input']>;
  numeric_scale?: InputMaybe<Scalars['Int']['input']>;
  table?: InputMaybe<Scalars['String']['input']>;
};

export type SystemWrite_Directus_Relations = {
  __typename?: 'write_directus_relations';
  collection?: Maybe<Scalars['String']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<SystemWrite_Directus_Relations_Meta>;
  related_collection?: Maybe<Scalars['String']['output']>;
  schema?: Maybe<SystemWrite_Directus_Relations_Schema>;
};

export type SystemWrite_Directus_Relations_Input = {
  collection?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<SystemWrite_Directus_Relations_Meta_Input>;
  related_collection?: InputMaybe<Scalars['String']['input']>;
  schema?: InputMaybe<SystemWrite_Directus_Relations_Schema_Input>;
};

export type SystemWrite_Directus_Relations_Meta = {
  __typename?: 'write_directus_relations_meta';
  id?: Maybe<Scalars['Int']['output']>;
  junction_field?: Maybe<Scalars['String']['output']>;
  many_collection?: Maybe<Scalars['String']['output']>;
  many_field?: Maybe<Scalars['String']['output']>;
  one_allowed_collections?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  one_collection?: Maybe<Scalars['String']['output']>;
  one_collection_field?: Maybe<Scalars['String']['output']>;
  one_deselect_action?: Maybe<Scalars['String']['output']>;
  one_field?: Maybe<Scalars['String']['output']>;
  sort_field?: Maybe<Scalars['String']['output']>;
};

export type SystemWrite_Directus_Relations_Meta_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  junction_field?: InputMaybe<Scalars['String']['input']>;
  many_collection?: InputMaybe<Scalars['String']['input']>;
  many_field?: InputMaybe<Scalars['String']['input']>;
  one_allowed_collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  one_collection?: InputMaybe<Scalars['String']['input']>;
  one_collection_field?: InputMaybe<Scalars['String']['input']>;
  one_deselect_action?: InputMaybe<Scalars['String']['input']>;
  one_field?: InputMaybe<Scalars['String']['input']>;
  sort_field?: InputMaybe<Scalars['String']['input']>;
};

export type SystemWrite_Directus_Relations_Schema = {
  __typename?: 'write_directus_relations_schema';
  column: Scalars['String']['output'];
  constraint_name?: Maybe<Scalars['String']['output']>;
  foreign_key_column: Scalars['String']['output'];
  foreign_key_table: Scalars['String']['output'];
  on_delete: Scalars['String']['output'];
  on_update: Scalars['String']['output'];
  table: Scalars['String']['output'];
};

export type SystemWrite_Directus_Relations_Schema_Input = {
  column: Scalars['String']['input'];
  constraint_name?: InputMaybe<Scalars['String']['input']>;
  foreign_key_column: Scalars['String']['input'];
  foreign_key_table: Scalars['String']['input'];
  on_delete: Scalars['String']['input'];
  on_update: Scalars['String']['input'];
  table: Scalars['String']['input'];
};
