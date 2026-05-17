import axios from "axios";

const API = axios.create({
  baseURL: https://quickbite-client-2.onrender.com,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;