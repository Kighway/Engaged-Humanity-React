var traverse = require('traverse');

export default (state=[], action) => {
  switch (action.type) {
    case "FETCH_FEED":
      return action.payload.feed

      // case "TOGGLE_LIKE":
      //
      //   // what if likes checking lived in the like component
      //   // with a store check of user likes to determine value
      //   // and they could be set with a user_likes array of articleids
      //   // and checked in the render components
      //   // so initial get user should render with likes
      //   // and then the like button will check for that article id
      //   // so make rails send likes
      //   // then update user, not the feed.
      //
      //
      //   let articleId = action.payload.likeToToggle.articleId
      //   let newLikeStatus = action.payload.likeToToggle.isLiked
      //   let followsArticles  = state.by_followings_likes
      //   // debugger //followsArticles[1].article.id
      //   var newState = traverse(followsArticles).map( (node) => {
      //     if (node.article && node.article.id === articleId) {
      //       let newNode = node
      //       debugger
      //       newNode.liked = newLikeStatus
      //       // this.update(newNode, true)
      //       // this.delete(true)
      //     }
      //   })
      //   debugger
      //   return action.payload.feed
    default:
      return state
  }
}
