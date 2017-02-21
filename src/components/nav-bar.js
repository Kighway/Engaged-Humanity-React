import React, { Component } from 'react';
import LogOutButton from '../components/logout-button.js'
import CurrentUserDisplay from '../components/current-user-display.js'

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
