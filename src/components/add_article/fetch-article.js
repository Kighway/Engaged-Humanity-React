import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchLinkSummary } from '../../actions'

class fetchLinkSummaryButton extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
   this.props.fetchLinkSummary(this.props.input_url)
  }

  render() {
      return (
        <button type="button" onClick={this.handleClick}> Fetch It </button>
      )
    }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { fetchLinkSummary }, dispatch)
}

export default connect (null, mapDispatchtoProps)(fetchLinkSummaryButton)
