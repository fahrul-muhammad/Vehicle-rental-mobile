import Axios from 'axios';

export const GetImage = src => {
  const URL = `http://192.168.1.6:8000/${src}`;
  console.log('AXIOS URL', URL);
  return Axios.get(URL);
};
