import { observable, action, computed, useStrict } from 'mobx';
import axios from 'axios';

class NoteStore {

  @observable notes = [];
  @observable isLoading = false;
  @observable selectedNote = {};

  @computed get selectedId() {
	  return this.selectedNote.id
  }

  @action addNote = async ( content, bookId ) => {
	  let response = await axios.post(`api/books/${bookId}/notes`, {
      bookId: bookId,
	    content: content
	  })
		this.notes.push(response.data);
    this.getNotes(bookId);
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

  @action getNotes = async (bookId) => {
	  let response = await axios.get(`/api/books/${bookId}/notes`);
	  this.isLoading = false;
	  this.setNotes(response.data)
  }
}

const notestore = new NoteStore();

export default notestore;
export { NoteStore };
