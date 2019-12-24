import { combineReducers } from 'redux';
import userReducer from './userReducer';
import companyReducer from './companyReducer';

export default combineReducers({
  users: userReducer,
  company: companyReducer
});
