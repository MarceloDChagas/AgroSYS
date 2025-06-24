// Exports centralizados do sistema de permissões
export { EPermission } from "./permission.enum";
export {
  rolePermissions,
  roleMap,
  reverseRoleMap,
  hasPermission,
  getUserPermissions,
  canPerformAction,
} from "./permission.map";
export {
  PermissionsGuard,
  RequirePermissions,
  PERMISSIONS_KEY,
  checkUserPermission,
} from "./permission.guard";

// Re-export dos enums de usuário para conveniência
export { ERole, Role } from "@shared/enums/user.enum";
