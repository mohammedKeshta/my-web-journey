import { showLoading, hideLoading } from 'react-redux-loading'
import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets.action'
import { receiveUsers } from './users.action'
import { setAuthedUser } from './authed-user.action'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveTweets(tweets))
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}
