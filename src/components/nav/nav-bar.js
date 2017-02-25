import React, { Component } from 'react';
import LogOutButton from '../nav/logout-button.js'
import CurrentUserDisplay from './current-user-display.js'
import WholeInterests from '../interests/interests-container'
import { Link } from 'react-router'

class NavBar extends Component {
    render () {
      if (sessionStorage.jwt && sessionStorage.jwt !== "") {
        return (
          <div>
            <div className="nav-bar">
            <Link to={`/`} activeClassName="active">HOME • </Link>
            <Link to={`/showfeed`} activeClassName="active">FEED • </Link>
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
            <Link to={`/`} activeClassName="active">HOME • </Link>
            <Link to={`/signup`} activeClassName="active">SIGN UP • </Link>
            <Link to={`/signin`} activeClassName="active">SIGN IN</Link>
            </div>
          </div>
        );
      }
  }
}

export default NavBar;
