var traverse = require('traverse');

export default (state=[], action) => {
  switch (action.type) {
    case "FETCH_FEED":
      return action.payload.feed
      case "TOGGLE_LIKE":
        let articleId = action.payload.likeToToggle.articleId
        let newLikeStatus = action.payload.likeToToggle.isLiked
        let followsArticles  = state.by_followings_likes
        // debugger //followsArticles[1].article.id
        var newState = traverse(followsArticles).map( (node) => {
          if (node.article && node.article.id === articleId) {
            let newNode = node
            debugger
            newNode.liked = newLikeStatus
            // this.update(newNode, true)
            // this.delete(true)
          }
        })
        debugger
        return action.payload.feed
    default:
      return state
  }
}
