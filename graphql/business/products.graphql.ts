import { gql } from '@apollo/client';

// ================ 查询 ================

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

// 获取商品详情
export const GET_PRODUCT_DETAIL = gql`
  query GetProductDetail($id: ID!) {
    products_by_id(id: $id) {
      id
      name
      subtitle
      description
      price
      market_price
      stock
      main_image
      images
      brand
      category_id { 
        id 
        name 
        description 
      }
    }
  }
`;

// ================ TypeScript 类型定义 ================

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  description?: string;
  price: number;
  market_price?: number;
  stock?: number;
  main_image?: string;
  images?: any;
  brand?: string;
  category_id?: Category;
}

// 查询数据类型
export interface GetCategoriesData {
  categories: Category[];
}

export interface GetProductsData {
  products: Product[];
}

export interface GetProductsVariables {
  filter?: any;
  limit?: number;
  offset?: number;
  sort?: string[];
}

export interface GetProductDetailData {
  products_by_id: Product;
}

export interface GetProductDetailVariables {
  id: string;
}
