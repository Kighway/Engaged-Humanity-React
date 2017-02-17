export default (state=[], action) => {
  switch (action.type) {
    case "FETCH_FEED":
      return action.payload.feed
    default:
      return state
  }
}
