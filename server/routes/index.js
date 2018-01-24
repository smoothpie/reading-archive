const router = require('express').Router();
const booksController = require('../controllers').books;
const notesController = require('../controllers').notes;
const axios = require ('axios');
const parseString = require('xml2js').parseString;

router.get('/', booksController.list);
router.get('/:bookId', booksController.find);
router.post('/', booksController.create);
router.put('/:bookId', booksController.update);
router.delete('/:bookId', booksController.destroy);

router.get('/:bookId/notes', notesController.list);
router.post('/:bookId/notes', notesController.create);
router.delete('/:bookId/notes/:noteId', notesController.destroy);

router.get('/:bookTitle/info', (req, res) => {
  axios.get(`https://www.goodreads.com/search/index.xml?key=7RMNsRruX8pKnTrGp3TzrA&q=${req.params.bookTitle}`)
    .then(result => parseString(result.data, (err, goodreadsResult) => {
      res.json({goodreadsResult});
    }))
    .catch(error => {
      console.log(req.params.bookTitle)
    })

})

module.exports = router;
