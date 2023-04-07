# Use the official Node.js 16 image as a parent image
FROM node:16-alpine as builder

# Set the working directory to /app
WORKDIR /app
FROM node:18-alpine AS build
WORKDIR /usr/src/app 
copy package*.json ./
RUN  npm install
COPY . .
RUN npm run build --prod
RUN  ls  -alt

FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist/cygnus-web /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80