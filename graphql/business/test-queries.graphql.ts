import { gql } from '@apollo/client';

// 测试查询：获取所有商品并显示其店铺信息
export const GET_ALL_PRODUCTS_WITH_BOUTIQUE = gql`
  query GetAllProductsWithBoutique($limit: Int) {
    products(limit: $limit) {
      id
      name
      boutique_id {
        id
        name
      }
    }
  }
`;

// 测试查询：获取所有店铺
export const GET_ALL_BOUTIQUES = gql`
  query GetAllBoutiques {
    boutiques {
      id
      name
      status
    }
  }
`;