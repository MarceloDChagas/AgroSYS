import { EPermission } from '@sharedpermissionspermission.enum.ts';
import { ERole } from '@shared/enums/user.enum';

export const rolePermissions: Record<ERole, EPermission[]> = {
  [ERole.ADMIN]: [
    EPermission.CREATE_TOOL,
    EPermission.UPDATE_TOOL,
    EPermission.DELETE_TOOL,
    EPermission.READ_TOOL,
  ],

  [ERole.COMMON_USER]: [EPermission.READ_TOOL],
};
