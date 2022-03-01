import axios from 'axios';

export const updateProfile = (body, token) => {
  const URL = `${process.env.LOCAL_HOST}/users`;
  console.log('BODY AXIOS', body);
  console.log('URL AXIOS', URL);
  return axios.patch(URL, body, {headers: {token: token}});
};
