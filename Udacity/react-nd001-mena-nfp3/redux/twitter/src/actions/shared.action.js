import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets.action'
import { receiveUsers } from './users.action'
import { setAuthedUser } from './authed-user.action'

const AUTHED_ID = 'mohammed_elzanaty'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveTweets(tweets))
      dispatch(setAuthedUser(AUTHED_ID))
    })
  }
}
