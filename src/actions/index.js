import { browserHistory } from 'react-router'
import  usersAdapter from '../adapters/usersAdapter'
import  feedAdapter from '../adapters/feedAdapter'
import  articleAdapter from '../adapters/articleAdapter'
import  interestAdapter from '../adapters/interestAdapter'

export function getCurrentUserfromSessionData() {

  const responsePromise = usersAdapter.getInitialUser()
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

export function getInterests() {
  const responsePromise = interestAdapter.getInterests()
  return {
    payload: responsePromise,
    type: "SET_INITIAL_CONFIG"
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

export function checkUsername(username) {
  const responsePromise = usersAdapter.checkUsername(username)
    return {
      payload: responsePromise,
      type: "CHECK_USERNAME"
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

export function toggleArticleLike(articleId) {
  const responsePromise = articleAdapter.toggleArticleLike(articleId)

  return {
    payload: responsePromise,
    type: "TOGGLE_LIKE"
  }
}

export function toggleFollowing(FollowingId) {
  const responsePromise = usersAdapter.toggleFollowing(FollowingId)

  return {
    payload: responsePromise,
    type: "TOGGLE_FOLLOWING"
  }
}


export function addInterest(interest) {
  const responsePromise = usersAdapter.addInterest(interest)
  return {
    payload: responsePromise,
    type: "ADD_INTEREST"
  }
}

export function searchFollowing(query) {
  const responsePromise = usersAdapter.searchFollowing(query)
  return {
    payload: responsePromise,
    type: "POTENTIAL_FOLLOWINGS"
  }
}

export function fetchLinkSummary(url) {
  const responsePromise = articleAdapter.fetchLinkSummary(url)
  return {
    payload: responsePromise,
    type: "POTENTIAL_ARTICLE"
  }
}

 export function getOtherProfile(FollowingId) {
  var responsePromise = 0
  return {
    payload: responsePromise,
    type: "SHOW_OTHER_PROFILE"
  }
}

export function createArticle(article_info) {
  const responsePromise = articleAdapter.createArticle(article_info)
 return {
   payload: responsePromise,
   type: "TOGGLE_LIKE"
 }
}

export function addPotentialInterest(interest) {
 return {
   payload: interest,
   type: "ADD_POTENTIAL_INTEREST"
 }
}

export function removeInterest(interest_id) {
  const responsePromise = usersAdapter.removeInterest(interest_id)

 return {
   payload: responsePromise,
   type: "LOG_IN"
 }
}
