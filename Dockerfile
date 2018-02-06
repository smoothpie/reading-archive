FROM node:7

WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 80

CMD npm run migrate && npm start
