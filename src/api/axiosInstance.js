import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://82b6a87fec0f568f.mokky.dev",
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
