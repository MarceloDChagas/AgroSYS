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

  async signUp(userData: RegisterRequest): Promise<LoginResponse> {
    await this.register(userData);

    return await this.login({
      email: userData.email,
      password: userData.password,
    });
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
    } catch {
      // Limpar dados corrompidos
      this.clearAuthData();
      return null;
    }
  }

  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    if (!user || !user.role) return false;

    // ADMIN tem todas as permissões
    if (user.role === "ADMIN") return true;

    // COMMON_USER tem permissões específicas
    if (user.role === "COMMON_USER" || user.role === "COMMON") {
      const commonUserPermissions = [
        "READ_TOOL",
        "CREATE_TOOL", // Adicionado para permitir criação
        "READ_PRODUCT",
        "CREATE_SALE",
        "READ_SALE",
        "READ_INVOICE",
        "CREATE_INPUT_MATERIAL_ENTRY",
        "READ_INPUT_MATERIAL_ENTRY",
        "READ_UAP",
      ];
      return commonUserPermissions.includes(permission);
    }

    return false;
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
