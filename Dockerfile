# stage1 as builder
# FROM node:10-alpine as builder
FROM node:12-alpine3.14 as builder
# FROM node:14-alpine3.14 as builder
# FROM node:lts-alpine3.14 as builder

# copy the package.json to install dependencies
COPY ./package.json ./yarn.lock ./

# Install the dependencies and make the folder
RUN npm install yarn -g
RUN yarn install && mkdir /react-web && mv ./node_modules ./react-web

WORKDIR /react-web

COPY . .

# Build the project and copy the files
RUN yarn build


FROM nginx:alpine

#!/bin/sh

COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /react-web/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]