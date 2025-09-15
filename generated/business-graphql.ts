import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** ISO8601 Date values */
  Date: { input: any; output: any; }
  /** BigInt value */
  GraphQLBigInt: { input: any; output: any; }
  /** A Float or a String */
  GraphQLStringOrFloat: { input: any; output: any; }
  /** Hashed string values */
  Hash: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum BusinessEventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type BusinessMutation = {
  __typename?: 'Mutation';
  create_boutiques_item?: Maybe<BusinessBoutiques>;
  create_boutiques_items: Array<BusinessBoutiques>;
  create_categories_item?: Maybe<BusinessCategories>;
  create_categories_items: Array<BusinessCategories>;
  create_customers_item?: Maybe<BusinessCustomers>;
  create_customers_items: Array<BusinessCustomers>;
  create_orders_item?: Maybe<BusinessOrders>;
  create_orders_items: Array<BusinessOrders>;
  create_products_item?: Maybe<BusinessProducts>;
  create_products_items: Array<BusinessProducts>;
  create_terminals_item?: Maybe<BusinessTerminals>;
  create_terminals_items: Array<BusinessTerminals>;
  create_views_item?: Maybe<BusinessViews>;
  create_views_items: Array<BusinessViews>;
  create_visits_item?: Maybe<BusinessVisits>;
  create_visits_items: Array<BusinessVisits>;
  delete_boutiques_item?: Maybe<BusinessDelete_One>;
  delete_boutiques_items?: Maybe<BusinessDelete_Many>;
  delete_categories_item?: Maybe<BusinessDelete_One>;
  delete_categories_items?: Maybe<BusinessDelete_Many>;
  delete_customers_item?: Maybe<BusinessDelete_One>;
  delete_customers_items?: Maybe<BusinessDelete_Many>;
  delete_orders_item?: Maybe<BusinessDelete_One>;
  delete_orders_items?: Maybe<BusinessDelete_Many>;
  delete_products_item?: Maybe<BusinessDelete_One>;
  delete_products_items?: Maybe<BusinessDelete_Many>;
  delete_terminals_item?: Maybe<BusinessDelete_One>;
  delete_terminals_items?: Maybe<BusinessDelete_Many>;
  delete_views_item?: Maybe<BusinessDelete_One>;
  delete_views_items?: Maybe<BusinessDelete_Many>;
  delete_visits_item?: Maybe<BusinessDelete_One>;
  delete_visits_items?: Maybe<BusinessDelete_Many>;
  update_boutiques_batch: Array<BusinessBoutiques>;
  update_boutiques_item?: Maybe<BusinessBoutiques>;
  update_boutiques_items: Array<BusinessBoutiques>;
  update_categories_batch: Array<BusinessCategories>;
  update_categories_item?: Maybe<BusinessCategories>;
  update_categories_items: Array<BusinessCategories>;
  update_customers_batch: Array<BusinessCustomers>;
  update_customers_item?: Maybe<BusinessCustomers>;
  update_customers_items: Array<BusinessCustomers>;
  update_orders_batch: Array<BusinessOrders>;
  update_orders_item?: Maybe<BusinessOrders>;
  update_orders_items: Array<BusinessOrders>;
  update_products_batch: Array<BusinessProducts>;
  update_products_item?: Maybe<BusinessProducts>;
  update_products_items: Array<BusinessProducts>;
  update_terminals_batch: Array<BusinessTerminals>;
  update_terminals_item?: Maybe<BusinessTerminals>;
  update_terminals_items: Array<BusinessTerminals>;
  update_views_batch: Array<BusinessViews>;
  update_views_item?: Maybe<BusinessViews>;
  update_views_items: Array<BusinessViews>;
  update_visits_batch: Array<BusinessVisits>;
  update_visits_item?: Maybe<BusinessVisits>;
  update_visits_items: Array<BusinessVisits>;
};


export type BusinessMutationCreate_Boutiques_ItemArgs = {
  data: BusinessCreate_Boutiques_Input;
};


