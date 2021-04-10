import { PLANTS } from 'shared/constants';

const getPlantImage = (plantId) =>
  PLANTS.find((plant) => plant.id === plantId).image;

export default getPlantImage;
