import { apiClient } from "./client";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  role?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  created_at?: string;
  updated_at?: string;
}

export class AuthService {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>(
      "/auth/login",
      credentials
    );

    // Salvar token no localStorage
    if (response.access_token) {
      localStorage.setItem("token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.user));
    }

    return response;
  }

  async register(userData: RegisterRequest): Promise<User> {
    return await apiClient.post<User>("/auth/register", userData);
  }

  async getProfile(): Promise<User> {
    return await apiClient.get<User>("/auth/profile");
  }

  logout(): void {
    this.clearAuthData();
    window.location.href = "/login";
  }

  clearAuthData(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    return !!(token && token !== "undefined" && token !== "null");
  }

  getCurrentUser(): User | null {
    try {
      const userStr = localStorage.getItem("user");
      if (!userStr || userStr === "undefined" || userStr === "null") {
        return null;
      }
      return JSON.parse(userStr);
    } catch (error) {
      // Limpar dados corrompidos
      this.clearAuthData();
      return null;
    }
  }

  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    if (!user || !user.role) return false;

    // Implementar lógica de permissões baseada na role
    // Por enquanto, ADMIN tem todas as permissões
    if (user.role === "ADMIN") return true;

    // COMMON_USER só pode ler
    const readPermissions = ["READ_TOOL", "READ_PRODUCT"];
    return readPermissions.includes(permission);
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === "ADMIN";
  }

  isCommonUser(): boolean {
    const user = this.getCurrentUser();
    return user?.role === "COMMON_USER" || user?.role === "COMMON";
  }
}

export const authService = new AuthService();
