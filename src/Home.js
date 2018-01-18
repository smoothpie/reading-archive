import React from 'react';
import Books from './Books';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import BookForm from './BookForm';

const style = {
  margin: 10
};

const Home = () => (
  <div>
    <div className="navbar">
      <h2>Reading Archive</h2>
      <Avatar
        src=""
        size={40}
        style={style}
        />
    </div>
	  <BookForm />
	  <div className="main">
	    <Books  />
	  </div>
  </div>
)

export default Home;
