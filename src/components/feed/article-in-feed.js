import React, { Component } from 'react'
import LikeButton from './like-button'

class ArticleInFeed extends Component {

  // this.setState({speed: this.state.speed + 1})


  render() {

      let article = this.props.article



      var image_divs = <div className="article-image-container"></div>


      // if (this.props.article && this.props.article.image_url && this.props.article.image_url.length > 0) {
      //   image_divs = {<div className="article-image-container"><div>}
      //  }

      let liked = this.props.isLiked
      return (
        <div className="article-container" key={this.props.article.id}>
          <div className="article-image-container">
            <img className="article-image" src={article.image_url } />
          </div>

          <div className="article-content">
            <div className="feed-article-title"> { article.title } </div>
            <div className="feed-article-description">{article.description}</div>
            { /* convert to Link */ }
            <a className="feed-article-link" href>{article.url}</a>
            <div className="feed-small-details">
              <div className="feed-article-author" ><span className="feed-small-fieldnames">Author:</span> {article.author}</div>
              <div className="feed-article-source"><span className="feed-small-fieldnames">Source:</span> {article.source}</div>
              { /* <div className="feed-article-date">{article.date}</div> */ }
            </div>
          </div>

          <LikeButton articleId={ article.id }  isLiked = { liked } />
        </div>
      )
  }

}

export default ArticleInFeed
