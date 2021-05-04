import axios from 'axios';
import { AsyncStorage } from 'react-native';

import store from 'shared/store';
import { logout } from 'shared/store/auth/actions';

const AuthAxios = axios.create();

AuthAxios.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const UNAUTHORIZED_STATUS_CODE = 401;
AuthAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === UNAUTHORIZED_STATUS_CODE) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default AuthAxios;
