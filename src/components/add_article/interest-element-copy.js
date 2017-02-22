import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPotentialInterest } from '../../actions'

class InterestElement extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.addPotentialInterest(event.target.textContent)
  }

  render() {
    return (
        <button className="interest-option" type="button" onClick={this.handleClick}>{  this.props.interestTitle }</button>
      )
    }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { addPotentialInterest }, dispatch)
}

export default connect (null, mapDispatchtoProps)(InterestElement)
