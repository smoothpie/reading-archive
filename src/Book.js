import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';

const propTypes = {
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    label: PropTypes.string,
}

const Book = ({ onClick, label, selected }) => {
    const classes = selected ? 'bold' : '';
    return (
	<ListItem
	  onClick = { onClick }
	  className={classes}
	  >
	  { label }
	</ListItem>
    )
}

Book.propTypes = propTypes;
export default Book;

