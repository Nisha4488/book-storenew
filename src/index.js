import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootswatch/dist/lux/bootstrap.min.css';
import store from './redux/store'
import { fetchBooks } from './redux/actions'
import { Provider } from 'react-redux'


const newStore=store()
newStore.dispatch(fetchBooks())


ReactDOM.render(
  <Provider store ={newStore}>
  <App />
  </Provider>
  , document.getElementById('root'));
