import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addInterest } from '../actions'


class AddInterest extends Component {
  constructor() {
    super()
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const interest = { interest: this.refs.interest.value }
    this.props.addInterest(interest);
  }

  render() {
    return (
    <div className="add-interest-container">
      <div className="form">
        <form onSubmit={ this.handleSubmit }>
        <input ref="interest" placeholder="new interest" />
        <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
    )
  }

}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( {addInterest}, dispatch)
}

export default connect (null, mapDispatchtoProps)(AddInterest)
