import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import { Router, browserHistory} from 'react-router'
import { Provider }  from 'react-redux'
import ReduxPromise from 'redux-promise'
import routes from './routes'
import rootReducer from './reducers/root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
// import App from './App';
// import './index.css';


// this is the master line.  DO NOT DELETE:
//const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer)

// this is development version DELETE EVENTUALLY:
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(ReduxPromise)
));



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
