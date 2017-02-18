import React, { Component } from 'react';


class Home extends Component {

  // the img here is the background image on the homepage
  render() {
    return (
      <div className="home_page">
        { this.props.children }
      <img src='favicon.ico' className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Home;
