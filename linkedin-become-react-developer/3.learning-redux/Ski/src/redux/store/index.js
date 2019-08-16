import expect from 'expect';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import {
  addDay,
  addError,
  removeDay,
  setGoal,
  clearError,
  changeSuggestions,
  clearSuggestions,
  randomGoals,
  suggestResortNames
} from '../actions';

const consoleMessages = store => next => action => {
  let result;

  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log('ski days', store.getState().allSkiDays.length);
  result = next(action);

  let { allSkiDays, goal, errors, resortNames } = store.getState();

  console.log(`

		ski days: ${allSkiDays.length}
		goal: ${goal}
		fetching: ${resortNames.fetching}
		suggestions: ${resortNames.suggestions}
		errors: ${errors}

	`);

  console.groupEnd();

  return result;
};

const store = applyMiddleware(thunk, consoleMessages)(createStore)(rootReducer);

store.dispatch(addDay('Heavenly', '2019-8-15'));
store.dispatch(removeDay('2019-8-15'));

store.dispatch(setGoal(5));
expect(store.getState().goal).toEqual(5);
console.log(` setGoal() Action Creator Works!!!`);

store.dispatch(addError('something went wrong'));
expect(store.getState().errors).toEqual(['something went wrong']);
console.log(` addError() Action Creator Works!!!`);

store.dispatch(clearError(0));
expect(store.getState().errors).toEqual([]);
console.log(` clearError() Action Creator Works!!!`);

store.dispatch(changeSuggestions(['One', 'Two', 'Three']));
expect(store.getState().resortNames.suggestions).toEqual(['One', 'Two', 'Three']);
console.log(` changeSuggestions() Action Creator Works!!!`);

store.dispatch(clearSuggestions());
expect(store.getState().resortNames.suggestions).toEqual([]);
console.log(` clearSuggestions() Action Creator Works!!!`);

store.dispatch(randomGoals());
expect(store.getState().resortNames.fetching).toEqual(true);
console.log(` randomGoals() Action Creator Works!!! and Now Fetched`);

setTimeout(() => {
  expect(store.getState().resortNames.fetching).toEqual(false);
  console.log(` randomGoals() Action Creator Works!!! and Fetched`);
}, 1500);

store.dispatch(suggestResortNames());
store.dispatch(suggestResortNames('hea'));

export default store;
