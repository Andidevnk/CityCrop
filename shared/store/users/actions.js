import { AsyncStorage } from 'react-native';
import AuthAxios from 'shared/axios/AuthAxios';

export const SET_USER_ME = 'SET_USER_ME';
export const UPDATE_USER_ME = 'UPDATE_USER_ME';

export const getMeAsync = () => (dispatch) => {
  return AuthAxios.get('https://api.citycrop.io/v1/users/get').then(
    (response) => dispatch(setUserMe(response.data))
  );
};

export const updateMeAsync = (newUser) => (dispatch) => {
  return AuthAxios.post(
    'https://api.citycrop.io/v1/users/update',
    newUser
  ).then(() => dispatch(updateUserMe(newUser)));
};

export const setUserMe = (user) => ({
  type: SET_USER_ME,
  payload: {
    me: user,
  },
});

export const updateUserMe = (partialUser) => ({
  type: UPDATE_USER_ME,
  payload: {
    partialMe: partialUser,
  },
});

export const setUserExpoPushTokenAsync = (expoPushToken) => {
  const data = { token: expoPushToken };
  return AuthAxios.post(
    'https://api.citycrop.io/v1/users/me/push-token',
    data
  ).then(() => AsyncStorage.setItem('expoPushToken', expoPushToken));
};
