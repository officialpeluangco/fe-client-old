# FROM node:20-alpine AS builder

# # Add a work directory
# WORKDIR /app

# # Cache and Install dependencies
# COPY package*.json .
# RUN npm i

# # Set environment to production
# ENV NODE_ENV production

# # Copy app files
# COPY . .

# # Build the app
# RUN npm run build

# # Bundle static assets with nginx
# FROM nginx:1.24.0-alpine as production
# ENV NODE_ENV production

# # Copy built assets from builder
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Add your nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expose port
# EXPOSE 80

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]

FROM node:22.6.0

WORKDIR /peluang-client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "--port", "3000"]
