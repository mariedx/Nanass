import axios from 'axios';
import config from '../config';

const axiosInstance = axios.create({
  baseURL: `${config.API_BASE_URL}`,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
