import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrentOtherInterests from '../interests/current-other-interests'

class StatsOtherContainer extends Component {

  render() {
    if (this.props.otherUser.followers) {
      return (
        <div className="profile-container">
            <div className="stat-container">
              <h1>{ this.props.otherUser.first_name } { this.props.otherUser.last_name } </h1>
              <h2>Interests:</h2>
              <CurrentOtherInterests />
                <div className="follower-info">
                  <h2> { this.props.otherUser.followers ? this.props.otherUser.followers.length: null } followers</h2>
                  <h2> { this.props.otherUser.followings ? this.props.otherUser.followings.length: null } following</h2>
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
    currentUser: state.otherUser
  }
}

export default connect (mapStatetoProps)(StatsOtherContainer)
