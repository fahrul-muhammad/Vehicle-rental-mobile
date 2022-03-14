import axios from 'axios';

export const updateProfile = (body, token) => {
  const URL = `${process.env.LOCAL_HOST}/users`;
  console.log('BODY AXIOS', body);
  console.log('URL AXIOS', URL);
  return axios.patch(URL, body, {headers: {token: token}});
};

export const setFireBaseToken = (FBtoken, token) => {
  const URL = `${process.env.LOCAL_HOST}/users/setfirebasetoken`;
  console.log('AXIOS URL', URL);
  return axios.patch(URL, FBtoken, {headers: {token: token}});
};

export const getUserFireBaseToken = id => {
  const URL = `${process.env.LOCAL_HOST}/notif/gettoken/${id}`;
  return axios.get(URL);
};
