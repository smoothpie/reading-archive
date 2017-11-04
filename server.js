const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/routes')(app);

app.get("/", (req, res) => {
res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});

app.use(express.static(path.join(__dirname, '/dist')));

module.exports = app;
