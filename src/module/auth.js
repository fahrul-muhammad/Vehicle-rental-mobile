import axios from 'axios';
import Axios from 'axios';

export const Login = body => {
  console.log('BODY UTILS', body);
  const URL = `http://192.168.1.6:8000/auth`;
  console.log('AXIOS URL', URL);
  return Axios.post(URL, body);
};

export const GetUserData = token => {
  const URL = `http://192.168.1.6:8000/users/profile`;
  console.log('AXIOS URL', URL);
  return axios.get(URL, {headers: {token: token}});
};

export const SignUp = body => {
  const URL = `http://192.168.1.6:8000/auth/signup`;
  console.log('AXIOS URL', URL);
  return axios.post(URL, body);
};
