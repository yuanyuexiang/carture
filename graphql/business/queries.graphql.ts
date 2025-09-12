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
      date_updated
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
      boutique_id {
        id
        name
      }
    }
  }
`;

// 获取分类查询（支持店铺过滤）- 保持兼容性
export const GET_CATEGORIES_WITH_FILTER = gql`
  query GetCategoriesWithFilter($filter: categories_filter) {
    categories(filter: $filter) {
      id
      name
      description
    }
  }
`;

// 获取所有分类查询（不过滤）
export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      description
    }
  }
`;

// 获取产品查询（已存在，保持一致性）
export const GET_PRODUCTS = gql`
  query GetProducts($filter: products_filter, $limit: Int, $offset: Int, $sort: [String]) {
    products(filter: $filter, limit: $limit, offset: $offset, sort: $sort) {
      id
      name
      subtitle
      description
      price
      main_image
      images
      rating_avg
      category_id {
        id
        name
        description
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
        description
      }
    }
  }
`;

// 保留用户店铺查询以便兼容性（如果仍需要）
export const GET_USER_BOUTIQUE = gql`
  query GetUserBoutique($userId: ID!) {
    boutiques(filter: { user_created: { id: { _eq: $userId } } }, limit: 1) {
      id
      name
      address
      main_image
      images
      stars
      status
      date_created
      date_updated
    }
  }
`;