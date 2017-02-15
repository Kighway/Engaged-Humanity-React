export default (state=[], action) => {
  switch (action.type) {
    case "CREATE_USER":
      return action.payload.data
    case "LOG_IN":
      return action.payload.data
    default:
      return state
  }
}
