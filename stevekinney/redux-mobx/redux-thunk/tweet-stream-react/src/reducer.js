import { combineReducers } from 'redux'
import { ADD_TWEETS } from './actions'

const tweets = (tweets = [], action) => {
  switch (action.type) {
    case ADD_TWEETS:
      return action.payload.tweets
    default:
      return tweets
  }
}

export default combineReducers({
  tweets,
})
