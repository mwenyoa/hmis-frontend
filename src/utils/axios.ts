import axios from "axios";

const url: string | undefined = import.meta.env.VITE_APP_URL;

const apiClient = axios.create({
  baseURL: `${url}/api/v1`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

export default apiClient;
