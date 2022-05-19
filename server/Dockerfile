FROM node:16-alpine

WORKDIR /prometheus/server

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]