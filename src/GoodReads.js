import React from 'react';
import './style.css'

class GoodReads extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cover } = this.props;
	  return (
	    <div className="goodreads">
        <img className="goodreads__img" src={cover} />
	    </div>
	  )
  }
}

export default GoodReads;
