import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxThunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import routes from './routes/routes';

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk)
);

ReactDom.render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ routes } />
  </Provider>,
  document.getElementById('container')
);
