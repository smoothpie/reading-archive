import React from 'react';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { List } from 'material-ui/List';
import NoteForm from './NoteForm';
import Note from './Note';

class Recap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { notes } = this.props;
    return(
      <Card>
        <CardTitle
          title="Create your recap!"
          subtitle="Save important thoughts here"
          />
        <NoteForm selectedBook={this.props.book}/>
        <List>
          {notes.map((note) => (
            <Note
              key = {note.id}
              label = {note.content}
              note = {note}
              book = {this.props.book}
              />
          ))}
        </List>
      </Card>
    )
  }
}

export default Recap;
