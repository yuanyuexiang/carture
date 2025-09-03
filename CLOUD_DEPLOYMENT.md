# 云部署配置指南

## 概述

当应用部署到云端时，所有域名和端点都通过环境变量配置，代码中不包含任何硬编码的域名。

## 架构说明

### 云部署架构
```
客户端 -> 静态文件服务器 (nginx) -> 直接访问 API 服务器
```

特点：
- ✅ 前端直接连接API，无需代理
- ✅ nginx仅用于静态文件服务  
- ✅ 所有配置通过环境变量动态设置
- ✅ 支持SPA路由

### 必需的环境变量

生产环境**必须**设置以下环境变量：

```bash
# 应用域名
DOMAIN_NAME=your-domain.com

# API端点
API_URL=https://your-api-domain.com/graphql

# Directus CMS端点  
DIRECTUS_URL=https://your-cms-domain.com

# Docker镜像
DOCKER_IMAGE_TAG=your-registry/carture:latest
```

## Docker 部署

### 1. 设置环境变量

在您的服务器上创建 `.env` 文件：

```bash
# .env
API_URL=https://your-api-domain.com/graphql
DIRECTUS_URL=https://your-cms-domain.com
DOCKER_IMAGE_TAG=your-registry/carture:latest
```

### 2. 更新 docker-compose.yaml

应用会自动使用环境变量中的配置：

```yaml
environment:
  - EXPO_PUBLIC_API_URL=${API_URL:-https://carture.matrix-net.tech/graphql}
  - EXPO_PUBLIC_DIRECTUS_URL=${DIRECTUS_URL:-https://carture.matrix-net.tech}
```

### 3. 更新域名配置

修改 Traefik 标签中的域名：

```yaml
labels:
  - "traefik.http.routers.carture.rule=Host(\`your-domain.com\`)"
```

## 部署步骤

### 1. 准备环境
```bash
# 克隆项目
git clone your-repo
cd carture

# 设置环境变量
cp .env.example .env
# 编辑 .env 文件，设置正确的 API_URL 和 DIRECTUS_URL
```

### 2. 构建镜像
```bash
# 构建 Docker 镜像
docker build -t your-registry/carture:latest .

# 推送到镜像仓库
docker push your-registry/carture:latest
```

### 3. 部署
```bash
# 启动服务
docker-compose up -d
```

## 配置示例

### 示例 1: 单域名部署
如果 API 和前端使用同一个域名：

```bash
API_URL=https://myapp.com/api/graphql
DIRECTUS_URL=https://myapp.com/cms
```

### 示例 2: 多域名部署
如果使用不同的子域名：

```bash
API_URL=https://api.myapp.com/graphql
DIRECTUS_URL=https://cms.myapp.com
```

### 示例 3: 使用现有的 matrix-net.tech 基础设施
如果继续使用 matrix-net.tech 基础设施：

```bash
API_URL=https://carture.matrix-net.tech/graphql
DIRECTUS_URL=https://carture.matrix-net.tech
```

## 注意事项

1. **HTTPS 必须**: 生产环境必须使用 HTTPS
2. **CORS 配置**: 确保后端 API 正确配置 CORS
3. **环境变量**: `EXPO_PUBLIC_` 前缀的变量会被打包到客户端
4. **域名证书**: 确保 SSL 证书正确配置
5. **CDN**: 建议为静态资源配置 CDN

## 故障排除

### 检查环境变量
```bash
# 在容器内检查环境变量
docker exec carture env | grep EXPO_PUBLIC
```

### 查看应用日志
```bash
# 查看应用启动日志
docker logs carture
```

### 测试 API 连接
```bash
# 测试 GraphQL 端点
curl -X POST https://your-api-domain.com/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ __typename }"}'
```
