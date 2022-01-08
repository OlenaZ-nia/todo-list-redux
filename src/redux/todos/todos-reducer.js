import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todos-actions';

// console.log(actions)

const items = createReducer([], {
  'todos/add': (state, {payload}) => [...state, payload],
  'todos/delete': (state, { payload }) => state.filter(({ id }) => id !== payload),
  'todos/toggleCompleted': (state, { payload }) =>
    state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      )
})

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [actions.changeFilter]: ( _, {payload})=>payload,
})
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'todos/changeFilter':
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
