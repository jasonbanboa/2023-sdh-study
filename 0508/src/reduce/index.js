
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import todos from './todos';

const rootReducer = combineReducers({
  todos,
});

export const store = configureStore({
  reducer: rootReducer,
});