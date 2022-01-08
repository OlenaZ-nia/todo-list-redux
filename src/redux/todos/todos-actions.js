import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit'
// import types from './todos-types';

const addTodo = createAction('todos/add', text =>({
    payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
  }));

const deleteTodo = createAction('todos/delete');

const changeFilter = createAction('todos/changeFilter');

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

const toggleCompleted = createAction('todos/toggleCompleted');

export default { addTodo, deleteTodo, changeFilter, toggleCompleted };
