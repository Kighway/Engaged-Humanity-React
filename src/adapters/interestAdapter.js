import axios from 'axios'
import config from '../config'

axios.defaults.baseURL = config.base_url

// not using on server side
// axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export default {
  getInterests: function () {

  // not using on server side
  // axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  return axios.get('/interests')
    .then( (response) => {
      // browserHistory.push('/')
      return { interests: response.data }
    })

  }
}
