import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from '../src/components/home'

import FeedContainer from './components/feed/feed-container'
import UserSignUp from './components/login_create/user-signup'
import UserSignIn from './components/login_create/user-signin'
import ShowProfile from './components/user_views/show-profile'
import WholeInterests from './components/interests/interests-container'
import FollowingsContainer from './components/followings/followings-container'

export default (

    <Route path='/' component={App}>
        < IndexRoute component={Home}/>
        <Route path='/signin' component={UserSignIn}></Route>
        <Route path='/signup' component={UserSignUp}></Route>
        <Route path='/showfeed' component={FeedContainer}></Route>
        <Route path='/showprofile' component={ShowProfile}></Route>
        <Route path='/interests' component={WholeInterests}></Route>
        <Route path='/friends' component={FollowingsContainer}></Route>
    </Route>
)
