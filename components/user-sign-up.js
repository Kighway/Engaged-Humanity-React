// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// // import { bindActionControllers } from 'redux'
// import { bindActionCreators } from 'redux'
// import { createUser } from '../actions/index'
//
// class UserSignUp extends Component {
//   constructor() {
//     super()
//     this.handleSubmit = this.handleSubmit.bind(this)
//
//   }
//
//   handleSubmit(event) {
//     event.preventDefault()
//
//     // try to set this up exactly how we want our rails params
//     // const user = { first_name: this.refs.first_name.value, last_name: this.refs.last_name.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value}
//     // .. fill in for rest of schema stuff
//
// //    this.props.createUser(user);
//
//
//   }
//
//   render() {
//     return (
//       <div>
//         <form onSubmit={ this.handleSubmit }>
//
//         <input ref="first_name" />
//         // ... from database
//         <input ref="email" />
//
//         <input type="password" ref="userPassword" />
//         <input type="password" ref="passwordConfirmation" />
//         <button type="submit"> Submit </button>
//         </form>
//       </div>
//     )
//   }
//
// }
//
// function mapDispatchtoProps (dispatch) {
//
//   // parameters: all actions to dispatch
//   return bindActionCreators( {createUser}, dispatch)
//
// }
//
// export default connect (null, mapDispatchtoProps)(UserSignUp)





//
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { createUser } from '../actions/index';
//
// class UserSignUp extends Component {
//   constructor() {
//     super()
//     this.handleUserSignup = this.handleUserSignup.bind(this)
//   }
//
//   handleUserSignup(event){
//     event.preventDefault();
//     const user = {name: this.refs.name.value, email: this.refs.email.value, password: this.refs.password.value, password_confirmation: this.refs.password_confirmation.value}
//     this.props.createUser(user);
//   }
//
//   render(){
//     return(
//       <div>
//         <form onSubmit={this.handleUserSignup}>
//           <label>Name: </label>
//           <input ref="name"/>
//           <br/>
//           <label>Email: </label>
//           <input ref="email" type="email"/>
//           <br/>
//           <label>Password: </label>
//           <input ref="password" type="password"/>
//           <br/>
//           <label>Password Confirmation: </label>
//           <input ref="password_confirmation" type="password"/>
//           <br/>
//           <button value="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }
//
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({createUser}, dispatch)
// }
//
// export default connect(null, mapDispatchToProps)(UserSignUp)
