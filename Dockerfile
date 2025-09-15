# ===========================
# Stage 1: Build Expo Web
# ===========================
FROM node:18-alpine AS builder
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN NODE_ENV=production EXPO_PLATFORM=web npm run build:web

# ===========================
# Stage 2: Nginx Serve
# ===========================
FROM nginx:1.25-alpine AS runner

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=builder /app/dist ./

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
