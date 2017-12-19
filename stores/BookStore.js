import { observable, action, computed, useStrict } from 'mobx';
import axios from 'axios';

//useStrict(true);

class BookStore {

  @observable books = [];
  @observable cover = '';
  @observable overview = '';
  @observable isLoading = false;
  @observable selectedBook = {};

  @computed get selectedId() {
	  return this.selectedBook.id
  }

  @action addBook = ( title, description ) => {
	  axios.post('/api/books', {
	    title: title,
	    description: description
	  })
	    .then((res) => {
		    this.books.push(res.data)
	    })
  }

  @action selectBook = (book) => {
	  this.selectedBook = book
  }

  @action clearSelectedBook = () => {
	  this.selectedBook = {}
  }

  @action setBooks = (books) => {
	  this.books = [...books]
  }

  @action getBooks() {
	  axios.get('/api/books').then((res) => {
	    this.isLoading = false;
	    this.setBooks(res.data)
	  })
  }

  //how bout creating a relation for Book as hasOne Info? and create
  //model info and route '/books/id/info. Yep!
  @action setGoodReadsInfo = (info) => {
	  this.cover = info.cover,
	  this.overview = info.overview
  }

  //selectedBook id will go in query
  @action getGoodReadsInfo() {
    axios.get('').then((res) => {
	    this.setGoodReadsInfo(res.data)
	  })
  }
}

const store = new BookStore();

export default store;
export { BookStore };
