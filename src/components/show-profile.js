import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowInterest from '../components/show-interests'

class ShowProfile extends Component {

  render() {
    if (this.props.currentUser.followers) {
      return (
        <div className="profile-container">
            <div className="stat-container">
              <h1>Hello, { this.props.currentUser.first_name } </h1>
              <h2> { this.props.currentUser.followers ? this.props.currentUser.followers.length: null } followers</h2>
              <h2> { this.props.currentUser.followings ? this.props.currentUser.followings.length: null } followers</h2>
            </div>
            <ShowInterest />
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

export default connect (mapStatetoProps)(ShowProfile)
