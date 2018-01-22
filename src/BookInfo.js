import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import {Card, CardMedia, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Chip from 'material-ui/Chip';
import { Link } from 'react-router-dom';
import GoodReads from './GoodReads';
import axios from 'axios';

const styles = {
  chip: {
    margin: '4px 40px',
    height: '5%',
    alignSelf: 'center',
    backgroundColor: 'rgb(103, 179, 195)',
    borderRadius: '5px',
    textTransform: 'uppercase',
    color: '#fff'
  }
};

const propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  cover: PropTypes.string
};

@inject("store")
@observer
class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  handleChange = (e, index, value) => {
    this.setState({ value })
  }

  setStatus = async status => {
    const { book } = this.props;
    let response = await axios.put(`/api/books/${book.id}`, {
      "status": status
    });
    this.forceUpdate();
  }

  render() {
    const { book, title, author, cover } = this.props;
    return(
      <div>
        <Card>
          <Toolbar>
            <ToolbarGroup firstChild={true}>
              <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                <MenuItem
                  value={1}
                  primaryText="To Read"
                  onClick={() => this.setStatus("To Read")}
                  />
                <MenuItem
                  value={2}
                  primaryText="Reading"
                  onClick={() => this.setStatus("Reading")}
                  />
                <MenuItem
                  value={3}
                  primaryText="Finished"
                  onClick={() => this.setStatus("Finished")}
                  />
              </DropDownMenu>
            </ToolbarGroup>
          </Toolbar>
          <div className="book-info-card__head">
            <CardTitle
	            title={title}
	            subtitle={author}
	            />
            <Chip
              style={styles.chip}
              >
              {book.status}
            </Chip>
          </div>
          <GoodReads cover={cover}/>
        </Card>
      </div>
    )
  }
}

BookInfo.propTypes = propTypes;
export default BookInfo;
