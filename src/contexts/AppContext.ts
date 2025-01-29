import { url } from "inspector";
import axios from "../utils/axios";

export const logIn = async (email: string, password: string) => {
  try {
    axios.defaults.withCredentials = true;
    const url: string | undefined = axios.defaults.baseURL;
    // Get CSRF cookie
    await axios.get("sanctum/csrf-cookie");

    // Perform login
    const response = await axios.post(`${url}login`, { email, password });
    console.log(response);
    // Fetch user data after successful login
    const userResponse = await axios.get(`${url}user`);

    return {
      id: userResponse.data.id,
      name: userResponse.data.name,
    };
  } catch (err: any) {
    console.error("Login failed:", err);
    throw new Error(
      err.response?.data?.message || "Could not complete the login"
    );
  }
};
