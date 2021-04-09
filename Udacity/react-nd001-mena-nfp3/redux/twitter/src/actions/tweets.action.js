import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../types'
import { saveLikeToggle } from '../utils/api'

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    payload: { tweets },
  }
}

export function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    payload: {
      id,
      authedUser,
      hasLiked,
    },
  }
}

export function handleToggleTweet(tweet) {
  return (dispatch) => {
    dispatch(toggleTweet(tweet))
    return saveLikeToggle(tweet).catch((e) => {
      console.warn('Error in handleToggle Twee: ', e)
      dispatch(toggleTweet(tweet))
      alert('The was an error liking the tweet. Try again.')
    })
  }
}
