import { SET_DEVICES, UPDATE_DEVICE_MEASUREMENTS } from './actions';
import { UPDATE_MODULE_MEASUREMENTS } from '../modules/actions';

const initialState = {
  devices: [],
};

// TODO: Send this from backend
const prepareDevices = (devices) =>
  devices.map((device) => ({
    ...device,
    id: device._id,
    modulesCount: device.modules.length,
    plantsCount: device.modules.reduce(
      (acc, module) => acc + module.grid.length,
      0
    ),
    modules: prepareModules(device.modules, device),
  }));
const prepareModules = (modules, device) =>
  modules.map((module) => ({
    ...module,
    id: module._id,
    plants: preparePlants(module.grid),
    status: 'on', // TODO: Make this functional
    serialNumber: module.serial_number,
    measurements: {
      ...module.measurements,
      ...device.measurements,
    },
  }));
const preparePlants = (plants) =>
  plants.map((plant) => ({
    ...plant,
    id: plant._id,
    plantId: plant.plant_id,
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
      const {
        deviceId,
        newMeasurements: { measurements },
      } = action.payload;

      const updatedDevices = state.devices.map((device) =>
        device.id === deviceId
          ? {
              ...device,
              measurements: {
                ...device.measurements,
                ph: measurements.ph,
                tank_level: measurements.tank_level,
              },
            }
          : device
      );

      return {
        ...state,
        devices: updatedDevices,
      };
    }
    case UPDATE_MODULE_MEASUREMENTS: {
      const {
        deviceId,
        moduleId,
        newMeasurements: { measurements },
      } = action.payload;

      const updatedDevices = state.devices.map((device) => {
        if (device.id !== deviceId) return device;

        const updatedModules = device.modules.map((module) =>
          module.id === moduleId
            ? {
                ...module,
                measurements: {
                  ...module.measurements,
                  co2: measurements.co2,
                  temperature: measurements.temperature,
                  humidity: measurements.humidity,
                },
              }
            : module
        );

        return {
          ...device,
          modules: updatedModules,
        };
      });

      return {
        ...state,
        devices: updatedDevices,
      };
    }
    default:
      return state;
  }
};

export default devicesReducer;
