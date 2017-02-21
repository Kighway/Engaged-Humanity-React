import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleArticleLike } from '../actions'

class LikeButton extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
   this.props.toggleArticleLike(this.props.articleId)
  }

  render() {
      if (this.props.isLiked) {
        var buttonContent = "Unlike"
      } else {
        var buttonContent = "Like"
      }






      return (
        <button type="button" onClick={this.handleClick}>{ buttonContent }</button>
      )
    }
}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { toggleArticleLike }, dispatch)
}

export default connect (null, mapDispatchtoProps)(LikeButton)
