import React from 'react';
import { observer, inject, PropTypes } from 'mobx-react';
import Book  from './Book';
import BookInfo from './BookInfo';
import Recap from './Recap';
import _ from 'lodash';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

@inject("store", "notestore")
@observer
class Books extends React.Component {

  componentDidMount() {
    this.props.store.getBooks();
  }

  renderSelection() {
    const { store, notestore } = this.props;
    if (_.isEmpty(store.selectedBook)) return null;
    return (
      <div className='selection'>
        <BookInfo
          title={store.title}
          author={store.author}
          cover={store.cover}
          />
        <Recap
          book={store.selectedBook}
          notes={notestore.notes}
          />
      </div>
    )
  }

  renderBooks() {
    const { store, notestore } = this.props;
    return store.books.map((book) => (
      <Book
        key = {book.id}
        selected = {book.id === store.selectedId}
        label = {book.title}
        onClick = { () => {
          store.selectBook(book);
          notestore.getNotes(book.id)
        } }
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

export default Books;
