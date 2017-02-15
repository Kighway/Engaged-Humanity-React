import axios from 'axios'
import { browserHistory } from 'react-router'
import  usersAdapter from '../adapters/usersAdapter'

export function createUser(userParams){
  const user = usersAdapter.loginUser(userParams)

    return {
      payload: user,
      type: 'SIGN_UP'
    }
  }
