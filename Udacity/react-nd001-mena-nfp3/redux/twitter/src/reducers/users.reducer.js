import { RECEIVE_USERS } from '../types'

export default function usersReducer(users = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...users,
        ...action.payload.users,
      }
    default:
      return users
  }
}
