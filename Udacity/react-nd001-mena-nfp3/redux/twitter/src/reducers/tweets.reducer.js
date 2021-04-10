import { ADD_TWEET, RECEIVE_TWEETS, TOGGLE_TWEET } from '../types'

export default function tweetsReducer(tweets = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...tweets,
        ...action.payload.tweets,
      }
    case ADD_TWEET:
      const { tweet } = action.payload

      let replyingTo = {}
      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...tweets[tweet.replyingTo],
            replies: tweets[tweet.replyingTo].replies.concat([tweet.id]),
          },
        }
      }

      return {
        ...tweets,
        [tweet.id]: tweet,
        ...replyingTo,
      }
    case TOGGLE_TWEET:
      const { id: tweetId, hasLiked, authedUser } = action.payload.id
      return {
        ...tweets,
        [tweetId]: {
          ...tweets[tweetId],
          likes:
            hasLiked === true
              ? tweets[tweetId].likes.filter((uid) => uid !== authedUser)
              : tweets[tweetId].likes.concat(authedUser),
        },
      }
    default:
      return tweets
  }
}
