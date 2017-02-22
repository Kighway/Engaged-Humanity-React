import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createUser } from '../../actions'
import { checkUsername } from '../../actions'
import EmailValidator from 'email-validator'

class UserSignUp extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { username: ''
                 , first_name: ''
                 , last_name: ''
                 , password: ''
                 , validFirstName: ''
                 , validLastName: ''
                 , validUsername: 'initial local state'
                 , validEmail: ''
                 , validPassword: ''
                 , validPasswordConfirmation: ''
                 , profile_url: ''
                }
  }

  handleUsernameChange(event){
    if (event.target.value === "") {
      this.setState({
        validUsername: "no longer initial state"
      })

    }

    this.setState({
      username: event.target.value
    })
//    this.setState({validUsername: true});
    this.props.checkUsername({input: event.target.value})
  }


  handleAChange(event) {

    let error_hash = {}
    error_hash[event.target.getAttribute('data-validation')] = "This field cannot be empty."
    let no_error_hash = {}
    no_error_hash[event.target.getAttribute('data-validation')] = ""
    let input_state = {}
    input_state[event.target.getAttribute('data-ref')] = event.target.value

    if (event.target.value === "") {
      this.setState( error_hash )
    } else {
      this.setState( no_error_hash )
    }

    this.setState( input_state )

  }


  validateForm(user) {
    let error_array = []

    if (user.first_name === "") {
      error_array.push("first name can't be blank.")
      this.setState({ validFirstName: "This field cannot be empty." })
    }
    if (user.last_name === "") {
      error_array.push("last name can't be blank.")
      this.setState({ validLastName: "This field cannot be empty." })
    }
    if (user.username === "") {
      error_array.push("username can't be blank.")
      this.setState({ validUsername: "This field cannot be empty." })
    }
    if (!this.props.validUsername) {
      error_array.push("username is taken.")
    } else {
    }
    if (user.password === "") {
      error_array.push("password can't be blank.")
      this.setState({ validPassword: "This field cannot be empty." })
    }
    if (user.password !== user.password_confirmation) {
      error_array.push("password confirmation doesn't match.")
      this.setState({ validPasswordConfirmation: "Password confirmation doesn't match." })
    } else {
      this.setState({ validPasswordConfirmation: "" })
    }
    if (!EmailValidator.validate(user.email)) {
      error_array.push("Email address is invalid.")
      this.setState({ validEmail: "Email address is invalid." })
    } else {
      this.setState({ validEmail: "" })
    };

    return error_array
  }


  handleSubmit(event) {
    event.preventDefault()
    const form_input = { first_name: this.refs.first_name.value
                        , last_name: this.refs.last_name.value
                        , username: this.refs.username.value
                        , profile_url: this.refs.profile_url.value
                        , email: this.refs.email.value
                        , password: this.refs.password.value
                        , password_confirmation: this.refs.passwordConfirmation.value }

    let form_errors = this.validateForm(form_input)

    if (form_errors.length === 0 && this.props.validUsername) {
      console.log("Valid form.  Submit!")
      this.props.createUser(form_input);
    } else {
      console.log("Invalid form.  Try again.")
      console.log(form_errors)
    };

    // if (this.refs.profile_url.value === "") {
    //   this.refs.profile_url.value = "http://i.imgur.com/I5osTAt.png"
    // }
  }

  render() {

    let username_error = ""

    if (this.state.username === "" && this.state.validUsername === 'initial local state') {
      username_error = ""
    } else if (this.state.username === ""){
      username_error = "This field cannot be empty."
    } else {
      username_error = this.props.validUsername? "" : "Username is taken."
    }

    return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={ this.handleSubmit }>

        { /* username name input */ }
        <div className="create-user-error"> { username_error } </div>
        <input ref="username" onChange={this.handleUsernameChange.bind(this)} placeholder="username" value={this.state.username}/>

        { /* first name input */ }
        <div className="create-user-error"> { this.state.validFirstName } </div>
        <input data-validation="validFirstName" data-ref="first_name" ref="first_name" onChange={this.handleAChange.bind(this)} placeholder="first name" value={this.state.first_name}/>

        { /* last name input */ }
        <div className="create-user-error"> { this.state.validLastName } </div>
        <input data-validation="validLastName" data-ref="last_name" ref="last_name" onChange={this.handleAChange.bind(this)} placeholder="last name" value={this.state.last_name}/>

        { /* email input */ }
        <div className="create-user-error"> { this.state.validEmail } </div>
        <input ref="email" placeholder="xxxxx@xxxx.com" />

        { /* password input */ }
        <div className="create-user-error"> { this.state.validPassword } </div>
        <input data-validation="validPassword" type="password" data-ref="password" ref="password" onChange={this.handleAChange.bind(this)} placeholder="password" value={this.state.password}/>

        { /* password confirmation input */ }
        <div className="create-user-error"> { this.state.validPasswordConfirmation } </div>
        <input type="password" ref="passwordConfirmation" placeholder="verify password"/>

        { /* profile image */ }
        <div className="create-user-error"> { this.state.validPasswordConfirmation } </div>
        <input type="url" ref="profile_url" placeholder="link to profile photo"/>

        { /* submit */ }
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

function mapStatetoProps(state) {
  return {
    validUsername: state.config.valid_username
  }
}

export default connect (mapStatetoProps, mapDispatchtoProps)(UserSignUp)
