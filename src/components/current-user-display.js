import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// these should only load once
import { getCurrentUserfromSessionData } from '../actions'
import { getInterests } from '../actions'

class CurrentUserDisplay extends Component {

  componentDidMount() {
    if (sessionStorage.jwt === 'undefined') {
      sessionStorage.jwt = ""
    }

    this.props.getCurrentUserfromSessionData()
    this.props.getInterests()

  }

  render() {
      return (
        <div className="current_user">
          { this.props.currentUser.username ? this.props.currentUser.username: "" }
        </div>
      )
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
