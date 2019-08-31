import {
  ADD_DAY,
  ADD_ERROR,
  CANCEL_FETCHING,
  CHANGE_SUGGESTIONS,
  CLEAR_ERROR,
  CLEAR_SUGGESTIONS,
  FETCH_RESORT_NAMES,
  REMOVE_DAY,
  SET_GOAL
} from '../constants/action-types';
import fetch from 'isomorphic-fetch';

export const addDay = (resort, date, powder = false, backcountry = false) => ({
  type: ADD_DAY,
  payload: { resort, date, powder, backcountry }
});

export const removeDay = date => ({ type: REMOVE_DAY, payload: date });

export const setGoal = goal => ({ type: SET_GOAL, payload: goal });

export const addError = errorMsg => ({ type: ADD_ERROR, payload: errorMsg });

export const clearError = errorMsgIndex => ({ type: CLEAR_ERROR, payload: errorMsgIndex });

export const changeSuggestions = suggestions => ({ type: CHANGE_SUGGESTIONS, payload: suggestions });

export const clearSuggestions = () => ({ type: CLEAR_SUGGESTIONS });

export const randomGoals = () => (dispatch, getState) => {
  if (!getState().resortNames.fetching) {
    dispatch({ type: FETCH_RESORT_NAMES });
    setTimeout(() => dispatch({ type: CANCEL_FETCHING }), 1500);
  }
};

export const suggestResortNames = value => dispatch => {
  fetch(`http://localhost:3333/resorts/${value || ''}`)
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then(suggestResortNames => {
      dispatch({ type: CHANGE_SUGGESTIONS, payload: suggestResortNames });
    })
    .catch(error => {
      dispatch({ type: ADD_ERROR, payload: error.message });
      dispatch({ type: CANCEL_FETCHING });
    });
};
