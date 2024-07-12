FROM node:18.20.2-alpine3.14

RUN mkdir -p /usr/app/api
WORKDIR /usr/app/api

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000