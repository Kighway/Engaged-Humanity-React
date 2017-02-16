import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCurrentUserfromSessionData } from '../actions'

class CurrentUserDisplay extends Component {
  constructor() {
    super()

  }

  componentDidMount() {
    // this should probably be moved to a different level
    // within the component mounting process
    // but the purpose of this
    // is to set a sessionStorage.jwt to ""
    // if it doesn't exist
    if (sessionStorage.jwt === 'undefined') {
      sessionStorage.jwt = ""
    }

    // when this app mounts
    // get the current user info from the api
    // the sessionStorage will be an HTML header
    // when the request is made by axios

    // for later: if sessionStorage is ""
    // then you don't need to send the API request below
    this.props.getCurrentUserfromSessionData()
  }


  render() {
      return (
        <div className = "current_user">
          The current user is: { this.props.currentUser }
        </div>
      )
    }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { getCurrentUserfromSessionData }, dispatch)
}


function mapStatetoProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect (mapStatetoProps, mapDispatchtoProps)(CurrentUserDisplay)
