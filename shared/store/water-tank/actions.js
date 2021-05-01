import AuthAxios from 'shared/axios/AuthAxios';

export const emptyWaterTankAsync = (id) => () => {
  const data = { device_id: id };
  return AuthAxios.post(
    'https://api.citycrop.io/v1/firmware/devices/tank',
    data
  );
};

export const addNutrientsAsync = (id) => () => {
  const data = { device_id: id };
  return AuthAxios.post(
    'https://api.citycrop.io/v1/firmware/devices/nutrients',
    data
  );
};
