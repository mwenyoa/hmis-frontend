import axios, { AxiosRequestConfig } from "axios";
import store, { RootState } from "../redux/store";

// Extend the AxiosRequestConfig type to include the custom skipAuth property
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  skipAuth?: boolean;
}

// Create the Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
  // timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  withCredentials: true, // Enable cookies for CSRF (if your backend uses cookies)
  withXSRFToken: true,
});

apiClient.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
// Fetch the CSRF token from the backend (if required)
let csrfToken: string | null;

const fetchCsrfToken = async () => {
  try {
    const response = await apiClient.get("sanctum/csrf-cookie"); // Replace with your backend's CSRF endpoint

    console.log("CSRF TOKEN REQUEST:  ", response);
    csrfToken = await response?.data?.csrfToken; // Adjust based on your backend's response structure
    console.log("csrf token: ", csrfToken);
    return csrfToken;
  } catch (error) {
    console.error("Failed to fetch CSRF token:", error);
  }
};

// Fetch the CSRF token when the app loads (or before making the first request)
const csrftkn = fetchCsrfToken();

// Add token and CSRF token to request headers using axios interceptors
apiClient.interceptors.request.use(
  (config: CustomAxiosRequestConfig | any) => {
    // Add CSRF token to all requests (if available)
    if (csrftkn) {
      config.headers = config.headers || {};
      config.headers["X-CSRF-TOKEN"] = csrftkn; // Adjust the header name based on your backend
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


apiClient.interceptors.response.use(
  (response) => {
    // Check if the response contains a new CSRF token
    const newCsrfToken = response.headers["x-csrf-token"] || response?.data?.csrfToken;
    if (newCsrfToken) {
      csrfToken = newCsrfToken;
      console.log("Updated CSRF token: ", csrfToken);
    }
    return response;
  },
  (error) => {
    // Handle any response errors
    return Promise.reject(error);
  }
);


export default apiClient;