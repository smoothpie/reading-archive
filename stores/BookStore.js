import { observable, action, computed, useStrict } from 'mobx';
import axios from 'axios';

class BookStore {

  @observable books = [];
  @observable filteredBooks = [];
  @observable bookInfo = [];
  @observable cover = '';
  @observable author = '';
  @observable title = '';
  @observable overview = '';
  @observable isLoading = false;
  @observable selectedBook = {};

  @computed get selectedId() {
	  return this.selectedBook.id
  }

  @action addBook = async ( title, description ) => {
	  let response = await axios.post('/api/books', {
	    title: title,
	    description: description
	  })
		this.books.push(response.data);
  }

  @action selectBook = (book) => {
	  this.selectedBook = book;
  }

  @action clearSelectedBook = () => {
	  this.selectedBook = {}
  }

  @action setBooks = (books) => {
	  this.books = [...books]
  }

  @action setFilteredBooks = (books) => {
    this.filteredBooks = [...books]
  }

  @action
  getBooks = async () => {
	  let response = await axios.get('api/books');
	  this.isLoading = false;
	  this.setBooks(response.data)
    this.getGoodReadsInfo();
  }

  @action setGoodReadsInfo = (info, book) => {
    book.title = info.goodreadsResult.GoodreadsResponse.search[0].results[0].work[0].best_book[0].title;
    book.author = info.goodreadsResult.GoodreadsResponse.search[0].results[0].work[0].best_book[0].author[0].name;
    book.cover = info.goodreadsResult.GoodreadsResponse.search[0].results[0].work[0].best_book[0].image_url;
  }

  @action
  getGoodReadsInfo = async () => {
    this.books.forEach(async book => {
      let response = await axios.get(`/api/books/${book.title}/info`);
      console.log(response.data);
	    this.setGoodReadsInfo(response.data, book);
    })
    this.setFilteredBooks(this.books);
  }

}

const store = new BookStore();

export default store;
export { BookStore };
