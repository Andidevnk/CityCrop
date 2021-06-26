import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth/reducer';
import usersReducer from './users/reducer';
import devicesReducer from './devices/reducer';
import alertReducer from './alert/reducer';

export default createStore(
  combineReducers({
    auth: authReducer,
    users: usersReducer,
    devices: devicesReducer,
    alert: alertReducer,
  }),
  applyMiddleware(thunk)
);
