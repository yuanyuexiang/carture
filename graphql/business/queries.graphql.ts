import { gql } from '@apollo/client';

// 直接通过 boutique_id 获取店铺信息
export const GET_BOUTIQUE_BY_ID = gql`
  query GetBoutiqueById($boutiqueId: GraphQLStringOrFloat!) {
    boutiques(filter: { id: { _eq: $boutiqueId } }, limit: 1) {
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

// 直接通过 boutique_id 获取该店铺的分类
export const GET_CATEGORIES_BY_BOUTIQUE = gql`
  query GetCategoriesByBoutique($boutiqueFilter: categories_filter) {
    categories(filter: $boutiqueFilter) {
      id
      name
      description
    }
  }
`;

// 获取产品查询
export const GET_PRODUCTS = gql`
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

// 获取单个产品详情
export const GET_PRODUCT_BY_ID = gql`
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

// 用户店铺查询
export const GET_USER_BOUTIQUE = gql`
  query GetUserBoutique($userId: ID!) {
    boutiques(filter: { user_created: { id: { _eq: $userId } } }, limit: 1) {
      id
      name
      address
      main_image
      stars
      status
    }
  }
`;