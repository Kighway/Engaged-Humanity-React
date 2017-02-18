import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShowFeed extends Component {

  render() {
    if (this.props.currentUser.followers) {
      return (
        <div className="profile-container">
            <div className="stat-container">
              <h1>Hello, { this.props.currentUser.first_name } </h1>
              <h2> Here is your first follower: { this.props.currentUser.followers["0"].first_name ? this.props.currentUser.followers["0"].first_name : null }</h2>
            </div>
        </div>
      )
    }

      return (
        <div className="profile-container">
            <div className="stat-container">
              <h1>Hello, { this.props.currentUser.first_name } </h1>
            </div>
        </div>
      )
    }
}

function mapStatetoProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect (mapStatetoProps)(ShowFeed)
