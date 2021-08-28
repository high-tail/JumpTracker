FROM node:14.15.0-alpine3.10
WORKDIR /usr/src/app

COPY ["jump-tracker/package.json", "jump-tracker/yarn.lock", "./"]
RUN npm install
COPY . .