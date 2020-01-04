const { createStore, bindActionCreators } = require('redux');

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.payload);
    case 'REMOVE_TODO':
      return state.filter(id => id !== action.payload);
    case 'CLEAR_TODO':
      return (state = []);
    default:
      return state;
  }
};

const store = createStore(todoReducer);

const subscribe = () => console.log(`${store.getState()}`);
const unsubscribe = store.subscribe(subscribe);

add = todo => ({ type: 'ADD_TODO', payload: todo });
remove = id => ({ type: 'REMOVE_TODO', payload: id });
clear = () => ({ type: 'CLEAR_TODO', payload: [] });

const boundActionCreators = bindActionCreators(
  { add, remove, clear },
  store.dispatch,
);

boundActionCreators.add('Use Redux');
boundActionCreators.add('Read the docs');
boundActionCreators.remove('Read the docs');
boundActionCreators.clear();

// unsubscribe
unsubscribe();
