import { COMMENTS, DISHES, LEADERS, PROMOTIONS } from '../shared/DB';

export const initialState = {
  dishes: DISHES,
  promotions: PROMOTIONS,
  leaders: LEADERS,
  comments: COMMENTS
};

const Reducer = (state = initialState, action) => {
  return state;
};

export default Reducer;
