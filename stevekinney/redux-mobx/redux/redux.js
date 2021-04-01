/**
 * applyMiddleware: function()
 * bindActionCreators: function()
 * combineReducers: function()
 * compose: function()
 * createStore: function()
 */
const {
  createStore,
  combineReducers,
  compose,
  bindActionCreators,
  applyMiddleware,
} = require('redux')

const makeLouder = (string) => string.toUpperCase()
const repeatThreeTimes = (string) => string.repeat(3)
const embolden = (string) => string.bold()

// compose
/*
const makeLouderAndBoldAndRepeatThreeTimes = compose(embolden, repeatThreeTimes, makeLouder)
console.log(makeLouderAndBoldAndRepeatThreeTimes('hello'))
*/

// create store
const reducer = (state = { value: 1 }, action) => {
  if (action.type === 'ADD') {
    const value = state.value
    const amount = action.payload.amount
    return { value: amount + value }
  }
  return state
}
const store = createStore(reducer)
store.dispatch({
  type: 'ADD',
  payload: {
    amount: 2,
  },
})

console.log(store)
console.log(store.getState())
