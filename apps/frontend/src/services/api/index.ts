// Export main services
export { authService, AuthService } from "./authService";
export { toolService, ToolService } from "./toolService";
export { userService, UserService } from "./userService";
export { apiClient } from "./client";

// Export types
export type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  User,
} from "./authService";
export type {
  Tool,
  CreateToolRequest,
  UpdateToolRequest,
  ToolsFilters,
} from "./toolService";
export type {
  CreateUserRequest,
  UpdateUserRequest,
  UsersFilters,
} from "./userService";
export type { ApiResponse, ApiError } from "./client";

// Convenience exports (import services in components instead)
// Example: import { authService, toolService } from '@/services/api';
