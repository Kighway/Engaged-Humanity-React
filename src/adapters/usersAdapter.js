import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'



axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

// axios.get('http://localhost:3000/api/v1/articles/')
//   .then( (response) => {
//     debugger
//     return { user: response.data.jwt }
//   })

import { browserHistory } from 'react-router'
// import _ from 'lodash'

export default {
  getInitialUser: function () {



  // this is the promise passed to the responseObject in the action/index.js
  return axios.get('/current_user')
    .then( (response) => {

//      sessionStorage.setItem('jwt', response.data.jwt)
      browserHistory.push('/')

      // when the promise is fulfilled, send this to the action/index.js
      return response.data
    })

  },



  createUser: function (userParams) {

  // this is the promise passed to the responseObject in the action/index.js
  return axios.post('/signup', userParams)
    .then( (response) => {
      sessionStorage.setItem('jwt', response.data.jwt)
      browserHistory.push('/')

      // when the promise is fulfilled, send this to the action/index.js
      return response.data
    })

  },

  loginUser: function (userParams) {

    return axios.post('/signin', userParams)
    .then( (response) => {
      sessionStorage.setItem('jwt', response.data.jwt)
      browserHistory.push('/')
      return response.data
    })



  }
}




// let response = axios.post( URL + 'signup', user).then ((response) => {
//   sessionStorage.setItem('jwt', response.data.jwt)
