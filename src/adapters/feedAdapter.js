import axios from 'axios'
import config from '../config'

axios.defaults.baseURL = config.base_url

// the problem here is it will only set a default once, right?
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export default {
  fetchFeed: function () {

  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

  return axios.get('/articles')
    .then( (response) => {
      // browserHistory.push('/')
      return { feed: response.data }
    })
  }
}
