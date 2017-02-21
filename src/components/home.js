import React, { Component } from 'react';

class Home extends Component {

  // the img here is the background image on the homepage
  render() {
    return (
      <div className="home_page">
        { this.props.children }
      </div>
    );
  }
}

export default Home;
