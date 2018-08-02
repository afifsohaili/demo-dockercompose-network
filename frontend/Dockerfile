FROM node:8

RUN mkdir /app
WORKDIR /app

COPY . .

RUN yarn cache clean && yarn install --pure-lockfile

EXPOSE 12011

CMD ["node", "-v"]
