import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import CurrentInterests from '../interests/current-interests'
import InterestsOtherContainer from '../interests/interests-other-container'
import FollowingsOtherContainer from '../followings/followings-other-container'
import StatsOtherContainer from './stats-other-container'


class ShowOtherProfile extends Component {

  render() {
    if (this.props.otherUser) {
      return (
        <div className="profile-container">
          < StatsOtherContainer />
        < InterestsOtherContainer />
      < FollowingsOtherContainer />
        </div>
      )
    }

      return (
        <div className="profile-container">
            <div className="stat-container">
              <h1> NOTHING YET AGAIN </h1>
            </div>
        </div>
      )
    }
}

function mapStatetoProps(state) {
  debugger
  return {
    otherUser: state.otherUser
  }
}

export default connect (mapStatetoProps)(ShowOtherProfile)
