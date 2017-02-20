import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

// not using on server side
// axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export default {
  getInterests: function () {

  // not using on server side
  // axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
  return axios.get('/interests')
    .then( (response) => {
      // browserHistory.push('/')
      console.log(response.data)
      return { interests: response.data }
    })

  }
}
