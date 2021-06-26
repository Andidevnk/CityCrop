import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showAlert } from 'shared/store/alert/actions';

export const SET_USER_TOKEN = 'SET_USER_TOKEN';

export const tryGetStoredUserToken = () => (dispatch) =>
  AsyncStorage.getItem('token').then((userToken) =>
    dispatch(setUserToken(userToken))
  );

export const login = (email, password) => (dispatch) => {
  const data = { email, password };
  return axios
    .post('https://api.citycrop.io/v1/auth/login', data)
    .then((response) =>
      AsyncStorage.setItem('token', response.data.token).then(() =>
        dispatch(setUserToken(response.data.token))
      )
    )
    .catch(() => dispatch(showAlert('Your email or password is wrong.')));
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

export const resetPassword = (email) => () => {
  const data = { email };
  return axios.post('https://api.citycrop.io/v1/users/reset-password', data);
};

export const logout = () => (dispatch) =>
  AsyncStorage.removeItem('token').then(() => dispatch(setUserToken(null)));

export const setUserToken = (userToken) => ({
  type: SET_USER_TOKEN,
  payload: { userToken },
});
