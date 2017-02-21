import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrentInterests from '../interests/current-interests'

class StatsContainer extends Component {

  render() {
    if (this.props.currentUser.followers) {
      return (
        <div className="profile-container">
            <div className="stat-container">
              <h1>{ this.props.currentUser.first_name } { this.props.currentUser.last_name } </h1>
              <h2>Interests:</h2>
              <CurrentInterests />
                <div className="follower-info">
                  <h2> { this.props.currentUser.followers ? this.props.currentUser.followers.length: null } followers</h2>
                  <h2> { this.props.currentUser.followings ? this.props.currentUser.followings.length: null } following</h2>
                </div>
            </div>
        </div>
      )
    }

      return (
        <div className="profile-container">
            <div className="stat-container">
              <h1> NOTHING HERE </h1>
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

export default connect (mapStatetoProps)(StatsContainer)
