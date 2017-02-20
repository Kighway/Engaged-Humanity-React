import React, { Component } from 'react';
import LogOutButton from '../components/logout-button.js'
import CurrentUserDisplay from '../components/current-user-display.js'
import WholeInterests from '../components/whole-interests'

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
        <a href='/showfeed'> Articles </a>
        <a href='/showprofile'><CurrentUserDisplay /></a>
        <a href='/interests'> Interests</a>

        <LogOutButton/>
        </div>
      );
    }
  }
}

export default NavBar;
