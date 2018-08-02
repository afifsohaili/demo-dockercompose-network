FROM node:8

ENV NODE_ENV test

RUN mkdir /app
WORKDIR /app

COPY . .

RUN yarn cache clean && yarn install --pure-lockfile

CMD ["node", "-v"]
