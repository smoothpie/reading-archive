import { observable, action, computed, useStrict } from 'mobx';
import axios from 'axios';

class BookStore {

  @observable books = [];
  @observable cover = '';
  @observable author = '';
  @observable title = '';
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
	  this.selectedBook = book;
    console.log(book.title);
    this.getGoodReadsInfo(book.title);
  }

  @action clearSelectedBook = () => {
	  this.selectedBook = {}
  }

  @action setBooks = (books) => {
	  this.books = [...books]
  }

  @action getBooks() {
	  axios.get('api/books').then((res) => {
	    this.isLoading = false;
	    this.setBooks(res.data)
	  })
  }

  @action setGoodReadsInfo = (info) => {
    this.title = info.goodreadsResult.GoodreadsResponse.search[0].results[0].work[0].best_book[0].title;
    this.author = info.goodreadsResult.GoodreadsResponse.search[0].results[0].work[0].best_book[0].author[0].name;
    this.cover = info.goodreadsResult.GoodreadsResponse.search[0].results[0].work[0].best_book[0].image_url;
  }

  @action getGoodReadsInfo(bookTitle) {
    axios.get(`/api/books/${bookTitle}/info`).then((res) => {
      console.log(res.data);
	    this.setGoodReadsInfo(res.data)
	  })
  }
}

const store = new BookStore();

export default store;
export { BookStore };
