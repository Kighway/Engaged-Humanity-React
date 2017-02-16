import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from '../actions'

class LogOutButton extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
   this.props.logoutUser();
  }

  render() {
      return (
        <button type="button" onClick={this.handleClick}>Log Out</button>
      )
    }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { logoutUser }, dispatch)
}

// function mapStatetoProps(state) {
//   return {
//     feed: state.feed
//   }
// }

// export default connect (mapStatetoProps, mapDispatchtoProps)(ShowFeed)
export default connect (null, mapDispatchtoProps)(LogOutButton)
