import { gql } from '@apollo/client';

// ================ 查询 ================

// 获取当前用户完整信息
export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    users_me {
      id
      email
      first_name
      last_name
      location
      title
      description
      tags
      avatar {
        id
        filename_download
        title
        type
        width
        height
        filesize
      }
      language
      status
      role {
        id
        name
        description
        icon
      }
      last_access
      last_page
      provider
      email_notifications
      appearance
      theme_dark
      theme_light
      text_direction
    }
    
    # 获取当前用户权限信息
    permissions_me
    
    # 获取当前用户所有角色
    roles_me {
      id
      name
      description
      icon
    }
  }
`;

// 获取用户基本信息（简化版）
export const GET_USER_BASIC = gql`
  query GetUserBasic {
    users_me {
      id
      email
      first_name
      last_name
    }
  }
`;

// ================ Mutations ================

// 更新当前用户信息
export const UPDATE_CURRENT_USER = gql`
  mutation UpdateCurrentUser($data: update_directus_users_input!) {
    update_users_me(data: $data) {
      id
      email
      first_name
      last_name
      location
      title
      description
      tags
      avatar {
        id
        filename_download
      }
      language
      status
      email_notifications
      appearance
      theme_dark
      theme_light
      text_direction
    }
  }
`;

// ================ TypeScript 类型定义 ================

export interface DirectusFile {
  id: string;
  filename_download: string;
  title?: string;
  type?: string;
  width?: number;
  height?: number;
  filesize?: number;
}

export interface DirectusRole {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}

export interface DirectusUser {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  location?: string;
  title?: string;
  description?: string;
  tags?: any;
  avatar?: DirectusFile;
  language?: string;
  status?: string;
  role?: DirectusRole;
  last_access?: string;
  last_page?: string;
  provider?: string;
  email_notifications?: boolean;
  appearance?: string;
  theme_dark?: string;
  theme_light?: string;
  text_direction?: string;
}

// 查询数据类型
export interface GetCurrentUserData {
  users_me: DirectusUser;
  permissions_me: any;
  roles_me: DirectusRole[];
}

export interface GetUserBasicData {
  users_me: {
    id: string;
    email: string;
    first_name?: string;
    last_name?: string;
  };
}

// Mutation数据类型
export interface UpdateCurrentUserData {
  update_users_me: DirectusUser;
}

export interface UpdateCurrentUserVariables {
  data: {
    email?: string;
    first_name?: string;
    last_name?: string;
    location?: string;
    title?: string;
    description?: string;
    tags?: any;
    language?: string;
    email_notifications?: boolean;
    appearance?: string;
    theme_dark?: string;
    theme_light?: string;
    text_direction?: string;
  };
}
