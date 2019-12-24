import { createStore } from 'redux';
import rootReducer from './reducer';

const initialState = {
  users: {},
  company: {}
};
export const store = createStore(rootReducer, initialState);
