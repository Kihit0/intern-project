# FROM node:lts-alpine AS node_base

# RUN echo "NODE Version:" && node --version
# RUN echo "NPM Version:" && npm --version

FROM trafex/php-nginx:latest

# Install composer from the official image
COPY --from=composer /usr/bin/composer /usr/bin/composer

# Install node.js
USER root
RUN apk add --update nodejs npm
USER nobody