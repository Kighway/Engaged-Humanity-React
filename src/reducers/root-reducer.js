import { combineReducers } from 'redux'
import usersReducer from './users-reducers'
import feedReducer from './feed-reducers'

export default combineReducers({
  currentUser: usersReducer,
  feed: feedReducer
})
