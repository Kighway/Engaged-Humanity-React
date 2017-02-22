import React, { Component } from 'react';
import LogOutButton from '../nav/logout-button.js'
import CurrentUserDisplay from './current-user-display.js'
import WholeInterests from '../interests/interests-container'

class NavBar extends Component {
    render () {
      if (sessionStorage.jwt && sessionStorage.jwt !== "") {
        return (
          <div>
            <div className="nav-bar">
            <a href='/'> HOME • </a>
            <a href='/showfeed'> FEED • </a>
            <LogOutButton/> •
            <a href='/showprofile'> <CurrentUserDisplay /></a>
            <p></p>
            </div>
          </div>
        );
      } else {
        return (
          <div>
          <img src='favicon.ico' className="App-logo" alt="logo" />
            <div className="nav-bar">
            <a href='/'> HOME • </a>
            <a href='/signup'> SIGN UP • </a>
            <a href='/signin'> SIGN IN  </a>
            </div>
          </div>
        );
      }
  }
}

export default NavBar;
