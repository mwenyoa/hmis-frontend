import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../utils/axios";

type AuthData = {
  email: string;
  password: string;
};

type registerInfo = {
   first_name: string,
   last_name: string,
   email: string,
   password: string,
   password_confirmation: string,
   phoneno: string,
   age: number,
   gender: string
}

console.log("Api Client", apiClient);

 const logIn = createAsyncThunk(
  "auth/login",
  async (auth: AuthData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/login", auth);
      console.log("response: ", response);
      const { token, user } = response.data;

      // Set Authorization header globally
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return { user, token };
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

 const registerUser = createAsyncThunk(
  "auth/register",
  async (user: registerInfo, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("register", user);
      const { token, user: userData } = response.data;

      // Set Authorization header globally
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return { user: userData, token };
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
    }
  }
);

 const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state: any = getState();
      const token = state.auth.token;

      if (!token) throw new Error("No token found");

      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await apiClient.get("/user");

      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Could not fetch user"
      );
    }
  }
);

// logout user 

 const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await apiClient.delete("/logout", {
        headers: {
          Authorization: `Bearer ${apiClient.defaults.headers.common["Authorization"]}`,
        },
      });

      // Remove token from axios headers
      delete apiClient.defaults.headers.common["Authorization"];

      return null; // Clear user & token from Redux state
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Logout failed");
    }
  }
);
const userAuth = { fetchUser, logIn, registerUser, logOut }
export default userAuth;