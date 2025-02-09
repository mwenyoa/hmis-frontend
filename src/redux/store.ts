import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authSlice from "./reducers/authSlice";

const NODE_ENV: string | undefined = import.meta.env.VITE_APP_NODE_ENV;


const serializableCheckConfig = {
  serializableCheck: {
    ignoredActionPaths: ["meta.arg", "payload.timestamp"],
    ignoredPaths: ["items.dates"],
  },
};

// Correctly call the `middleware` function here
const middleware = (getDefaultMiddleware: any) => {
  const defaultMiddleware = getDefaultMiddleware(serializableCheckConfig);
  return NODE_ENV ? defaultMiddleware.concat(logger) : defaultMiddleware;
};

const store = configureStore({
  reducer: { auth: authSlice },
  middleware: (getDefaultMiddleware) => middleware(getDefaultMiddleware), // <-- Fix
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
