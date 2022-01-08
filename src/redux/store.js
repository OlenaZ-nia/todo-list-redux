import { createStore, combineReducers } from 'redux';
// import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const reducer = (state = {}, action) => {
//   return state
// };

// const store = createStore(reducer);
// export default store;
