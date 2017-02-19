import React, { Component } from 'react'
import { connect } from 'react-redux'

class CurrentInterests extends Component {
  render() {
      
      return (
        <div className="current_user">
          { this.props.currentUser.interests ? this.props.currentUser.interests.map(function (interest) {

           return interest.title


         }) : "" }
        </div>
      )
    }
}

function mapStatetoProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect (mapStatetoProps)(CurrentInterests)
