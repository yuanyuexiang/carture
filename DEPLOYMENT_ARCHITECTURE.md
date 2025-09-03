# 简化部署架构说明

## 架构变更

已移除 `nginx.conf` 文件，现在使用更简单的部署架构：

### 之前的架构（已废弃）
```
客户端 -> nginx (代理) -> API 服务器
```

### 当前架构（推荐）
```
客户端 -> nginx (静态文件) + 直接连接 -> API 服务器
```

## 优势

1. **简化配置**: 无需复杂的nginx代理配置
2. **更好的性能**: 前端直接连接API，减少中间层
3. **环境隔离**: 所有端点通过环境变量配置
4. **云原生**: 适合现代云部署环境

## 配置要求

只需要设置这几个环境变量：

```bash
DOMAIN_NAME=your-app.com
API_URL=https://api.your-app.com/graphql
DIRECTUS_URL=https://cms.your-app.com
```

## nginx配置

现在nginx只负责：
- 静态文件服务
- SPA路由支持  
- 基本缓存策略
- 健康检查端点

配置已内置在Dockerfile中，无需额外文件。
