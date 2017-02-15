import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFeed } from '../actions'

class ShowFeed extends Component {
  constructor() {
    super()

  }

  componentDidMount() {

    this.props.fetchFeed()

  }



  // handleSubmit(event) {
  //   event.preventDefault()
  //   const user = { first_name: this.refs.first_name.value, last_name: this.refs.last_name.value, username: this.refs.username.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value }
  //   this.props.createUser(user);
  // }

  render() {

    if (this.props.feed.length === 0) {
      return (
        <div>
        </div>
      )
    } else {

      return (
        <div>
          { this.props.feed.articles_by_friends_likes[0].title }
          This is where the articles will go.
        </div>
      )
    }


  }

}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { fetchFeed }, dispatch)
}


function mapStatetoProps(state) {
  return {
    feed: state.feed
  }


}




export default connect (mapStatetoProps, mapDispatchtoProps)(ShowFeed)
