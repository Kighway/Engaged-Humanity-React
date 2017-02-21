import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddInterest from './add-interest'
import CurrentInterests from './current-interests'
import InterestElement from './interest-element'

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
