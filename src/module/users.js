import axios from 'axios';

export const updateProfile = (body, token) => {
  const URL = `http://192.168.1.6:8000/users`;
  console.log('BODY AXIOS', body);
  console.log('URL AXIOS', URL);
  return axios.patch(URL, body, {headers: {token: token}});
};
