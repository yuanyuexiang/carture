import { gql } from '@apollo/client';

export const CREATE_PRODUCT_VIEW = gql`
  mutation CreateProductView($data: create_views_input!) {
    create_views_item(data: $data) {
      id
      date_created
    }
  }
`;

export const GET_CUSTOMER_BY_OPENID_AND_BOUTIQUE = gql`
  query GetCustomerByOpenidAndBoutique($open_id: String!, $boutique_id: GraphQLStringOrFloat!) {
    customers(filter: { 
      open_id: { _eq: $open_id }, 
      boutique: { id: { _eq: $boutique_id } }
    }) {
      id
      open_id
      nick_name
    }
  }
`;

export const GET_CUSTOMER_PRODUCT_VIEWS = gql`
  query GetCustomerProductViews($customer_id: GraphQLStringOrFloat!) {
    views(filter: { customer: { id: { _eq: $customer_id } } }) {
      id
      date_created
      product {
        id
        name
      }
    }
  }
`;

export const GET_PRODUCT_VIEW_STATS = gql`
  query GetProductViewStats($product_id: GraphQLStringOrFloat!) {
    views_aggregated(filter: { product: { id: { _eq: $product_id } } }) {
      count {
        id
      }
    }
  }
`;

export const GET_BOUTIQUE_PRODUCT_VIEW_STATS = gql`
  query GetBoutiqueProductViewStats($boutique_id: GraphQLStringOrFloat!) {
    views_aggregated(filter: { boutique: { id: { _eq: $boutique_id } } }) {
      count {
        id
      }
    }
  }
`;
