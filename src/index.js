import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReduxPromise from 'redux-promise'
import routes from './routes'
import { Provider }  from 'react-router'


const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, 
  document.getElementById('root')
);
