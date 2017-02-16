export default (state="", action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      // this is coming from the resolved promise from actions/index.js
      return action.payload.username

    case "CREATE_USER":
      // this is coming from the resolved promise from actions/index.js
      return action.payload.username
    case "LOG_IN":
      return action.payload.username
    case "LOG_OUT":
      return ""
    default:
      return state
  }
}
