export default (state={valid_username: {}}, action) => {
  switch (action.type) {
    case "CHECK_USERNAME":
      return {...state, valid_username: action.payload.valid }
    default:
      return state
  }
}
