import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

import { browserHistory } from 'react-router'
// import _ from 'lodash'

export default {
  fetchFeed: function () {

  return axios.get('/articles')
    .then( (response) => {
//      browserHistory.push('/')
      return { feed: response.data }
    })

  }
}
