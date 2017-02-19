import React, { Component } from 'react'
import LikeButton from '../components/like-button'

class ArticleInFeed extends Component {

  // this.setState({speed: this.state.speed + 1})


  render() {
      let article = this.props.article
      let liked = this.props.isLiked
      return (
        <div className="article-container" key={this.props.article.id}>
          <h6> {article.id } </h6>
          <h1> { article.title } </h1>
          <a href>{article.link}</a>
          <p>{article.author}</p>
          <p>{article.source}</p>
          <p>{article.date}</p>
          <p>{article.description}</p>
          <LikeButton articleId={ article.id }  isLiked = { liked } />
        </div>
      )
  }

}

export default ArticleInFeed
