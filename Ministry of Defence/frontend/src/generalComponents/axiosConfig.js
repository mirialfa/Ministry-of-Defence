import axios from "axios";

const api = axios.create({
  // Updated base URL with port 3000 for api requests
  baseURL: "http://localhost:3000/api",

});

export default api;