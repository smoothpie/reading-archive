import React from 'react';
import Books from './Books';
import BookForm from './BookForm';

const Home = () => (
  <div>
    <h1>Reading Archive</h1>
	  <BookForm />
	  <div className="main">
	    <Books  />
	  </div>
  </div>
)

export default Home;
