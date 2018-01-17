import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardMedia, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import GoodReads from './GoodReads';

const propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  cover: PropTypes.string
};

class BookInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, author, cover } = this.props;
    return(
      <Card>
        <CardTitle
	        title={title}
	        subtitle={author}
	        />
        <GoodReads cover={cover}/>
      </Card>
    )
  }
}

BookInfo.propTypes = propTypes;
export default BookInfo;
