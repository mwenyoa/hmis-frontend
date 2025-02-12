import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { registerUser } from "../redux/authActions";

interface RegisterInfo {
  password: string;
  password_confirmation: string;
  email: string;
  first_name: string;
  last_name: string;
  age: number | null;
  gender: string | number | readonly string[] | undefined;
  marital_status: string | number | readonly string[] | undefined;
  profile_picture: File | null;
  phoneno: number | null
}

const useRegister = () => {
  const { user, isLoading, isAuthenticated, error } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();
  // memoized user registration
  const handleRgister = useCallback(
    async (userData: RegisterInfo) => {
      if (user?.length === 0) {
        await dispatch(registerUser(userData));
      }
    },
    [dispatch]
  );
  return { user, isLoading, handleRgister, isAuthenticated, error };
};

export default useRegister;
