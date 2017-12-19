import React from 'react';
import { observer, inject } from 'mobx-react';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { List } from 'material-ui/List';
import NoteForm from './NoteForm';
import Note from './Note';

@observer
class Recap extends React.Component {

  renderNotes() {
    const { notes } = this.props;
    return notes.map((note) => (
      <Note
        key = {note.id}
        label = {note.content}
        />
    ))
  }

  render() {
    return(
      <Card>
        <CardTitle
          title="Create your recap!"
          subtitle="Save important thoughts here"
          />
        <NoteForm />
        <List>
          {this.renderNotes()}
        </List>
      </Card>
    )
  }
}

export default Recap;
