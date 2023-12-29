import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL
});
console.log(process.env.BASE_URL);
export default axiosInstance;
