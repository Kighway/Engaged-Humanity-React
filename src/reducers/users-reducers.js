export default (state="", action) => {
  switch (action.type) {
    // payloads are resolved promises coming from the actions/index.js
    case "SET_CURRENT_USER":
      return action.payload
    case "CREATE_USER":
      return action.payload
    case "LOG_IN":
      return action.payload
    case "LOG_OUT":
      return ""
    case "ADD_INTEREST":
      if (action.payload.duplicate) {
        return state
      }
      return {...state, interests: [...state.interests, action.payload]}
    default:
      return state
  }
}
