import Axios from 'axios';

export const GetImage = src => {
  const URL = `${process.env.LOCAL_HOST}/${src}`;
  console.log('AXIOS URL', URL);
  return Axios.get(URL);
};
