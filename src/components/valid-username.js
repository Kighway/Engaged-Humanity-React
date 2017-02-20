import React, { Component } from 'react'
import { connect } from 'react-redux'

class ValidUsername extends Component {

  render() {
      if (this.props.isValid) {
        var buttonContent = "Valid"
      } else {
        var buttonContent = "Invalid"
      }

      return (
        <div> hello
        <div>
          { buttonContent }
        </div>
        </div>
      )
    }
}

function mapStatetoProps(state) {
  return {
    isValid: state.config.valid_username
  }
}


export default connect (mapStatetoProps)(ValidUsername)
