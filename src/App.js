import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import UserSignUp from './components/user-signup.js'
import UserSignIn from './components/user-signin.js'
import ShowFeed from './components/show-feed.js'
import LogOutButton from './components/logout-button.js'
import CurrentUserDisplay from './components/current-user-display.js'
import { bindActionCreators } from 'redux'
import { getCurrentUserfromSessionData } from './actions'



class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <img src='favicon.ico' className="App-logo" alt="logo" />
          <CurrentUserDisplay />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <UserSignUp />
        <p></p>
        <UserSignIn />
        <LogOutButton />
        <p></p>
        <ShowFeed />
      </div>
    );
  }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { getCurrentUserfromSessionData }, dispatch)
}


function mapStatetoProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect (mapStatetoProps, mapDispatchtoProps)(App)
