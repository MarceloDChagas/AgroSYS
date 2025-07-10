import { useState, useEffect } from "react";
import { authService, type User } from "../services/api";

export interface UseAuthResult {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  hasPermission: (permission: string) => boolean;
  isAdmin: boolean;
  isCommonUser: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export function useAuth(): UseAuthResult {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar estado inicial de autenticação
    try {
      const currentUser = authService.getCurrentUser();
      const authenticated = authService.isAuthenticated();

      setUser(currentUser);
      setIsAuthenticated(authenticated);
    } catch {
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const hasPermission = (permission: string): boolean => {
    try {
      return authService.hasPermission(permission);
    } catch {
      return false;
    }
  };

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await authService.login(credentials);
      setUser(response.user);
      setIsAuthenticated(true);
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    hasPermission,
    isAdmin: user?.role === "ADMIN",
    isCommonUser: user?.role === "COMMON_USER" || user?.role === "COMMON",
    login,
    logout,
  };
}
