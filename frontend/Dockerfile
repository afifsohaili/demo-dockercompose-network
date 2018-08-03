FROM node:8

ENV HOST 0.0.0.0
ENV API_URL http://backend:3030

RUN mkdir /app
WORKDIR /app

COPY . .

RUN yarn cache clean && yarn install --pure-lockfile

CMD ["node", "-v"]
