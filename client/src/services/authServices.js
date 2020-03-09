import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASEURL;

export const submitRegister = async body => {
  const { data } = await axios.post(`${baseUrl}/api/auth/register`, body);
  return data;
};

export const submitLogin = async body => {
  const { data } = await axios.post(`${baseUrl}/api/auth/login`, body);
  return data;
};
