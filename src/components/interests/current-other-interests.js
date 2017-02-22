import React, { Component } from 'react'
import { connect } from 'react-redux'

class CurrentOtherInterests extends Component {
  render() {

      return (

        <div className="current_interest">
          { this.props.otherUser.interests ? this.props.otherUser.interests.map(function (interest) {
           return (<button type="button" >{interest.title }</button>)
         }) : "" }
        </div>
      )
    }
}

function mapStatetoProps(state) {
  return {
    currentUser: state.otherUser
  }
}

export default connect (mapStatetoProps)(CurrentOtherInterests)
