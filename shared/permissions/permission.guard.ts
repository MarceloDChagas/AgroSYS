import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { EPermission } from "./permission.enum";
import { ERole } from "@shared/enums/user.enum";
import { hasPermission } from "./permission.map";

export const PERMISSIONS_KEY = "permissions";

export const RequirePermissions = (...permissions: EPermission[]) => {
  return (
    target: any,
    propertyKey?: string | symbol,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    descriptor?: PropertyDescriptor
  ) => {
    Reflect.defineMetadata(
      PERMISSIONS_KEY,
      permissions,
      target,
      propertyKey || target
    );
  };
};

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<EPermission[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredPermissions) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !user.role) {
      throw new ForbiddenException(
        "Usuário não autenticado ou sem role definida"
      );
    }

    const userRole: ERole = user.role;

    const hasRequiredPermission = requiredPermissions.some((permission) =>
      hasPermission(userRole, permission)
    );

    if (!hasRequiredPermission) {
      throw new ForbiddenException(
        `Acesso negado. Permissões necessárias: ${requiredPermissions.join(
          ", "
        )}`
      );
    }

    return true;
  }
}

export function checkUserPermission(
  userRole: ERole,
  requiredPermission: EPermission
): boolean {
  return hasPermission(userRole, requiredPermission);
}
