sessionStorage in console

webToken

routes.js


Route path='/' component={App}
...

  <Route path="signup" component={UserSignUp} />
  ... well come back to this.



Now, to our component:

#user-signup.js

my containers wont grab from state


import React, { Component } from 'react'


class UserSignUp {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(event) {
    event.preventDefault()

    // try to set this up exactly how we want our rails params
    const user = { first_name: this.refs.first_name.value, last_name: this.refs.last_name.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value}
    // .. fill in for rest of schema stuff

  }



  render() {
    return (
      <div>
        <form onSubmit={ handleSubmit }>

        <input ref="first_name" />
        // ... from database
        <input ref="email" />

        <input type="password" ref="userPassword" />
        <input type "password" ref="passwordConfirmation" />
        <button type="submit">Submit</button>
        </form>
      </div>

    )


  }



}
