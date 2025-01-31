import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

type AuthData = {
  email: string;
  password: string;
};

type RegisterData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phoneno: string;
  gender: string;
  age: number;
  marital_status: string;
  profile_picture: File | Blob;
};

const url: string | undefined = axios.defaults.baseURL;

export const logIn = createAsyncThunk(
  "auth/login",
  async (auth: AuthData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}login`, auth);
      const { token, user } = response.data;

      // Set Authorization header globally
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return { user, token };
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user: RegisterData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}register`, user);
      const { token, user: userData } = response.data;

      // Set Authorization header globally
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return { user: userData, token };
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state: any = getState();
      const token = state.auth.token;

      if (!token) throw new Error("No token found");

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.get(`${url}user`);

      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Could not fetch user"
      );
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(
        `${url}logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${axios.defaults.headers.common["Authorization"]}`,
          },
        }
      );

      // Remove token from axios headers
      delete axios.defaults.headers.common["Authorization"];

      return null; // Clear user & token from Redux state
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Logout failed");
    }
  }
);
