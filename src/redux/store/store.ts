import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const NODE_ENV: string | undefined = import.meta.env.VITE_APP_NODE_ENV;

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    NODE_ENV === "development"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
