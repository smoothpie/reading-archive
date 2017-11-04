import React from 'react';
import { observer, inject, PropTypes } from 'mobx-react';

import Book  from './Book';
import Selection from './Selection';
import Recap from './Recap';
import _ from 'lodash';

import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

/*const propTypes = {
    store: PropTypes.object
}*/
@inject("store", "notestore")
@observer
class Books extends React.Component {

    componentDidMount() {
	this.props.store.getBooks();
	this.props.notestore.getNotes();
    }

    renderSelection() {
	const { store, notestore } = this.props;
	if (_.isEmpty(store.selectedBook)) return null;
	return (
	    <div className='selection'>
	      <Selection
		book={store.selectedBook}
		/>
	      <Recap notes={notestore.notes}/>
	    </div>
	)
    }

    renderBooks() {
	const { store } = this.props;
	return store.books.map((book) => (
	      <Book
		key = {book.id}
		selected = {book.id === store.selectedId}
		label = {book.title}
		onClick = { () => {store.selectBook(book)} }
		/>
	))
    }
    
    render() {
	return(
	    <List>
	      <div className="booklist">
		{this.renderBooks()}
	      </div>
	        {this.renderSelection()}
	    </List>
	)
    }
}

/*Books.propTypes = propTypes;*/
export default Books;
