# Docker 部署指南

## 📋 概述

本项目支持 Docker 容器化部署，包含了生产环境和开发环境的完整配置。

## 🚀 快速开始

### 生产环境部署

```bash
# 1. 构建镜像
docker build -t carture:latest .

# 2. 运行容器
docker run -d \
  --name carture-web \
  -p 80:80 \
  --restart unless-stopped \
  carture:latest

# 3. 检查状态
curl http://localhost/health
```

### 使用 Docker Compose

```bash
# 生产环境
docker-compose up -d

# 开发环境
docker-compose --profile dev up -d carture-dev
```

## 🔧 配置说明

### Dockerfile 特性

- ✅ **多阶段构建**：优化镜像大小和构建速度
- ✅ **依赖缓存**：分离依赖安装层，提高构建效率
- ✅ **安全性**：非 root 用户运行
- ✅ **健康检查**：内置健康检查端点
- ✅ **生产优化**：Nginx + Gzip + 缓存

### 环境变量

| 变量名 | 描述 | 默认值 |
|--------|------|--------|
| `NODE_ENV` | 环境模式 | `production` |
| `PORT` | 应用端口 | `80` |

### 目录结构

```
/
├── Dockerfile              # 生产环境构建文件
├── Dockerfile.dev          # 开发环境构建文件
├── docker-compose.yaml     # Docker Compose 配置
├── .dockerignore           # Docker 忽略文件
├── nginx.conf              # Nginx 配置
└── scripts/
    └── docker-build.sh     # 构建脚本
```

## 📊 性能优化

### 镜像大小优化

- 使用 Alpine Linux 基础镜像
- 多阶段构建，只保留生产依赖
- 清理不必要的缓存和临时文件

### 运行时优化

- Nginx Gzip 压缩
- 静态资源缓存
- 健康检查配置
- 资源限制配置

## 🔍 监控和日志

### 健康检查

```bash
# 检查容器健康状态
docker ps
curl http://localhost/health
```

### 日志查看

```bash
# 查看容器日志
docker logs carture-web

# 实时跟踪日志
docker logs -f carture-web
```

### 性能监控

```bash
# 查看资源使用情况
docker stats carture-web
```

## 🛠 故障排除

### 常见问题

1. **构建失败**
   ```bash
   # 检查依赖是否完整
   npm audit
   
   # 清理 Docker 缓存
   docker system prune -a
   ```

2. **应用无法访问**
   ```bash
   # 检查端口映射
   docker port carture-web
   
   # 检查 Nginx 配置
   docker exec carture-web nginx -t
   ```

3. **性能问题**
   ```bash
   # 检查资源使用
   docker stats
   
   # 分析镜像大小
   docker history carture:latest
   ```

## 🚢 生产部署最佳实践

### 1. 使用构建脚本

```bash
# 构建并测试
./scripts/docker-build.sh latest

# 构建并推送到仓库
./scripts/docker-build.sh v1.0.0 push
```

### 2. 环境配置

```yaml
# docker-compose.prod.yaml
version: '3.8'
services:
  carture:
    image: carture:latest
    restart: unless-stopped
    ports:
      - "80:80"
    environment:
      - NODE_ENV=production
    deploy:
      resources:
        limits:
          memory: 512M
        reservations:
          memory: 256M
```

### 3. 负载均衡配置

如果使用 Traefik 或 Nginx 作为反向代理：

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.carture.rule=Host(\`your-domain.com\`)"
  - "traefik.http.routers.carture.tls=true"
```

### 4. 备份和恢复

```bash
# 导出镜像
docker save carture:latest > carture-latest.tar

# 导入镜像
docker load < carture-latest.tar
```

## 📈 扩展部署

### Kubernetes 部署

可以基于 Docker 镜像创建 Kubernetes 部署配置：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: carture-web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: carture-web
  template:
    metadata:
      labels:
        app: carture-web
    spec:
      containers:
      - name: carture
        image: carture:latest
        ports:
        - containerPort: 80
        livenessProbe:
          httpGet:
            path: /health
            port: 80
          initialDelaySeconds: 30
          periodSeconds: 10
```

### CI/CD 集成

可以与 GitHub Actions、GitLab CI 等集成：

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build and Deploy
        run: |
          docker build -t carture:${{ github.sha }} .
          docker push registry/carture:${{ github.sha }}
```

---

遵循这个部署指南可以确保应用的稳定、安全和高效部署。
