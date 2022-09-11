import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import cartReducer from './cart';
import userReducer from './user';

const reducer = combineReducers({
  // here we will be adding reducers
})
const store = configureStore({
  reducer:{
    cart:cartReducer,
    user:userReducer
  }
})
export default store;