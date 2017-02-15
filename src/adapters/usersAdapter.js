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
  createUser: function (userParams) {

  return axios.post('/signup', userParams)
    .then( (response) => {
      sessionStorage.setItem('jwt', response.data.jwt)
      browserHistory.push('/')
      return { user: response.data.jwt }
    })

  },

  loginUser: function (userParams) {

    return axios.post('/signin', userParams)
    .then( (response) => {
      sessionStorage.setItem('jwt', response.data.jwt)
      browserHistory.push('/')
      debugger
      return { user: response.data.jwt }
    })

  }
}




// let response = axios.post( URL + 'signup', user).then ((response) => {
//   sessionStorage.setItem('jwt', response.data.jwt)
