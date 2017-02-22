import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addInterest } from '../../actions'
import { fetchFeed } from '../../actions'
import AvailableInterests from './available-interests'

class AddInterest extends Component {
  constructor() {
    super()
      this.handleSubmit = this.handleSubmit.bind(this)
      this.state = { interest_field: '' }
  }

  handleChange(event) {
    this.setState({
      interest_field: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.refs.interest.value !== "") {
      const interest = { id: "submit", interest: this.refs.interest.value }
      this.props.addInterest(interest);
    }
  }

  render() {
    return (
    <div className="add-interest-container">
      <div className="form">
        <form onSubmit={ this.handleSubmit }>
        <input ref="interest" onChange={ this.handleChange.bind(this)} placeholder="new interest" value={ this.state.interest_field } />
        <button onClick={ this.handleSubmit } type="button"> Submit </button>
        </form>
      <AvailableInterests current_search= { this.state.interest_field  } />
      </div>
    </div>
    )
  }

}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( {addInterest, fetchFeed }, dispatch)
}

export default connect (null, mapDispatchtoProps)(AddInterest)
