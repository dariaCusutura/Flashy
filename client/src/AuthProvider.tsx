import React, { createContext, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Routes } from "./routes";
import { BACKEND_URL } from "./constants";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface DecodedToken extends AuthUser {
  sub: string;
}

interface AuthContextProps {
  user: AuthUser | undefined;
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ message: string | undefined }>;
  register: (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<AuthUser | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!router) {
    console.error("NextRouter was not mounted .");
    return null;
  }

  const login = async (email: string, password: string) => {
    toast.loading("Logging in...");
    try {
      const response = await fetch(`${BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        const decoded = jwtDecode(data.access_token) as DecodedToken;
        setUser({
          id: decoded.sub,
          name: decoded.name,
          email: decoded.email,
        });
        console.log("[AuthProvider] Login successful:", data);
        Cookies.set("access_token", data.access_token);
        toast.dismiss();
        toast.success(data.message);
        router.push(Routes.MY_STACKS);
        return { message: undefined };
      } else {
        console.error("[AuthProvider] Login failed", data.message);
        toast.dismiss();
        Array.isArray;
        if (Array.isArray(data.message)) return { message: data.message[0] };
        else return { message: data.message };
      }
    } catch (error) {
      console.error("[AuthProvider] Login error", error);
      toast.dismiss();
      return { message: "An unexpected error occurred" };
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {};

  const logout = () => {};

  const contextValue = useMemo<AuthContextProps>(
    () => ({
      user,
      loading,
      login,
      register,
      logout,
    }),
    [user, loading]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
