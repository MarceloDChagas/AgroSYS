import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/api";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermission?: string;
  redirectTo?: string;
}

export function ProtectedRoute({
  children,
  requiredPermission,
  redirectTo = "/login",
}: ProtectedRouteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se está autenticado
    if (!authService.isAuthenticated()) {
      navigate(redirectTo);
      return;
    }

    // Verificar permissão específica se fornecida
    if (requiredPermission && !authService.hasPermission(requiredPermission)) {
      // Redirecionar para página de "não autorizado" ou dashboard
      navigate("/dashboard");
      return;
    }
  }, [navigate, requiredPermission, redirectTo]);

  // Se não está autenticado, não renderizar nada (vai redirecionar)
  if (!authService.isAuthenticated()) {
    return null;
  }

  // Se tem permissão específica requerida e não tem a permissão, não renderizar
  if (requiredPermission && !authService.hasPermission(requiredPermission)) {
    return null;
  }

  return <>{children}</>;
}
