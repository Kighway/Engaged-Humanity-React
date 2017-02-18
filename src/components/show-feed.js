import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFeed } from '../actions'
import LikeButton from '../components/like-button'

class ShowFeed extends Component {

  componentDidMount() {
    this.props.fetchFeed()
  }

//  component


  render() {
    //debugger
    if (!this.props.feed || this.props.feed.length === 0) {
      return (
        <div>
        </div>
      )
    } else {

      // Object.keys(this.props.feed.).forEach(function (key) {
      //   let obj = myObj[key];
        // do something with obj

//         const article_divs = Object.entries(this.props.feed.by_followings_likes).map (function (article) { return article[1] }).map (function (article) { return
//           // <div id={`friend-like-${article["article"]["id"]}`} className='article-container'>
//           //   <h6> Hello </h6>
//           //
//           // </div>
//           "test"
// //          article["article"]["title"]
//           debugger
//
//         })
        var articles = this.props.feed.by_following_likes

        debugger

//      });
      return (
        <div className="feed-container">
          <h1> Articles for { this.props.currentUser.first_name }</h1>
          {  }
{ /*        <div>
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
*/ }
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
