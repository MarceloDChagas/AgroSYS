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

// Decorator para definir permissões necessárias
export const RequirePermissions = (...permissions: EPermission[]) => {
  return (
    target: any,
    propertyKey?: string | symbol,
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
      return true; // Se não há permissões específicas requeridas, permite acesso
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // Assumindo que o usuário está no request após autenticação

    if (!user || !user.role) {
      throw new ForbiddenException(
        "Usuário não autenticado ou sem role definida"
      );
    }

    const userRole: ERole = user.role;

    // Verifica se o usuário tem pelo menos uma das permissões necessárias
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

// Função utilitária para verificar permissões manualmente
export function checkUserPermission(
  userRole: ERole,
  requiredPermission: EPermission
): boolean {
  return hasPermission(userRole, requiredPermission);
}
