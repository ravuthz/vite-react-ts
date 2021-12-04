import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

export default axios.create({
  baseURL: VITE_API_URL,
});
