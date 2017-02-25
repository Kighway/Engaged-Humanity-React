import axios from 'axios'
import config from '../config'

axios.defaults.baseURL = config.base_url

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

  },

  fetchLinkSummary: function (url) {
    return axios.post("https://graph.facebook.com/", { id: url, scrape: true }   ).then( (response ) => {
      return { articleInfo: response.data }
    }).catch(function (error) {
      console.log(error);
      return { articleInfo: false }
    });
  },

  createArticle: function (article_info) {
    axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
    return axios.post(`/articles/new`, article_info)
      .then( (response) => {

        return { likeToToggle: response.data }
      })
    }
}
