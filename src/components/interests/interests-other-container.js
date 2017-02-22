import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrentOtherInterests from './current-other-interests'
import InterestElement from './interest-element'

class InterestsOtherContainer extends Component {


  render() {
    return (
      <div className="whole-interests">
        <CurrentOtherInterests />
      </div>
    );
  }
}

export default InterestsOtherContainer
