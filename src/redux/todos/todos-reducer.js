import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todos-actions';

const items = createReducer([], {
  'todos/add': (state, {payload}) => [...state, payload],
  'todos/delete': (state, { payload }) => state.filter(({ id }) => id !== payload),
  'todos/toggleCompleted': (state, { payload }) =>
    state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      )
})

const filter = createReducer('', {
  [actions.changeFilter]: ( _, {payload})=>payload,
})

export default combineReducers({
  items,
  filter,
});
