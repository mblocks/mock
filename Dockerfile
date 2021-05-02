FROM node:14-alpine

WORKDIR /app
ADD . /app
RUN yarn && yarn build
ENTRYPOINT node build/index.js
EXPOSE 8000
