import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5555',
});

export default axiosInstance;
