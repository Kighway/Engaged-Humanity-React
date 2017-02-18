import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

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
