const Note = require('../models').Note;

module.exports = {
    create(req, res) {
	return Note
	    .create({
		content: req.body.content
	    })
	    .then(note => res.status(201).send(note))
	    .catch(error => res.status(400).send(error));
    },
    list(req, res) {
	return Note
	    .all()
	    .then(notes => res.status(200).send(notes))
	    .catch(error => res.status(400).send(error))
    }
}
