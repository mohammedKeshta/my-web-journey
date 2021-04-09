import { SET_AUTHED_USER } from '../types'

export default function authedUserReducer(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.payload.userId
    default:
      return state
  }
}
