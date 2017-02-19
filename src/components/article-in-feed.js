import React, { Component } from 'react'
import LikeButton from '../components/like-button'

class ArticleInFeed extends Component {

  render() {
      let article = this.props.article

      return (
        <div className="article-container">
          <h6> {article.id } </h6>
          <h1> { article.title } </h1>
          <a href>{article.link}</a>
          <p>{article.author}</p>
          <p>{article.source}</p>
          <p>{article.date}</p>
          <p>{article.description}</p>
          <LikeButton articleId={ article.id }/>
        </div>
      )
  }

}

export default ArticleInFeed
