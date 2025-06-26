import { authService } from "../services/api";

export const PERMISSIONS = {
  // Ferramentas
  READ_TOOL: "READ_TOOL",
  CREATE_TOOL: "CREATE_TOOL",
  UPDATE_TOOL: "UPDATE_TOOL",
  DELETE_TOOL: "DELETE_TOOL",

  // Usuários
  READ_USER: "READ_USER",
  CREATE_USER: "CREATE_USER",
  UPDATE_USER: "UPDATE_USER",
  DELETE_USER: "DELETE_USER",

  // Produtos
  READ_PRODUCT: "READ_PRODUCT",
  CREATE_PRODUCT: "CREATE_PRODUCT",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

// Utilitários para verificar permissões
export const checkPermission = (permission: Permission): boolean => {
  return authService.hasPermission(permission);
};

export const canRead = (resource: "TOOL" | "USER" | "PRODUCT"): boolean => {
  return checkPermission(
    PERMISSIONS[`READ_${resource}` as keyof typeof PERMISSIONS]
  );
};

export const canCreate = (resource: "TOOL" | "USER" | "PRODUCT"): boolean => {
  return checkPermission(
    PERMISSIONS[`CREATE_${resource}` as keyof typeof PERMISSIONS]
  );
};

export const canUpdate = (resource: "TOOL" | "USER" | "PRODUCT"): boolean => {
  return checkPermission(
    PERMISSIONS[`UPDATE_${resource}` as keyof typeof PERMISSIONS]
  );
};

export const canDelete = (resource: "TOOL" | "USER" | "PRODUCT"): boolean => {
  return checkPermission(
    PERMISSIONS[`DELETE_${resource}` as keyof typeof PERMISSIONS]
  );
};

// Verificações de roles
export const isAdmin = (): boolean => {
  return authService.isAdmin();
};

export const isCommonUser = (): boolean => {
  return authService.isCommonUser();
};

export const getCurrentUser = () => {
  return authService.getCurrentUser();
};

// Hook-like function para usar em componentes
export const usePermissions = () => {
  return {
    canRead,
    canCreate,
    canUpdate,
    canDelete,
    checkPermission,
    isAdmin: isAdmin(),
    isCommonUser: isCommonUser(),
    currentUser: getCurrentUser(),
  };
};
