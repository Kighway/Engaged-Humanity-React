import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeInterest } from '../../actions'
import { bindActionCreators } from 'redux'

class CurrentInterests extends Component {
  constructor() {
    super()

    this.handleRemove = this.handleRemove.bind(this)

  }

  handleRemove(event) {
    this.props.removeInterest({ id: event.target.getAttribute("data-ref") })
  }




  render() {
      return (

        <div className="current_interest">
          { this.props.currentUser.interests ? this.props.currentUser.interests.map(function (interest) {
           return (
             <div>
              <button type="button" > {interest.title }</button>
              <div onClick={ this.handleRemove } data-ref={interest.id} className="interest_x"> ✖ </div>
           </div>)
         }, this) : "" }
        </div>
      )
    }
}

function mapStatetoProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { removeInterest }, dispatch)
}


export default connect (mapStatetoProps, mapDispatchtoProps)(CurrentInterests)
