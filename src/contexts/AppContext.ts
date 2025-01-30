import axios from "../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

type data = {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    phoneno: string;
    gender: string;
    age: string;
    marital_status: string;
    profile_picture: File | Blob;
  };
  auth: {
    email: string;
    password: string;
  };
};

const url: string | undefined = axios.defaults.baseURL;

export const logIn = createAsyncThunk("Login", async ({ auth }: data) => {
  try {
    axios.defaults.withCredentials = true;
    // Get CSRF cookie
    await axios.get("sanctum/csrf-cookie");
    // Perform login
    const response = await axios.post(`${url}login`, auth);
    console.log(response);
    // Fetch user data after successful login
    const userResponse = await axios.get(`${url}user`);
    return userResponse.data;
  } catch (err: any) {
    console.error("Login failed:", err);
    throw new Error(
      err.response?.data?.message || "Could not complete the login"
    );
  }
});

export const registerUser = createAsyncThunk(
  "Register",
  async ({ user }: data) => {
    try {
      axios.defaults.withCredentials = true;
      // Get CSRF cookie
      await axios.get("sanctum/csrf-cookie");
      // perform user registration
      const response = await axios.post(`${url}register`, user);
      console.log(response);
      // Fetch user data after successful login
      const userResponse = await axios.get(`${url}user`);
      return userResponse.data;
    } catch (err: any) {
      console.error("Registration Failed:", err);
      throw new Error(
        err.response?.data?.message || "User could not be registered"
      );
    }
  }
);

export const logOut = async () => {
  axios.defaults.withCredentials = true;
  return await axios.delete(`${url}logout`);
};
