import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './Routes';
import { Provider } from 'react-redux';
import configureStore from './store';
import './reset.css';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
