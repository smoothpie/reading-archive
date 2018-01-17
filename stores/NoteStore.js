import { observable, action, computed, useStrict } from 'mobx';
import axios from 'axios';

class NoteStore {

  @observable notes = [];
  @observable isLoading = false;
  @observable selectedNote = {};

  @computed get selectedId() {
	  return this.selectedNote.id
  }

  @action addNote = ( content, bookId ) => {
	  axios.post(`api/books/${bookId}/notes`, {
      bookId: bookId,
	    content: content
	  })
	    .then((res) => {
		    this.notes.push(res.data)
	    })
  }

  @action selectNote = (note) => {
	  this.selectedNote = note
  }

  @action clearSelectedNote = () => {
	  this.selectedNote = {}
  }

  @action setNotes = (notes) => {
	  this.notes = [...notes]
  }

  @action getNotes(bookId) {
	  axios.get(`/api/books/${bookId}/notes`).then((res) => {
	    this.isLoading = false;
	    this.setNotes(res.data)
	  })
  }
}

const notestore = new NoteStore();

export default notestore;
export { NoteStore };
