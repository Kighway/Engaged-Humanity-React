import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleFollowing } from '../../actions'
import UserElement from '../../components/common/user-element'

class FollowingElement extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
   this.props.toggleFollowing( {id: this.props.following.id })
  }

  render() {
      return (
        <div className="following-element">
        < UserElement user={this.props.following} />
        <div className="x-div" onClick={this.handleClick}> X </div>
        </div>

      )
    }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { toggleFollowing }, dispatch)
}

export default connect (null, mapDispatchtoProps)(FollowingElement)
