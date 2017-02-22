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

  },

  fetchLinkSummary: function (url) {


    //POST https://graph.facebook.com/ { "id": "http://reddit.com/", "scrape": true }
        return axios.post("https://graph.facebook.com/", { id: url, scrape: true }   ).then( (response ) => {


          console.log(response.data)


          return { articleInfo: response.data }
        }).catch(function (error) {
          console.log(error);
          return { articleInfo: false }

  });


  }


}
