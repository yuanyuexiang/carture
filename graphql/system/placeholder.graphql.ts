import { gql } from '@apollo/client';

// 系统查询占位文件
// 目前没有系统查询需求

// 占位查询，防止代码生成器报错
export const SYSTEM_PLACEHOLDER = gql`
  query SystemPlaceholder {
    # 占位查询
    __typename
  }
`;