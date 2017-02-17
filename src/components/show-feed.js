import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFeed } from '../actions'
import LogOutButton from '../components/logout-button'
import LikeButton from '../components/like-button'


class ShowFeed extends Component {
  constructor() {
    super()
//    this.props.currentUser = this.props.currentUser.bind(this)

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
    if (this.props.feed.length === 0 || this.props.currentUser === "") {
      return (
        <div>
        </div>
      )
    } else {

      // LAST POINT: Trying to get the list to re-render when
      // the currentUser changes
      // takes a refresh page to load current sessionStorage feed
      // into here

      return (
        <div className = "feed-container">
        <h1> Articles for { this.props.currentUser }</h1>

        <div>
          { this.props.feed.articles_by_friends_likes.map (
            function (article) {
              return <div id={`friend-like-${article.id}` } className="article-container">
                  <h6> articleId: { article.id } </h6>
                  <h1>{article.title}</h1>
                  <a href>{article.link}</a>
                  <p>{article.author}</p>
                  <p>{article.source}</p>
                  <p>{article.date}</p>
                  <p>{article.description}</p>
                  < LikeButton articleId={ article.id }/>
                </div>
              })
          }
        </div>
        </div>
      )
    }


  }

}

function mapDispatchtoProps (dispatch) {
  return bindActionCreators( { fetchFeed }, dispatch)
}


function mapStatetoProps(state) {
  debugger
  return {
    feed: state.feed,
    currentUser: state.currentUser
  }


}




export default connect (mapStatetoProps, mapDispatchtoProps)(ShowFeed)
