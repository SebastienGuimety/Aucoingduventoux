import { configureStore } from '@reduxjs/toolkit';
import { REDUCER_NAMES } from '../constants/reducers-name';

import useReducer from './users/user-slice';

export const store = configureStore({
  reducer: {
    [REDUCER_NAMES.USER]: useReducer
  }
});