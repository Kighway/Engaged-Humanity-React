import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleInFeed from '../components/article-in-feed'

class ShowInterest extends Component {

  render() {

      if (this.props.currentUser.interests) {

        let interest_object = this.props.currentUser.interests;
        interest_object.keys(interest_object).map(function(key) {

          let interest = interest_object["title"]

          return  (
            <div>
            { interest }
            </div>

          )
        }
      )
    }
  }
}

function mapStatetoProps(state) {
  return {
    feed: state.feed
  }
}


export default connect (mapStatetoProps)(ShowInterest)
