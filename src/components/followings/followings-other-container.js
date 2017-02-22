import React, { Component } from 'react'
import { connect } from 'react-redux'
import FollowingElement from './following-element'
import SearchFollowingContainer from './search-follower'


class FollowingsOtherContainer extends Component {

  render() {
    return (
      <div className="followings-container">
        <div className="followings-search-container">
          < SearchFollowingContainer />
       </div>
        <div className="current-followings-container">
          { this.props.followings ?
            this.props.followings.map(function (following) {
              return ( < FollowingElement following={ following }/>)
            }) : ""
          }
       </div>
      </div>
    )
  }

}

function mapStatetoProps(state) {
  return {
    followings: state.otherUser.followings
  }
}

export default connect (mapStatetoProps)(FollowingsOtherContainer)
