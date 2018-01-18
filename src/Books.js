import React from 'react';
import { observer, inject, PropTypes } from 'mobx-react';
import Book  from './Book';
import BookInfo from './BookInfo';
import Recap from './Recap';
import _ from 'lodash';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import {GridList} from 'material-ui/GridList';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import './style.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '30px',
    height: '60%'
  },
  gridList: {
    overflowY: 'auto',
  },
  cardTitle: {
    backgroundColor: '#e8e8e8',
    color: 'rgba(53, 142, 165, 0.87)'
  }
};


@inject("store", "notestore")
@observer
class Books extends React.Component {

  componentWillMount() {
    this.props.store.getBooks();
  }

  renderSelection() {
    const { store, notestore } = this.props;
    if (_.isEmpty(store.selectedBook)) return null;
    return (
      <div className='selection'>
        <BookInfo
          book={store.selectedBook}
          title={store.selectedBook.title}
          author={store.selectedBook.author}
          cover={store.selectedBook.cover}
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
    console.log(store.bookInfo);
    return store.books.map((book, i) => (
      <Book
        key = {book.id}
        selected = {book.id === store.selectedId}
        title = {book.title}
        author = {book.author !== "undefined" ? book.author : ''}
        cover = {book.cover !=="undefined" ? book.cover : ''}
        onClick = { () => {
          store.selectBook(book);
          notestore.getNotes(book.id)
        } }
        />
    ))
  }

  render() {
    return(
      <div className="main">
        <Card style={styles.root}>
          <CardTitle
            title="My Books"
            style={styles.cardTitle}
            />
          <GridList
            cellHeight={150}
            cols={4}
            style={styles.gridList}
            >
            {this.renderBooks()}
          </GridList>
        </Card>
        {this.renderSelection()}
      </div>
    )
  }
}

export default Books;
