import { combineReducers } from 'redux';
import { increment, decrement } from './counter-actions';
import { createReducer } from '@reduxjs/toolkit';

const valueReducer = createReducer(10, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload
})

const stepReducer = (state = 5, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
