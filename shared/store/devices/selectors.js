export const selectDevices = () => (state) => state.devices.devices;
export const selectDevice = (deviceId) => (state) =>
  state.devices.devices.find((device) => device.id === deviceId);
