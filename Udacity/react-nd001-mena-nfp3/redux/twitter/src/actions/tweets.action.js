import { ADD_TWEET, RECEIVE_TWEETS, TOGGLE_TWEET } from '../types'
import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    payload: { tweets },
  }
}

export function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    payload: { tweet },
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

export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveTweet({
      text,
      author: authedUser,
      replyingTo,
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()))
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
