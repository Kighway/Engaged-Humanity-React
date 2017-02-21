import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

// the problem here is it will only set a default once, right?
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

// import { browserHistory } from 'react-router'
// import _ from 'lodash' the rebounce

export default {
  toggleArticleLike: function (articleId) {


  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

  return axios.post(`/articles/${articleId}/like`)
    .then( (response) => {

      return { likeToToggle: response.data }
    })

  }
}
