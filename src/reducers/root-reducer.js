import { combineReducers } from 'redux'
import usersReducer from './users-reducers'
import feedReducer from './feed-reducers'
import configReducer from './config-reducer'

export default combineReducers({
  currentUser: usersReducer,
  feed: feedReducer,
  config: configReducer
})
