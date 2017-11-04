import React from 'react';
import { observer, inject } from 'mobx-react';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import NoteForm from './NoteForm';
import Note from './Note';

@inject('notestore') @observer
class Recap extends React.Component {

    componentDidMount() {
	this.props.notestore.getNotes();
    }

    renderNotes() {
	const { notestore } = this.props;
	return notestore.notes.map((note) => (
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
	      {this.renderNotes()}
	    </Card>
	)
    }
}

export default Recap;
