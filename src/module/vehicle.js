import axios from 'axios';

export const getVehicleByCategory = category => {
  const URL = `${process.env.LOCAL_HOST}/vehicle/${category}`;
  return axios.get(URL);
};
