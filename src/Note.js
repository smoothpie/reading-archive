import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';

const styles = {
  margin: '15px',
  display: 'inline-block',
  backgroundColor: '#c6d4d8',
  borderRadius: '13px'
};

const propTypes = {
  label: PropTypes.string
}

const Note = ({ label }) => {
  return (
    <div>
	    <ListItem
	      style = {styles}
	      >
	      { label }
	    </ListItem>
    </div>
  )
}

Note.propTypes = propTypes;
export default Note;
