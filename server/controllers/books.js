const Book = require('../models').Book;
const Note = require('../models').Note;
const searchQuery = require('./searchQuery').search;

module.exports = {
  create(req, res) {
    return Book
      .create({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
      })
      .then(book => res.status(201).send(book))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Book
      .all()
      .then(books => {
        if  (!Object.keys(req.query).length) {
          return res.status(200).send(books);
        } else {
          return res.status(200).send(books.filter(searchQuery(req.query)))
        }
      })
      .catch(error => res.status(400).send(error))
  },
  find(req, res) {
    return Book
      .findById(req.params.bookId, {
        include: [{
          model: Note,
          as: 'notes',
        }],
      })
      .then(book => {
        if (!book) {
          return res.status(404).send({
            message: 'Book Not Found',
          });
        }
        return res.status(200).send(book);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res, next) {
    return Book
      .update(
        {status: req.body.status},
        {returning: true, where: {id: req.params.bookId} }
      )
      .then(([ rowsUpdate, [updatedBook] ]) => {
        res.json(updatedBook)
      })
      .catch(next);
  }
};
