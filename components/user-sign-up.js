import React, { Component } from 'react'

export default class UserSignUp extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const user = {name: this.refs.name.value, email:this.refs.name.value, password:this.refs.name.password}
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input ref="name" placeholder="Enter Name" />
        <input ref="email" placeholder="Enter Email" />
        <input ref="password" ref="userPassword" placeholder="Enter Password"/>
        <input ref="passsword" ref="passwordConfirmation" placeholder="Verify Password"/>
        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}
