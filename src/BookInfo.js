import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardMedia, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Chip from 'material-ui/Chip';
import GoodReads from './GoodReads';

const styles = {
  chip: {
    margin: '4px 10px',
    backgroundColor: '#165f6f',
    textTransform: 'uppercase',
    color: '#fff'
  }
};

const propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  cover: PropTypes.string
};

class BookInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  handleChange = (e, index, value) => {
    this.setState({ value })
  }

  setStatus = e => {
    e.preventDefault();
  }

  render() {
    const { title, author, cover } = this.props;
    return(
      <div>
        <Card>
          <Toolbar>
            <ToolbarGroup firstChild={true}>
              <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                <MenuItem
                  value={1}
                  primaryText="To Read"
                  onClick={this.setStatus}
                  />
                <MenuItem
                  value={2}
                  primaryText="Reading"
                  onClick={this.setStatus}
                  />
                <MenuItem
                  value={3}
                  primaryText="Finished"
                  onClick={this.setStatus}
                  />
              </DropDownMenu>
            </ToolbarGroup>
          </Toolbar>
          <CardTitle
	          title={title}
	          subtitle={author}
	          />
          <GoodReads cover={cover}/>
        </Card>
      </div>
    )
  }
}

BookInfo.propTypes = propTypes;
export default BookInfo;
