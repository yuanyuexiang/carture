# Copilot 开发指导文件（React + Expo + Directus GraphQL 项目）

本项目基于 **React + Expo + Expo Router + Directus GraphQL** 技术栈。  
所有由 GitHub Copilot 生成的代码必须遵循以下规则：

---

## 0. 提前告知
- **开发强制要求**：
  - 每次开发前，一定要总体上分析项目，然后再开发
- **graphql**：
  - 有两个端点，一个是普通 /graphql,另一个是系统相关(主要使用的是用户) /graphql/system。

---

## 1. 基础规范
- **代码风格**：
  - 使用 **函数式组件 + Hooks**，禁止 Class 组件。
  - 强制使用 ESLint + Prettier 格式化。

---

## 2. GraphQL 相关规则
- **客户端**：
  - 普通数据用 `/graphql`，系统管理类请求用 `/graphql/system`。
  - 所有请求必须处理 **loading / error / empty state**。