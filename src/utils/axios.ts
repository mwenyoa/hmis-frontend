import axios, { AxiosRequestConfig } from "axios";
import store, { RootState } from "../redux/store";

// Extend the AxiosRequestConfig type to include the custom skipAuth property
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  skipAuth?: boolean;
}

// Create the Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true, // Enable cookies for CSRF (if your backend uses cookies)
});

// Fetch the CSRF token from the backend (if required)
let csrfToken: string | null = null;

const fetchCsrfToken = async () => {
  try {
    const response = await axios.get("http://localhost:8000/sanctum/csrf-cookie"); // Replace with your backend's CSRF endpoint
    csrfToken = response.data.csrfToken; // Adjust based on your backend's response structure
  } catch (error) {
    console.error("Failed to fetch CSRF token:", error);
  }
};

// Fetch the CSRF token when the app loads (or before making the first request)
fetchCsrfToken();

// Add token and CSRF token to request headers using axios interceptors
apiClient.interceptors.request.use(
  (config: CustomAxiosRequestConfig | any) => {
    // Add CSRF token to all requests (if available)
    if (csrfToken) {
      config.headers = config.headers || {};
      config.headers["X-CSRF-TOKEN"] = csrfToken; // Adjust the header name based on your backend
    }

    // Skip adding the Authorization header if skipAuth is true
    if (!config.skipAuth) {
      const state = store.getState() as RootState;
      const token: string | null = state?.auth?.token;

      if (!token) {
        throw new Error("No token found");
      } else {
        config.headers = config.headers || {}; // Ensure headers object exists
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;