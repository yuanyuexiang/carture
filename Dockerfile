# =============================================================================
# Multi-stage Dockerfile for Expo Web Application
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: Builder (构建阶段)
# -----------------------------------------------------------------------------
FROM node:18-alpine AS builder
RUN apk add --no-cache libc6-compat

WORKDIR /app

# 复制依赖文件
COPY package.json package-lock.json* ./

# 安装依赖（包括 devDependencies，方便构建）
RUN npm ci

# 复制源代码
COPY . .

# 生成 GraphQL 类型
RUN npm run codegen

# 构建 Expo Web 静态资源 (Metro bundler for web)
RUN npx expo export --platform web

# -----------------------------------------------------------------------------
# Stage 2: Production Runner (生产环境)
# -----------------------------------------------------------------------------
FROM nginx:1.25-alpine AS runner

RUN apk add --no-cache curl

# 创建非 root 用户
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

WORKDIR /usr/share/nginx/html

# 清理默认文件
RUN rm -rf ./*

# 复制构建产物
COPY --from=builder /app/dist ./

# Nginx 配置
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
    \
    location /health { \
        access_log off; \
        return 200 "healthy\n"; \
        add_header Content-Type text/plain; \
    } \
}' > /etc/nginx/conf.d/default.conf

# 权限设置
RUN chown -R nextjs:nodejs /usr/share/nginx/html && \
    chown -R nextjs:nodejs /var/cache/nginx && \
    chown -R nextjs:nodejs /var/log/nginx && \
    chown -R nextjs:nodejs /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nextjs:nodejs /var/run/nginx.pid

USER nextjs

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
