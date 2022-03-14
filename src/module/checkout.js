import axios from 'axios';

export const CheckOut = (token, body) => {
  const URL = ` http://192.168.1.6:8000/history`;
  console.log('BODY AXIOS', body);
  console.log('URL AXIOS', URL);
  return axios.post(URL, body, {headers: {token: token}});
};
