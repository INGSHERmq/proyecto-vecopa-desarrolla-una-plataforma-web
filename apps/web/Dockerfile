# Dockerfile for Vecopa Web
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY apps/web/package*.json ./apps/web/

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY apps/web/src ./apps/web/src
COPY apps/web/vite.config.ts ./apps/web/

# Build the application
RUN npm run build:web

# Serve with nginx
FROM nginx:alpine
COPY --from=0 /app/apps/web/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]