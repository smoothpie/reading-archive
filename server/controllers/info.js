const Info = require('../models').Info;

module.exports = {
  list(req, res) {
	  return Info
	    .all()
	    .then(info => res.status(200).send(info))
	    .catch(error => res.status(400).send(error))
  }
}
