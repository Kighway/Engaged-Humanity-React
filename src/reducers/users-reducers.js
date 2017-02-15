export default (state=[], action) => {
  switch (action.type) {
    case "CREATE_USER":
      debugger
      return action.payload.user
    case "LOG_IN":
      return action.payload.user
    default:
      return state
  }
}
