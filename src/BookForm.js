import React from 'react';
import { observer, inject, action } from 'mobx-react';
import { extendObservable } from 'mobx';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

@inject('store') @observer
class BookForm extends React.Component {
    constructor(props) {
	super(props);
	extendObservable(this, {
	    title: '',
	    description: ''
	})
    }

    onChange = e => {
	const { name, value } = e.target;
	this[name] = value;
    }
    
    onSubmit = (e) => {
	e.preventDefault();
	const { store } = this.props;
	const { title, description } = this;
	console.log(title, description);
	this.props.store.addBook(title, description);
    }

    render() {
	const { title, description } = this;
	return(
	    <form onSubmit={this.onSubmit}>
	      <TextField
		name="title"
		onChange={this.onChange}
		value={title}
		hintText="Book title"
		/>
	      <TextField
		name="description"
		onChange={this.onChange}
		value={description}
		hintText="Description"
		/>
	      <FlatButton
		label="Add a Book"
		primary={true}
		type="submit"
		/>
	    </form>
	)
    }
}

export default BookForm;



