import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrentInterests from '../interests/current-interests'
import InterestsContainer from '../interests/interests-container'
import FollowingsContainer from '../followings/followings-container'
import StatsContainer from './stats-container'


class ShowProfile extends Component {

  render() {
    if (this.props.currentUser) {
      return (
        <div className="profile-container">

          <img className="profile-pic" src={ this.props.currentUser.profile_url } />
          < StatsContainer />
        </div>
      )
    }

      return (
        <div className="profile-container">
            <div className="stat-container">
              <h1> ... </h1>
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

export default connect (mapStatetoProps)(ShowProfile)
