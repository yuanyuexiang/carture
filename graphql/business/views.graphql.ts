import { gql } from '@apollo/client';

// 创建商品浏览记录
export const CREATE_PRODUCT_VIEW = gql`
  mutation CreateProductView($data: create_views_input!) {
    create_views_item(data: $data) {
      id
      date_created
      customer {
        id
        open_id
        nick_name
      }
      product {
        id
        name
        brand
      }
      boutique {
        id
        name
      }
      user_created
    }
  }
`;

// 根据 OpenID 和精品店获取客户信息（重用现有查询）
export const GET_CUSTOMER_BY_OPENID_AND_BOUTIQUE = gql`
  query GetCustomerByOpenidAndBoutique($open_id: String!, $boutique_id: ID!) {
    customers(filter: { open_id: { _eq: $open_id }, boutique_id: { _eq: $boutique_id } }) {
      id
      open_id
      nick_name
      avatar_url
      boutique_id
      date_created
    }
  }
`;

// 获取客户的商品浏览历史
export const GET_CUSTOMER_PRODUCT_VIEWS = gql`
  query GetCustomerProductViews($customer_id: ID!, $limit: Int, $offset: Int) {
    views(
      filter: { customer: { _eq: $customer_id } }
      sort: ["-date_created"]
      limit: $limit
      offset: $offset
    ) {
      id
      date_created
      product {
        id
        name
        brand
        main_image
      }
      boutique {
        id
        name
      }
    }
  }
`;

// 获取商品的浏览统计
export const GET_PRODUCT_VIEW_STATS = gql`
  query GetProductViewStats($product_id: ID!, $boutique_id: ID!) {
    views_aggregated(
      filter: { 
        product: { _eq: $product_id },
        boutique: { _eq: $boutique_id }
      }
    ) {
      count {
        id
      }
    }
    views(
      filter: { 
        product: { _eq: $product_id },
        boutique: { _eq: $boutique_id }
      }
      sort: ["-date_created"]
      limit: 10
    ) {
      id
      date_created
      customer {
        id
        nick_name
        avatar
      }
    }
  }
`;

// 获取精品店的商品浏览统计
export const GET_BOUTIQUE_PRODUCT_VIEW_STATS = gql`
  query GetBoutiqueProductViewStats($boutique_id: ID!, $date_from: String, $date_to: String) {
    views_aggregated(
      filter: { 
        boutique: { _eq: $boutique_id },
        date_created: { _gte: $date_from, _lte: $date_to }
      }
      groupBy: ["product"]
    ) {
      count {
        id
      }
      group
    }
    views(
      filter: { 
        boutique: { _eq: $boutique_id },
        date_created: { _gte: $date_from, _lte: $date_to }
      }
      sort: ["-date_created"]
    ) {
      id
      date_created
      customer {
        id
        nick_name
      }
      product {
        id
        name
        brand
      }
    }
  }
`;