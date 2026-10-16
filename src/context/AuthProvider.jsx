import { createContext, useEffect, useState } from "react";
import authService from "@/services/authService";
import userResponse from "@/data/mock/userResponse";
import { USE_MOCK_AUTH } from "@/config/auth";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const toTitleCase = (value) => {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  const login = (userData) => {
    const data = {
      ...userData,
      role: toTitleCase(userData.role),
    };

    setUser(data);
  };

  const fetchUser = () => {
    setLoading(true);

    if (USE_MOCK_AUTH) {
      login(userResponse.data.user);
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