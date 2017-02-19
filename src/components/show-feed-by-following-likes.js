import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleInFeed from '../components/article-in-feed'

class ShowFeedByFollowerLikes extends Component {

  render() {

    if (!this.props.feed || this.props.feed.length === 0) {
      return (
        <div>
        </div>
      )
    } else {

      var article_divs = <div></div>

      if (this.props.feed.by_followings_likes) {

        let feed_object = this.props.feed.by_followings_likes;
        article_divs = Object.keys(feed_object).map(function(key) {

          let article = feed_object[key]["article"]

          return <ArticleInFeed article={ article }/>})
      }

      return (
        <div className="inner-feed-container">
          { article_divs }
        </div>
      )
    }
  }
}

function mapStatetoProps(state) {
  return {
    feed: state.feed
  }
}

export default connect (mapStatetoProps)(ShowFeedByFollowerLikes)
