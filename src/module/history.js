import axios from 'axios';

export const GetUserHistory = token => {
  const URL = `${process.env.LOCAL_HOST}/history/myhistory`;
  console.log('AXIOS URL', URL);
  console.log('AXIOS TOKEN', token);
  return axios.get(URL, {headers: {token: token}});
};
