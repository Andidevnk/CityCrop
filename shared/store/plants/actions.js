import AuthAxios from 'shared/axios/AuthAxios';

import { loadDevicesAsync } from '../devices/actions';

export const addPlantAsync = (deviceId, moduleId, plantId, position) => (
  dispatch
) => {
  const data = {
    device_id: deviceId,
    module_id: moduleId,
    plant_id: plantId,
    position: position,
  };
  return AuthAxios.post('https://api.citycrop.io/v1/grid/add', data).then(() =>
    dispatch(loadDevicesAsync())
  );
};

export const deletePlantAsync = (deviceId, moduleId, position) => (
  dispatch
) => {
  const data = {
    device_id: deviceId,
    module_id: moduleId,
    position: position,
  };
  return AuthAxios.post(
    'https://api.citycrop.io/v1/grid/delete',
    data
  ).then(() => dispatch(loadDevicesAsync()));
};
