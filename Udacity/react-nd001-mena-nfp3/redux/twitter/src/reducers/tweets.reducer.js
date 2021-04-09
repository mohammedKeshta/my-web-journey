import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../types'

export default function tweetsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.payload.tweets,
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
