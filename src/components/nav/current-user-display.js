import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// these should only load once
import { getCurrentUserfromSessionData } from '../../actions'
import { getInterests } from '../../actions'

class CurrentUserDisplay extends Component {

  componentDidMount() {
    if (sessionStorage.jwt === 'undefined') {
      sessionStorage.jwt = ""
    }

    this.props.getCurrentUserfromSessionData()
    this.props.getInterests()

  }

  render() {

    if (this.props.currentUser.username) {
      return (
        <div className="nav-current-user-container">
          <div className="nav-profile-image-container">
          { this.props.currentUser.profile_url ?
            <img className="nav-profile-pic" src={ this.props.currentUser.profile_url } />
            : "" }
          </div>
          <div className="nav-username">
            { this.props.currentUser.username ? this.props.currentUser.username: "" }
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }


}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { getCurrentUserfromSessionData, getInterests }, dispatch)
}


function mapStatetoProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect (mapStatetoProps, mapDispatchtoProps)(CurrentUserDisplay)
