import { EPermission } from "@shared/permissions/permission.enum";
import { ERole, Role } from "@shared/enums/user.enum";

// Mapeamento entre enums do Prisma e do domínio
export const roleMap = {
  [Role.COMMON]: ERole.COMMON_USER,
  [Role.ADMIN]: ERole.ADMIN,
};

export const reverseRoleMap = {
  [ERole.COMMON_USER]: Role.COMMON,
  [ERole.ADMIN]: Role.ADMIN,
};

// Mapeamento de permissões por role
export const rolePermissions: Record<ERole, EPermission[]> = {
  [ERole.ADMIN]: [
    // Permissões de ferramentas
    EPermission.CREATE_TOOL,
    EPermission.UPDATE_TOOL,
    EPermission.DELETE_TOOL,
    EPermission.READ_TOOL,

    // Permissões de usuários (ADMIN pode gerenciar usuários)
    EPermission.CREATE_USER,
    EPermission.UPDATE_USER,
    EPermission.DELETE_USER,
    EPermission.READ_USER,

    // Permissões de produtos
    EPermission.CREATE_PRODUCT,
    EPermission.UPDATE_PRODUCT,
    EPermission.DELETE_PRODUCT,
    EPermission.READ_PRODUCT,

    // Permissões de vendas
    EPermission.CREATE_SALE,
    EPermission.UPDATE_SALE,
    EPermission.DELETE_SALE,
    EPermission.READ_SALE,

    // Permissões de notas fiscais
    EPermission.CREATE_INVOICE,
    EPermission.UPDATE_INVOICE,
    EPermission.DELETE_INVOICE,
    EPermission.READ_INVOICE,
    EPermission.ISSUE_INVOICE,
  ],
  [ERole.COMMON_USER]: [
    // Usuários comuns podem ler e fazer vendas
    EPermission.READ_TOOL,
    EPermission.READ_PRODUCT,
    EPermission.CREATE_SALE,
    EPermission.READ_SALE,
    EPermission.READ_INVOICE,
    // Usuários comuns não podem gerenciar outros usuários
    // Usuários comuns não podem gerenciar produtos
    // Usuários comuns não podem emitir notas fiscais
  ],
};

// Funções utilitárias para verificação de permissões
export function hasPermission(
  userRole: ERole,
  permission: EPermission
): boolean {
  const permissions = rolePermissions[userRole];
  return permissions.includes(permission);
}

export function getUserPermissions(userRole: ERole): EPermission[] {
  return rolePermissions[userRole] || [];
}

export function canPerformAction(
  userRole: ERole,
  action: EPermission
): boolean {
  return hasPermission(userRole, action);
}
