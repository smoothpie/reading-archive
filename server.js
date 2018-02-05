const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const host = process.env.HOST ? process.env.HOST : 'localhost';
const port = process.env.PORT ? process.env.PORT : 3000;
const path = require('path');
const routes = require('./server/routes/index');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-PINGOTHER, Content-Type');
  next();
});

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/books', routes);

app.use(express.static(path.join(__dirname, './dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + './dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`The server is running at http://${host}:${port}/`);
});
