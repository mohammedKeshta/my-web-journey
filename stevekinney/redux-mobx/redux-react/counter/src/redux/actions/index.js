import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
} from '../utils/CONSTANTS'

export const incrementCount = () => {
  return {
    type: INCREMENT_COUNT,
  }
}

export const decrementCount = () => {
  return {
    type: DECREMENT_COUNT,
  }
}

export const resetCount = () => {
  return {
    type: RESET_COUNT,
  }
}
