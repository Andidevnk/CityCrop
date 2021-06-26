import { SHOW_ALERT, HIDE_ALERT } from './actions';

const initialState = {
  message: '',
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        message: action.payload.message,
      };
    case HIDE_ALERT:
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};

export default alertReducer;
