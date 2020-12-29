import { SET_USER_TOKEN } from './actions';

const initialState = {
  isAuthLoading: true,
  userToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return {
        ...state,
        isAuthLoading: false,
        userToken: action.payload.userToken,
      };
    default:
      return state;
  }
};
