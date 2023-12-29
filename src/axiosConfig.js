import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://recipe-backend-tau.vercel.app/"

});

export default axiosInstance;
