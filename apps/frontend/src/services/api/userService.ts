import { apiClient } from "./client";
import type { User } from "./authService";

export interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
  role?: string;
}

export interface UpdateUserRequest {
  email?: string;
  name?: string;
  role?: string;
  password?: string;
}

export interface UsersFilters {
  role?: string;
  page?: number;
  limit?: number;
}

export class UserService {
  async getAllUsers(): Promise<User[]> {
    return await apiClient.get<User[]>("/users");
  }

  async getUserById(id: string): Promise<User> {
    return await apiClient.get<User>(`/users/${id}`);
  }

  async createUser(userData: CreateUserRequest): Promise<User> {
    return await apiClient.post<User>("/users", userData);
  }

  async updateUser(id: string, userData: UpdateUserRequest): Promise<User> {
    return await apiClient.put<User>(`/users/${id}`, userData);
  }

  async deleteUser(id: string): Promise<void> {
    return await apiClient.delete<void>(`/users/${id}`);
  }

  async getAdminUsers(): Promise<User[]> {
    const users = await this.getAllUsers();
    return users.filter((user) => user.role === "ADMIN");
  }

  async getCommonUsers(): Promise<User[]> {
    const users = await this.getAllUsers();
    return users.filter(
      (user) => user.role === "COMMON_USER" || user.role === "COMMON"
    );
  }

  async changeUserRole(userId: string, newRole: string): Promise<User> {
    return await this.updateUser(userId, { role: newRole });
  }

  async promoteToAdmin(userId: string): Promise<User> {
    return await this.changeUserRole(userId, "ADMIN");
  }

  async demoteToCommon(userId: string): Promise<User> {
    return await this.changeUserRole(userId, "COMMON_USER");
  }
}

export const userService = new UserService();
