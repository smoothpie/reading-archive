//make it more abstract (books and notes methods are the same)
//Book, Note -> Item

import { observable, action, computed, useStrict } from 'mobx';
import axios from 'axios';

//useStrict(true);

class NoteStore {

  @observable notes = [];
  @observable isLoading = false;
  @observable selectedNote = {};

  @computed get selectedId() {
	  return this.selectedNote.id
  }

  @action addNote = ( content ) => {
	  axios.post('/api/notes', {
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

  @action getNotes() {
	  axios.get('/api/notes').then((res) => {
	    this.isLoading = false;
	    this.setNotes(res.data)
	  })
  }
}

const notestore = new NoteStore();

export default notestore;
export { NoteStore };
