import React, { Component } from 'react';


class Home extends Component {
  render() {
    debugger
    return (
      <div className="App">
        Home
        { this.props.children}
      </div>
    );
  }
}

export default Home;
