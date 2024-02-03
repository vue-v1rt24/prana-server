FROM node:20-alpine

WORKDIR /app

VOLUME [ "/app" ]

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

CMD ["node", ".output/server/index.mjs"]
EXPOSE 3000