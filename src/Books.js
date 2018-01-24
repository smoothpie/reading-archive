import React from 'react';
import { observer, inject, PropTypes } from 'mobx-react';
import Book  from './Book';
import BookInfo from './BookInfo';
import Recap from './Recap';
import _ from 'lodash';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList} from 'material-ui/GridList';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import './style.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '30px',
    height: '64%'
  },
  gridList: {
    overflowY: 'auto',
    width: '500px',
    height: '350px'
  },
  cardTitle: {
    color: 'rgba(53, 142, 165, 0.87)'
  },
  toolbar: {
    backgroundColor: '#fff'
  },
  customWidth: {
    width: 150
  }
};


@inject("store", "notestore")
@observer
class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  componentDidMount() {
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
    return store.filteredBooks.map((book, i) => (
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

  handleChange = (e, index, value) => {
    this.setState({ value })
  }

  filterBooks = (filterBy) => {
    const { books } = this.props.store;
    const filteredBooks = filterBy !== "All" ? books.filter(book => {
      return book.status === filterBy
    }) : books;
    this.props.store.setFilteredBooks(filteredBooks);
  }

  render() {
    return(
      <div className="main">
        <Card style={styles.root}>
          <div className="books__header">
            <CardTitle
              title="My Books"
              style={styles.cardTitle}
              />
            <Toolbar style={styles.toolbar}>
              <ToolbarGroup firstChild={true}>
                <SelectField
                  floatingLabelText="Show"
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={styles.customWidth}
                  >
                  <MenuItem
                    value={1}
                    primaryText="All"
                    onClick={() => this.filterBooks("All")}
                    />
                    <MenuItem
                      value={2}
                      primaryText="To Read"
                      onClick={() => this.filterBooks("To Read")}
                      />
                      <MenuItem
                        value={3}
                        primaryText="Reading"
                        onClick={() => this.filterBooks("Reading")}
                        />
                        <MenuItem
                          value={4}
                          primaryText="Finished"
                          onClick={() => this.filterBooks("Finished")}
                          />
                </SelectField>
              </ToolbarGroup>
            </Toolbar>
          </div>
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
