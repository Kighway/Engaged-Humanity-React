export default (state=[], action) => {
  switch (action.type) {
    case "CREATE_USER":
      return action.payload.data
    default:
      return state
  }
}
