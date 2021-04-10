import { ADD_TWEET, RECEIVE_TWEETS, TOGGLE_TWEET } from '../types'

export default function tweetsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.payload.tweets,
      }
    case ADD_TWEET:
      const { tweet } = action.payload

      let replyingTo = {}
      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat([tweet.id]),
          },
        }
      }

      return {
        ...state,
        [tweet.id]: tweet,
        ...replyingTo,
      }
    case TOGGLE_TWEET:
      const tweetId = action.payload.id
      return {
        ...state,
        [tweetId]: {
          ...state[tweetId],
          likes:
            action.payload.hasLiked === true
              ? state[tweetId].likes.filter(
                  (uid) => uid !== action.payload.authedUser
                )
              : state[tweetId].likes.concat(action.payload.authedUser),
        },
      }
    default:
      return state
  }
}
