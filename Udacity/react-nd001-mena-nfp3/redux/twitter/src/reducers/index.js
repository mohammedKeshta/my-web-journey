import { combineReducers } from 'redux'
import tweets from './tweets.reducer'
import users from './users.reducer'
import authedUser from './authed-user.reducer'

const rootReducer = combineReducers({
  tweets,
  users,
  authedUser,
})

export default rootReducer
