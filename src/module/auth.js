import axios from 'axios';
import Axios from 'axios';

export const Login = body => {
  console.log('BODY UTILS', body);
  const URL = `${process.env.LOCAL_HOST}/auth`;
  console.log('AXIOS URL', URL);
  return Axios.post(URL, body);
};

export const GetUserData = token => {
  const URL = `${process.env.LOCAL_HOST}/users/profile`;
  console.log('AXIOS URL', URL);
  return axios.get(URL, {headers: {token: token}});
};

export const SignUp = body => {
  const URL = `${process.env.LOCAL_HOST}/auth/signup`;
  console.log('AXIOS URL', URL);
  return axios.post(URL, body);
};

export const SendOtp = body => {
  const URL = `${process.env.LOCAL_HOST}/auth/forgotpassword`;
  return axios.post(URL, body);
};

export const setNewPassword = body => {
  const URL = `${process.env.LOCAL_HOST}/auth/setnewpassword`;
  return axios.patch(URL, body);
};
