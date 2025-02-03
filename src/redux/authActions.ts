import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../utils/axios";
import store from "./store";
import _ from "lodash"

interface AuthData {
  email: string;
  password: string;
}

interface RegisterInfo {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  phoneno: string;
  age: number;
  gender: string;
}

interface AuthResponse {
  user: any; // Replace 'any' with a proper user type if available
  token: string;
}

interface ErrorResponse {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const logIn = createAsyncThunk<AuthResponse, AuthData>(
  "auth/login",
  async (auth, { rejectWithValue }) => {
    try {
      const response = await apiClient.post<AuthResponse>("/login", auth);
      const { token, user } = response.data;

      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return { user, token };
    } catch (err) {
      const error = err as ErrorResponse;
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const registerUser = createAsyncThunk<AuthResponse, RegisterInfo>(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const response = await apiClient.post<AuthResponse>("/register", user);
      const { token, user: userData } = response.data;

      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return { user: userData, token };
    } catch (err) {
      const error = err as ErrorResponse;
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const fetchUser = createAsyncThunk<any>(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const state = store.getState();
      const token = state.auth.token;

      if (!token) throw new Error("No token found");

      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await apiClient.get("/user");
      return response.data;
    } catch (err) {
      const error = err as ErrorResponse;
      return rejectWithValue(
        error.response?.data?.message || "Could not fetch user"
      );
    }
  }
);

export  const logOut = createAsyncThunk<void, void>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await apiClient.delete("/logout", {
        headers: {
          Authorization: `Bearer ${apiClient.defaults.headers.common["Authorization"]}`,
        },
      });

      delete apiClient.defaults.headers.common["Authorization"];
      return;
    } catch (err) {
      const error = err as ErrorResponse;
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  }
);

