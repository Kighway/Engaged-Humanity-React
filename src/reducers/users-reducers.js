export default (state="", action) => {
  switch (action.type) {
    // payloads are resolved promises coming from the actions/index.js
    case "SET_CURRENT_USER":
      debugger
      return action.payload.username
    case "CREATE_USER":
      return action.payload.username
    case "LOG_IN":
      return action.payload.username
    case "LOG_OUT":
      return ""
    default:
      return state
  }
}
