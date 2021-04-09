import { RECEIVE_USERS } from '../types'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    payload: { users },
  }
}
