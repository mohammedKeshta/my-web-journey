import { ADD_DAY, REMOVE_DAY, SET_GOAL } from '../constants/action-types';

export const addDay = (resort, date, powder = false, backcountry = false) => ({
  type: ADD_DAY,
  payload: { resort, date, powder, backcountry }
});

export const removeDay = date => ({
  type: REMOVE_DAY,
  payload: date
});

export const setGoal = goal => ({
  type: SET_GOAL,
  payload: goal
});
