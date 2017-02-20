import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createUser } from '../actions'
import { checkUsername } from '../actions'
import ValidUsername from '../components/valid-username'
import EmailValidator from 'email-validator'

class UserSignUp extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {username: ''}
    this.state = {validEmail: ""}
  }

  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    })

    this.props.checkUsername({input: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = { first_name: this.refs.first_name.value, last_name: this.refs.last_name.value, username: this.refs.username.value, email: this.refs.email.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value }

    let validEmail = EmailValidator.validate(this.refs.email.value);

    if (validEmail) {
      this.setState({ validEmail: true })
      this.props.createUser(user);
    } else {
      this.setState({ validEmail: false })
    }

  }

  render() {

    let valid_email_message = <div></div>

    if (this.state.validEmail === false) {
      valid_email_message = <div> Email address is invalid </div>
    }

    return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={ this.handleSubmit }>
        <input ref="first_name" placeholder="first name"/>
        <input ref="last_name" placeholder="last name"/>
        { valid_email_message }
        <input ref="email" placeholder="xxxxx@xxxx.com" />
        <input ref="username" onChange={this.handleUsernameChange.bind(this)} placeholder="username" value={this.state.username}/>
        < ValidUsername />
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
  return bindActionCreators( {createUser, checkUsername}, dispatch)
}

export default connect (null, mapDispatchtoProps)(UserSignUp)
