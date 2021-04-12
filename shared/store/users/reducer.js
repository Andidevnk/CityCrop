import { SET_USER_ME } from './actions';

const initialState = {
  me: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ME:
      return {
        ...state,
        me: action.payload.me,
      };
    default:
      return state;
  }
};

export default usersReducer;
