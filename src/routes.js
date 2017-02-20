import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from '../src/components/home'

import FeedContainer from './containers/feed-container'
import UserSignUp from './components/user-signup'
import UserSignIn from './components/user-signin'
import ShowProfile from './components/show-profile'
import WholeInterests from './components/whole-interests'

export default (

    <Route path='/' component={App}>
        < IndexRoute component={Home}/>
        <Route path='/signin' component={UserSignIn}></Route>
        <Route path='/signup' component={UserSignUp}></Route>
        <Route path='/showfeed' component={FeedContainer}></Route>
        <Route path='/showprofile' component={ShowProfile}></Route>
        <Route path='/interests' component={WholeInterests}></Route>
    </Route>
)
