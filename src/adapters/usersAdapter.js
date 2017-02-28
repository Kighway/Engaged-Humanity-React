import axios from 'axios'
import Metascraper from 'metascraper'
import config from '../config'


axios.defaults.baseURL = config.base_url

axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

import { browserHistory } from 'react-router'
// import _ from 'lodash'

export default {
  getInitialUser: function () {

  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

  return axios.get('/current_user')
    .then( (response) => {
      // browserHistory.push('/')
      return response.data
    })
  },

  createUser: function (userParams) {
  debugger
  // this is the promise passed to the responseObject in the action/index.js
  return axios.post('/signup', userParams)
    .then( (response) => {

      // if the new username and password are authenticated...
      if (response.data.jwt) {
        sessionStorage.setItem('jwt', response.data.jwt)
        axios.defaults.headers.common['AUTHORIZATION'] = response.data.jwt
        browserHistory.push('/showfeed')
      }
      // else...
      if (response.data.error) {
        debugger
      }
      return response.data
    })
  },

  checkUsername: function (username) {
  // this is the promise passed to the responseObject in the action/index.js
  return axios.post('/check-username', username)
    .then( (response) => {
      return response.data
    })
  },



  loginUser: function (userParams) {

    return axios.post('/signin', userParams)
      .then( (response) => {
        // if the username and password are authenticated...
        if (response.data.jwt) {
          sessionStorage.setItem('jwt', response.data.jwt)
          axios.defaults.headers.common['AUTHORIZATION'] = response.data.jwt
          browserHistory.push('/showfeed')
        }
        // else...
        if (response.data.error) {

        }
        return response.data
      })
  },

  addInterest: function (interestParam) {

    return axios.post('/add-interest', interestParam)
      .then( (response) => {
        return response.data
      })
  },

  toggleFollowing: function (followingId) {


  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

  return axios.post(`/toggle-following`, followingId)
    .then( (response) => {
      return response.data
    })

  },

  searchFollowing: function (query) {

    return axios.post('/search-following', query)
      .then( (response) => {
        console.log(response.data)
        return response.data
      })
  },

  removeInterest: function (interest_id) {

    return axios.post('/remove-interest', interest_id)
      .then( (response) => {
        return response.data
      })
  },




}
