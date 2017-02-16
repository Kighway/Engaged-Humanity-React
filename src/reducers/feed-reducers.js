export default (state=[], action) => {
  //debugger
  switch (action.type) {
    case "FETCH_FEED":
      return action.payload.feed
    default:
      return state
  }
}
