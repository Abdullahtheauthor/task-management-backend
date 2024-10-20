import { combineReducers } from 'redux';
import authSlice from './authSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
});

export default rootReducer;