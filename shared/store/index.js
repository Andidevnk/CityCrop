import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import usersReducer from './users/reducer';
import devicesReducer from './devices/reducer';

export default createStore(
  combineReducers({
    auth: authReducer,
    users: usersReducer,
    devices: devicesReducer,
  }),
  applyMiddleware(thunk)
);
