import axios from 'axios';

export const CheckOut = (token, body) => {
  const URL = ` ${process.env.LOCAL_HOST}/history`;
  console.log('BODY AXIOS', body);
  console.log('URL AXIOS', URL);
  return axios.post(URL, body, {headers: {token: token}});
};
