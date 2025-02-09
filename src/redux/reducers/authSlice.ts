import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse, AuthData, ErrorResponse, RegisterInfo, AuthState } from "../authTypes";
import apiClient from "../../utils/axios";



 const logIn = createAsyncThunk<AuthResponse, AuthData>(
  "auth/login",
  async (auth, { rejectWithValue }) => {
    try {
      const response = await apiClient.post<AuthResponse>("/login", auth);
      console.log("Login Response: ", response)
      const { token, user } = response.data;

      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return { user, token };
    } catch (err) {
      const error = err as ErrorResponse;
      return rejectWithValue(error?.response?.data?.message || "Login has failed");
    }
  }
);

 const registerUser = createAsyncThunk<AuthResponse, RegisterInfo>(
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

 const fetchUser = createAsyncThunk<any>(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const token: any = apiClient.defaults.headers.common.Authorization
  

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


  const logOut = createAsyncThunk<void, void>(
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

// Auth Slice

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action: PayloadAction<{ user: any; token: string }>) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ user: any; token: string }>) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // Logout
      .addCase(logOut.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      })

      // Fetch User
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
