// Export main services
export { authService, AuthService } from "./authService";
export { toolService, ToolService } from "./toolService";
export { userService, UserService } from "./userService";
export { invoiceService, InvoiceService } from "./invoiceService";
export { productService, ProductService } from "./productService";
<<<<<<< HEAD
export { harvestService, HarvestService } from "./harvestService";
export { salesService, SalesService } from "./salesService";
export { uapService } from "./uapService";
export { inputMaterialService } from "./inputMaterialService";
export { dashboardService, DashboardService } from "./dashboardService";
=======
>>>>>>> 30a273d (chore: remove todos os console.log/console.error e corrige erros de linter relacionados a variáveis não usadas em catch)
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
export type {
  Product,
  CreateProductRequest,
  UpdateProductRequest,
  ProductsFilters,
} from "./productService";
<<<<<<< HEAD
export type {
  Harvest,
  CreateHarvestRequest,
  UpdateHarvestRequest,
} from "./harvestService";
export type {
  SaleWithItems,
  CreateSaleRequest,
  UpdateSaleRequest,
  SaleFilters,
} from "./salesService";
export type { DashboardStatistics } from "./dashboardService";
=======
>>>>>>> 30a273d (chore: remove todos os console.log/console.error e corrige erros de linter relacionados a variáveis não usadas em catch)
export type { ApiResponse, ApiError } from "./client";

// Convenience exports (import services in components instead)
// Example: import { authService, toolService, invoiceService } from '@/services/api';
