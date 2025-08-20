import { useState, useEffect, useCallback } from "react";
import { alertService } from "@/services/api";
import type { Alert, RecentActivity } from "@/services/api";

export function useAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAlerts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await alertService.getAlerts();
      setAlerts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar alertas");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchRecentActivities = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await alertService.getRecentActivities();
      setRecentActivities(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao carregar atividades recentes"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const markAlertAsRead = useCallback(async (alertId: string) => {
    try {
      await alertService.markAlertAsRead(alertId);
      setAlerts((prev) =>
        prev.map((alert) =>
          alert.id === alertId ? { ...alert, isRead: true } : alert
        )
      );
    } catch (err) {
      console.error("Erro ao marcar alerta como lido:", err);
    }
  }, []);

  const createAlert = useCallback(
    async (alert: Omit<Alert, "id" | "createdAt" | "isRead">) => {
      try {
        const newAlert = await alertService.createAlert(alert);
        setAlerts((prev) => [newAlert, ...prev]);
        return newAlert;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao criar alerta");
        throw err;
      }
    },
    []
  );

  const refreshAll = useCallback(async () => {
    await Promise.all([fetchAlerts(), fetchRecentActivities()]);
  }, [fetchAlerts, fetchRecentActivities]);

  useEffect(() => {
    refreshAll();
  }, [refreshAll]);

  // Atualização automática a cada 30 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      refreshAll();
    }, 30000); // 30 segundos

    return () => clearInterval(interval);
  }, [refreshAll]);

  return {
    alerts,
    recentActivities,
    loading,
    error,
    fetchAlerts,
    fetchRecentActivities,
    markAlertAsRead,
    createAlert,
    refreshAll,
  };
}
