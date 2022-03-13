import axios from 'axios';

export const GetAllCar = () => {
  const URL = `http://192.168.1.6:8000/vehicle/car`;
  console.log('AXIOS URL', URL);
  return axios.get(URL);
};

export const GetAllMotor = () => {
  const URL = `http://192.168.1.6:8000/vehicle/motorbike`;
  console.log('AXIOS URL', URL);
  return axios.get(URL);
};

export const GetAllBike = () => {
  const URL = `http://192.168.1.6:8000/vehicle/bike`;
  console.log('AXIOS URL', URL);
  return axios.get(URL);
};

export const getVehicleById = id => {
  const URL = `http://192.168.1.6:8000/vehicle/detail/${id}`;
  console.log('AXIOS URL', URL);
  return axios.get(URL);
};

export const SearchVehicle = (name, token) => {
  const URL = `http://192.168.1.6:8000/vehicle/search?name=${name}`;
  console.log('AXIOS URL', URL);
  return axios.get(URL, {headers: {token: token}});
};

export const GetFavorite = token => {
  const URL = `http://192.168.1.6:8000/history/popular`;
  console.log('AXIOS URL', URL);
  return axios.get(URL, {headers: {token: token}});
};

export const GetByCategory = ({category, page, limit, sorting, order}) => {
  const URL = `http://192.168.1.6:8000/vehicle/${category}?page=${page}&limit=${limit}&sorting=${sorting}&order=${order}`;
  console.log('AXIOS URL', URL);
  return axios.get(URL);
};

export const AddNewVehicle = body => {
  const URL = `http://192.168.1.6:8000/vehicle`;
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
  const URL = `http://192.168.1.6:8000/vehicle/update/${id}`;
  console.log('BODY AXIOS', body);
  return axios.patch(URL, body, {headers: {token: token}});
};
