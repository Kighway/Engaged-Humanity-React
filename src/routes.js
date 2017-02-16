import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Home from '../src/components/home'

import UserSignUp from './components/user-signup'
import UserSignIn from './components/user-signin'
import ShowFeed from './components/show-feed'

export default (

    <Route path='/' component={App}>
        < IndexRoute component={Home}/>
        <Route path='/signin' component={UserSignIn}></Route>
        <Route path='/signup' component={UserSignUp}></Route>
        <Route path='/showfeed' component={ShowFeed}></Route>

    </Route>
)
