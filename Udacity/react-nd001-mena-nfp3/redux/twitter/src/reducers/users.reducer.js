import { RECEIVE_USERS } from '../types'

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.payload.users,
      }
    default:
      return state
  }
}
