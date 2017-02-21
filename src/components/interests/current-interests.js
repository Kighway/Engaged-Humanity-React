import React, { Component } from 'react'
import { connect } from 'react-redux'

class CurrentInterests extends Component {
  render() {

      return (

        <div className="current_interest">
          { this.props.currentUser.interests ? this.props.currentUser.interests.map(function (interest) {
           return (<button type="button" >{interest.title }</button>)
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
