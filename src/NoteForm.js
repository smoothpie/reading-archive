import React from 'react';
import { observer, inject, action } from 'mobx-react';
import { extendObservable } from 'mobx';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

@inject('notestore') @observer
class NoteForm extends React.Component {
    constructor(props) {
	super(props);
	extendObservable(this, {
	    content: ''
	})
    }

    onChange = e => {
	const { name, value } = e.target;
	this[name] = value;
    }
    
    onSubmit = (e) => {
	e.preventDefault();
	const { notestore } = this.props;
	const { content } = this;
	notestore.addNote(content);
    }

    render() {
	const { content } = this;
	return(
	    <form onSubmit={this.onSubmit}>
	      <TextField
		name="content"
		onChange={this.onChange}
		value={content}
		rows={2}
		multiLine={true}
		/>
	      <RaisedButton
		label="Add a note"
		primary={true}
		type="submit"
		/>
	    </form>
	)
    }
}

export default NoteForm;
