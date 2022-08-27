FROM node:18.7-buster as build

RUN corepack enable

WORKDIR /app
COPY . .
RUN yarn install

EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]
