import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddInterest from '../components/add-interest'
import CurrentInterests from '../components/current-interests'
import InterestElement from '../components/interest-element'

class WholeInterests extends Component {


  render() {
    return (
      <div className="whole-interests">
        <AddInterest />
        <CurrentInterests />
      </div>
    );
  }
}

export default WholeInterests
