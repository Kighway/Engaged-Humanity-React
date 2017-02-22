import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleFollowing } from '../../actions'
import { getOtherProfile } from '../../actions'
import UserElement from '../../components/common/user-element'

class FollowingElement extends Component {
  constructor() {
    super()
    this.handleClickProfile = this.handleClickProfile.bind(this)
    this.handleClickDelete = this.handleClickDelete.bind(this)
  }

  handleClickProfile() {
   this.props.getOtherProfile( {id: this.props.following.id })
  }

  handleClickDelete() {
   this.props.toggleFollowing( {id: this.props.following.id })
  }
  // <Link to={`/showprofile/${this.props.following.username}`}>{ this.props.following  }</Link>
  render() {
      return (
        <div className="following-element">
        <a onClick={this.handleClick} href={"/showprofile/" + this.props.following.username + "/"} >< UserElement user={this.props.following} /></a>
        <div className="x-div" onClick={this.handleClickDelete}> X </div>
        </div>

      )
    }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { toggleFollowing }, dispatch)
}

export default connect (null, mapDispatchtoProps)(FollowingElement)
