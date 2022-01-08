import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todosReducer from './todos/todos-reducer';

const todosPersistConfig = {
  key: 'rootTodos',
  storage,
  blacklist: ['filter'],
}


// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: {
  todos: persistReducer(todosPersistConfig, todosReducer),
},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger),
  devTools: process.env.NODE_ENV==='development',
});

const persistor=persistStore(store)

export default {store, persistor};


