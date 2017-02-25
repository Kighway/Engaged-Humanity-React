import axios from 'axios'

axios.defaults.baseURL = 'https://damp-bayou-35607.herokuapp.com'

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
