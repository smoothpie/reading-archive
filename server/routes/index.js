const booksController = require('../controllers').books;
const notesController = require('../controllers').notes;

module.exports = (app) => {
    
    app.post('/api/books', booksController.create);
    app.get('/api/books', booksController.list);
    
    app.post('/api/notes', notesController.create);
    app.get('/api/notes', notesController.list);
}
