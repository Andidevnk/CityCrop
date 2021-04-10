import { selectModule } from 'shared/store/modules/selectors';

export const selectPlants = (deviceId, moduleId) => (state) =>
  selectModule(deviceId, moduleId)(state).plants;
export const selectPlant = (deviceId, moduleId, plantId) => (state) =>
  selectPlants(deviceId, moduleId)(state).find((plant) => plant.id === plantId);
