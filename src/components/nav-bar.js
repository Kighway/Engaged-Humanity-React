import React, { Component } from 'react';
import LogOutButton from '../components/logout-button.js'
import CurrentUserDisplay from '../components/current-user-display.js'

class NavBar extends Component {
    render () {
      if (sessionStorage.jwt === "") {
      return (
        <div className="nav-bar">
        <a href='/'> HOME • </a>
        <a href='/signup'> SIGN UP • </a>
        <a href='/signin'> SIGN IN  </a>
        </div>
      );
    } else {
      return (
        <div className="nav-bar">
        <a href='/showfeed'> ARTICLES </a>
        <CurrentUserDisplay />
        <LogOutButton/>
        </div>
      );
    }
  }
}

export default NavBar;
