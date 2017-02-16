import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserSignUp from './components/user-signup.js'
import UserSignIn from './components/user-signin.js'
import ShowFeed from './components/show-feed.js'
import LogOutButton from './components/logout-button.js'
import CurrentUserDisplay from './components/current-user-display.js'


class App extends Component {


  render() {
    // debugger
    return (
      <div className="App">
        <div className="App-header">
        <img src='favicon.ico' className="App-logo" alt="logo" />
          <CurrentUserDisplay />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { this.props.children}
      </div>
    );
  }
}

export default App;
