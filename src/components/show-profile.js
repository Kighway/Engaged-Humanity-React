import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCurrentUserfromSessionData } from '../actions'

class ShowFeed extends Component {
  constructor() {
    super()

  }

  componentDidMount() {
    if (sessionStorage.jwt === 'undefined') {
      sessionStorage.jwt = ""
    }
    this.props.getCurrentUserfromSessionData()
  }


  render() {
      return (
        <div className = "profile-container">
            <div className = "stat-container">
              <h1>Hello, { this.props.username } </h1>
            </div>
        </div>
      )
    }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { getCurrentUserfromSessionData }, dispatch)
}


function mapStatetoProps(state) {
  return {
    username: state.currentUser
  }
}

export default connect (mapStatetoProps, mapDispatchtoProps)(ShowFeed)
