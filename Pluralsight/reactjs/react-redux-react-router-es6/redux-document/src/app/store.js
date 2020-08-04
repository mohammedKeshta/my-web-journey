import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import counterPlayReducer from '../features/counter-play/counterPlaySlice'

export default configureStore({
  reducer: {
    counter: counterPlayReducer,
  },
})
