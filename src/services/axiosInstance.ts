import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7069/api", // Your API base URL
  timeout: 10000 // Request timeout in milliseconds
  // Add common headers if needed
});

export default axiosInstance;
