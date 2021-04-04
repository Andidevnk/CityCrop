export const selectDevice = (deviceId) => (state) =>
  state.devices.devices.find((device) => device.id === deviceId);
