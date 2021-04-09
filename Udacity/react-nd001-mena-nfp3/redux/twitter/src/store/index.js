import { createStore } from 'redux'
import rootReducer from '../reducers'
import middleware from '../middleware'

const store = createStore(rootReducer, middleware)

store.subscribe(() => {
  console.log(store.getState())
})

export default store
