import { gql } from '@apollo/client';

// 获取商品分类
export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      description
    }
  }
`;

// 获取商品列表
export const GET_PRODUCTS = gql`
  query GetProducts($filter: products_filter, $limit: Int, $offset: Int, $sort: [String]) {
    products(
      filter: $filter
      limit: $limit
      offset: $offset
      sort: $sort
    ) {
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

// 根据ID获取单个商品详情
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
