import { gql } from '@apollo/client';

// ================ 查询 ================

// 根据用户ID获取店铺信息
export const GET_USER_BOUTIQUE = gql`
  query GetUserBoutique($userId: ID!) {
    boutiques(filter: { user: { id: { _eq: $userId } } }, limit: 1) {
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

// 获取所有店铺列表
export const GET_BOUTIQUES = gql`
  query GetBoutiques($filter: boutiques_filter, $limit: Int, $offset: Int, $sort: [String]) {
    boutiques(
      filter: $filter
      limit: $limit
      offset: $offset
      sort: $sort
    ) {
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

// ================ Mutations ================

// 更新店铺信息
export const UPDATE_BOUTIQUE = gql`
  mutation UpdateBoutique($id: ID!, $data: update_boutiques_input!) {
    update_boutiques_item(id: $id, data: $data) {
      id
      name
      address
      main_image
      images
      stars
      status
      date_updated
    }
  }
`;

// 创建新店铺
export const CREATE_BOUTIQUE = gql`
  mutation CreateBoutique($data: create_boutiques_input!) {
    create_boutiques_item(data: $data) {
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

// ================ TypeScript 类型定义 ================

export interface Boutique {
  id: string;
  name: string;
  address?: string;
  main_image?: string;
  images?: any;
  stars?: number;
  status?: string;
  date_created?: string;
  date_updated?: string;
}

// 查询数据类型
export interface GetUserBoutiqueData {
  boutiques: Boutique[];
}

export interface GetUserBoutiqueVariables {
  userId: string;
}

export interface GetBoutiquesData {
  boutiques: Boutique[];
}

export interface GetBoutiquesVariables {
  filter?: any;
  limit?: number;
  offset?: number;
  sort?: string[];
}

// Mutation数据类型
export interface UpdateBoutiqueData {
  update_boutiques_item: Boutique;
}

export interface UpdateBoutiqueVariables {
  id: string;
  data: {
    name?: string;
    address?: string;
    main_image?: string;
    images?: any;
    stars?: number;
    status?: string;
  };
}

export interface CreateBoutiqueData {
  create_boutiques_item: Boutique;
}

export interface CreateBoutiqueVariables {
  data: {
    name: string;
    address?: string;
    main_image?: string;
    images?: any;
    stars?: number;
    status?: string;
    user?: string;
  };
}
