import { SET_USER_ME, UPDATE_USER_ME } from './actions';

const initialState = {
  me: {},
};

const prepareMe = (user) => ({
  ...user,
  fullName: `${user.name} ${user.surname}`,
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ME:
      return {
        ...state,
        me: prepareMe(action.payload.me),
      };
    case UPDATE_USER_ME:
      return {
        ...state,
        me: prepareMe({
          ...state.me,
          ...action.payload.partialMe,
        }),
      };
    default:
      return state;
  }
};

export default usersReducer;
