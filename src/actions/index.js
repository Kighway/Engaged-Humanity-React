import { browserHistory } from 'react-router'
import  usersAdapter from '../adapters/usersAdapter'
import  feedAdapter from '../adapters/feedAdapter'
import  articleAdapter from '../adapters/articleAdapter'

export function getCurrentUserfromSessionData(jwtFromSession) {

  const responsePromise = usersAdapter.getInitialUser(jwtFromSession)
  return {
    // because of redux-promise, this will wait
    // to send until the responsePromise is resolved to response.data
    // from the userAdapter, and then send it to the users-reducer
    // to add to the store.

    // this needs to be a promise in order for redux-promise to work
    // it can't be a property on the promise like responseObject.username
    payload: responsePromise,
    type: "SET_CURRENT_USER"
  }

}
// DEBUG: create user dispatch is followed by a separate getCurrentUserfromSessionData dispatch; we should dispatch getCurrentUserfromSessionData once and only once
export function createUser(userParams){
  const responsePromise = usersAdapter.createUser(userParams)
    return {
      payload: responsePromise,
      type: 'CREATE_USER'
    }
  }

export function loginUser(loginParams) {
  const responsePromise = usersAdapter.loginUser(loginParams)
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

export function likeArticle(articleId) {
  const responsePromise = articleAdapter.likeArticle(articleId)

  return {
    payload: responsePromise,
    type: "I_DONT_KNOW_YET"
  }
}
