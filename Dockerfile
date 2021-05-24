FROM node:14.16.1-alpine3.13 as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
COPY ./yarn.lock /app/
COPY ./tsconfig.json /app/
COPY ./src/ /app/src
RUN yarn install && yarn global add typescript
RUN yarn build

FROM node:14.16.1-alpine3.13

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY --from=build /app/dist/src dist

RUN yarn install --prod

CMD node dist/server.js