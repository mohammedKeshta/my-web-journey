import { RECEIVE_TWEETS } from '../types'

export default function tweetsReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.payload.tweets,
      }
    default:
      return state
  }
}
