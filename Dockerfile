FROM node:7

WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 3000

CMD npm run migrate && npm start
