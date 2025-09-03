import { gql } from '@apollo/client';

// 从普通端点根据用户ID获取店铺信息
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

// TypeScript 类型定义 (这些会被codegen生成，这里仅作参考)
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
