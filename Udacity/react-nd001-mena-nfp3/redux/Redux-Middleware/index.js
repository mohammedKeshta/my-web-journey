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

const checker = (store) => (next) => (action) => {

    if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
        return alert('Nope that\'s a bad idea')
    }
    if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
        return alert('Nope that\'s a bad idea')
    }

    return next(action)
}

const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('Action: ', action)
        const result = next(action)
        console.log('The new state: ', store.getState())
    console.groupEnd()
    return result
}


// Create the index
const store = Redux.createStore(
    Redux.combineReducers({
        todos,
        goals
    }), Redux.applyMiddleware(checker, logger));

const unsubscribe = store.subscribe(() => {
    const { goals, todos } = store.getState();
    console.log({ todos, goals })

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
    store.dispatch(addTodoAction({
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
    store.dispatch(addGoalAction({
        id: generateId(),
        name,
    }));
}

function createRemoveButton(onClick) {
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
