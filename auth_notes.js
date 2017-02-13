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
import { bindActionControllers } fron 'redux'
import { createUser } from '../actions/index'
import { connect } from 'react-redux'

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

    this.props.createUser(user);


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

const mapDispatchtoProps = function (dispatch) {

  // parameters: all actions to dispatch
  return bindActionControllers({createUser}, dispatch)

}

connect(null, mapDispatchtoProps)(UserSignUp)


// action/index.js

export const createUser = (user) => {
  // put in response constant so that response is a promise object
  const response = axios.post(url + route /* /signup */ ), user ).then( response => response.data )

  return {
          type: 'CREATE_USER',
          payload: response
          }
}



// users-reducer.js

export default (state=[], action) => {
  switch (action.type) {
    case "CREATE_USER":


    default:
      return state;
  }



}




// go to users controller in rails app

// router

namespace :api do

  namespace :v1 do

    resources: ,,,
    post 'signup', to 'users#create'



    //
    in gem file


    gem 'jwt'


// in users controller


def create
  // should return encryted string
  jwt = Auth.ecrypt(user_id: @user.id)


  // return a response with the encrypted "key"
  render json: {jst: jwt, @user.name}

end




// in API lib folder, create this module to use with JWT gem

auth.rb
class Auth

  ALGORITHM = 'HS256'

  def self.encrypt(hash)
  // JWT method takes:
    // payload: data to encrypt
    // secret: our salt
    // algorhthym to use to encrpyr
    JWT.encode payload, secret_key, ALGORITHM
  end

  def secret_key
    "randomstringofcharacters234523452345234523452342345"
  end


  def self.decode()

  end


end

// can use rake secret to get code
$ rake secret


// in config application.rb file
config.autoload_paths << Rails.root.join('lib')




// back in our react promise:
// to redirect in action:
import { browswerHistory } from 'react-router'

// IN axios then callback function:
sessionStorage.setItem('jwt', response.data.jwt)
browswerHistory.push('/place_to_go')
return userData; // will go to our reducer



// now in reducer: // set username in session state



reutn action.payload.data.name




// handled in router: keep users off of pages





// in config
gem rack-cors
gem active_model_serializers
gem bcrypt
