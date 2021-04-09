import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import tweets from './tweets.reducer'
import users from './users.reducer'
import authedUser from './authed-user.reducer'

const rootReducer = combineReducers({
  tweets,
  users,
  authedUser,
  loadingBar: loadingBarReducer,
})

export default rootReducer
