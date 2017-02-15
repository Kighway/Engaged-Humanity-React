import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createUser } from '../actions'

class UserSignUp extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(event) {
    event.preventDefault()
    const user = { first_name: this.refs.first_name.value, last_name: this.refs.last_name.value, username: this.refs.username.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value }
    this.props.createUser(user);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
        <label>First Name</label>
        <input ref="first_name" />
        <label>Last Name</label>
        <input ref="last_name" />
        <label>Username</label>
        <input ref="username" />
        <label>Password</label>
        <input type="password" ref="userPassword" />
        <label>Confirm Password</label>
        <input type="password" ref="passwordConfirmation" />
        <button type="submit"> Submit </button>
        </form>
      </div>
    )
  }

}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( {createUser}, dispatch)
}

export default connect (null, mapDispatchtoProps)(UserSignUp)
