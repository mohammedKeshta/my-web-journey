import { RECEIVE_TWEETS } from '../types'

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    payload: { tweets },
  }
}
