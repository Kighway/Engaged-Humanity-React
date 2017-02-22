import React, { Component } from 'react';
import FollowingsContainer from '../components/followings/followings-container'
import CreateArticleContainer from '../components/add_article/create-article-container'
import Logo from '../components/nav/logo.js'
import LogOutButton from '../components/nav/logout-button.js'
import CurrentUserDisplay from '../components/nav/current-user-display.js'

class Home extends Component {

  // the img here is the background image on the homepage
  render() {
    if (sessionStorage.jwt === "") {
    return (
      <div className="home_page">
      {/* < CreateArticleContainer /> */ }
        { this.props.children }
      </div>
    );
  } else {
    return (
      <div>
      <img src='favicon.ico' className="App-logo" alt="logo" />

      </div>
      );
    }
  }
}

export default Home;
