import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div className="App">
        { this.props.children}
      <img src='favicon.ico' className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Home;
