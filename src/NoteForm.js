import React from 'react';
import { observer, inject, action } from 'mobx-react';
import { observable } from 'mobx';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

@inject('notestore') @observer
class NoteForm extends React.Component {

  @observable content = "";

  onChange = e => {
    this.content = e.target.value;
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { notestore, selectedBook } = this.props;
    notestore.addNote(this.content, selectedBook.id);
    this.content = "";
  }

  render() {
    return(
      <form className="noteform" onSubmit={this.onSubmit}>
        <TextField
          name="content"
          value={this.content}
          onChange={this.onChange}
          />
        <RaisedButton
          className="btn"
          label="Add a note"
          primary={true}
          type="submit"
          />
      </form>
    )
  }
}

export default NoteForm;