export type BusinessMutationCreate_Boutiques_ItemsArgs = {
  data?: InputMaybe<Array<BusinessCreate_Boutiques_Input>>;
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationCreate_Categories_ItemArgs = {
  data: BusinessCreate_Categories_Input;
};


export type BusinessMutationCreate_Categories_ItemsArgs = {
  data?: InputMaybe<Array<BusinessCreate_Categories_Input>>;
  filter?: InputMaybe<BusinessCategories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationCreate_Customers_ItemArgs = {
  data: BusinessCreate_Customers_Input;
};


export type BusinessMutationCreate_Customers_ItemsArgs = {
  data?: InputMaybe<Array<BusinessCreate_Customers_Input>>;
  filter?: InputMaybe<BusinessCustomers_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationCreate_Orders_ItemArgs = {
  data: BusinessCreate_Orders_Input;
};


export type BusinessMutationCreate_Orders_ItemsArgs = {
  data?: InputMaybe<Array<BusinessCreate_Orders_Input>>;
  filter?: InputMaybe<BusinessOrders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationCreate_Products_ItemArgs = {
  data: BusinessCreate_Products_Input;
};


export type BusinessMutationCreate_Products_ItemsArgs = {
  data?: InputMaybe<Array<BusinessCreate_Products_Input>>;
  filter?: InputMaybe<BusinessProducts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationCreate_Terminals_ItemArgs = {
  data: BusinessCreate_Terminals_Input;
};


export type BusinessMutationCreate_Terminals_ItemsArgs = {
  data?: InputMaybe<Array<BusinessCreate_Terminals_Input>>;
  filter?: InputMaybe<BusinessTerminals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationCreate_Views_ItemArgs = {
  data: BusinessCreate_Views_Input;
};


export type BusinessMutationCreate_Views_ItemsArgs = {
  data?: InputMaybe<Array<BusinessCreate_Views_Input>>;
  filter?: InputMaybe<BusinessViews_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationCreate_Visits_ItemArgs = {
  data: BusinessCreate_Visits_Input;
};


export type BusinessMutationCreate_Visits_ItemsArgs = {
  data?: InputMaybe<Array<BusinessCreate_Visits_Input>>;
  filter?: InputMaybe<BusinessVisits_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationDelete_Boutiques_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type BusinessMutationDelete_Boutiques_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type BusinessMutationDelete_Categories_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type BusinessMutationDelete_Categories_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type BusinessMutationDelete_Customers_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type BusinessMutationDelete_Customers_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type BusinessMutationDelete_Orders_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type BusinessMutationDelete_Orders_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type BusinessMutationDelete_Products_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type BusinessMutationDelete_Products_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type BusinessMutationDelete_Terminals_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type BusinessMutationDelete_Terminals_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type BusinessMutationDelete_Views_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type BusinessMutationDelete_Views_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type BusinessMutationDelete_Visits_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type BusinessMutationDelete_Visits_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type BusinessMutationUpdate_Boutiques_BatchArgs = {
  data?: InputMaybe<Array<BusinessUpdate_Boutiques_Input>>;
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Boutiques_ItemArgs = {
  data: BusinessUpdate_Boutiques_Input;
  id: Scalars['ID']['input'];
};


export type BusinessMutationUpdate_Boutiques_ItemsArgs = {
  data: BusinessUpdate_Boutiques_Input;
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Categories_BatchArgs = {
  data?: InputMaybe<Array<BusinessUpdate_Categories_Input>>;
  filter?: InputMaybe<BusinessCategories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Categories_ItemArgs = {
  data: BusinessUpdate_Categories_Input;
  id: Scalars['ID']['input'];
};


export type BusinessMutationUpdate_Categories_ItemsArgs = {
  data: BusinessUpdate_Categories_Input;
  filter?: InputMaybe<BusinessCategories_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Customers_BatchArgs = {
  data?: InputMaybe<Array<BusinessUpdate_Customers_Input>>;
  filter?: InputMaybe<BusinessCustomers_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Customers_ItemArgs = {
  data: BusinessUpdate_Customers_Input;
  id: Scalars['ID']['input'];
};


export type BusinessMutationUpdate_Customers_ItemsArgs = {
  data: BusinessUpdate_Customers_Input;
  filter?: InputMaybe<BusinessCustomers_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Orders_BatchArgs = {
  data?: InputMaybe<Array<BusinessUpdate_Orders_Input>>;
  filter?: InputMaybe<BusinessOrders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Orders_ItemArgs = {
  data: BusinessUpdate_Orders_Input;
  id: Scalars['ID']['input'];
};


export type BusinessMutationUpdate_Orders_ItemsArgs = {
  data: BusinessUpdate_Orders_Input;
  filter?: InputMaybe<BusinessOrders_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Products_BatchArgs = {
  data?: InputMaybe<Array<BusinessUpdate_Products_Input>>;
  filter?: InputMaybe<BusinessProducts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Products_ItemArgs = {
  data: BusinessUpdate_Products_Input;
  id: Scalars['ID']['input'];
};


export type BusinessMutationUpdate_Products_ItemsArgs = {
  data: BusinessUpdate_Products_Input;
  filter?: InputMaybe<BusinessProducts_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Terminals_BatchArgs = {
  data?: InputMaybe<Array<BusinessUpdate_Terminals_Input>>;
  filter?: InputMaybe<BusinessTerminals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Terminals_ItemArgs = {
  data: BusinessUpdate_Terminals_Input;
  id: Scalars['ID']['input'];
};


export type BusinessMutationUpdate_Terminals_ItemsArgs = {
  data: BusinessUpdate_Terminals_Input;
  filter?: InputMaybe<BusinessTerminals_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Views_BatchArgs = {
  data?: InputMaybe<Array<BusinessUpdate_Views_Input>>;
  filter?: InputMaybe<BusinessViews_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Views_ItemArgs = {
  data: BusinessUpdate_Views_Input;
  id: Scalars['ID']['input'];
};


export type BusinessMutationUpdate_Views_ItemsArgs = {
  data: BusinessUpdate_Views_Input;
  filter?: InputMaybe<BusinessViews_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Visits_BatchArgs = {
  data?: InputMaybe<Array<BusinessUpdate_Visits_Input>>;
  filter?: InputMaybe<BusinessVisits_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessMutationUpdate_Visits_ItemArgs = {
  data: BusinessUpdate_Visits_Input;
  id: Scalars['ID']['input'];
};


export type BusinessMutationUpdate_Visits_ItemsArgs = {
  data: BusinessUpdate_Visits_Input;
  filter?: InputMaybe<BusinessVisits_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessQuery = {
  __typename?: 'Query';
  boutiques: Array<BusinessBoutiques>;
  boutiques_aggregated: Array<BusinessBoutiques_Aggregated>;
  boutiques_by_id?: Maybe<BusinessBoutiques>;
  boutiques_by_version?: Maybe<BusinessVersion_Boutiques>;
  categories: Array<BusinessCategories>;
  categories_aggregated: Array<BusinessCategories_Aggregated>;
  categories_by_id?: Maybe<BusinessCategories>;
  categories_by_version?: Maybe<BusinessVersion_Categories>;
  customers: Array<BusinessCustomers>;
  customers_aggregated: Array<BusinessCustomers_Aggregated>;
  customers_by_id?: Maybe<BusinessCustomers>;
  customers_by_version?: Maybe<BusinessVersion_Customers>;
  orders: Array<BusinessOrders>;
  orders_aggregated: Array<BusinessOrders_Aggregated>;
  orders_by_id?: Maybe<BusinessOrders>;
  orders_by_version?: Maybe<BusinessVersion_Orders>;
  products: Array<BusinessProducts>;
  products_aggregated: Array<BusinessProducts_Aggregated>;
  products_by_id?: Maybe<BusinessProducts>;
  products_by_version?: Maybe<BusinessVersion_Products>;
  terminals: Array<BusinessTerminals>;
  terminals_aggregated: Array<BusinessTerminals_Aggregated>;
  terminals_by_id?: Maybe<BusinessTerminals>;
  terminals_by_version?: Maybe<BusinessVersion_Terminals>;
  views: Array<BusinessViews>;
  views_aggregated: Array<BusinessViews_Aggregated>;
  views_by_id?: Maybe<BusinessViews>;
  views_by_version?: Maybe<BusinessVersion_Views>;
  visits: Array<BusinessVisits>;
  visits_aggregated: Array<BusinessVisits_Aggregated>;
  visits_by_id?: Maybe<BusinessVisits>;
  visits_by_version?: Maybe<BusinessVersion_Visits>;
};


export type BusinessQueryBoutiquesArgs = {
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryBoutiques_AggregatedArgs = {
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryBoutiques_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type BusinessQueryBoutiques_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type BusinessQueryCategoriesArgs = {
  filter?: InputMaybe<BusinessCategories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryCategories_AggregatedArgs = {
  filter?: InputMaybe<BusinessCategories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryCategories_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type BusinessQueryCategories_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type BusinessQueryCustomersArgs = {
  filter?: InputMaybe<BusinessCustomers_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryCustomers_AggregatedArgs = {
  filter?: InputMaybe<BusinessCustomers_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryCustomers_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type BusinessQueryCustomers_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type BusinessQueryOrdersArgs = {
  filter?: InputMaybe<BusinessOrders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryOrders_AggregatedArgs = {
  filter?: InputMaybe<BusinessOrders_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryOrders_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type BusinessQueryOrders_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type BusinessQueryProductsArgs = {
  filter?: InputMaybe<BusinessProducts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryProducts_AggregatedArgs = {
  filter?: InputMaybe<BusinessProducts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryProducts_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type BusinessQueryProducts_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type BusinessQueryTerminalsArgs = {
  filter?: InputMaybe<BusinessTerminals_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryTerminals_AggregatedArgs = {
  filter?: InputMaybe<BusinessTerminals_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryTerminals_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type BusinessQueryTerminals_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type BusinessQueryViewsArgs = {
  filter?: InputMaybe<BusinessViews_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryViews_AggregatedArgs = {
  filter?: InputMaybe<BusinessViews_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryViews_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type BusinessQueryViews_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type BusinessQueryVisitsArgs = {
  filter?: InputMaybe<BusinessVisits_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryVisits_AggregatedArgs = {
  filter?: InputMaybe<BusinessVisits_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessQueryVisits_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type BusinessQueryVisits_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type BusinessSubscription = {
  __typename?: 'Subscription';
  boutiques_mutated?: Maybe<BusinessBoutiques_Mutated>;
  categories_mutated?: Maybe<BusinessCategories_Mutated>;
  customers_mutated?: Maybe<BusinessCustomers_Mutated>;
  directus_access_mutated?: Maybe<BusinessDirectus_Access_Mutated>;
  directus_activity_mutated?: Maybe<BusinessDirectus_Activity_Mutated>;
  directus_comments_mutated?: Maybe<BusinessDirectus_Comments_Mutated>;
  directus_dashboards_mutated?: Maybe<BusinessDirectus_Dashboards_Mutated>;
  directus_files_mutated?: Maybe<BusinessDirectus_Files_Mutated>;
  directus_flows_mutated?: Maybe<BusinessDirectus_Flows_Mutated>;
  directus_folders_mutated?: Maybe<BusinessDirectus_Folders_Mutated>;
  directus_notifications_mutated?: Maybe<BusinessDirectus_Notifications_Mutated>;
  directus_operations_mutated?: Maybe<BusinessDirectus_Operations_Mutated>;
  directus_panels_mutated?: Maybe<BusinessDirectus_Panels_Mutated>;
  directus_permissions_mutated?: Maybe<BusinessDirectus_Permissions_Mutated>;
  directus_policies_mutated?: Maybe<BusinessDirectus_Policies_Mutated>;
  directus_presets_mutated?: Maybe<BusinessDirectus_Presets_Mutated>;
  directus_revisions_mutated?: Maybe<BusinessDirectus_Revisions_Mutated>;
  directus_roles_mutated?: Maybe<BusinessDirectus_Roles_Mutated>;
  directus_settings_mutated?: Maybe<BusinessDirectus_Settings_Mutated>;
  directus_shares_mutated?: Maybe<BusinessDirectus_Shares_Mutated>;
  directus_translations_mutated?: Maybe<BusinessDirectus_Translations_Mutated>;
  directus_users_mutated?: Maybe<BusinessDirectus_Users_Mutated>;
  directus_versions_mutated?: Maybe<BusinessDirectus_Versions_Mutated>;
  directus_webhooks_mutated?: Maybe<BusinessDirectus_Webhooks_Mutated>;
  orders_mutated?: Maybe<BusinessOrders_Mutated>;
  products_mutated?: Maybe<BusinessProducts_Mutated>;
  terminals_mutated?: Maybe<BusinessTerminals_Mutated>;
  views_mutated?: Maybe<BusinessViews_Mutated>;
  visits_mutated?: Maybe<BusinessVisits_Mutated>;
};


export type BusinessSubscriptionBoutiques_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionCategories_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionCustomers_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Access_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Activity_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Comments_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Dashboards_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Flows_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Folders_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Notifications_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Operations_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Panels_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Permissions_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Policies_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Presets_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Revisions_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Roles_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Settings_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Shares_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Translations_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Users_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Versions_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionDirectus_Webhooks_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionOrders_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionProducts_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionTerminals_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionViews_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};


export type BusinessSubscriptionVisits_MutatedArgs = {
  event?: InputMaybe<BusinessEventEnum>;
};

export type BusinessBig_Int_Filter_Operators = {
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

export type BusinessBoolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BusinessBoutiques = {
  __typename?: 'boutiques';
  address?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<BusinessDatetime_Functions>;
  expire_date?: Maybe<Scalars['Date']['output']>;
  expire_date_func?: Maybe<BusinessDatetime_Functions>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['JSON']['output']>;
  images_func?: Maybe<BusinessCount_Functions>;
  main_image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<BusinessDirectus_Users>;
  user_updated?: Maybe<BusinessDirectus_Users>;
};


export type BusinessBoutiquesUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessBoutiquesUser_UpdatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessBoutiques_Aggregated = {
  __typename?: 'boutiques_aggregated';
  avg?: Maybe<BusinessBoutiques_Aggregated_Fields>;
  avgDistinct?: Maybe<BusinessBoutiques_Aggregated_Fields>;
  count?: Maybe<BusinessBoutiques_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<BusinessBoutiques_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<BusinessBoutiques_Aggregated_Fields>;
  min?: Maybe<BusinessBoutiques_Aggregated_Fields>;
  sum?: Maybe<BusinessBoutiques_Aggregated_Fields>;
  sumDistinct?: Maybe<BusinessBoutiques_Aggregated_Fields>;
};

export type BusinessBoutiques_Aggregated_Count = {
  __typename?: 'boutiques_aggregated_count';
  address?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  contact?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  expire_date?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  images?: Maybe<Scalars['Int']['output']>;
  main_image?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type BusinessBoutiques_Aggregated_Fields = {
  __typename?: 'boutiques_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
  stars?: Maybe<Scalars['Float']['output']>;
};

export type BusinessBoutiques_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessBoutiques_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessBoutiques_Filter>>>;
  address?: InputMaybe<BusinessString_Filter_Operators>;
  category?: InputMaybe<BusinessString_Filter_Operators>;
  city?: InputMaybe<BusinessString_Filter_Operators>;
  code?: InputMaybe<BusinessString_Filter_Operators>;
  contact?: InputMaybe<BusinessString_Filter_Operators>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<BusinessDate_Filter_Operators>;
  date_updated_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  expire_date?: InputMaybe<BusinessDate_Filter_Operators>;
  expire_date_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  images?: InputMaybe<BusinessString_Filter_Operators>;
  images_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  main_image?: InputMaybe<BusinessString_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  sort?: InputMaybe<BusinessNumber_Filter_Operators>;
  stars?: InputMaybe<BusinessNumber_Filter_Operators>;
  status?: InputMaybe<BusinessString_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
  user_updated?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessBoutiques_Mutated = {
  __typename?: 'boutiques_mutated';
  data?: Maybe<BusinessBoutiques>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessCategories = {
  __typename?: 'categories';
  boutique?: Maybe<BusinessBoutiques>;
  boutique_id?: Maybe<BusinessBoutiques>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<BusinessDatetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  user_created?: Maybe<BusinessDirectus_Users>;
  user_updated?: Maybe<BusinessDirectus_Users>;
};


export type BusinessCategoriesBoutiqueArgs = {
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessCategoriesBoutique_IdArgs = {
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessCategoriesUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessCategoriesUser_UpdatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessCategories_Aggregated = {
  __typename?: 'categories_aggregated';
  avg?: Maybe<BusinessCategories_Aggregated_Fields>;
  avgDistinct?: Maybe<BusinessCategories_Aggregated_Fields>;
  count?: Maybe<BusinessCategories_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<BusinessCategories_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<BusinessCategories_Aggregated_Fields>;
  min?: Maybe<BusinessCategories_Aggregated_Fields>;
  sum?: Maybe<BusinessCategories_Aggregated_Fields>;
  sumDistinct?: Maybe<BusinessCategories_Aggregated_Fields>;
};

export type BusinessCategories_Aggregated_Count = {
  __typename?: 'categories_aggregated_count';
  boutique_id?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type BusinessCategories_Aggregated_Fields = {
  __typename?: 'categories_aggregated_fields';
  boutique_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type BusinessCategories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessCategories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessCategories_Filter>>>;
  boutique?: InputMaybe<BusinessBoutiques_Filter>;
  boutique_id?: InputMaybe<BusinessBoutiques_Filter>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<BusinessDate_Filter_Operators>;
  date_updated_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  description?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
  user_updated?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessCategories_Mutated = {
  __typename?: 'categories_mutated';
  data?: Maybe<BusinessCategories>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessCount_Function_Filter_Operators = {
  count?: InputMaybe<BusinessNumber_Filter_Operators>;
};

export type BusinessCount_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type BusinessCreate_Boutiques_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  expire_date?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  main_image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<BusinessCreate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessCreate_Directus_Users_Input>;
};

export type BusinessCreate_Categories_Input = {
  boutique?: InputMaybe<BusinessCreate_Boutiques_Input>;
  boutique_id?: InputMaybe<BusinessCreate_Boutiques_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  user_created?: InputMaybe<BusinessCreate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessCreate_Directus_Users_Input>;
};

export type BusinessCreate_Customers_Input = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  boutique?: InputMaybe<BusinessCreate_Boutiques_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  nick_name?: InputMaybe<Scalars['String']['input']>;
  open_id: Scalars['String']['input'];
  sex?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<BusinessCreate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessCreate_Directus_Users_Input>;
};

export type BusinessCreate_Directus_Access_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  policy?: InputMaybe<BusinessCreate_Directus_Policies_Input>;
  role?: InputMaybe<BusinessCreate_Directus_Roles_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<BusinessCreate_Directus_Users_Input>;
};

export type BusinessCreate_Directus_Files_Input = {
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
  folder?: InputMaybe<BusinessCreate_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<BusinessCreate_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage: Scalars['String']['input'];
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tus_data?: InputMaybe<Scalars['JSON']['input']>;
  tus_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<BusinessCreate_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type BusinessCreate_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<BusinessCreate_Directus_Folders_Input>;
};

export type BusinessCreate_Directus_Permissions_Input = {
  action: Scalars['String']['input'];
  collection: Scalars['String']['input'];
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  policy?: InputMaybe<BusinessCreate_Directus_Policies_Input>;
  presets?: InputMaybe<Scalars['JSON']['input']>;
  validation?: InputMaybe<Scalars['JSON']['input']>;
};

export type BusinessCreate_Directus_Policies_Input = {
  admin_access: Scalars['Boolean']['input'];
  app_access: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa: Scalars['Boolean']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<Array<InputMaybe<BusinessCreate_Directus_Permissions_Input>>>;
  roles?: InputMaybe<Array<InputMaybe<BusinessCreate_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<BusinessCreate_Directus_Access_Input>>>;
};

export type BusinessCreate_Directus_Roles_Input = {
  children?: InputMaybe<Array<InputMaybe<BusinessCreate_Directus_Roles_Input>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<BusinessCreate_Directus_Roles_Input>;
  policies?: InputMaybe<Array<InputMaybe<BusinessCreate_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<BusinessCreate_Directus_Users_Input>>>;
};

export type BusinessCreate_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['JSON']['input']>;
  avatar?: InputMaybe<BusinessCreate_Directus_Files_Input>;
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
  policies?: InputMaybe<Array<InputMaybe<BusinessCreate_Directus_Access_Input>>>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<BusinessCreate_Directus_Roles_Input>;
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

export type BusinessCreate_Orders_Input = {
  boutique?: InputMaybe<BusinessCreate_Boutiques_Input>;
  customer?: InputMaybe<BusinessCreate_Customers_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<BusinessCreate_Products_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  total_price?: InputMaybe<Scalars['Float']['input']>;
  user_created?: InputMaybe<BusinessCreate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessCreate_Directus_Users_Input>;
};

export type BusinessCreate_Products_Input = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  boutique?: InputMaybe<BusinessCreate_Boutiques_Input>;
  boutique_id?: InputMaybe<BusinessCreate_Boutiques_Input>;
  brand?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<BusinessCreate_Categories_Input>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  is_on_sale?: InputMaybe<Scalars['Boolean']['input']>;
  main_image?: InputMaybe<Scalars['String']['input']>;
  market_price?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  rating_avg?: InputMaybe<Scalars['Float']['input']>;
  seller_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  total_reviews?: InputMaybe<Scalars['Int']['input']>;
  total_sales_volume?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  user_created?: InputMaybe<BusinessCreate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessCreate_Directus_Users_Input>;
  video_url?: InputMaybe<Scalars['String']['input']>;
};

export type BusinessCreate_Terminals_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  user_created?: InputMaybe<BusinessCreate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessCreate_Directus_Users_Input>;
};

export type BusinessCreate_Views_Input = {
  boutique?: InputMaybe<BusinessCreate_Boutiques_Input>;
  customer?: InputMaybe<BusinessCreate_Customers_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<BusinessCreate_Products_Input>;
  user_created?: InputMaybe<BusinessCreate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessCreate_Directus_Users_Input>;
};

export type BusinessCreate_Visits_Input = {
  boutique?: InputMaybe<BusinessCreate_Boutiques_Input>;
  customer?: InputMaybe<BusinessCreate_Customers_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  user_created?: InputMaybe<BusinessCreate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessCreate_Directus_Users_Input>;
};

export type BusinessCustomers = {
  __typename?: 'customers';
  avatar?: Maybe<Scalars['String']['output']>;
  boutique?: Maybe<BusinessBoutiques>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<BusinessDatetime_Functions>;
  id: Scalars['ID']['output'];
  nick_name?: Maybe<Scalars['String']['output']>;
  open_id: Scalars['String']['output'];
  sex?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<BusinessDirectus_Users>;
  user_updated?: Maybe<BusinessDirectus_Users>;
};


export type BusinessCustomersBoutiqueArgs = {
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessCustomersUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessCustomersUser_UpdatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessCustomers_Aggregated = {
  __typename?: 'customers_aggregated';
  avg?: Maybe<BusinessCustomers_Aggregated_Fields>;
  avgDistinct?: Maybe<BusinessCustomers_Aggregated_Fields>;
  count?: Maybe<BusinessCustomers_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<BusinessCustomers_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<BusinessCustomers_Aggregated_Fields>;
  min?: Maybe<BusinessCustomers_Aggregated_Fields>;
  sum?: Maybe<BusinessCustomers_Aggregated_Fields>;
  sumDistinct?: Maybe<BusinessCustomers_Aggregated_Fields>;
};

export type BusinessCustomers_Aggregated_Count = {
  __typename?: 'customers_aggregated_count';
  avatar?: Maybe<Scalars['Int']['output']>;
  boutique?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  nick_name?: Maybe<Scalars['Int']['output']>;
  open_id?: Maybe<Scalars['Int']['output']>;
  sex?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type BusinessCustomers_Aggregated_Fields = {
  __typename?: 'customers_aggregated_fields';
  boutique?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sex?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type BusinessCustomers_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessCustomers_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessCustomers_Filter>>>;
  avatar?: InputMaybe<BusinessString_Filter_Operators>;
  boutique?: InputMaybe<BusinessBoutiques_Filter>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<BusinessDate_Filter_Operators>;
  date_updated_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  nick_name?: InputMaybe<BusinessString_Filter_Operators>;
  open_id?: InputMaybe<BusinessString_Filter_Operators>;
  sex?: InputMaybe<BusinessNumber_Filter_Operators>;
  sort?: InputMaybe<BusinessNumber_Filter_Operators>;
  status?: InputMaybe<BusinessString_Filter_Operators>;
  type?: InputMaybe<BusinessString_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
  user_updated?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessCustomers_Mutated = {
  __typename?: 'customers_mutated';
  data?: Maybe<BusinessCustomers>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDate_Filter_Operators = {
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

export type BusinessDatetime_Function_Filter_Operators = {
  day?: InputMaybe<BusinessNumber_Filter_Operators>;
  hour?: InputMaybe<BusinessNumber_Filter_Operators>;
  minute?: InputMaybe<BusinessNumber_Filter_Operators>;
  month?: InputMaybe<BusinessNumber_Filter_Operators>;
  second?: InputMaybe<BusinessNumber_Filter_Operators>;
  week?: InputMaybe<BusinessNumber_Filter_Operators>;
  weekday?: InputMaybe<BusinessNumber_Filter_Operators>;
  year?: InputMaybe<BusinessNumber_Filter_Operators>;
};

export type BusinessDatetime_Functions = {
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

export type BusinessDelete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']['output']>>;
};

export type BusinessDelete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID']['output'];
};

export type BusinessDirectus_Access = {
  __typename?: 'directus_access';
  id: Scalars['ID']['output'];
  policy?: Maybe<BusinessDirectus_Policies>;
  role?: Maybe<BusinessDirectus_Roles>;
  sort?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<BusinessDirectus_Users>;
};


export type BusinessDirectus_AccessPolicyArgs = {
  filter?: InputMaybe<BusinessDirectus_Policies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_AccessRoleArgs = {
  filter?: InputMaybe<BusinessDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_AccessUserArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Access_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Access_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Access_Filter>>>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  policy?: InputMaybe<BusinessDirectus_Policies_Filter>;
  role?: InputMaybe<BusinessDirectus_Roles_Filter>;
  sort?: InputMaybe<BusinessNumber_Filter_Operators>;
  user?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessDirectus_Access_Mutated = {
  __typename?: 'directus_access_mutated';
  data?: Maybe<BusinessDirectus_Access>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Access_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Access_Filter>>>;
  _none?: InputMaybe<BusinessDirectus_Access_Filter>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Access_Filter>>>;
  _some?: InputMaybe<BusinessDirectus_Access_Filter>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  policy?: InputMaybe<BusinessDirectus_Policies_Filter>;
  role?: InputMaybe<BusinessDirectus_Roles_Filter>;
  sort?: InputMaybe<BusinessNumber_Filter_Operators>;
  user?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessDirectus_Activity = {
  __typename?: 'directus_activity';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  item: Scalars['String']['output'];
  origin?: Maybe<Scalars['String']['output']>;
  revisions?: Maybe<Array<Maybe<BusinessDirectus_Revisions>>>;
  revisions_func?: Maybe<BusinessCount_Functions>;
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<BusinessDatetime_Functions>;
  user?: Maybe<BusinessDirectus_Users>;
  user_agent?: Maybe<Scalars['String']['output']>;
};


export type BusinessDirectus_ActivityRevisionsArgs = {
  filter?: InputMaybe<BusinessDirectus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_ActivityUserArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Activity_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Activity_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Activity_Filter>>>;
  action?: InputMaybe<BusinessString_Filter_Operators>;
  collection?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  ip?: InputMaybe<BusinessString_Filter_Operators>;
  item?: InputMaybe<BusinessString_Filter_Operators>;
  origin?: InputMaybe<BusinessString_Filter_Operators>;
  revisions?: InputMaybe<BusinessDirectus_Revisions_Quantifier_Filter>;
  revisions_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  timestamp?: InputMaybe<BusinessDate_Filter_Operators>;
  timestamp_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  user?: InputMaybe<BusinessDirectus_Users_Filter>;
  user_agent?: InputMaybe<BusinessString_Filter_Operators>;
};

export type BusinessDirectus_Activity_Mutated = {
  __typename?: 'directus_activity_mutated';
  data?: Maybe<BusinessDirectus_Activity>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Comments = {
  __typename?: 'directus_comments';
  collection: Scalars['String']['output'];
  comment: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<BusinessDatetime_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  user_created?: Maybe<BusinessDirectus_Users>;
  user_updated?: Maybe<BusinessDirectus_Users>;
};


export type BusinessDirectus_CommentsUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_CommentsUser_UpdatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Comments_Mutated = {
  __typename?: 'directus_comments_mutated';
  data?: Maybe<BusinessDirectus_Comments>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Dashboards = {
  __typename?: 'directus_dashboards';
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  panels?: Maybe<Array<Maybe<BusinessDirectus_Panels>>>;
  panels_func?: Maybe<BusinessCount_Functions>;
  user_created?: Maybe<BusinessDirectus_Users>;
};


export type BusinessDirectus_DashboardsPanelsArgs = {
  filter?: InputMaybe<BusinessDirectus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_DashboardsUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Dashboards_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Dashboards_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Dashboards_Filter>>>;
  color?: InputMaybe<BusinessString_Filter_Operators>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  icon?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  note?: InputMaybe<BusinessString_Filter_Operators>;
  panels?: InputMaybe<BusinessDirectus_Panels_Quantifier_Filter>;
  panels_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessDirectus_Dashboards_Mutated = {
  __typename?: 'directus_dashboards_mutated';
  data?: Maybe<BusinessDirectus_Dashboards>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']['output']>;
  created_on?: Maybe<Scalars['Date']['output']>;
  created_on_func?: Maybe<BusinessDatetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
  focal_point_x?: Maybe<Scalars['Int']['output']>;
  focal_point_y?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<BusinessDirectus_Folders>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<BusinessCount_Functions>;
  modified_by?: Maybe<BusinessDirectus_Users>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<BusinessDatetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<BusinessCount_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  tus_data?: Maybe<Scalars['JSON']['output']>;
  tus_data_func?: Maybe<BusinessCount_Functions>;
  tus_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<BusinessDirectus_Users>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<BusinessDatetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type BusinessDirectus_FilesFolderArgs = {
  filter?: InputMaybe<BusinessDirectus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_FilesModified_ByArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Files_Filter>>>;
  charset?: InputMaybe<BusinessString_Filter_Operators>;
  created_on?: InputMaybe<BusinessDate_Filter_Operators>;
  created_on_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  description?: InputMaybe<BusinessString_Filter_Operators>;
  duration?: InputMaybe<BusinessNumber_Filter_Operators>;
  embed?: InputMaybe<BusinessString_Filter_Operators>;
  filename_disk?: InputMaybe<BusinessString_Filter_Operators>;
  filename_download?: InputMaybe<BusinessString_Filter_Operators>;
  filesize?: InputMaybe<BusinessBig_Int_Filter_Operators>;
  focal_point_x?: InputMaybe<BusinessNumber_Filter_Operators>;
  focal_point_y?: InputMaybe<BusinessNumber_Filter_Operators>;
  folder?: InputMaybe<BusinessDirectus_Folders_Filter>;
  height?: InputMaybe<BusinessNumber_Filter_Operators>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  location?: InputMaybe<BusinessString_Filter_Operators>;
  metadata?: InputMaybe<BusinessString_Filter_Operators>;
  metadata_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  modified_by?: InputMaybe<BusinessDirectus_Users_Filter>;
  modified_on?: InputMaybe<BusinessDate_Filter_Operators>;
  modified_on_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  storage?: InputMaybe<BusinessString_Filter_Operators>;
  tags?: InputMaybe<BusinessString_Filter_Operators>;
  tags_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  title?: InputMaybe<BusinessString_Filter_Operators>;
  tus_data?: InputMaybe<BusinessString_Filter_Operators>;
  tus_data_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  tus_id?: InputMaybe<BusinessString_Filter_Operators>;
  type?: InputMaybe<BusinessString_Filter_Operators>;
  uploaded_by?: InputMaybe<BusinessDirectus_Users_Filter>;
  uploaded_on?: InputMaybe<BusinessDate_Filter_Operators>;
  uploaded_on_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  width?: InputMaybe<BusinessNumber_Filter_Operators>;
};

export type BusinessDirectus_Files_Mutated = {
  __typename?: 'directus_files_mutated';
  data?: Maybe<BusinessDirectus_Files>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Flows = {
  __typename?: 'directus_flows';
  accountability?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  operation?: Maybe<BusinessDirectus_Operations>;
  operations?: Maybe<Array<Maybe<BusinessDirectus_Operations>>>;
  operations_func?: Maybe<BusinessCount_Functions>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<BusinessCount_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  trigger?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<BusinessDirectus_Users>;
};


export type BusinessDirectus_FlowsOperationArgs = {
  filter?: InputMaybe<BusinessDirectus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_FlowsOperationsArgs = {
  filter?: InputMaybe<BusinessDirectus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_FlowsUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Flows_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Flows_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Flows_Filter>>>;
  accountability?: InputMaybe<BusinessString_Filter_Operators>;
  color?: InputMaybe<BusinessString_Filter_Operators>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  description?: InputMaybe<BusinessString_Filter_Operators>;
  icon?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  operation?: InputMaybe<BusinessDirectus_Operations_Filter>;
  operations?: InputMaybe<BusinessDirectus_Operations_Quantifier_Filter>;
  operations_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  options?: InputMaybe<BusinessString_Filter_Operators>;
  options_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  status?: InputMaybe<BusinessString_Filter_Operators>;
  trigger?: InputMaybe<BusinessString_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessDirectus_Flows_Mutated = {
  __typename?: 'directus_flows_mutated';
  data?: Maybe<BusinessDirectus_Flows>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Folders = {
  __typename?: 'directus_folders';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<BusinessDirectus_Folders>;
};


export type BusinessDirectus_FoldersParentArgs = {
  filter?: InputMaybe<BusinessDirectus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Folders_Filter>>>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  parent?: InputMaybe<BusinessDirectus_Folders_Filter>;
};

export type BusinessDirectus_Folders_Mutated = {
  __typename?: 'directus_folders_mutated';
  data?: Maybe<BusinessDirectus_Folders>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Notifications = {
  __typename?: 'directus_notifications';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  recipient?: Maybe<BusinessDirectus_Users>;
  sender?: Maybe<BusinessDirectus_Users>;
  status?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<BusinessDatetime_Functions>;
};


export type BusinessDirectus_NotificationsRecipientArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_NotificationsSenderArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Notifications_Mutated = {
  __typename?: 'directus_notifications_mutated';
  data?: Maybe<BusinessDirectus_Notifications>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Operations = {
  __typename?: 'directus_operations';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  flow?: Maybe<BusinessDirectus_Flows>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<BusinessCount_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  reject?: Maybe<BusinessDirectus_Operations>;
  resolve?: Maybe<BusinessDirectus_Operations>;
  type: Scalars['String']['output'];
  user_created?: Maybe<BusinessDirectus_Users>;
};


export type BusinessDirectus_OperationsFlowArgs = {
  filter?: InputMaybe<BusinessDirectus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_OperationsRejectArgs = {
  filter?: InputMaybe<BusinessDirectus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_OperationsResolveArgs = {
  filter?: InputMaybe<BusinessDirectus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_OperationsUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Operations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Operations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Operations_Filter>>>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  flow?: InputMaybe<BusinessDirectus_Flows_Filter>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  key?: InputMaybe<BusinessString_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  options?: InputMaybe<BusinessString_Filter_Operators>;
  options_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  position_x?: InputMaybe<BusinessNumber_Filter_Operators>;
  position_y?: InputMaybe<BusinessNumber_Filter_Operators>;
  reject?: InputMaybe<BusinessDirectus_Operations_Filter>;
  resolve?: InputMaybe<BusinessDirectus_Operations_Filter>;
  type?: InputMaybe<BusinessString_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessDirectus_Operations_Mutated = {
  __typename?: 'directus_operations_mutated';
  data?: Maybe<BusinessDirectus_Operations>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Operations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Operations_Filter>>>;
  _none?: InputMaybe<BusinessDirectus_Operations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Operations_Filter>>>;
  _some?: InputMaybe<BusinessDirectus_Operations_Filter>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  flow?: InputMaybe<BusinessDirectus_Flows_Filter>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  key?: InputMaybe<BusinessString_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  options?: InputMaybe<BusinessString_Filter_Operators>;
  options_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  position_x?: InputMaybe<BusinessNumber_Filter_Operators>;
  position_y?: InputMaybe<BusinessNumber_Filter_Operators>;
  reject?: InputMaybe<BusinessDirectus_Operations_Filter>;
  resolve?: InputMaybe<BusinessDirectus_Operations_Filter>;
  type?: InputMaybe<BusinessString_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessDirectus_Panels = {
  __typename?: 'directus_panels';
  color?: Maybe<Scalars['String']['output']>;
  dashboard?: Maybe<BusinessDirectus_Dashboards>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  height: Scalars['Int']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<BusinessCount_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  show_header: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  user_created?: Maybe<BusinessDirectus_Users>;
  width: Scalars['Int']['output'];
};


export type BusinessDirectus_PanelsDashboardArgs = {
  filter?: InputMaybe<BusinessDirectus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_PanelsUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Panels_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Panels_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Panels_Filter>>>;
  color?: InputMaybe<BusinessString_Filter_Operators>;
  dashboard?: InputMaybe<BusinessDirectus_Dashboards_Filter>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  height?: InputMaybe<BusinessNumber_Filter_Operators>;
  icon?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  note?: InputMaybe<BusinessString_Filter_Operators>;
  options?: InputMaybe<BusinessString_Filter_Operators>;
  options_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  position_x?: InputMaybe<BusinessNumber_Filter_Operators>;
  position_y?: InputMaybe<BusinessNumber_Filter_Operators>;
  show_header?: InputMaybe<BusinessBoolean_Filter_Operators>;
  type?: InputMaybe<BusinessString_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
  width?: InputMaybe<BusinessNumber_Filter_Operators>;
};

export type BusinessDirectus_Panels_Mutated = {
  __typename?: 'directus_panels_mutated';
  data?: Maybe<BusinessDirectus_Panels>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Panels_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Panels_Filter>>>;
  _none?: InputMaybe<BusinessDirectus_Panels_Filter>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Panels_Filter>>>;
  _some?: InputMaybe<BusinessDirectus_Panels_Filter>;
  color?: InputMaybe<BusinessString_Filter_Operators>;
  dashboard?: InputMaybe<BusinessDirectus_Dashboards_Filter>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  height?: InputMaybe<BusinessNumber_Filter_Operators>;
  icon?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  note?: InputMaybe<BusinessString_Filter_Operators>;
  options?: InputMaybe<BusinessString_Filter_Operators>;
  options_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  position_x?: InputMaybe<BusinessNumber_Filter_Operators>;
  position_y?: InputMaybe<BusinessNumber_Filter_Operators>;
  show_header?: InputMaybe<BusinessBoolean_Filter_Operators>;
  type?: InputMaybe<BusinessString_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
  width?: InputMaybe<BusinessNumber_Filter_Operators>;
};

export type BusinessDirectus_Permissions = {
  __typename?: 'directus_permissions';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  permissions?: Maybe<Scalars['JSON']['output']>;
  permissions_func?: Maybe<BusinessCount_Functions>;
  policy?: Maybe<BusinessDirectus_Policies>;
  presets?: Maybe<Scalars['JSON']['output']>;
  presets_func?: Maybe<BusinessCount_Functions>;
  validation?: Maybe<Scalars['JSON']['output']>;
  validation_func?: Maybe<BusinessCount_Functions>;
};


export type BusinessDirectus_PermissionsPolicyArgs = {
  filter?: InputMaybe<BusinessDirectus_Policies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Permissions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Permissions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Permissions_Filter>>>;
  action?: InputMaybe<BusinessString_Filter_Operators>;
  collection?: InputMaybe<BusinessString_Filter_Operators>;
  fields?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  permissions?: InputMaybe<BusinessString_Filter_Operators>;
  permissions_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  policy?: InputMaybe<BusinessDirectus_Policies_Filter>;
  presets?: InputMaybe<BusinessString_Filter_Operators>;
  presets_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  validation?: InputMaybe<BusinessString_Filter_Operators>;
  validation_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
};

export type BusinessDirectus_Permissions_Mutated = {
  __typename?: 'directus_permissions_mutated';
  data?: Maybe<BusinessDirectus_Permissions>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Permissions_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Permissions_Filter>>>;
  _none?: InputMaybe<BusinessDirectus_Permissions_Filter>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Permissions_Filter>>>;
  _some?: InputMaybe<BusinessDirectus_Permissions_Filter>;
  action?: InputMaybe<BusinessString_Filter_Operators>;
  collection?: InputMaybe<BusinessString_Filter_Operators>;
  fields?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  permissions?: InputMaybe<BusinessString_Filter_Operators>;
  permissions_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  policy?: InputMaybe<BusinessDirectus_Policies_Filter>;
  presets?: InputMaybe<BusinessString_Filter_Operators>;
  presets_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  validation?: InputMaybe<BusinessString_Filter_Operators>;
  validation_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
};

export type BusinessDirectus_Policies = {
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
  permissions?: Maybe<Array<Maybe<BusinessDirectus_Permissions>>>;
  permissions_func?: Maybe<BusinessCount_Functions>;
  roles?: Maybe<Array<Maybe<BusinessDirectus_Access>>>;
  roles_func?: Maybe<BusinessCount_Functions>;
  users?: Maybe<Array<Maybe<BusinessDirectus_Access>>>;
  users_func?: Maybe<BusinessCount_Functions>;
};


export type BusinessDirectus_PoliciesPermissionsArgs = {
  filter?: InputMaybe<BusinessDirectus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_PoliciesRolesArgs = {
  filter?: InputMaybe<BusinessDirectus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_PoliciesUsersArgs = {
  filter?: InputMaybe<BusinessDirectus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Policies_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Policies_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Policies_Filter>>>;
  admin_access?: InputMaybe<BusinessBoolean_Filter_Operators>;
  app_access?: InputMaybe<BusinessBoolean_Filter_Operators>;
  description?: InputMaybe<BusinessString_Filter_Operators>;
  enforce_tfa?: InputMaybe<BusinessBoolean_Filter_Operators>;
  icon?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  ip_access?: InputMaybe<BusinessString_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  permissions?: InputMaybe<BusinessDirectus_Permissions_Quantifier_Filter>;
  permissions_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  roles?: InputMaybe<BusinessDirectus_Access_Quantifier_Filter>;
  roles_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  users?: InputMaybe<BusinessDirectus_Access_Quantifier_Filter>;
  users_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
};

export type BusinessDirectus_Policies_Mutated = {
  __typename?: 'directus_policies_mutated';
  data?: Maybe<BusinessDirectus_Policies>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Presets = {
  __typename?: 'directus_presets';
  bookmark?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<Scalars['JSON']['output']>;
  filter_func?: Maybe<BusinessCount_Functions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  layout?: Maybe<Scalars['String']['output']>;
  layout_options?: Maybe<Scalars['JSON']['output']>;
  layout_options_func?: Maybe<BusinessCount_Functions>;
  layout_query?: Maybe<Scalars['JSON']['output']>;
  layout_query_func?: Maybe<BusinessCount_Functions>;
  refresh_interval?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<BusinessDirectus_Roles>;
  search?: Maybe<Scalars['String']['output']>;
  user?: Maybe<BusinessDirectus_Users>;
};


export type BusinessDirectus_PresetsRoleArgs = {
  filter?: InputMaybe<BusinessDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_PresetsUserArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Presets_Mutated = {
  __typename?: 'directus_presets_mutated';
  data?: Maybe<BusinessDirectus_Presets>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Revisions = {
  __typename?: 'directus_revisions';
  activity?: Maybe<BusinessDirectus_Activity>;
  collection: Scalars['String']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  data_func?: Maybe<BusinessCount_Functions>;
  delta?: Maybe<Scalars['JSON']['output']>;
  delta_func?: Maybe<BusinessCount_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  parent?: Maybe<BusinessDirectus_Revisions>;
  version?: Maybe<BusinessDirectus_Versions>;
};


export type BusinessDirectus_RevisionsActivityArgs = {
  filter?: InputMaybe<BusinessDirectus_Activity_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_RevisionsParentArgs = {
  filter?: InputMaybe<BusinessDirectus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_RevisionsVersionArgs = {
  filter?: InputMaybe<BusinessDirectus_Versions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Revisions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Revisions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Revisions_Filter>>>;
  activity?: InputMaybe<BusinessDirectus_Activity_Filter>;
  collection?: InputMaybe<BusinessString_Filter_Operators>;
  data?: InputMaybe<BusinessString_Filter_Operators>;
  data_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  delta?: InputMaybe<BusinessString_Filter_Operators>;
  delta_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  item?: InputMaybe<BusinessString_Filter_Operators>;
  parent?: InputMaybe<BusinessDirectus_Revisions_Filter>;
  version?: InputMaybe<BusinessDirectus_Versions_Filter>;
};

export type BusinessDirectus_Revisions_Mutated = {
  __typename?: 'directus_revisions_mutated';
  data?: Maybe<BusinessDirectus_Revisions>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Revisions_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Revisions_Filter>>>;
  _none?: InputMaybe<BusinessDirectus_Revisions_Filter>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Revisions_Filter>>>;
  _some?: InputMaybe<BusinessDirectus_Revisions_Filter>;
  activity?: InputMaybe<BusinessDirectus_Activity_Filter>;
  collection?: InputMaybe<BusinessString_Filter_Operators>;
  data?: InputMaybe<BusinessString_Filter_Operators>;
  data_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  delta?: InputMaybe<BusinessString_Filter_Operators>;
  delta_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  item?: InputMaybe<BusinessString_Filter_Operators>;
  parent?: InputMaybe<BusinessDirectus_Revisions_Filter>;
  version?: InputMaybe<BusinessDirectus_Versions_Filter>;
};

export type BusinessDirectus_Roles = {
  __typename?: 'directus_roles';
  children?: Maybe<Array<Maybe<BusinessDirectus_Roles>>>;
  children_func?: Maybe<BusinessCount_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<BusinessDirectus_Roles>;
  policies?: Maybe<Array<Maybe<BusinessDirectus_Access>>>;
  policies_func?: Maybe<BusinessCount_Functions>;
  users?: Maybe<Array<Maybe<BusinessDirectus_Users>>>;
  users_func?: Maybe<BusinessCount_Functions>;
};


export type BusinessDirectus_RolesChildrenArgs = {
  filter?: InputMaybe<BusinessDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_RolesParentArgs = {
  filter?: InputMaybe<BusinessDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_RolesPoliciesArgs = {
  filter?: InputMaybe<BusinessDirectus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_RolesUsersArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Roles_Filter>>>;
  children?: InputMaybe<BusinessDirectus_Roles_Quantifier_Filter>;
  children_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  description?: InputMaybe<BusinessString_Filter_Operators>;
  icon?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  parent?: InputMaybe<BusinessDirectus_Roles_Filter>;
  policies?: InputMaybe<BusinessDirectus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  users?: InputMaybe<BusinessDirectus_Users_Quantifier_Filter>;
  users_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
};

export type BusinessDirectus_Roles_Mutated = {
  __typename?: 'directus_roles_mutated';
  data?: Maybe<BusinessDirectus_Roles>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Roles_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Roles_Filter>>>;
  _none?: InputMaybe<BusinessDirectus_Roles_Filter>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Roles_Filter>>>;
  _some?: InputMaybe<BusinessDirectus_Roles_Filter>;
  children?: InputMaybe<BusinessDirectus_Roles_Quantifier_Filter>;
  children_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  description?: InputMaybe<BusinessString_Filter_Operators>;
  icon?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  parent?: InputMaybe<BusinessDirectus_Roles_Filter>;
  policies?: InputMaybe<BusinessDirectus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  users?: InputMaybe<BusinessDirectus_Users_Quantifier_Filter>;
  users_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
};

export type BusinessDirectus_Settings = {
  __typename?: 'directus_settings';
  accepted_terms?: Maybe<Scalars['Boolean']['output']>;
  auth_login_attempts?: Maybe<Scalars['Int']['output']>;
  auth_password_policy?: Maybe<Scalars['String']['output']>;
  basemaps?: Maybe<Scalars['JSON']['output']>;
  basemaps_func?: Maybe<BusinessCount_Functions>;
  custom_aspect_ratios?: Maybe<Scalars['JSON']['output']>;
  custom_aspect_ratios_func?: Maybe<BusinessCount_Functions>;
  custom_css?: Maybe<Scalars['String']['output']>;
  default_appearance?: Maybe<Scalars['String']['output']>;
  default_language?: Maybe<Scalars['String']['output']>;
  default_theme_dark?: Maybe<Scalars['String']['output']>;
  default_theme_light?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mapbox_key?: Maybe<Scalars['String']['output']>;
  module_bar?: Maybe<Scalars['JSON']['output']>;
  module_bar_func?: Maybe<BusinessCount_Functions>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color?: Maybe<Scalars['String']['output']>;
  project_descriptor?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  project_logo?: Maybe<BusinessDirectus_Files>;
  project_name?: Maybe<Scalars['String']['output']>;
  project_url?: Maybe<Scalars['String']['output']>;
  public_background?: Maybe<BusinessDirectus_Files>;
  public_favicon?: Maybe<BusinessDirectus_Files>;
  public_foreground?: Maybe<BusinessDirectus_Files>;
  public_note?: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.public_registration_note */
  public_registration: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.public_registration_email_filter_note */
  public_registration_email_filter?: Maybe<Scalars['JSON']['output']>;
  public_registration_email_filter_func?: Maybe<BusinessCount_Functions>;
  public_registration_role?: Maybe<BusinessDirectus_Roles>;
  /** $t:fields.directus_settings.public_registration_verify_email_note */
  public_registration_verify_email?: Maybe<Scalars['Boolean']['output']>;
  report_bug_url?: Maybe<Scalars['String']['output']>;
  report_error_url?: Maybe<Scalars['String']['output']>;
  report_feature_url?: Maybe<Scalars['String']['output']>;
  storage_asset_presets?: Maybe<Scalars['JSON']['output']>;
  storage_asset_presets_func?: Maybe<BusinessCount_Functions>;
  storage_asset_transform?: Maybe<Scalars['String']['output']>;
  storage_default_folder?: Maybe<BusinessDirectus_Folders>;
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func?: Maybe<BusinessCount_Functions>;
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func?: Maybe<BusinessCount_Functions>;
  visual_editor_urls?: Maybe<Scalars['JSON']['output']>;
  visual_editor_urls_func?: Maybe<BusinessCount_Functions>;
};


export type BusinessDirectus_SettingsProject_LogoArgs = {
  filter?: InputMaybe<BusinessDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_SettingsPublic_BackgroundArgs = {
  filter?: InputMaybe<BusinessDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_SettingsPublic_FaviconArgs = {
  filter?: InputMaybe<BusinessDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_SettingsPublic_ForegroundArgs = {
  filter?: InputMaybe<BusinessDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_SettingsPublic_Registration_RoleArgs = {
  filter?: InputMaybe<BusinessDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_SettingsStorage_Default_FolderArgs = {
  filter?: InputMaybe<BusinessDirectus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Settings_Mutated = {
  __typename?: 'directus_settings_mutated';
  data?: Maybe<BusinessDirectus_Settings>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Shares = {
  __typename?: 'directus_shares';
  collection: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Date']['output']>;
  date_end_func?: Maybe<BusinessDatetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Date']['output']>;
  date_start_func?: Maybe<BusinessDatetime_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_passwordless_access */
  password?: Maybe<Scalars['Hash']['output']>;
  role?: Maybe<BusinessDirectus_Roles>;
  times_used?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<BusinessDirectus_Users>;
};


export type BusinessDirectus_SharesRoleArgs = {
  filter?: InputMaybe<BusinessDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_SharesUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Shares_Mutated = {
  __typename?: 'directus_shares_mutated';
  data?: Maybe<BusinessDirectus_Shares>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Translations = {
  __typename?: 'directus_translations';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  language: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type BusinessDirectus_Translations_Mutated = {
  __typename?: 'directus_translations_mutated';
  data?: Maybe<BusinessDirectus_Translations>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Users = {
  __typename?: 'directus_users';
  appearance?: Maybe<Scalars['String']['output']>;
  auth_data?: Maybe<Scalars['JSON']['output']>;
  auth_data_func?: Maybe<BusinessCount_Functions>;
  avatar?: Maybe<BusinessDirectus_Files>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_notifications?: Maybe<Scalars['Boolean']['output']>;
  external_identifier?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  last_access?: Maybe<Scalars['Date']['output']>;
  last_access_func?: Maybe<BusinessDatetime_Functions>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_page?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['Hash']['output']>;
  policies?: Maybe<Array<Maybe<BusinessDirectus_Access>>>;
  policies_func?: Maybe<BusinessCount_Functions>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<BusinessDirectus_Roles>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<BusinessCount_Functions>;
  text_direction?: Maybe<Scalars['String']['output']>;
  tfa_secret?: Maybe<Scalars['Hash']['output']>;
  theme_dark?: Maybe<Scalars['String']['output']>;
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func?: Maybe<BusinessCount_Functions>;
  theme_light?: Maybe<Scalars['String']['output']>;
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func?: Maybe<BusinessCount_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['Hash']['output']>;
};


export type BusinessDirectus_UsersAvatarArgs = {
  filter?: InputMaybe<BusinessDirectus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_UsersPoliciesArgs = {
  filter?: InputMaybe<BusinessDirectus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_UsersRoleArgs = {
  filter?: InputMaybe<BusinessDirectus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Users_Filter>>>;
  appearance?: InputMaybe<BusinessString_Filter_Operators>;
  auth_data?: InputMaybe<BusinessString_Filter_Operators>;
  auth_data_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  avatar?: InputMaybe<BusinessDirectus_Files_Filter>;
  description?: InputMaybe<BusinessString_Filter_Operators>;
  email?: InputMaybe<BusinessString_Filter_Operators>;
  email_notifications?: InputMaybe<BusinessBoolean_Filter_Operators>;
  external_identifier?: InputMaybe<BusinessString_Filter_Operators>;
  first_name?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  language?: InputMaybe<BusinessString_Filter_Operators>;
  last_access?: InputMaybe<BusinessDate_Filter_Operators>;
  last_access_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  last_name?: InputMaybe<BusinessString_Filter_Operators>;
  last_page?: InputMaybe<BusinessString_Filter_Operators>;
  location?: InputMaybe<BusinessString_Filter_Operators>;
  password?: InputMaybe<BusinessHash_Filter_Operators>;
  policies?: InputMaybe<BusinessDirectus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  provider?: InputMaybe<BusinessString_Filter_Operators>;
  role?: InputMaybe<BusinessDirectus_Roles_Filter>;
  status?: InputMaybe<BusinessString_Filter_Operators>;
  tags?: InputMaybe<BusinessString_Filter_Operators>;
  tags_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  text_direction?: InputMaybe<BusinessString_Filter_Operators>;
  tfa_secret?: InputMaybe<BusinessHash_Filter_Operators>;
  theme_dark?: InputMaybe<BusinessString_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<BusinessString_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  theme_light?: InputMaybe<BusinessString_Filter_Operators>;
  theme_light_overrides?: InputMaybe<BusinessString_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  title?: InputMaybe<BusinessString_Filter_Operators>;
  token?: InputMaybe<BusinessHash_Filter_Operators>;
};

export type BusinessDirectus_Users_Mutated = {
  __typename?: 'directus_users_mutated';
  data?: Maybe<BusinessDirectus_Users>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Users_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Users_Filter>>>;
  _none?: InputMaybe<BusinessDirectus_Users_Filter>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Users_Filter>>>;
  _some?: InputMaybe<BusinessDirectus_Users_Filter>;
  appearance?: InputMaybe<BusinessString_Filter_Operators>;
  auth_data?: InputMaybe<BusinessString_Filter_Operators>;
  auth_data_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  avatar?: InputMaybe<BusinessDirectus_Files_Filter>;
  description?: InputMaybe<BusinessString_Filter_Operators>;
  email?: InputMaybe<BusinessString_Filter_Operators>;
  email_notifications?: InputMaybe<BusinessBoolean_Filter_Operators>;
  external_identifier?: InputMaybe<BusinessString_Filter_Operators>;
  first_name?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  language?: InputMaybe<BusinessString_Filter_Operators>;
  last_access?: InputMaybe<BusinessDate_Filter_Operators>;
  last_access_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  last_name?: InputMaybe<BusinessString_Filter_Operators>;
  last_page?: InputMaybe<BusinessString_Filter_Operators>;
  location?: InputMaybe<BusinessString_Filter_Operators>;
  password?: InputMaybe<BusinessHash_Filter_Operators>;
  policies?: InputMaybe<BusinessDirectus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  provider?: InputMaybe<BusinessString_Filter_Operators>;
  role?: InputMaybe<BusinessDirectus_Roles_Filter>;
  status?: InputMaybe<BusinessString_Filter_Operators>;
  tags?: InputMaybe<BusinessString_Filter_Operators>;
  tags_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  text_direction?: InputMaybe<BusinessString_Filter_Operators>;
  tfa_secret?: InputMaybe<BusinessHash_Filter_Operators>;
  theme_dark?: InputMaybe<BusinessString_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<BusinessString_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  theme_light?: InputMaybe<BusinessString_Filter_Operators>;
  theme_light_overrides?: InputMaybe<BusinessString_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  title?: InputMaybe<BusinessString_Filter_Operators>;
  token?: InputMaybe<BusinessHash_Filter_Operators>;
};

export type BusinessDirectus_Versions = {
  __typename?: 'directus_versions';
  collection: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<BusinessDatetime_Functions>;
  delta?: Maybe<Scalars['JSON']['output']>;
  delta_func?: Maybe<BusinessCount_Functions>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<BusinessDirectus_Users>;
  user_updated?: Maybe<BusinessDirectus_Users>;
};


export type BusinessDirectus_VersionsUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessDirectus_VersionsUser_UpdatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Versions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessDirectus_Versions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessDirectus_Versions_Filter>>>;
  collection?: InputMaybe<BusinessString_Filter_Operators>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<BusinessDate_Filter_Operators>;
  date_updated_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  delta?: InputMaybe<BusinessString_Filter_Operators>;
  delta_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  hash?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessId_Filter_Operators>;
  item?: InputMaybe<BusinessString_Filter_Operators>;
  key?: InputMaybe<BusinessString_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
  user_updated?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessDirectus_Versions_Mutated = {
  __typename?: 'directus_versions_mutated';
  data?: Maybe<BusinessDirectus_Versions>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessDirectus_Webhooks = {
  __typename?: 'directus_webhooks';
  actions: Array<Maybe<Scalars['String']['output']>>;
  collections: Array<Maybe<Scalars['String']['output']>>;
  data?: Maybe<Scalars['Boolean']['output']>;
  headers?: Maybe<Scalars['JSON']['output']>;
  headers_func?: Maybe<BusinessCount_Functions>;
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  migrated_flow?: Maybe<BusinessDirectus_Flows>;
  name: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  was_active_before_deprecation: Scalars['Boolean']['output'];
};


export type BusinessDirectus_WebhooksMigrated_FlowArgs = {
  filter?: InputMaybe<BusinessDirectus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessDirectus_Webhooks_Mutated = {
  __typename?: 'directus_webhooks_mutated';
  data?: Maybe<BusinessDirectus_Webhooks>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessHash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BusinessId_Filter_Operators = {
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

export type BusinessNumber_Filter_Operators = {
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

export type BusinessOrders = {
  __typename?: 'orders';
  boutique?: Maybe<BusinessBoutiques>;
  customer?: Maybe<BusinessCustomers>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<BusinessDatetime_Functions>;
  id: Scalars['ID']['output'];
  product?: Maybe<BusinessProducts>;
  status?: Maybe<Scalars['String']['output']>;
  total_price?: Maybe<Scalars['Float']['output']>;
  user_created?: Maybe<BusinessDirectus_Users>;
  user_updated?: Maybe<BusinessDirectus_Users>;
};


export type BusinessOrdersBoutiqueArgs = {
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessOrdersCustomerArgs = {
  filter?: InputMaybe<BusinessCustomers_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessOrdersProductArgs = {
  filter?: InputMaybe<BusinessProducts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessOrdersUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessOrdersUser_UpdatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessOrders_Aggregated = {
  __typename?: 'orders_aggregated';
  avg?: Maybe<BusinessOrders_Aggregated_Fields>;
  avgDistinct?: Maybe<BusinessOrders_Aggregated_Fields>;
  count?: Maybe<BusinessOrders_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<BusinessOrders_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<BusinessOrders_Aggregated_Fields>;
  min?: Maybe<BusinessOrders_Aggregated_Fields>;
  sum?: Maybe<BusinessOrders_Aggregated_Fields>;
  sumDistinct?: Maybe<BusinessOrders_Aggregated_Fields>;
};

export type BusinessOrders_Aggregated_Count = {
  __typename?: 'orders_aggregated_count';
  boutique?: Maybe<Scalars['Int']['output']>;
  customer?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  total_price?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type BusinessOrders_Aggregated_Fields = {
  __typename?: 'orders_aggregated_fields';
  boutique?: Maybe<Scalars['Float']['output']>;
  customer?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Scalars['Float']['output']>;
  total_price?: Maybe<Scalars['Float']['output']>;
};

export type BusinessOrders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessOrders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessOrders_Filter>>>;
  boutique?: InputMaybe<BusinessBoutiques_Filter>;
  customer?: InputMaybe<BusinessCustomers_Filter>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<BusinessDate_Filter_Operators>;
  date_updated_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  product?: InputMaybe<BusinessProducts_Filter>;
  status?: InputMaybe<BusinessString_Filter_Operators>;
  total_price?: InputMaybe<BusinessNumber_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
  user_updated?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessOrders_Mutated = {
  __typename?: 'orders_mutated';
  data?: Maybe<BusinessOrders>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessProducts = {
  __typename?: 'products';
  barcode?: Maybe<Scalars['String']['output']>;
  boutique?: Maybe<BusinessBoutiques>;
  boutique_id?: Maybe<BusinessBoutiques>;
  brand?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<BusinessCategories>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<BusinessDatetime_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<BusinessDatetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Scalars['JSON']['output']>;
  images_func?: Maybe<BusinessCount_Functions>;
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
  updated_at_func?: Maybe<BusinessDatetime_Functions>;
  user_created?: Maybe<BusinessDirectus_Users>;
  user_updated?: Maybe<BusinessDirectus_Users>;
  video_url?: Maybe<Scalars['String']['output']>;
};


export type BusinessProductsBoutiqueArgs = {
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessProductsBoutique_IdArgs = {
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessProductsCategory_IdArgs = {
  filter?: InputMaybe<BusinessCategories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessProductsUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessProductsUser_UpdatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessProducts_Aggregated = {
  __typename?: 'products_aggregated';
  avg?: Maybe<BusinessProducts_Aggregated_Fields>;
  avgDistinct?: Maybe<BusinessProducts_Aggregated_Fields>;
  count?: Maybe<BusinessProducts_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<BusinessProducts_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<BusinessProducts_Aggregated_Fields>;
  min?: Maybe<BusinessProducts_Aggregated_Fields>;
  sum?: Maybe<BusinessProducts_Aggregated_Fields>;
  sumDistinct?: Maybe<BusinessProducts_Aggregated_Fields>;
};

export type BusinessProducts_Aggregated_Count = {
  __typename?: 'products_aggregated_count';
  barcode?: Maybe<Scalars['Int']['output']>;
  boutique_id?: Maybe<Scalars['Int']['output']>;
  brand?: Maybe<Scalars['Int']['output']>;
  category_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  images?: Maybe<Scalars['Int']['output']>;
  is_on_sale?: Maybe<Scalars['Int']['output']>;
  main_image?: Maybe<Scalars['Int']['output']>;
  market_price?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  rating_avg?: Maybe<Scalars['Int']['output']>;
  seller_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['Int']['output']>;
  total_reviews?: Maybe<Scalars['Int']['output']>;
  total_sales_volume?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  video_url?: Maybe<Scalars['Int']['output']>;
};

export type BusinessProducts_Aggregated_Fields = {
  __typename?: 'products_aggregated_fields';
  boutique_id?: Maybe<Scalars['Float']['output']>;
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  market_price?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating_avg?: Maybe<Scalars['Float']['output']>;
  seller_id?: Maybe<Scalars['Float']['output']>;
  stock?: Maybe<Scalars['Float']['output']>;
  total_reviews?: Maybe<Scalars['Float']['output']>;
  total_sales_volume?: Maybe<Scalars['Float']['output']>;
};

export type BusinessProducts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessProducts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessProducts_Filter>>>;
  barcode?: InputMaybe<BusinessString_Filter_Operators>;
  boutique?: InputMaybe<BusinessBoutiques_Filter>;
  boutique_id?: InputMaybe<BusinessBoutiques_Filter>;
  brand?: InputMaybe<BusinessString_Filter_Operators>;
  category_id?: InputMaybe<BusinessCategories_Filter>;
  created_at?: InputMaybe<BusinessDate_Filter_Operators>;
  created_at_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<BusinessDate_Filter_Operators>;
  date_updated_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  description?: InputMaybe<BusinessString_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  images?: InputMaybe<BusinessString_Filter_Operators>;
  images_func?: InputMaybe<BusinessCount_Function_Filter_Operators>;
  is_on_sale?: InputMaybe<BusinessBoolean_Filter_Operators>;
  main_image?: InputMaybe<BusinessString_Filter_Operators>;
  market_price?: InputMaybe<BusinessNumber_Filter_Operators>;
  name?: InputMaybe<BusinessString_Filter_Operators>;
  price?: InputMaybe<BusinessNumber_Filter_Operators>;
  rating_avg?: InputMaybe<BusinessNumber_Filter_Operators>;
  seller_id?: InputMaybe<BusinessNumber_Filter_Operators>;
  status?: InputMaybe<BusinessString_Filter_Operators>;
  stock?: InputMaybe<BusinessNumber_Filter_Operators>;
  subtitle?: InputMaybe<BusinessString_Filter_Operators>;
  total_reviews?: InputMaybe<BusinessNumber_Filter_Operators>;
  total_sales_volume?: InputMaybe<BusinessNumber_Filter_Operators>;
  updated_at?: InputMaybe<BusinessDate_Filter_Operators>;
  updated_at_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
  user_updated?: InputMaybe<BusinessDirectus_Users_Filter>;
  video_url?: InputMaybe<BusinessString_Filter_Operators>;
};

export type BusinessProducts_Mutated = {
  __typename?: 'products_mutated';
  data?: Maybe<BusinessProducts>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessString_Filter_Operators = {
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

export type BusinessTerminals = {
  __typename?: 'terminals';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<BusinessDatetime_Functions>;
  id: Scalars['ID']['output'];
  user_created?: Maybe<BusinessDirectus_Users>;
  user_updated?: Maybe<BusinessDirectus_Users>;
};


export type BusinessTerminalsUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessTerminalsUser_UpdatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessTerminals_Aggregated = {
  __typename?: 'terminals_aggregated';
  avg?: Maybe<BusinessTerminals_Aggregated_Fields>;
  avgDistinct?: Maybe<BusinessTerminals_Aggregated_Fields>;
  count?: Maybe<BusinessTerminals_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<BusinessTerminals_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<BusinessTerminals_Aggregated_Fields>;
  min?: Maybe<BusinessTerminals_Aggregated_Fields>;
  sum?: Maybe<BusinessTerminals_Aggregated_Fields>;
  sumDistinct?: Maybe<BusinessTerminals_Aggregated_Fields>;
};

export type BusinessTerminals_Aggregated_Count = {
  __typename?: 'terminals_aggregated_count';
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type BusinessTerminals_Aggregated_Fields = {
  __typename?: 'terminals_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type BusinessTerminals_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessTerminals_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessTerminals_Filter>>>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<BusinessDate_Filter_Operators>;
  date_updated_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
  user_updated?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessTerminals_Mutated = {
  __typename?: 'terminals_mutated';
  data?: Maybe<BusinessTerminals>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessUpdate_Boutiques_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  expire_date?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  main_image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  stars?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
};

export type BusinessUpdate_Categories_Input = {
  boutique?: InputMaybe<BusinessUpdate_Boutiques_Input>;
  boutique_id?: InputMaybe<BusinessUpdate_Boutiques_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
};

export type BusinessUpdate_Customers_Input = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  boutique?: InputMaybe<BusinessUpdate_Boutiques_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  nick_name?: InputMaybe<Scalars['String']['input']>;
  open_id?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
};

export type BusinessUpdate_Directus_Access_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  policy?: InputMaybe<BusinessUpdate_Directus_Policies_Input>;
  role?: InputMaybe<BusinessUpdate_Directus_Roles_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
};

export type BusinessUpdate_Directus_Files_Input = {
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
  folder?: InputMaybe<BusinessUpdate_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tus_data?: InputMaybe<Scalars['JSON']['input']>;
  tus_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type BusinessUpdate_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<BusinessUpdate_Directus_Folders_Input>;
};

export type BusinessUpdate_Directus_Permissions_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  policy?: InputMaybe<BusinessUpdate_Directus_Policies_Input>;
  presets?: InputMaybe<Scalars['JSON']['input']>;
  validation?: InputMaybe<Scalars['JSON']['input']>;
};

export type BusinessUpdate_Directus_Policies_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']['input']>;
  app_access?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<BusinessUpdate_Directus_Permissions_Input>>>;
  roles?: InputMaybe<Array<InputMaybe<BusinessUpdate_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<BusinessUpdate_Directus_Access_Input>>>;
};

export type BusinessUpdate_Directus_Roles_Input = {
  children?: InputMaybe<Array<InputMaybe<BusinessUpdate_Directus_Roles_Input>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<BusinessUpdate_Directus_Roles_Input>;
  policies?: InputMaybe<Array<InputMaybe<BusinessUpdate_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<BusinessUpdate_Directus_Users_Input>>>;
};

export type BusinessUpdate_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['JSON']['input']>;
  avatar?: InputMaybe<BusinessUpdate_Directus_Files_Input>;
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
  policies?: InputMaybe<Array<InputMaybe<BusinessUpdate_Directus_Access_Input>>>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<BusinessUpdate_Directus_Roles_Input>;
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

export type BusinessUpdate_Orders_Input = {
  boutique?: InputMaybe<BusinessUpdate_Boutiques_Input>;
  customer?: InputMaybe<BusinessUpdate_Customers_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<BusinessUpdate_Products_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  total_price?: InputMaybe<Scalars['Float']['input']>;
  user_created?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
};

export type BusinessUpdate_Products_Input = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  boutique?: InputMaybe<BusinessUpdate_Boutiques_Input>;
  boutique_id?: InputMaybe<BusinessUpdate_Boutiques_Input>;
  brand?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<BusinessUpdate_Categories_Input>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  is_on_sale?: InputMaybe<Scalars['Boolean']['input']>;
  main_image?: InputMaybe<Scalars['String']['input']>;
  market_price?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rating_avg?: InputMaybe<Scalars['Float']['input']>;
  seller_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  total_reviews?: InputMaybe<Scalars['Int']['input']>;
  total_sales_volume?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  user_created?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
  video_url?: InputMaybe<Scalars['String']['input']>;
};

export type BusinessUpdate_Terminals_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  user_created?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
};

export type BusinessUpdate_Views_Input = {
  boutique?: InputMaybe<BusinessUpdate_Boutiques_Input>;
  customer?: InputMaybe<BusinessUpdate_Customers_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<BusinessUpdate_Products_Input>;
  user_created?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
};

export type BusinessUpdate_Visits_Input = {
  boutique?: InputMaybe<BusinessUpdate_Boutiques_Input>;
  customer?: InputMaybe<BusinessUpdate_Customers_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  user_created?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
  user_updated?: InputMaybe<BusinessUpdate_Directus_Users_Input>;
};

export type BusinessVersion_Boutiques = {
  __typename?: 'version_boutiques';
  address?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  expire_date?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Scalars['JSON']['output']>;
  main_image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  stars?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type BusinessVersion_Categories = {
  __typename?: 'version_categories';
  boutique?: Maybe<Scalars['JSON']['output']>;
  boutique_id?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type BusinessVersion_Customers = {
  __typename?: 'version_customers';
  avatar?: Maybe<Scalars['String']['output']>;
  boutique?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  nick_name?: Maybe<Scalars['String']['output']>;
  open_id?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type BusinessVersion_Orders = {
  __typename?: 'version_orders';
  boutique?: Maybe<Scalars['JSON']['output']>;
  customer?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  product?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total_price?: Maybe<Scalars['Float']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type BusinessVersion_Products = {
  __typename?: 'version_products';
  barcode?: Maybe<Scalars['String']['output']>;
  boutique?: Maybe<Scalars['JSON']['output']>;
  boutique_id?: Maybe<Scalars['JSON']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['JSON']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Scalars['JSON']['output']>;
  is_on_sale?: Maybe<Scalars['Boolean']['output']>;
  main_image?: Maybe<Scalars['String']['output']>;
  market_price?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating_avg?: Maybe<Scalars['Float']['output']>;
  seller_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stock?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  total_reviews?: Maybe<Scalars['Int']['output']>;
  total_sales_volume?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
  video_url?: Maybe<Scalars['String']['output']>;
};

export type BusinessVersion_Terminals = {
  __typename?: 'version_terminals';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type BusinessVersion_Views = {
  __typename?: 'version_views';
  boutique?: Maybe<Scalars['JSON']['output']>;
  customer?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  product?: Maybe<Scalars['JSON']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type BusinessVersion_Visits = {
  __typename?: 'version_visits';
  boutique?: Maybe<Scalars['JSON']['output']>;
  customer?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type BusinessViews = {
  __typename?: 'views';
  boutique?: Maybe<BusinessBoutiques>;
  customer?: Maybe<BusinessCustomers>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<BusinessDatetime_Functions>;
  id: Scalars['ID']['output'];
  product?: Maybe<BusinessProducts>;
  user_created?: Maybe<BusinessDirectus_Users>;
  user_updated?: Maybe<BusinessDirectus_Users>;
};


export type BusinessViewsBoutiqueArgs = {
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessViewsCustomerArgs = {
  filter?: InputMaybe<BusinessCustomers_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessViewsProductArgs = {
  filter?: InputMaybe<BusinessProducts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessViewsUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessViewsUser_UpdatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessViews_Aggregated = {
  __typename?: 'views_aggregated';
  avg?: Maybe<BusinessViews_Aggregated_Fields>;
  avgDistinct?: Maybe<BusinessViews_Aggregated_Fields>;
  count?: Maybe<BusinessViews_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<BusinessViews_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<BusinessViews_Aggregated_Fields>;
  min?: Maybe<BusinessViews_Aggregated_Fields>;
  sum?: Maybe<BusinessViews_Aggregated_Fields>;
  sumDistinct?: Maybe<BusinessViews_Aggregated_Fields>;
};

export type BusinessViews_Aggregated_Count = {
  __typename?: 'views_aggregated_count';
  boutique?: Maybe<Scalars['Int']['output']>;
  customer?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type BusinessViews_Aggregated_Fields = {
  __typename?: 'views_aggregated_fields';
  boutique?: Maybe<Scalars['Float']['output']>;
  customer?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Scalars['Float']['output']>;
};

export type BusinessViews_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessViews_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessViews_Filter>>>;
  boutique?: InputMaybe<BusinessBoutiques_Filter>;
  customer?: InputMaybe<BusinessCustomers_Filter>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<BusinessDate_Filter_Operators>;
  date_updated_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  product?: InputMaybe<BusinessProducts_Filter>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
  user_updated?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessViews_Mutated = {
  __typename?: 'views_mutated';
  data?: Maybe<BusinessViews>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessVisits = {
  __typename?: 'visits';
  boutique?: Maybe<BusinessBoutiques>;
  customer?: Maybe<BusinessCustomers>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<BusinessDatetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<BusinessDatetime_Functions>;
  id: Scalars['ID']['output'];
  user_created?: Maybe<BusinessDirectus_Users>;
  user_updated?: Maybe<BusinessDirectus_Users>;
};


export type BusinessVisitsBoutiqueArgs = {
  filter?: InputMaybe<BusinessBoutiques_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessVisitsCustomerArgs = {
  filter?: InputMaybe<BusinessCustomers_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessVisitsUser_CreatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessVisitsUser_UpdatedArgs = {
  filter?: InputMaybe<BusinessDirectus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessVisits_Aggregated = {
  __typename?: 'visits_aggregated';
  avg?: Maybe<BusinessVisits_Aggregated_Fields>;
  avgDistinct?: Maybe<BusinessVisits_Aggregated_Fields>;
  count?: Maybe<BusinessVisits_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<BusinessVisits_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<BusinessVisits_Aggregated_Fields>;
  min?: Maybe<BusinessVisits_Aggregated_Fields>;
  sum?: Maybe<BusinessVisits_Aggregated_Fields>;
  sumDistinct?: Maybe<BusinessVisits_Aggregated_Fields>;
};

export type BusinessVisits_Aggregated_Count = {
  __typename?: 'visits_aggregated_count';
  boutique?: Maybe<Scalars['Int']['output']>;
  customer?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type BusinessVisits_Aggregated_Fields = {
  __typename?: 'visits_aggregated_fields';
  boutique?: Maybe<Scalars['Float']['output']>;
  customer?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type BusinessVisits_Filter = {
  _and?: InputMaybe<Array<InputMaybe<BusinessVisits_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<BusinessVisits_Filter>>>;
  boutique?: InputMaybe<BusinessBoutiques_Filter>;
  customer?: InputMaybe<BusinessCustomers_Filter>;
  date_created?: InputMaybe<BusinessDate_Filter_Operators>;
  date_created_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<BusinessDate_Filter_Operators>;
  date_updated_func?: InputMaybe<BusinessDatetime_Function_Filter_Operators>;
  id?: InputMaybe<BusinessNumber_Filter_Operators>;
  user_created?: InputMaybe<BusinessDirectus_Users_Filter>;
  user_updated?: InputMaybe<BusinessDirectus_Users_Filter>;
};

export type BusinessVisits_Mutated = {
  __typename?: 'visits_mutated';
  data?: Maybe<BusinessVisits>;
  event?: Maybe<BusinessEventEnum>;
  key: Scalars['ID']['output'];
};

export type BusinessCreateOrderMutationVariables = Exact<{
  orderData: BusinessCreate_Orders_Input;
}>;


export type BusinessCreateOrderMutation = { __typename?: 'Mutation', create_orders_item?: { __typename?: 'orders', id: string, total_price?: number | null, status?: string | null, date_created?: any | null, product?: { __typename?: 'products', id: string, name: string, price: number, main_image?: string | null } | null, boutique?: { __typename?: 'boutiques', id: string, name?: string | null } | null } | null };

export type BusinessGetUserOrdersQueryVariables = Exact<{
  openId: Scalars['String']['input'];
}>;


export type BusinessGetUserOrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'orders', id: string, total_price?: number | null, status?: string | null, date_created?: any | null, product?: { __typename?: 'products', id: string, name: string, price: number, main_image?: string | null } | null, boutique?: { __typename?: 'boutiques', id: string, name?: string | null } | null }> };

export type BusinessGetOrderByIdQueryVariables = Exact<{
  orderId: Scalars['GraphQLStringOrFloat']['input'];
}>;


export type BusinessGetOrderByIdQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'orders', id: string, total_price?: number | null, status?: string | null, date_created?: any | null, product?: { __typename?: 'products', id: string, name: string, price: number, main_image?: string | null, description?: string | null } | null, boutique?: { __typename?: 'boutiques', id: string, name?: string | null } | null }> };

export type BusinessDeleteOrderMutationVariables = Exact<{
  orderId: Scalars['ID']['input'];
}>;


export type BusinessDeleteOrderMutation = { __typename?: 'Mutation', delete_orders_item?: { __typename?: 'delete_one', id: string } | null };

export type BusinessGetBoutiqueByIdQueryVariables = Exact<{
  boutiqueId: Scalars['GraphQLStringOrFloat']['input'];
}>;


export type BusinessGetBoutiqueByIdQuery = { __typename?: 'Query', boutiques: Array<{ __typename?: 'boutiques', id: string, name?: string | null, address?: string | null, main_image?: string | null, images?: any | null, stars?: number | null, status?: string | null, date_created?: any | null }> };

export type BusinessGetCategoriesByBoutiqueQueryVariables = Exact<{
  boutiqueFilter?: InputMaybe<BusinessCategories_Filter>;
}>;


export type BusinessGetCategoriesByBoutiqueQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'categories', id: string, name: string, description?: string | null }> };

export type BusinessGetProductsQueryVariables = Exact<{
  filter?: InputMaybe<BusinessProducts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type BusinessGetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'products', id: string, name: string, subtitle?: string | null, description?: string | null, price: number, main_image?: string | null, category_id?: { __typename?: 'categories', id: string, name: string } | null, boutique_id?: { __typename?: 'boutiques', id: string, name?: string | null } | null }> };

export type BusinessGetProductByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BusinessGetProductByIdQuery = { __typename?: 'Query', products_by_id?: { __typename?: 'products', id: string, name: string, subtitle?: string | null, description?: string | null, price: number, main_image?: string | null, images?: any | null, category_id?: { __typename?: 'categories', id: string, name: string } | null } | null };

export type BusinessGetUserBoutiqueQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type BusinessGetUserBoutiqueQuery = { __typename?: 'Query', boutiques: Array<{ __typename?: 'boutiques', id: string, name?: string | null, address?: string | null, main_image?: string | null, stars?: number | null, status?: string | null }> };

export type BusinessCreateProductViewMutationVariables = Exact<{
  data: BusinessCreate_Views_Input;
}>;


export type BusinessCreateProductViewMutation = { __typename?: 'Mutation', create_views_item?: { __typename?: 'views', id: string, date_created?: any | null } | null };

export type BusinessGetCustomerByOpenidAndBoutiqueQueryVariables = Exact<{
  open_id: Scalars['String']['input'];
  boutique_id: Scalars['GraphQLStringOrFloat']['input'];
}>;


export type BusinessGetCustomerByOpenidAndBoutiqueQuery = { __typename?: 'Query', customers: Array<{ __typename?: 'customers', id: string, open_id: string, nick_name?: string | null }> };

export type BusinessGetCustomerProductViewsQueryVariables = Exact<{
  customer_id: Scalars['GraphQLStringOrFloat']['input'];
}>;


export type BusinessGetCustomerProductViewsQuery = { __typename?: 'Query', views: Array<{ __typename?: 'views', id: string, date_created?: any | null, product?: { __typename?: 'products', id: string, name: string } | null }> };

export type BusinessGetProductViewStatsQueryVariables = Exact<{
  product_id: Scalars['GraphQLStringOrFloat']['input'];
}>;


export type BusinessGetProductViewStatsQuery = { __typename?: 'Query', views_aggregated: Array<{ __typename?: 'views_aggregated', count?: { __typename?: 'views_aggregated_count', id?: number | null } | null }> };

export type BusinessGetBoutiqueProductViewStatsQueryVariables = Exact<{
  boutique_id: Scalars['GraphQLStringOrFloat']['input'];
}>;


export type BusinessGetBoutiqueProductViewStatsQuery = { __typename?: 'Query', views_aggregated: Array<{ __typename?: 'views_aggregated', count?: { __typename?: 'views_aggregated_count', id?: number | null } | null }> };

export type BusinessGetCustomerByOpenIdAndBoutiqueQueryVariables = Exact<{
  open_id: Scalars['String']['input'];
  boutique_id: Scalars['GraphQLStringOrFloat']['input'];
}>;


export type BusinessGetCustomerByOpenIdAndBoutiqueQuery = { __typename?: 'Query', customers: Array<{ __typename?: 'customers', id: string, open_id: string, nick_name?: string | null, avatar?: string | null, sex?: number | null, status?: string | null, boutique?: { __typename?: 'boutiques', id: string, name?: string | null } | null }> };

export type BusinessGetCustomerByOpenIdQueryVariables = Exact<{
  open_id: Scalars['String']['input'];
}>;


export type BusinessGetCustomerByOpenIdQuery = { __typename?: 'Query', customers: Array<{ __typename?: 'customers', id: string, open_id: string, nick_name?: string | null, avatar?: string | null, date_created?: any | null, boutique?: { __typename?: 'boutiques', id: string, name?: string | null } | null }> };

export type BusinessCreateCustomerSimpleMutationVariables = Exact<{
  open_id: Scalars['String']['input'];
  nick_name?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BusinessCreateCustomerSimpleMutation = { __typename?: 'Mutation', create_customers_item?: { __typename?: 'customers', id: string, open_id: string, nick_name?: string | null, avatar?: string | null, sex?: number | null, date_created?: any | null } | null };

export type BusinessCreateCustomerWithBoutiqueMutationVariables = Exact<{
  open_id: Scalars['String']['input'];
  nick_name?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['Int']['input']>;
  boutiqueId: Scalars['ID']['input'];
}>;


export type BusinessCreateCustomerWithBoutiqueMutation = { __typename?: 'Mutation', create_customers_item?: { __typename?: 'customers', id: string, open_id: string, nick_name?: string | null, avatar?: string | null, sex?: number | null, date_created?: any | null, boutique?: { __typename?: 'boutiques', id: string, name?: string | null, code?: string | null } | null } | null };

export type BusinessUpdateCustomerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  nick_name?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BusinessUpdateCustomerMutation = { __typename?: 'Mutation', update_customers_item?: { __typename?: 'customers', id: string, nick_name?: string | null, avatar?: string | null, sex?: number | null, date_updated?: any | null } | null };

export type BusinessCreateVisitWithFullDataMutationVariables = Exact<{
  customerData: BusinessCreate_Customers_Input;
  boutiqueData: BusinessCreate_Boutiques_Input;
}>;


export type BusinessCreateVisitWithFullDataMutation = { __typename?: 'Mutation', create_visits_item?: { __typename?: 'visits', id: string, date_created?: any | null, customer?: { __typename?: 'customers', id: string, nick_name?: string | null } | null, boutique?: { __typename?: 'boutiques', id: string, name?: string | null } | null } | null };


export const CreateOrderDocument = gql`
    mutation CreateOrder($orderData: create_orders_input!) {
  create_orders_item(data: $orderData) {
    id
    total_price
    status
    date_created
    product {
      id
      name
      price
      main_image
    }
    boutique {
      id
      name
    }
  }
}
    `;
export type BusinessCreateOrderMutationFn = ApolloReactCommon.MutationFunction<BusinessCreateOrderMutation, BusinessCreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      orderData: // value for 'orderData'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BusinessCreateOrderMutation, BusinessCreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<BusinessCreateOrderMutation, BusinessCreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = ApolloReactCommon.MutationResult<BusinessCreateOrderMutation>;
export type CreateOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<BusinessCreateOrderMutation, BusinessCreateOrderMutationVariables>;
export const GetUserOrdersDocument = gql`
    query GetUserOrders($openId: String!) {
  orders(filter: {customer: {open_id: {_eq: $openId}}}, sort: ["-date_created"]) {
    id
    total_price
    status
    date_created
    product {
      id
      name
      price
      main_image
    }
    boutique {
      id
      name
    }
  }
}
    `;

/**
 * __useGetUserOrdersQuery__
 *
 * To run a query within a React component, call `useGetUserOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserOrdersQuery({
 *   variables: {
 *      openId: // value for 'openId'
 *   },
 * });
 */
export function useGetUserOrdersQuery(baseOptions: ApolloReactHooks.QueryHookOptions<BusinessGetUserOrdersQuery, BusinessGetUserOrdersQueryVariables> & ({ variables: BusinessGetUserOrdersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetUserOrdersQuery, BusinessGetUserOrdersQueryVariables>(GetUserOrdersDocument, options);
      }
export function useGetUserOrdersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetUserOrdersQuery, BusinessGetUserOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetUserOrdersQuery, BusinessGetUserOrdersQueryVariables>(GetUserOrdersDocument, options);
        }
export function useGetUserOrdersSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetUserOrdersQuery, BusinessGetUserOrdersQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetUserOrdersQuery, BusinessGetUserOrdersQueryVariables>(GetUserOrdersDocument, options);
        }
export type GetUserOrdersQueryHookResult = ReturnType<typeof useGetUserOrdersQuery>;
export type GetUserOrdersLazyQueryHookResult = ReturnType<typeof useGetUserOrdersLazyQuery>;
export type GetUserOrdersSuspenseQueryHookResult = ReturnType<typeof useGetUserOrdersSuspenseQuery>;
export type GetUserOrdersQueryResult = ApolloReactCommon.QueryResult<BusinessGetUserOrdersQuery, BusinessGetUserOrdersQueryVariables>;
export const GetOrderByIdDocument = gql`
    query GetOrderById($orderId: GraphQLStringOrFloat!) {
  orders(filter: {id: {_eq: $orderId}}, limit: 1) {
    id
    total_price
    status
    date_created
    product {
      id
      name
      price
      main_image
      description
    }
    boutique {
      id
      name
    }
  }
}
    `;

/**
 * __useGetOrderByIdQuery__
 *
 * To run a query within a React component, call `useGetOrderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderByIdQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useGetOrderByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<BusinessGetOrderByIdQuery, BusinessGetOrderByIdQueryVariables> & ({ variables: BusinessGetOrderByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetOrderByIdQuery, BusinessGetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
      }
export function useGetOrderByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetOrderByIdQuery, BusinessGetOrderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetOrderByIdQuery, BusinessGetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
        }
export function useGetOrderByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetOrderByIdQuery, BusinessGetOrderByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetOrderByIdQuery, BusinessGetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
        }
export type GetOrderByIdQueryHookResult = ReturnType<typeof useGetOrderByIdQuery>;
export type GetOrderByIdLazyQueryHookResult = ReturnType<typeof useGetOrderByIdLazyQuery>;
export type GetOrderByIdSuspenseQueryHookResult = ReturnType<typeof useGetOrderByIdSuspenseQuery>;
export type GetOrderByIdQueryResult = ApolloReactCommon.QueryResult<BusinessGetOrderByIdQuery, BusinessGetOrderByIdQueryVariables>;
export const DeleteOrderDocument = gql`
    mutation DeleteOrder($orderId: ID!) {
  delete_orders_item(id: $orderId) {
    id
  }
}
    `;
export type BusinessDeleteOrderMutationFn = ApolloReactCommon.MutationFunction<BusinessDeleteOrderMutation, BusinessDeleteOrderMutationVariables>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useDeleteOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BusinessDeleteOrderMutation, BusinessDeleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<BusinessDeleteOrderMutation, BusinessDeleteOrderMutationVariables>(DeleteOrderDocument, options);
      }
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = ApolloReactCommon.MutationResult<BusinessDeleteOrderMutation>;
export type DeleteOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<BusinessDeleteOrderMutation, BusinessDeleteOrderMutationVariables>;
export const GetBoutiqueByIdDocument = gql`
    query GetBoutiqueById($boutiqueId: GraphQLStringOrFloat!) {
  boutiques(filter: {id: {_eq: $boutiqueId}}, limit: 1) {
    id
    name
    address
    main_image
    images
    stars
    status
    date_created
  }
}
    `;

/**
 * __useGetBoutiqueByIdQuery__
 *
 * To run a query within a React component, call `useGetBoutiqueByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoutiqueByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoutiqueByIdQuery({
 *   variables: {
 *      boutiqueId: // value for 'boutiqueId'
 *   },
 * });
 */
export function useGetBoutiqueByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<BusinessGetBoutiqueByIdQuery, BusinessGetBoutiqueByIdQueryVariables> & ({ variables: BusinessGetBoutiqueByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetBoutiqueByIdQuery, BusinessGetBoutiqueByIdQueryVariables>(GetBoutiqueByIdDocument, options);
      }
export function useGetBoutiqueByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetBoutiqueByIdQuery, BusinessGetBoutiqueByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetBoutiqueByIdQuery, BusinessGetBoutiqueByIdQueryVariables>(GetBoutiqueByIdDocument, options);
        }
export function useGetBoutiqueByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetBoutiqueByIdQuery, BusinessGetBoutiqueByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetBoutiqueByIdQuery, BusinessGetBoutiqueByIdQueryVariables>(GetBoutiqueByIdDocument, options);
        }
export type GetBoutiqueByIdQueryHookResult = ReturnType<typeof useGetBoutiqueByIdQuery>;
export type GetBoutiqueByIdLazyQueryHookResult = ReturnType<typeof useGetBoutiqueByIdLazyQuery>;
export type GetBoutiqueByIdSuspenseQueryHookResult = ReturnType<typeof useGetBoutiqueByIdSuspenseQuery>;
export type GetBoutiqueByIdQueryResult = ApolloReactCommon.QueryResult<BusinessGetBoutiqueByIdQuery, BusinessGetBoutiqueByIdQueryVariables>;
export const GetCategoriesByBoutiqueDocument = gql`
    query GetCategoriesByBoutique($boutiqueFilter: categories_filter) {
  categories(filter: $boutiqueFilter) {
    id
    name
    description
  }
}
    `;

/**
 * __useGetCategoriesByBoutiqueQuery__
 *
 * To run a query within a React component, call `useGetCategoriesByBoutiqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesByBoutiqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesByBoutiqueQuery({
 *   variables: {
 *      boutiqueFilter: // value for 'boutiqueFilter'
 *   },
 * });
 */
export function useGetCategoriesByBoutiqueQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BusinessGetCategoriesByBoutiqueQuery, BusinessGetCategoriesByBoutiqueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetCategoriesByBoutiqueQuery, BusinessGetCategoriesByBoutiqueQueryVariables>(GetCategoriesByBoutiqueDocument, options);
      }
export function useGetCategoriesByBoutiqueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetCategoriesByBoutiqueQuery, BusinessGetCategoriesByBoutiqueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetCategoriesByBoutiqueQuery, BusinessGetCategoriesByBoutiqueQueryVariables>(GetCategoriesByBoutiqueDocument, options);
        }
export function useGetCategoriesByBoutiqueSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetCategoriesByBoutiqueQuery, BusinessGetCategoriesByBoutiqueQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetCategoriesByBoutiqueQuery, BusinessGetCategoriesByBoutiqueQueryVariables>(GetCategoriesByBoutiqueDocument, options);
        }
export type GetCategoriesByBoutiqueQueryHookResult = ReturnType<typeof useGetCategoriesByBoutiqueQuery>;
export type GetCategoriesByBoutiqueLazyQueryHookResult = ReturnType<typeof useGetCategoriesByBoutiqueLazyQuery>;
export type GetCategoriesByBoutiqueSuspenseQueryHookResult = ReturnType<typeof useGetCategoriesByBoutiqueSuspenseQuery>;
export type GetCategoriesByBoutiqueQueryResult = ApolloReactCommon.QueryResult<BusinessGetCategoriesByBoutiqueQuery, BusinessGetCategoriesByBoutiqueQueryVariables>;
export const GetProductsDocument = gql`
    query GetProducts($filter: products_filter, $limit: Int, $offset: Int, $sort: [String]) {
  products(filter: $filter, limit: $limit, offset: $offset, sort: $sort) {
    id
    name
    subtitle
    description
    price
    main_image
    category_id {
      id
      name
    }
    boutique_id {
      id
      name
    }
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BusinessGetProductsQuery, BusinessGetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetProductsQuery, BusinessGetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetProductsQuery, BusinessGetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetProductsQuery, BusinessGetProductsQueryVariables>(GetProductsDocument, options);
        }
export function useGetProductsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetProductsQuery, BusinessGetProductsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetProductsQuery, BusinessGetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsSuspenseQueryHookResult = ReturnType<typeof useGetProductsSuspenseQuery>;
export type GetProductsQueryResult = ApolloReactCommon.QueryResult<BusinessGetProductsQuery, BusinessGetProductsQueryVariables>;
export const GetProductByIdDocument = gql`
    query GetProductById($id: ID!) {
  products_by_id(id: $id) {
    id
    name
    subtitle
    description
    price
    main_image
    images
    category_id {
      id
      name
    }
  }
}
    `;

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<BusinessGetProductByIdQuery, BusinessGetProductByIdQueryVariables> & ({ variables: BusinessGetProductByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetProductByIdQuery, BusinessGetProductByIdQueryVariables>(GetProductByIdDocument, options);
      }
export function useGetProductByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetProductByIdQuery, BusinessGetProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetProductByIdQuery, BusinessGetProductByIdQueryVariables>(GetProductByIdDocument, options);
        }
export function useGetProductByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetProductByIdQuery, BusinessGetProductByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetProductByIdQuery, BusinessGetProductByIdQueryVariables>(GetProductByIdDocument, options);
        }
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>;
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>;
export type GetProductByIdSuspenseQueryHookResult = ReturnType<typeof useGetProductByIdSuspenseQuery>;
export type GetProductByIdQueryResult = ApolloReactCommon.QueryResult<BusinessGetProductByIdQuery, BusinessGetProductByIdQueryVariables>;
export const GetUserBoutiqueDocument = gql`
    query GetUserBoutique($userId: ID!) {
  boutiques(filter: {user_created: {id: {_eq: $userId}}}, limit: 1) {
    id
    name
    address
    main_image
    stars
    status
  }
}
    `;

/**
 * __useGetUserBoutiqueQuery__
 *
 * To run a query within a React component, call `useGetUserBoutiqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBoutiqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBoutiqueQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserBoutiqueQuery(baseOptions: ApolloReactHooks.QueryHookOptions<BusinessGetUserBoutiqueQuery, BusinessGetUserBoutiqueQueryVariables> & ({ variables: BusinessGetUserBoutiqueQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetUserBoutiqueQuery, BusinessGetUserBoutiqueQueryVariables>(GetUserBoutiqueDocument, options);
      }
export function useGetUserBoutiqueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetUserBoutiqueQuery, BusinessGetUserBoutiqueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetUserBoutiqueQuery, BusinessGetUserBoutiqueQueryVariables>(GetUserBoutiqueDocument, options);
        }
export function useGetUserBoutiqueSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetUserBoutiqueQuery, BusinessGetUserBoutiqueQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetUserBoutiqueQuery, BusinessGetUserBoutiqueQueryVariables>(GetUserBoutiqueDocument, options);
        }
export type GetUserBoutiqueQueryHookResult = ReturnType<typeof useGetUserBoutiqueQuery>;
export type GetUserBoutiqueLazyQueryHookResult = ReturnType<typeof useGetUserBoutiqueLazyQuery>;
export type GetUserBoutiqueSuspenseQueryHookResult = ReturnType<typeof useGetUserBoutiqueSuspenseQuery>;
export type GetUserBoutiqueQueryResult = ApolloReactCommon.QueryResult<BusinessGetUserBoutiqueQuery, BusinessGetUserBoutiqueQueryVariables>;
export const CreateProductViewDocument = gql`
    mutation CreateProductView($data: create_views_input!) {
  create_views_item(data: $data) {
    id
    date_created
  }
}
    `;
export type BusinessCreateProductViewMutationFn = ApolloReactCommon.MutationFunction<BusinessCreateProductViewMutation, BusinessCreateProductViewMutationVariables>;

/**
 * __useCreateProductViewMutation__
 *
 * To run a mutation, you first call `useCreateProductViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductViewMutation, { data, loading, error }] = useCreateProductViewMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BusinessCreateProductViewMutation, BusinessCreateProductViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<BusinessCreateProductViewMutation, BusinessCreateProductViewMutationVariables>(CreateProductViewDocument, options);
      }
export type CreateProductViewMutationHookResult = ReturnType<typeof useCreateProductViewMutation>;
export type CreateProductViewMutationResult = ApolloReactCommon.MutationResult<BusinessCreateProductViewMutation>;
export type CreateProductViewMutationOptions = ApolloReactCommon.BaseMutationOptions<BusinessCreateProductViewMutation, BusinessCreateProductViewMutationVariables>;
export const GetCustomerByOpenidAndBoutiqueDocument = gql`
    query GetCustomerByOpenidAndBoutique($open_id: String!, $boutique_id: GraphQLStringOrFloat!) {
  customers(
    filter: {open_id: {_eq: $open_id}, boutique: {id: {_eq: $boutique_id}}}
  ) {
    id
    open_id
    nick_name
  }
}
    `;

/**
 * __useGetCustomerByOpenidAndBoutiqueQuery__
 *
 * To run a query within a React component, call `useGetCustomerByOpenidAndBoutiqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerByOpenidAndBoutiqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerByOpenidAndBoutiqueQuery({
 *   variables: {
 *      open_id: // value for 'open_id'
 *      boutique_id: // value for 'boutique_id'
 *   },
 * });
 */
export function useGetCustomerByOpenidAndBoutiqueQuery(baseOptions: ApolloReactHooks.QueryHookOptions<BusinessGetCustomerByOpenidAndBoutiqueQuery, BusinessGetCustomerByOpenidAndBoutiqueQueryVariables> & ({ variables: BusinessGetCustomerByOpenidAndBoutiqueQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetCustomerByOpenidAndBoutiqueQuery, BusinessGetCustomerByOpenidAndBoutiqueQueryVariables>(GetCustomerByOpenidAndBoutiqueDocument, options);
      }
export function useGetCustomerByOpenidAndBoutiqueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetCustomerByOpenidAndBoutiqueQuery, BusinessGetCustomerByOpenidAndBoutiqueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetCustomerByOpenidAndBoutiqueQuery, BusinessGetCustomerByOpenidAndBoutiqueQueryVariables>(GetCustomerByOpenidAndBoutiqueDocument, options);
        }
export function useGetCustomerByOpenidAndBoutiqueSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetCustomerByOpenidAndBoutiqueQuery, BusinessGetCustomerByOpenidAndBoutiqueQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetCustomerByOpenidAndBoutiqueQuery, BusinessGetCustomerByOpenidAndBoutiqueQueryVariables>(GetCustomerByOpenidAndBoutiqueDocument, options);
        }
export type GetCustomerByOpenidAndBoutiqueQueryHookResult = ReturnType<typeof useGetCustomerByOpenidAndBoutiqueQuery>;
export type GetCustomerByOpenidAndBoutiqueLazyQueryHookResult = ReturnType<typeof useGetCustomerByOpenidAndBoutiqueLazyQuery>;
export type GetCustomerByOpenidAndBoutiqueSuspenseQueryHookResult = ReturnType<typeof useGetCustomerByOpenidAndBoutiqueSuspenseQuery>;
export type GetCustomerByOpenidAndBoutiqueQueryResult = ApolloReactCommon.QueryResult<BusinessGetCustomerByOpenidAndBoutiqueQuery, BusinessGetCustomerByOpenidAndBoutiqueQueryVariables>;
export const GetCustomerProductViewsDocument = gql`
    query GetCustomerProductViews($customer_id: GraphQLStringOrFloat!) {
  views(filter: {customer: {id: {_eq: $customer_id}}}) {
    id
    date_created
    product {
      id
      name
    }
  }
}
    `;

/**
 * __useGetCustomerProductViewsQuery__
 *
 * To run a query within a React component, call `useGetCustomerProductViewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerProductViewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerProductViewsQuery({
 *   variables: {
 *      customer_id: // value for 'customer_id'
 *   },
 * });
 */
export function useGetCustomerProductViewsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<BusinessGetCustomerProductViewsQuery, BusinessGetCustomerProductViewsQueryVariables> & ({ variables: BusinessGetCustomerProductViewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetCustomerProductViewsQuery, BusinessGetCustomerProductViewsQueryVariables>(GetCustomerProductViewsDocument, options);
      }
export function useGetCustomerProductViewsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetCustomerProductViewsQuery, BusinessGetCustomerProductViewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetCustomerProductViewsQuery, BusinessGetCustomerProductViewsQueryVariables>(GetCustomerProductViewsDocument, options);
        }
export function useGetCustomerProductViewsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetCustomerProductViewsQuery, BusinessGetCustomerProductViewsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetCustomerProductViewsQuery, BusinessGetCustomerProductViewsQueryVariables>(GetCustomerProductViewsDocument, options);
        }
export type GetCustomerProductViewsQueryHookResult = ReturnType<typeof useGetCustomerProductViewsQuery>;
export type GetCustomerProductViewsLazyQueryHookResult = ReturnType<typeof useGetCustomerProductViewsLazyQuery>;
export type GetCustomerProductViewsSuspenseQueryHookResult = ReturnType<typeof useGetCustomerProductViewsSuspenseQuery>;
export type GetCustomerProductViewsQueryResult = ApolloReactCommon.QueryResult<BusinessGetCustomerProductViewsQuery, BusinessGetCustomerProductViewsQueryVariables>;
export const GetProductViewStatsDocument = gql`
    query GetProductViewStats($product_id: GraphQLStringOrFloat!) {
  views_aggregated(filter: {product: {id: {_eq: $product_id}}}) {
    count {
      id
    }
  }
}
    `;

/**
 * __useGetProductViewStatsQuery__
 *
 * To run a query within a React component, call `useGetProductViewStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductViewStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductViewStatsQuery({
 *   variables: {
 *      product_id: // value for 'product_id'
 *   },
 * });
 */
export function useGetProductViewStatsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<BusinessGetProductViewStatsQuery, BusinessGetProductViewStatsQueryVariables> & ({ variables: BusinessGetProductViewStatsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetProductViewStatsQuery, BusinessGetProductViewStatsQueryVariables>(GetProductViewStatsDocument, options);
      }
export function useGetProductViewStatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetProductViewStatsQuery, BusinessGetProductViewStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetProductViewStatsQuery, BusinessGetProductViewStatsQueryVariables>(GetProductViewStatsDocument, options);
        }
export function useGetProductViewStatsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetProductViewStatsQuery, BusinessGetProductViewStatsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetProductViewStatsQuery, BusinessGetProductViewStatsQueryVariables>(GetProductViewStatsDocument, options);
        }
export type GetProductViewStatsQueryHookResult = ReturnType<typeof useGetProductViewStatsQuery>;
export type GetProductViewStatsLazyQueryHookResult = ReturnType<typeof useGetProductViewStatsLazyQuery>;
export type GetProductViewStatsSuspenseQueryHookResult = ReturnType<typeof useGetProductViewStatsSuspenseQuery>;
export type GetProductViewStatsQueryResult = ApolloReactCommon.QueryResult<BusinessGetProductViewStatsQuery, BusinessGetProductViewStatsQueryVariables>;
export const GetBoutiqueProductViewStatsDocument = gql`
    query GetBoutiqueProductViewStats($boutique_id: GraphQLStringOrFloat!) {
  views_aggregated(filter: {boutique: {id: {_eq: $boutique_id}}}) {
    count {
      id
    }
  }
}
    `;

/**
 * __useGetBoutiqueProductViewStatsQuery__
 *
 * To run a query within a React component, call `useGetBoutiqueProductViewStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoutiqueProductViewStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoutiqueProductViewStatsQuery({
 *   variables: {
 *      boutique_id: // value for 'boutique_id'
 *   },
 * });
 */
export function useGetBoutiqueProductViewStatsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<BusinessGetBoutiqueProductViewStatsQuery, BusinessGetBoutiqueProductViewStatsQueryVariables> & ({ variables: BusinessGetBoutiqueProductViewStatsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetBoutiqueProductViewStatsQuery, BusinessGetBoutiqueProductViewStatsQueryVariables>(GetBoutiqueProductViewStatsDocument, options);
      }
export function useGetBoutiqueProductViewStatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetBoutiqueProductViewStatsQuery, BusinessGetBoutiqueProductViewStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetBoutiqueProductViewStatsQuery, BusinessGetBoutiqueProductViewStatsQueryVariables>(GetBoutiqueProductViewStatsDocument, options);
        }
export function useGetBoutiqueProductViewStatsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetBoutiqueProductViewStatsQuery, BusinessGetBoutiqueProductViewStatsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetBoutiqueProductViewStatsQuery, BusinessGetBoutiqueProductViewStatsQueryVariables>(GetBoutiqueProductViewStatsDocument, options);
        }
export type GetBoutiqueProductViewStatsQueryHookResult = ReturnType<typeof useGetBoutiqueProductViewStatsQuery>;
export type GetBoutiqueProductViewStatsLazyQueryHookResult = ReturnType<typeof useGetBoutiqueProductViewStatsLazyQuery>;
export type GetBoutiqueProductViewStatsSuspenseQueryHookResult = ReturnType<typeof useGetBoutiqueProductViewStatsSuspenseQuery>;
export type GetBoutiqueProductViewStatsQueryResult = ApolloReactCommon.QueryResult<BusinessGetBoutiqueProductViewStatsQuery, BusinessGetBoutiqueProductViewStatsQueryVariables>;
export const GetCustomerByOpenIdAndBoutiqueDocument = gql`
    query GetCustomerByOpenIdAndBoutique($open_id: String!, $boutique_id: GraphQLStringOrFloat!) {
  customers(
    filter: {_and: [{open_id: {_eq: $open_id}}, {boutique: {id: {_eq: $boutique_id}}}]}
    limit: 1
  ) {
    id
    open_id
    nick_name
    avatar
    sex
    status
    boutique {
      id
      name
    }
  }
}
    `;

/**
 * __useGetCustomerByOpenIdAndBoutiqueQuery__
 *
 * To run a query within a React component, call `useGetCustomerByOpenIdAndBoutiqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerByOpenIdAndBoutiqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerByOpenIdAndBoutiqueQuery({
 *   variables: {
 *      open_id: // value for 'open_id'
 *      boutique_id: // value for 'boutique_id'
 *   },
 * });
 */
export function useGetCustomerByOpenIdAndBoutiqueQuery(baseOptions: ApolloReactHooks.QueryHookOptions<BusinessGetCustomerByOpenIdAndBoutiqueQuery, BusinessGetCustomerByOpenIdAndBoutiqueQueryVariables> & ({ variables: BusinessGetCustomerByOpenIdAndBoutiqueQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetCustomerByOpenIdAndBoutiqueQuery, BusinessGetCustomerByOpenIdAndBoutiqueQueryVariables>(GetCustomerByOpenIdAndBoutiqueDocument, options);
      }
export function useGetCustomerByOpenIdAndBoutiqueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetCustomerByOpenIdAndBoutiqueQuery, BusinessGetCustomerByOpenIdAndBoutiqueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetCustomerByOpenIdAndBoutiqueQuery, BusinessGetCustomerByOpenIdAndBoutiqueQueryVariables>(GetCustomerByOpenIdAndBoutiqueDocument, options);
        }
export function useGetCustomerByOpenIdAndBoutiqueSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetCustomerByOpenIdAndBoutiqueQuery, BusinessGetCustomerByOpenIdAndBoutiqueQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetCustomerByOpenIdAndBoutiqueQuery, BusinessGetCustomerByOpenIdAndBoutiqueQueryVariables>(GetCustomerByOpenIdAndBoutiqueDocument, options);
        }
export type GetCustomerByOpenIdAndBoutiqueQueryHookResult = ReturnType<typeof useGetCustomerByOpenIdAndBoutiqueQuery>;
export type GetCustomerByOpenIdAndBoutiqueLazyQueryHookResult = ReturnType<typeof useGetCustomerByOpenIdAndBoutiqueLazyQuery>;
export type GetCustomerByOpenIdAndBoutiqueSuspenseQueryHookResult = ReturnType<typeof useGetCustomerByOpenIdAndBoutiqueSuspenseQuery>;
export type GetCustomerByOpenIdAndBoutiqueQueryResult = ApolloReactCommon.QueryResult<BusinessGetCustomerByOpenIdAndBoutiqueQuery, BusinessGetCustomerByOpenIdAndBoutiqueQueryVariables>;
export const GetCustomerByOpenIdDocument = gql`
    query GetCustomerByOpenId($open_id: String!) {
  customers(filter: {open_id: {_eq: $open_id}}) {
    id
    open_id
    nick_name
    avatar
    boutique {
      id
      name
    }
    date_created
  }
}
    `;

/**
 * __useGetCustomerByOpenIdQuery__
 *
 * To run a query within a React component, call `useGetCustomerByOpenIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerByOpenIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerByOpenIdQuery({
 *   variables: {
 *      open_id: // value for 'open_id'
 *   },
 * });
 */
export function useGetCustomerByOpenIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<BusinessGetCustomerByOpenIdQuery, BusinessGetCustomerByOpenIdQueryVariables> & ({ variables: BusinessGetCustomerByOpenIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<BusinessGetCustomerByOpenIdQuery, BusinessGetCustomerByOpenIdQueryVariables>(GetCustomerByOpenIdDocument, options);
      }
export function useGetCustomerByOpenIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BusinessGetCustomerByOpenIdQuery, BusinessGetCustomerByOpenIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<BusinessGetCustomerByOpenIdQuery, BusinessGetCustomerByOpenIdQueryVariables>(GetCustomerByOpenIdDocument, options);
        }
export function useGetCustomerByOpenIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<BusinessGetCustomerByOpenIdQuery, BusinessGetCustomerByOpenIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<BusinessGetCustomerByOpenIdQuery, BusinessGetCustomerByOpenIdQueryVariables>(GetCustomerByOpenIdDocument, options);
        }
export type GetCustomerByOpenIdQueryHookResult = ReturnType<typeof useGetCustomerByOpenIdQuery>;
export type GetCustomerByOpenIdLazyQueryHookResult = ReturnType<typeof useGetCustomerByOpenIdLazyQuery>;
export type GetCustomerByOpenIdSuspenseQueryHookResult = ReturnType<typeof useGetCustomerByOpenIdSuspenseQuery>;
export type GetCustomerByOpenIdQueryResult = ApolloReactCommon.QueryResult<BusinessGetCustomerByOpenIdQuery, BusinessGetCustomerByOpenIdQueryVariables>;
export const CreateCustomerSimpleDocument = gql`
    mutation CreateCustomerSimple($open_id: String!, $nick_name: String, $avatar: String, $sex: Int) {
  create_customers_item(
    data: {open_id: $open_id, nick_name: $nick_name, avatar: $avatar, sex: $sex, status: "active"}
  ) {
    id
    open_id
    nick_name
    avatar
    sex
    date_created
  }
}
    `;
export type BusinessCreateCustomerSimpleMutationFn = ApolloReactCommon.MutationFunction<BusinessCreateCustomerSimpleMutation, BusinessCreateCustomerSimpleMutationVariables>;

/**
 * __useCreateCustomerSimpleMutation__
 *
 * To run a mutation, you first call `useCreateCustomerSimpleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerSimpleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerSimpleMutation, { data, loading, error }] = useCreateCustomerSimpleMutation({
 *   variables: {
 *      open_id: // value for 'open_id'
 *      nick_name: // value for 'nick_name'
 *      avatar: // value for 'avatar'
 *      sex: // value for 'sex'
 *   },
 * });
 */
export function useCreateCustomerSimpleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BusinessCreateCustomerSimpleMutation, BusinessCreateCustomerSimpleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<BusinessCreateCustomerSimpleMutation, BusinessCreateCustomerSimpleMutationVariables>(CreateCustomerSimpleDocument, options);
      }
export type CreateCustomerSimpleMutationHookResult = ReturnType<typeof useCreateCustomerSimpleMutation>;
export type CreateCustomerSimpleMutationResult = ApolloReactCommon.MutationResult<BusinessCreateCustomerSimpleMutation>;
export type CreateCustomerSimpleMutationOptions = ApolloReactCommon.BaseMutationOptions<BusinessCreateCustomerSimpleMutation, BusinessCreateCustomerSimpleMutationVariables>;
export const CreateCustomerWithBoutiqueDocument = gql`
    mutation CreateCustomerWithBoutique($open_id: String!, $nick_name: String, $avatar: String, $sex: Int, $boutiqueId: ID!) {
  create_customers_item(
    data: {open_id: $open_id, nick_name: $nick_name, avatar: $avatar, sex: $sex, status: "active", boutique: {id: $boutiqueId}}
  ) {
    id
    open_id
    nick_name
    avatar
    sex
    boutique {
      id
      name
      code
    }
    date_created
  }
}
    `;
export type BusinessCreateCustomerWithBoutiqueMutationFn = ApolloReactCommon.MutationFunction<BusinessCreateCustomerWithBoutiqueMutation, BusinessCreateCustomerWithBoutiqueMutationVariables>;

/**
 * __useCreateCustomerWithBoutiqueMutation__
 *
 * To run a mutation, you first call `useCreateCustomerWithBoutiqueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerWithBoutiqueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerWithBoutiqueMutation, { data, loading, error }] = useCreateCustomerWithBoutiqueMutation({
 *   variables: {
 *      open_id: // value for 'open_id'
 *      nick_name: // value for 'nick_name'
 *      avatar: // value for 'avatar'
 *      sex: // value for 'sex'
 *      boutiqueId: // value for 'boutiqueId'
 *   },
 * });
 */
export function useCreateCustomerWithBoutiqueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BusinessCreateCustomerWithBoutiqueMutation, BusinessCreateCustomerWithBoutiqueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<BusinessCreateCustomerWithBoutiqueMutation, BusinessCreateCustomerWithBoutiqueMutationVariables>(CreateCustomerWithBoutiqueDocument, options);
      }
export type CreateCustomerWithBoutiqueMutationHookResult = ReturnType<typeof useCreateCustomerWithBoutiqueMutation>;
export type CreateCustomerWithBoutiqueMutationResult = ApolloReactCommon.MutationResult<BusinessCreateCustomerWithBoutiqueMutation>;
export type CreateCustomerWithBoutiqueMutationOptions = ApolloReactCommon.BaseMutationOptions<BusinessCreateCustomerWithBoutiqueMutation, BusinessCreateCustomerWithBoutiqueMutationVariables>;
export const UpdateCustomerDocument = gql`
    mutation UpdateCustomer($id: ID!, $nick_name: String, $avatar: String, $sex: Int) {
  update_customers_item(
    id: $id
    data: {nick_name: $nick_name, avatar: $avatar, sex: $sex}
  ) {
    id
    nick_name
    avatar
    sex
    date_updated
  }
}
    `;
export type BusinessUpdateCustomerMutationFn = ApolloReactCommon.MutationFunction<BusinessUpdateCustomerMutation, BusinessUpdateCustomerMutationVariables>;

/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      nick_name: // value for 'nick_name'
 *      avatar: // value for 'avatar'
 *      sex: // value for 'sex'
 *   },
 * });
 */
export function useUpdateCustomerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BusinessUpdateCustomerMutation, BusinessUpdateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<BusinessUpdateCustomerMutation, BusinessUpdateCustomerMutationVariables>(UpdateCustomerDocument, options);
      }
export type UpdateCustomerMutationHookResult = ReturnType<typeof useUpdateCustomerMutation>;
export type UpdateCustomerMutationResult = ApolloReactCommon.MutationResult<BusinessUpdateCustomerMutation>;
export type UpdateCustomerMutationOptions = ApolloReactCommon.BaseMutationOptions<BusinessUpdateCustomerMutation, BusinessUpdateCustomerMutationVariables>;
export const CreateVisitWithFullDataDocument = gql`
    mutation CreateVisitWithFullData($customerData: create_customers_input!, $boutiqueData: create_boutiques_input!) {
  create_visits_item(data: {customer: $customerData, boutique: $boutiqueData}) {
    id
    date_created
    customer {
      id
      nick_name
    }
    boutique {
      id
      name
    }
  }
}
    `;
export type BusinessCreateVisitWithFullDataMutationFn = ApolloReactCommon.MutationFunction<BusinessCreateVisitWithFullDataMutation, BusinessCreateVisitWithFullDataMutationVariables>;

/**
 * __useCreateVisitWithFullDataMutation__
 *
 * To run a mutation, you first call `useCreateVisitWithFullDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVisitWithFullDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVisitWithFullDataMutation, { data, loading, error }] = useCreateVisitWithFullDataMutation({
 *   variables: {
 *      customerData: // value for 'customerData'
 *      boutiqueData: // value for 'boutiqueData'
 *   },
 * });
 */
export function useCreateVisitWithFullDataMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<BusinessCreateVisitWithFullDataMutation, BusinessCreateVisitWithFullDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<BusinessCreateVisitWithFullDataMutation, BusinessCreateVisitWithFullDataMutationVariables>(CreateVisitWithFullDataDocument, options);
      }
export type CreateVisitWithFullDataMutationHookResult = ReturnType<typeof useCreateVisitWithFullDataMutation>;
export type CreateVisitWithFullDataMutationResult = ApolloReactCommon.MutationResult<BusinessCreateVisitWithFullDataMutation>;
export type CreateVisitWithFullDataMutationOptions = ApolloReactCommon.BaseMutationOptions<BusinessCreateVisitWithFullDataMutation, BusinessCreateVisitWithFullDataMutationVariables>;