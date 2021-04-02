import { combineReducers } from 'redux'

import lists from './list-reducers'
import cards from './card-reducers'

export default combineReducers({
  lists,
  cards,
})
