import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Route } from 'react-router-dom';
import Home from './Home';

const App = () => (
  <div>
	  <Route path='/' exact component={Home} />
  </div>
)

export default App;
