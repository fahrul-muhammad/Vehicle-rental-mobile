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

export const SearchVehicle = (name, page, order, sorting, token) => {
  const URL = `${process.env.LOCAL_HOST}/vehicle/search?keyword=${name}&page=${page}&limit=5&order=${order}&sorting=${sorting}`;
  console.log('AXIOS URL', URL);
  return axios.get(URL, {headers: {token: token}});
};

export const GetFavorite = token => {
  const URL = `${process.env.LOCAL_HOST}/history/popular`;
  console.log('AXIOS URL', URL);
  return axios.get(URL, {headers: {token: token}});
};

export const GetByCategory = ({category, page, limit, sorting, order}) => {
  const URL = `${process.env.LOCAL_HOST}/vehicle/${category}?page=${page}&limit=${limit}&sorting=${sorting}&order=${order}`;
  console.log('AXIOS URL', URL);
  return axios.get(URL);
};

export const AddNewVehicle = body => {
  const URL = `${process.env.LOCAL_HOST}/vehicle`;
  console.log('BODY AXIOS', body);
  return axios({
    method: 'POST',
    url: URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    data: body,
  });
};

export const updateVehicle = (id, body, token) => {
  const URL = `${process.env.LOCAL_HOST}/vehicle/update/${id}`;
  console.log('BODY AXIOS', body);
  return axios.patch(URL, body, {headers: {token: token}});
};

export const DeletVehicle = (id, body, token) => {
  const URL = `${process.env.LOCAL_HOST}/vehicle/${id}`;
  return axios.patch(URL, body, {headers: {token: token}});
};
