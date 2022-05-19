FROM node:16-alpine

WORKDIR /prometheus/web

ENV PATH /prometheus/web/node_modules/.bin:$PATH

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
