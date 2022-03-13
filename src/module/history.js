import axios from 'axios';

export const GetUserHistory = token => {
  const URL = `http://192.168.1.6:8000/history/myhistory`;
  console.log('AXIOS URL', URL);
  console.log('AXIOS TOKEN', token);
  return axios.get(URL, {headers: {token: token}});
};
