import AuthAxios from 'shared/axios/AuthAxios';

export const SET_DEVICES = 'SET_DEVICES';
export const UPDATE_DEVICE_MEASUREMENTS = 'UPDATE_DEVICE_MEASUREMENTS';

export const loadDevicesAsync = () => (dispatch) => {
  return AuthAxios.get(
    'https://api.citycrop.io/v1/devices/all'
  ).then((response) => dispatch(setDevices(response.data.devices)));
};

export const addDeviceAsync = (name, timezone) => (dispatch) => {
  const data = {
    name: name,
    timezone: timezone,
  };
  return AuthAxios.post(
    'https://api.citycrop.io/v1/devices/add',
    data
  ).then(() => dispatch(loadDevicesAsync()));
};

export const updateDeviceAsync = (id, name, timezone) => (dispatch) => {
  const data = {
    device_id: id,
    name: name,
    timezone: timezone,
  };
  return AuthAxios.post(
    'https://api.citycrop.io/v1/devices/update',
    data
  ).then(() => dispatch(loadDevicesAsync()));
};

export const deleteDeviceAsync = (id) => (dispatch) => {
  const data = {
    device_id: id,
  };
  return AuthAxios.post(
    'https://api.citycrop.io/v1/devices/delete',
    data
  ).then(() => dispatch(loadDevicesAsync()));
};

export const setDevices = (devices) => ({
  type: SET_DEVICES,
  payload: {
    devices: devices,
  },
});

export const updateDeviceMeasurements = (deviceId, newMeasurements) => ({
  type: UPDATE_DEVICE_MEASUREMENTS,
  payload: {
    deviceId,
    newMeasurements,
  },
});
