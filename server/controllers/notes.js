const Note = require('../models').Note;
const searchQuery = require('./searchQuery.js').search;

module.exports = {
  create(req, res) {
	  return Note
	    .create({
		    content: req.body.content,
        bookId: req.body.bookId
	    })
	    .then(note => res.status(201).send(note))
	    .catch(error => res.status(400).send(error));
  },
  list(req, res) {
	  return Note
	    .all({
        where: { bookId: req.params.bookId }
      })
	    .then(notes => res.status(200).send(notes))
	    .catch(error => res.status(400).send(error))
  },
  find(req, res) {
    return Note
      .findById(req.params.noteId)
      .then(note => {
        if (!note) {
          return res.status(404).send({
            message: 'Note Not Found',
          });
        }
        return res.status(200).send(note);
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Note
      .findById(req.params.noteId)
      .then(note => {
        if (!note) {
          return res.status(404).send({
            message: 'Note Not Found',
          });
        }
        return note
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error));
  }
}
