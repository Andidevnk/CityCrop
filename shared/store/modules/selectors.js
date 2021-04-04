import { selectDevice } from 'shared/store/devices/selectors';

export const selectModules = (deviceId) => (state) =>
  selectDevice(deviceId)(state).modules;
export const selectModule = (deviceId, moduleId) => (state) =>
  selectModules(deviceId)(state).find((module) => module.id === moduleId);
