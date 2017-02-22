import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFeed } from '../../actions'
import FeedTabs from './feed-tabs'
import InterestsContainer from '../interests/interests-container'

class FeedContainer extends Component {

  componentDidMount() {

    if (sessionStorage.jwt === 'undefined') {
      sessionStorage.jwt = ""
    }

    if (sessionStorage.jwt !== "") {
      this.props.fetchFeed()
    }
  }

  render() {
    return <div>
      < FeedTabs />
      < InterestsContainer />
    </div>
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

export default connect (mapStatetoProps, mapDispatchtoProps)(FeedContainer)
