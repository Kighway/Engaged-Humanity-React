import React, { Component } from 'react'
import ShowFeedByFollowingLikes from '../components/show-feed-by-following-likes'
import ShowFeedByInterests from '../components/show-feed-by-interests'
import Tabs from 'react-simpletabs'

class FeedTabs extends Component {

  render() {
    return <div id="feed-container">
      <Tabs>
        <Tabs.Panel title='Feed by Followings Likes'>
          < ShowFeedByFollowingLikes />
        </Tabs.Panel>
        <Tabs.Panel title='Feed by Interests'>
          < ShowFeedByInterests />
        </Tabs.Panel>
        <Tabs.Panel title='Future Use'>
          <h2>Content #3 here</h2>
        </Tabs.Panel>
      </Tabs>

    </div>
  }
}

export default FeedTabs
