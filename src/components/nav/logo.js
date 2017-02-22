import React, { Component } from 'react';
import LogOutButton from '../nav/logout-button.js'
import CurrentUserDisplay from './current-user-display.js'
import WholeInterests from '../interests/interests-container'


class Logo extends Component {
    render () {
      return (
        <div>
        <img src='favicon.ico' className="App-logo" alt="logo" />
        </div>
      )
  }
}

export default Logo;
