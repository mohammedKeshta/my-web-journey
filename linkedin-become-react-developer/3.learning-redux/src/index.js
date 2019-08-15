import { SET_GOAL } from "./redux/constants/action-types";
import rootReducer from "./redux/reducers";

const INIT_STATE = { goal: 10 };

const action = {
  type: SET_GOAL,
  payload: 15
};
const nextState = rootReducer(INIT_STATE, action);

console.log(`

    initial goal: ${INIT_STATE.goal}
    action: ${JSON.stringify(action)}
    new goal: ${nextState.goal}

`);
