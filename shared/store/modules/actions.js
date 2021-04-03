import AuthAxios from 'shared/axios/AuthAxios';

import { loadDevicesAsync, updateDeviceMeasurements } from '../devices/actions';

export const UPDATE_MODULE_MEASUREMENTS = 'UPDATE_MODULE_MEASUREMENTS';

export const addModuleAsync = (
  deviceId,
  moduleId,
  name,
  moduleType,
  position
) => (dispatch) => {
  const data = {
    device_id: deviceId,
    module_id: moduleId,
    name: name,
    tray_type: moduleType,
    position: position,
  };
  return AuthAxios.post('https://api.citycrop.io/v1/modules/add', data).then(
    (response) => {
      if (response.data.status === 'added') {
        return dispatch(loadDevicesAsync());
      }
      throw response.data.status;
    }
  );
};

export const getModuleMeasurementsAsync = (deviceId, moduleId) => (
  dispatch
) => {
  const data = {
    device_id: deviceId,
    module_id: moduleId,
  };
  return AuthAxios.post(
    'https://api.citycrop.io/v1/modules/realtime',
    data
  ).then((response) => {
    dispatch(updateDeviceMeasurements(deviceId, response.data.device));
    dispatch(
      updateModuleMeasurements(deviceId, moduleId, response.data.module)
    );
  });
};

export const updateModuleAsync = (id, name, type) => (dispatch) => {
  const data = {
    module_id: id,
    name: name,
    tray_type: type,
  };
  return AuthAxios.post(
    'https://api.citycrop.io/v1/modules/update',
    data
  ).then(() => dispatch(loadDevicesAsync()));
};

export const deleteModuleAsync = (id) => (dispatch) => {
  const data = {
    module_id: id,
  };
  return AuthAxios.post(
    'https://api.citycrop.io/v1/modules/delete',
    data
  ).then(() => dispatch(loadDevicesAsync()));
};

export const startGetModuleMeasurementsInterval = (deviceId, moduleId) => (
  dispatch
) =>
  setInterval(() => {
    dispatch(getModuleMeasurementsAsync(deviceId, moduleId));
  }, 10000);

export const updateModuleMeasurements = (
  deviceId,
  moduleId,
  newMeasurements
) => ({
  type: UPDATE_MODULE_MEASUREMENTS,
  payload: {
    deviceId: deviceId,
    moduleId: moduleId,
    newMeasurements: newMeasurements,
  },
});
