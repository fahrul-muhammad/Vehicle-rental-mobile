import axios from 'axios';
import Axios from 'axios';

export const Login = body => {
  console.log('BODY UTILS', body);
  const URL = `${process.env.LOCAL_HOST}/auth`;
  return Axios.post(URL, body);
};

export const GetUserData = token => {
  const URL = `${process.env.LOCAL_HOST}/users/profile`;
  return axios.get(URL, {headers: {token: token}});
};

export const SignUp = body => {
  const URL = `${process.env.LOCAL_HOST}/auth/signup`;
  return axios.post(URL, body);
};
