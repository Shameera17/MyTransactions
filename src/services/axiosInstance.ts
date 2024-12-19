import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://mytransactionsapi20241219151027.azurewebsites.net/api", // Your API base URL
  timeout: 10000 // Request timeout in milliseconds
  // Add common headers if needed
});

export default axiosInstance;
