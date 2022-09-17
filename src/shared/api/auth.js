import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getRegister = async user => {
  const { data } = await instance.post('/users/signup', user);
  instance.defaults.headers.authorization = `Bearer ${data.token}`;
  return data;
};

export const getLogin = async user => {
  const { data } = await instance.post('/users/login', user);
  instance.defaults.headers.authorization = `Bearer ${data.token}`;
  return data;
};

export default instance;
