import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addInterest } from '../actions'

class InterestElement extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
   this.props.addInterest( {id: this.props.interestId })
  }

  render() {
      return (
        <button type="button" onClick={this.handleClick}>{  this.props.interestTitle } </button>
      )
    }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { addInterest }, dispatch)
}

export default connect (null, mapDispatchtoProps)(InterestElement)
