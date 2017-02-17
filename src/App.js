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
import NavBar from './components/nav-bar.js'

class App extends Component {

  render() {
    return (

    <div className="App">
      <NavBar/>
      { this.props.children}
        <div className="App-header">
        </div>
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
