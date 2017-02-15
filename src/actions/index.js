import axios from 'axios'
import { browserHistory } from 'react-router'
import  usersAdapter from '../adapters/usersAdapter'
import  feedAdapter from '../adapters/feedAdapter'

export function createUser(userParams){
  const user = usersAdapter.createUser(userParams)

    return {
      payload: user,
      type: 'CREATE_USER'
    }
  }

export function loginUser(userParams) {
  const user = usersAdapter.loginUser(userParams)

  return {
    payload: user,
    type: "LOG_IN"
  }
}

export function fetchFeed() {
  const feed = feedAdapter.fetchFeed()

  return {
    payload: feed,
    type: "FETCH_FEED"
  }
}
