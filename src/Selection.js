import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'

const propTypes = {
    book: PropTypes.object
};

const Selection = ({ book }) => (
    <Card>
      <CardTitle
	title={book.title}
	subtitle={book.description}
	/>
    </Card>
)

Selection.propTypes = propTypes;
export default Selection;
