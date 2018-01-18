import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import {GridTile} from 'material-ui/GridList';

const styles = {
  width: '100%'
}

const propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  label: PropTypes.string,
}

const Book = ({ onClick, title, author, cover, selected }) => {
  const classes = selected ? 'bold' : '';
  return (
    <GridTile
      style={styles}
      key={cover}
      title={title}
      subtitle={<span>by <b>{author}</b></span>}
      onClick = { onClick }
      >
      <img src={cover} />
    </GridTile>
  )
}

Book.propTypes = propTypes;
export default Book;
