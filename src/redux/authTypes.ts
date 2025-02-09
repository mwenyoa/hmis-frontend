// authTypes.ts
export interface AuthData {
    email: string;
    password: string;
  }
  
  export interface RegisterInfo {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    phoneno: string;
    age: number;
    gender: string;
  }
  
  export interface AuthResponse {
    user: any;
    token: string;
  }
  
  export interface ErrorResponse {
    response?: {
      data?: {
        message?: string;
      };
    };
  }
  
  export interface AuthState {
    user: any;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
  }