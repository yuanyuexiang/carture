# Copilot 开发指导文件（React + Expo + Directus GraphQL 项目）

本项目基于 **React + Expo + Expo Router + Directus GraphQL** 技术栈。  
所有由 GitHub Copilot 生成的代码必须遵循以下规则：

---

## 0. 提前告知
- **开发强制要求**：
  - 每次开发前，一定要总体上分析项目，然后再开发
- **GraphQL 双端点架构**：
  - **业务端点** `/graphql` - 商品、订单、分类、店铺等业务数据
  - **系统端点** `/graphql/system` - 用户管理、权限、认证等系统数据

---

## 1. 基础规范
- **代码风格**：
  - 使用 **函数式组件 + Hooks**，禁止 Class 组件。
  - 强制使用 ESLint + Prettier 格式化。
- **项目结构**：
  - `app/`：页面，使用 **Expo Router**。
  - `components/`：复用 UI 组件。
  - `graphql/`：GraphQL 客户端与查询语句。
  - `store/`：状态管理（Zustand）。
- **命名约定**：
  - GraphQL 查询文件：`<entity>.graphql.ts`。
  - 组件：大驼峰命名；文件：小写中划线。

---

## 2. GraphQL 相关规则

### 2.1 文件结构规范
```
graphql/
├── business/                    # 业务端点 (/graphql)
│   ├── products.graphql.ts     # 商品相关
│   ├── boutiques.graphql.ts    # 店铺相关  
│   └── categories.graphql.ts   # 分类相关
├── system/                     # 系统端点 (/graphql/system)
│   ├── users.graphql.ts        # 用户管理
│   └── auth.graphql.ts         # 认证相关
└── index.ts                    # 统一导出
```

### 2.2 查询规范
- **客户端**：
  - 业务数据用 `/graphql`，系统管理类用 `/graphql/system`。
  - 所有请求必须处理 **loading / error / empty state**。
- **命名约定**：
  - 查询：`GET_<ENTITY>`, `GET_<ENTITY>_<ACTION>`
  - 变更：`CREATE_<ENTITY>`, `UPDATE_<ENTITY>`, `DELETE_<ENTITY>`
- **类型生成**：
  - 业务端点 → `generated/business-graphql.ts` (前缀: Business)
  - 系统端点 → `generated/system-graphql.ts` (前缀: System)