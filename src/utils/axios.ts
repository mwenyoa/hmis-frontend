import axios from "axios";
import store, {RootState} from "../redux/store";

const url: string | undefined = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: `${url}/api`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// add token to request headers using axios interceptors
apiClient.interceptors.request.use(
  (config) => {
    const state = store.getState() as RootState;
    const token: string | null = state?.auth?.token;
     if(!token){
      throw new Error("No")
     }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
