import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFeed } from '../actions'
import LikeButton from '../components/like-button'

class ShowFeed extends Component {

  componentDidMount() {

    if (sessionStorage.jwt === 'undefined') {
      sessionStorage.jwt = ""
    }

    if (sessionStorage.jwt !== "") {
      this.props.fetchFeed()
    }
  }

  render() {

    if (!this.props.feed || this.props.feed.length === 0) {
      return (
        <div>
        </div>
      )
    } else {

    var article_divs = <div></div>

    if (this.props.feed.by_followings_likes) {
      var feed_object = this.props.feed.by_followings_likes;
      article_divs = Object.keys(feed_object).map(function(key, iterator) {
        let article = feed_object[key]["article"]

        return <div id={`friend-like-${article.id}`} className="article-container">
          <h6> {article.id } </h6>
          <h1> { article.title } </h1>
          <a href>{article.link}</a>
          <p>{article.author}</p>
          <p>{article.source}</p>
          <p>{article.date}</p>
          <p>{article.description}</p>
          <LikeButton articleId={ article.id }/>
        </div>
      })
    }

      return (
        <div className="feed-container">
          <h1> Articles for { this.props.currentUser.first_name }</h1>
          { article_divs }
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
    feed: state.feed,
    currentUser: state.currentUser
  }


}




export default connect (mapStatetoProps, mapDispatchtoProps)(ShowFeed)
