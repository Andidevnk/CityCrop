import { PLANTS } from 'shared/constants';

export const getPlant = (plantId) =>
  PLANTS.find((plant) => plant.id === plantId);
export const getPlantImage = (plantId) => getPlant(plantId).image;
