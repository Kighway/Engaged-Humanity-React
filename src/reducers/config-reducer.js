export default (state={}, action) => {
  switch (action.type) {
    case "CHECK_USERNAME":
      return {...state, valid_username: action.payload.valid }
    default:
      return state
  }
}
