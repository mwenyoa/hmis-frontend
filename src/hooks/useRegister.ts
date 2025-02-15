import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { registerUser } from "../redux/reducers/authSlice";

interface RegisterInfo {
  password: string;
  password_confirmation: string;
  email: string;
  first_name: string;
  last_name: string;
  age: number | null;
  gender: string;
  marital_status: string;
  profile_picture: File | null;
  phoneno: number | null;
}

const useRegister = () => {
  const { user, isLoading, isAuthenticated, error } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch: AppDispatch = useDispatch();

  // Memoized user registration
  const handleRegister = useCallback(
    async (userData: RegisterInfo) => {
     await dispatch(registerUser(userData));
    },
    [dispatch]
  );

  return { user, isLoading, handleRegister, isAuthenticated, error };
};

export default useRegister;
