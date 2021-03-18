// TODO_CONSTANTS
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
// GOALS_CONTACTS
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

const INITIAL_STATE = {
  todos: [],
  goals: [],
};
// index lib
function createStore(initialState = {}, reducer) {
  /**
   * the index should have four parts
   *  1. The State
   *  2. Get the state
   *  3. Listen to changes on the state
   *  4. Update the state
   */
  let state = initialState;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  };
}

// TODO_ACTIONS
const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};
const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};
const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};
// GOALS_ACTIONS
const addGoal = (goal) => {
  return {
    type: ADD_GOAL,
    goal,
  };
};
const removeGoal = (id) => {
  return {
    type: REMOVE_GOAL,
    id,
  };
};
// Reducers
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.todo.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : { ...todo, complete: !todo.complete }
      );
    default:
      return state;
  }
}
function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id);
    default:
      return state;
  }
}
function rootReducer(state, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  }
}


// Create the index
const store = createStore(INITIAL_STATE, rootReducer);

const unsubscribe = store.subscribe(() => {
  console.log("The new state is: ", store.getState());
});

store.dispatch(
  addTodo({
    id: 1,
    name: "Learn Redux",
    complete: false,
  })
);
store.dispatch(
  addTodo({
    id: 2,
    name: "React Learning",
    complete: false,
  })
);
store.dispatch(toggleTodo(1))
store.dispatch(addGoal({
  id: 1,
  name: "Goal 1",
}))
