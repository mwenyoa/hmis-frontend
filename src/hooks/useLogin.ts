import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import userAuth from "../redux/api/authuser";

type AuthCredentials = {
  email: string;
  password: string;
};

const useLogIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, isLoading, error } = useSelector((state: RootState) => state.auth);
  const { logIn } = userAuth;
  // Memoized login function
  const handleLogin = useCallback(
    async (credentials: AuthCredentials) => {
      return await dispatch(logIn(credentials));
    },
    [dispatch]
  );

  return { handleLogin, isAuthenticated, isLoading, error };
};

export default useLogIn;
