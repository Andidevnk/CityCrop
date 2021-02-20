import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SET_USER_TOKEN = 'SET_USER_TOKEN';

export const tryGetStoredUserToken = () => (dispatch) => {
  return AsyncStorage.getItem('token').then((userToken) =>
    dispatch(setUserToken(userToken))
  );
};

export const login = (email, password) => (dispatch) => {
  const data = { email, password };

  return axios
    .post('https://api.citycrop.io/v1/auth/login', data)
    .then((response) =>
      AsyncStorage.setItem('token', response.data.token).then(() =>
        dispatch(setUserToken(response.data.token))
      )
    );
};

export const register = (name, surname, email, password) => (dispatch) => {
  const data = { name, surname, email, password };

  return axios
    .post('https://api.citycrop.io/v1/auth/signup', data)
    .then((response) =>
      AsyncStorage.setItem('token', response.data.token).then(() =>
        dispatch(setUserToken(response.data.token))
      )
    );
};

export const logout = () => (dispatch) => {
  return AsyncStorage.removeItem('token').then(() =>
    dispatch(setUserToken(null))
  );
};

export const setUserToken = (userToken) => ({
  type: SET_USER_TOKEN,
  payload: { userToken },
});
