const booksController = require('../controllers').books;
const notesController = require('../controllers').notes;
import request from 'request-promise';
import { parseString } from 'xml2js';

module.exports = (app) => {

  app.post('/api/books', booksController.create);
  app.get('/api/books', booksController.list);

  app.post('/api/notes', notesController.create);
  app.get('/api/notes', notesController.list);

  app.get('/api/search', req, res) => {
	  request
	    .get(`https://www.goodreads.com/search/index.xml?key=7RMNsRruX8pKnTrGp3TzrA&q=${req.query.q}`)
	    .then(result =>
		        parseString(result, goodreadsResult) =>
		        res.json({ goodreadsResult })
		       ))
}
}
