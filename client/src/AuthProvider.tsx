import React, { createContext, useEffect, useMemo, useState } from "react";
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
  ) => Promise<{ message: string | undefined }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
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
  ) => {
    toast.loading("Signing up...");
    try {
      const response = await fetch(`${BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.dismiss();
        toast.success(data.message);
        console.log("[AuthProvider] Registering successful:", data);
        router.push(Routes.LOGIN);
        return { message: undefined };
      } else {
        console.error("[AuthProvider] Register failed", data.message);
        toast.dismiss();
        if (Array.isArray(data.message)) return { message: data.message[0] };
        else return { message: data.message };
      }
    } catch (error) {
      console.error("[AuthProvider] Register error", error);
      toast.dismiss();
      return { message: "An unexpected error occurred" };
    }
  };

  const logout = () => {
    Cookies.remove("access_token");
    setUser({} as AuthUser);
    console.log("[AuthProvider] Logged out");
    toast.success("Logged out successfully!");
    router.push(Routes.HOME);
  };

  const contextValue = useMemo<AuthContextProps>(
    () => ({
      user,
      loading,
      login,
      register,
      logout,
    }),
    [user, loading, login, logout]
  );

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (token) {
      try {
        const decoded = jwtDecode(token) as DecodedToken;
        setUser({
          id: decoded.sub,
          email: decoded.email,
          name: decoded.name,
        });
      } catch (error) {
        console.error("[AuthProvider] Failed to decode JWT", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
