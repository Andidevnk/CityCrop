import axios from 'axios';

export const listNetworksAsync = () => () =>
  axios.get('http://192.168.42.1:8080/networks');

export const connectToNetworkAsync = (ssid, password) => (_, getState) => {
  const { email } = getState().users.me;
  const data = {
    ssid: ssid,
    passphrase: password,
    identity: email,
  };
  return axios.post('http://192.168.42.1:8080/connect', data, {
    timeout: 8000,
  });
};

// Dummy request for debugging
export const listNetworksDummyAsync = () => () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: [
            { ssid: 'My Network 1', security: 'wpa' },
            { ssid: 'My Network 2', security: 'wpa' },
            { ssid: 'My Network 3', security: 'wpa-2' },
            { ssid: 'My Network 4', security: 'wpa-2' },
          ],
        }),
      1000
    )
  );
