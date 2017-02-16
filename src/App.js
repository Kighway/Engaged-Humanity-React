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
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
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

export default App;
