import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth/authSlice'
import items from './items/itemsSlice';
import filter from './filter/filterSlice';

const rootReducer = combineReducers({
  items,
  filter,
  auth,
});

export default rootReducer;
