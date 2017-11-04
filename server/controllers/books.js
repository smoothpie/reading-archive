const Book = require('../models').Book;

module.exports = {
    create(req, res) {
	return Book
	    .create({
		title: req.body.title,
		description: req.body.description,
		reading: req.body.reading
	    })
	    .then(book => res.status(201).send(book))
	    .catch(error => res.status(400).send(error));
    },
    list(req, res) {
	return Book
	    .all()
	    .then(books => res.status(200).send(books))
	    .catch(error => res.status(400).send(error))
    }
}
