FROM node:20.9.0-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
COPY .env.production .env
RUN yarn install
RUN yarn build
EXPOSE 3000
CMD yarn start