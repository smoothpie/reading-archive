import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import style from './style.css';
import store from '../stores/BookStore';
import notestore from '../stores/NoteStore';

import App from './App';

ReactDOM.render(
    <MuiThemeProvider>
	<Provider store={store} notestore={notestore}>
	<BrowserRouter>
	  <App />
	</BrowserRouter>
	</Provider>
    </MuiThemeProvider>
, document.getElementById('root'));
