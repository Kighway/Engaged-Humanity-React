import { browserHistory } from 'react-router'
import  usersAdapter from '../adapters/usersAdapter'
import  feedAdapter from '../adapters/feedAdapter'
import  articleAdapter from '../adapters/articleAdapter'

export function createUser(userParams){

  const responsePromise = usersAdapter.createUser(userParams)

    // the response will have error messages, etc. if the creation
    // was not successful.  Where do we handle this?

    return {

      // because of redux-promise, this will wait
      // to send until the responsePromise is resolved to response.data
      // from the userAdapter, and then send it to the users-reducer
      // to add to the store.

      // this needs to be a promise in order for redux-promise to work
      // it can't be a property on the promise like responseObject.username
      payload: responsePromise,
      type: 'CREATE_USER'
    }
  }

export function loginUser(userParams) {
  const responsePromise = usersAdapter.loginUser(userParams)

  // here, the promise will come back as empty strings
  // if the login was not successful
  // where should we check for this empty string to render
  // an invalid password error message?
  return {
    payload: responsePromise,
    type: "LOG_IN"
  }
}

export function logoutUser() {
  sessionStorage.setItem('jwt', "")
  browserHistory.push('/')

  return {
    payload: "",
    type: "LOG_OUT"
  }
}

export function fetchFeed() {
  const feed = feedAdapter.fetchFeed()

  return {
    payload: feed,
    type: "FETCH_FEED"
  }
}

export function getCurrentUserfromSessionData(jwtFromSession) {

  const responsePromise = usersAdapter.getInitialUser(jwtFromSession)

  return {
    payload: responsePromise,
    type: "SET_CURRENT_USER"
  }

}

export function likeArticle(articleId) {
  const responsePromise = articleAdapter.likeArticle(articleId)

  return {
    payload: responsePromise,
    type: "I_DONT_KNOW_YET"
  }
}
