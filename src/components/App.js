import React, { Component } from 'react';
import { connect } from 'react-redux'
//import logo from '../logo.svg';
import '../App.css';
import { bindActionCreators } from 'redux'
import { getCurrentUserfromSessionData } from '../actions'
import NavBar from '../components/nav-bar.js'

class App extends Component {

  render() {
    return (

    <div className="App">
      <NavBar/>
      { this.props.children}
        <div className="App-header">
        </div>
      </div>
    );
  }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { getCurrentUserfromSessionData }, dispatch)
}

export default connect (null, mapDispatchtoProps)(App)
