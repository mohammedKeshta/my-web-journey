import {
  ADD_DAY,
  ADD_ERROR,
  CHANGE_SUGGESTIONS,
  CLEAR_ERROR,
  CLEAR_SUGGESTIONS,
  REMOVE_DAY,
  SET_GOAL
} from '../constants/action-types';

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
