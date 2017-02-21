import React, { Component } from 'react';
import FollowingsContainer from '../components/followings/followings-container'


class Home extends Component {

  // the img here is the background image on the homepage
  render() {
    return (
      <div className="home_page">
        < FollowingsContainer />
        { this.props.children }
      </div>
    );
  }
}

export default Home;
