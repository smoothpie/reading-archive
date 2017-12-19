import React from 'react';
import { observer, inject, action } from 'mobx-react';
import { observable } from 'mobx';
import axios from 'axios';
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
    const { notestore } = this.props;
    console.log( notestore, this.content);
    notestore.addNote(this.content);
    this.content = "";
  }

  render() {
    return(
      <form className="noteform" onSubmit={this.onSubmit}>
        <TextField
          name="content"
          onChange={this.onChange}
          multiLine={true}
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
