import axios from 'axios'
import { browserHistory } from 'react-router'

const URL = "http://localhost:3000/api/v1/"

export const createUser = (user) => {
  let response = axios.post( URL + 'signup', user).then ((innerResponse) => {
    sessionStorage.setItem('jwt', innerResponse.data.jwt)
    // browserHistory.push("/drinks")
    return innerResponse
  })

  return {
    type: "SIGN_UP",
    payload: response
  }
}

// export function createUser(user) {
//
//   return { type: 'CREATE_USER',
//            payload: 'test'
//   }
// }
