import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
} from '../utils/CONSTANTS'

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, value: state.value + 1 }
    case DECREMENT_COUNT:
      return { ...state, value: state.value - 1 }
    case RESET_COUNT:
      return { ...state, value: 0 }
    default:
      return state
  }
}
