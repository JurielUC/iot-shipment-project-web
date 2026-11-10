import { createContext, useEffect, useState } from "react";
import authService from "@/services/authService";
import userResponse from "@/data/mock/userResponse";
import { USE_MOCK_AUTH } from "@/config/auth";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (userData) => {
    setUser(userData);
    if (USE_MOCK_AUTH) sessionStorage.setItem("dried-food-demo-session", "active");
  };

  const fetchUser = () => {
    setLoading(true);

    if (USE_MOCK_AUTH) {
      if (sessionStorage.getItem("dried-food-demo-session")) {
        setUser(userResponse.data.user);
      }
      setLoading(false);
      return;
    }

    authService
      .me()
      .then((response) => {
        login(response.data.data.user);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logout = () => {
    if (USE_MOCK_AUTH) {
      sessionStorage.removeItem("dried-food-demo-session");
      setUser(null);
      return Promise.resolve();
    }

    return authService
      .logout()
      .then(() => {
        setUser(null);
      })
      .catch(() => {
        setUser(null);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        loading,
        refreshUser: fetchUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
