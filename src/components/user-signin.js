import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser } from '../actions'

class UserSignIn extends Component {
  constructor() {
    super()
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = { username: this.refs.username.value, password: this.refs.userPassword.value}
    this.props.loginUser(user);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
        <label>Username</label>
        <input ref="username" />
        <label>Password</label>
        <input type="password" ref="userPassword" />
        <button type="submit"> Submit </button>
        </form>
      </div>
    )
  }

}


function mapDispatchtoProps (dispatch) {
  return bindActionCreators( {loginUser}, dispatch)
}

export default connect (null, mapDispatchtoProps)(UserSignIn)
