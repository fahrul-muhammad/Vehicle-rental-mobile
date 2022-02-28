import axios from 'axios';

export const GetAllCar = () => {
  const URL = `${process.env.LOCAL_HOST}/vehicle/car`;
  console.log('AXIOS URL', URL);
  return axios.get(URL);
};

export const GetAllMotor = () => {
  const URL = `${process.env.LOCAL_HOST}/vehicle/motorbike`;
  console.log('AXIOS URL', URL);
  return axios.get(URL);
};

export const GetAllBike = () => {
  const URL = `${process.env.LOCAL_HOST}/vehicle/bike`;
  console.log('AXIOS URL', URL);
  return axios.get(URL);
};

export const getVehicleById = id => {
  const URL = `${process.env.LOCAL_HOST}/vehicle/detail/${id}`;
  console.log('AXIOS URL', URL);
  return axios.get(URL);
};

export const SearchVehicle = (name, token) => {
  const URL = `${process.env.LOCAL_HOST}//vehicle/search?name=${name}`;
  console.log('AXIOS URL', URL);
  return axios.get(URL, {headers: {token: token}});
};

export const GetFavorite = token => {
  const URL = `${process.env.LOCAL_HOST}/history/popular`;
  console.log('AXIOS URL', URL);
  return axios.get(URL, {headers: {token: token}});
};

export const GetByCategory = category => {
  const URL = `${process.env.LOCAL_HOST}/vehicle/${category}`;
  console.log('AXIOS URL', URL);
  return axios.get(URL);
};

export const AddNewVehicle = body => {
  const URL = `http://192.168.1.6:8000/vehicle/test`;
  return axios({
    method: 'POST',
    url: URL,
    headers: {'Content-type': 'multipart/form-data'},
    data: body,
  });
};
