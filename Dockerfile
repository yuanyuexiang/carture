
# =============================================================================
# Multi-stage Dockerfile for Expo Web Application
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: Dependencies (缓存层优化)
# -----------------------------------------------------------------------------
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

# 复制依赖文件
COPY package.json package-lock.json* ./

# 安装依赖 (使用 npm ci 确保可重现构建)
RUN npm ci --only=production && npm cache clean --force

# -----------------------------------------------------------------------------
# Stage 2: Builder (构建阶段)
# -----------------------------------------------------------------------------
FROM node:18-alpine AS builder

WORKDIR /app

# 复制依赖
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json* ./

# 安装所有依赖（包括 devDependencies）
RUN npm ci

# 复制源代码
COPY . .

# 生成 GraphQL 类型
RUN npm run codegen

# 构建 Expo Web 静态资源
RUN npm run export:web

# 验证构建输出
RUN ls -la dist/ || echo "Build output in different location"

# -----------------------------------------------------------------------------
# Stage 3: Production Runner (生产环境)
# -----------------------------------------------------------------------------
FROM nginx:1.25-alpine AS runner

# 安装必要的工具
RUN apk add --no-cache curl

# 创建非 root 用户
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

WORKDIR /usr/share/nginx/html

# 清理默认文件
RUN rm -rf ./*

# 复制构建产物 (Expo Web 输出到 dist 目录)
COPY --from=builder /app/dist ./

# 复制 nginx 配置
COPY --chown=nextjs:nodejs nginx.conf /etc/nginx/nginx.conf

# 设置权限
RUN chown -R nextjs:nodejs /usr/share/nginx/html && \
    chown -R nextjs:nodejs /var/cache/nginx && \
    chown -R nextjs:nodejs /var/log/nginx && \
    chown -R nextjs:nodejs /etc/nginx/conf.d

# 创建 nginx 运行所需的目录
RUN touch /var/run/nginx.pid && \
    chown -R nextjs:nodejs /var/run/nginx.pid

# 切换到非 root 用户
USER nextjs

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

# 暴露端口
EXPOSE 80

# 启动命令
CMD ["nginx", "-g", "daemon off;"]
