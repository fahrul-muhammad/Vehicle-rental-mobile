import axios from 'axios';

export const updateProfile = (body, token) => {
  const URL = `http://192.168.1.6:8000/users`;
  console.log('BODY AXIOS', body);
  console.log('URL AXIOS', URL);
  return axios.patch(URL, body, {headers: {token: token}});
};

export const setFireBaseToken = (FBtoken, token) => {
  const URL = `http://192.168.1.6:8000/users/setfirebasetoken`;
  console.log('AXIOS URL', URL);
  return axios.patch(URL, FBtoken, {headers: {token: token}});
};

export const getUserFireBaseToken = id => {
  const URL = `http://192.168.1.6:8000/notif/gettoken/${id}`;
  return axios.get(URL);
};
