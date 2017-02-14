import React from 'react'
import { Route, IndexRoute } from 'react-router'
// import App from './cointainers/app'
import App from './App'

import UserSignUp from './components/user-signup'


export default (
  <Route path='/' component={App}>
    <Route path="signup" component={UserSignUp} />
  </Route>
)
