import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';

const styles = { margin: '5px' };

const propTypes = {
    label: PropTypes.string
}

const Note = ({ label }) => {
    return (
	<ListItem
	  style = {styles}
	  >
	  { label }
	</ListItem>
    )
}

Note.propTypes = propTypes;
export default Note;
