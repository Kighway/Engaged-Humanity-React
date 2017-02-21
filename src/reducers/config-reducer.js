export default (state={valid_username: {}}, action) => {
  switch (action.type) {
    case "CHECK_USERNAME":
      return {...state, valid_username: action.payload.valid }
    case "SET_INITIAL_CONFIG":
      return {...state, interests: action.payload.interests.map(function(interest) { return [interest.id, interest.title]})}
      case "POTENTIAL_FOLLOWINGS":
        return {...state, potential_followings: action.payload.potential_followings }
      case "TOGGLE_FOLLOWING":
        return {...state, potential_followings: [], searchField: ""}
    default:
      return state
  }
}
