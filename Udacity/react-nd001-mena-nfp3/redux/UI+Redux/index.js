function generateId() {
    return (
        Math.random().toString(36).substring(2) +
        new Date().getTime().toString(36)
    );
}

// TODO_CONSTANTS
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
// GOALS_CONTACTS
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

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
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    };

    return {
        getState,
        subscribe,
        dispatch,
    };
}

// TODO_ACTIONS
const addTodoAction = (todo) => {
    return {
        type: ADD_TODO,
        todo,
    };
};
const removeTodoAction = (id) => {
    return {
        type: REMOVE_TODO,
        id,
    };
};
const toggleTodoAction = (id) => {
    return {
        type: TOGGLE_TODO,
        id,
    };
};
// GOALS_ACTIONS
const addGoalAction = (goal) => {
    return {
        type: ADD_GOAL,
        goal,
    };
};
const removeGoalAction = (id) => {
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
            return state.filter((todo) => todo.id !== action.id);
        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id !== action.id
                    ? todo
                    : {...todo, complete: !todo.complete}
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
    };
}

// Create the index
const store = createStore(INITIAL_STATE, rootReducer);

const unsubscribe = store.subscribe(() => {
    const {goals, todos} = store.getState();
    console.log({todos, goals})

    // reset all goals and todos
    document.getElementById('todos').innerHTML = ''
    document.getElementById('goals').innerHTML = ''
    // populate data to DOM
    todos.forEach(addTodoToDOM)
    goals.forEach(addGoalToDOM)
});

const addTodo = () => {
    const input = document.getElementById("todo");
    const name = input.value.trim();
    input.value = "";
    store.dispatch(
        addTodoAction({
            id: generateId(),
            name,
            complete: false,
        })
    );
};
const addGoal = () => {
    const input = document.getElementById("goal");
    const name = input.value.trim();
    input.value = "";
    store.dispatch(
        addGoalAction({
            id: generateId(),
            name,
        })
    );
};

function createRemoveButton (onClick) {
    const removeBtn = document.createElement('button')
    removeBtn.innerHTML = 'X'
    removeBtn.addEventListener('click', onClick)
    return removeBtn
}

// DOM Code
const addTodoToDOM = (todo) => {
    const node = document.createElement('li')
    const text = document.createTextNode(todo.name)
    node.style.textDecoration = todo.complete ? 'line-through' : ''
    node.appendChild(text)

    // check if it completed or not
    node.addEventListener('click', () => {
        store.dispatch(toggleTodoAction(todo.id))
    })


    // remove todo
    const removeBtn = createRemoveButton(() => {
        store.dispatch(removeTodoAction(todo.id))
    })
    node.appendChild(removeBtn)

    document.getElementById('todos').appendChild(node)
};

const addGoalToDOM = (goal) => {
    const node = document.createElement('li')
    const text = document.createTextNode(goal.name)
    node.appendChild(text)

    // remove goal
    const removeBtn = createRemoveButton(() => {
        store.dispatch(removeGoalAction(goal.id))
    })
    node.appendChild(removeBtn)


    document.getElementById('goals').appendChild(node)
};

document.getElementById("todoBtn")
    .addEventListener("click", addTodo);

document.getElementById("goalBtn")
    .addEventListener("click", addGoal);
