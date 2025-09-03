import { gql } from '@apollo/client';

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
