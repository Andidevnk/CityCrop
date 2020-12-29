import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';

export default createStore(
  combineReducers({
    auth: authReducer,
  }),
  applyMiddleware(thunk)
);
