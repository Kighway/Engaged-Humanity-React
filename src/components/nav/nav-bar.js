import React, { Component } from 'react';
import LogOutButton from '../nav/logout-button.js'
import CurrentUserDisplay from './current-user-display.js'
import WholeInterests from '../interests/interests-container'

class NavBar extends Component {
    render () {
      if (sessionStorage.jwt === "") {
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
    } else {
      return (
        <div className="nav-bar">
        <a href='/'> HOME • </a>
        <a href='/showfeed'> ARTICLES </a>
        <a href='/showprofile'><CurrentUserDisplay /></a>
        <LogOutButton/>
        <p></p>
        </div>
      );
    }
  }
}

export default NavBar;
