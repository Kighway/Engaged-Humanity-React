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
    <div className="login-page">
      <div className="form">
        <form onSubmit={ this.handleSubmit }>
        <input ref="first_name" placeholder="first name"/>
        <input ref="last_name" placeholder="last name"/>
        <input ref="username" placeholder="username"/>
        <input type="password" ref="userPassword" placeholder="password"/>
        <input type="password" ref="passwordConfirmation" placeholder="verify password"/>
        <button type="submit"> Submit </button>
        <p>Have an account? <a href="/signin">Sign in</a></p>
        </form>
      </div>
    </div>
    )
  }

}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( {createUser}, dispatch)
}

export default connect (null, mapDispatchtoProps)(UserSignUp)
