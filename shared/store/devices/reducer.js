import { SET_DEVICES, UPDATE_DEVICE_MEASUREMENTS } from './actions';
import { UPDATE_MODULE_MEASUREMENTS } from '../modules/actions';

const initialState = {
  devices: [],
};

const prepareDevices = (devices) =>
  devices.map((device) => ({
    ...device,
    // TODO: Send this from backend
    id: device._id,
    modulesCount: device.modules.length,
    plantsCount: device.modules.reduce(
      (acc, module) => acc + module.grid.length,
      0
    ),
    modules: prepareModules(device.modules),
  }));
const prepareModules = (modules) =>
  modules.map((module) => ({
    ...module,
    id: module._id,
    plants: module.grid,
    status: 'on', // TODO: Make this functional
  }));

const devicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICES: {
      const preparedDevices = prepareDevices(action.payload.devices);
      return {
        ...state,
        devices: preparedDevices,
      };
    }
    case UPDATE_DEVICE_MEASUREMENTS: {
      const selectedDevice = state.devices.find(
        (device) => device.id === action.payload.id
      );
      selectedDevice.measurements.tank_level =
        action.payload.newMeasurements.measurements.tank_level;
      selectedDevice.ecosystem.watering =
        action.payload.newMeasurements.ecosystem.watering;
      return {
        ...state,
      };
    }
    case UPDATE_MODULE_MEASUREMENTS: {
      const selectedDevice = state.devices.find(
        (device) => device.id === action.payload.deviceId
      );
      const selectedModule = selectedDevice.modules.find(
        (module) => module._id === action.payload.moduleId
      );
      selectedModule.measurements.humidity =
        action.payload.newMeasurements.measurements.humidity;
      selectedModule.measurements.temperature =
        action.payload.newMeasurements.measurements.temperature;
      selectedModule.measurements.lighting =
        action.payload.newMeasurements.measurements.lighting;
      selectedModule.ecosystem.custom.lighting.intensity =
        action.payload.newMeasurements.ecosystem.custom.lighting.red;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default devicesReducer;
