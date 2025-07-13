import { useState, useEffect, useCallback } from "react";
import {
  dashboardService,
  type DashboardStatistics,
} from "../services/api/dashboardService";

export interface UseDashboardResult {
  statistics: DashboardStatistics;
  loading: boolean;
  error: string | null;
  refreshStatistics: () => Promise<void>;
}

export function useDashboard(): UseDashboardResult {
  const [statistics, setStatistics] = useState<DashboardStatistics>({
    harvests: 0,
    sales: "R$ 0,00",
    tools: 0,
    uaps: 0,
    areaTotal: "0,0 ha",
    productionMonth: "R$ 0,00",
    inputMaterials: 0,
    invoices: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStatistics = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await dashboardService.getStatistics();
      setStatistics(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro ao carregar estatísticas"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshStatistics = useCallback(async () => {
    await fetchStatistics();
  }, [fetchStatistics]);

  useEffect(() => {
    fetchStatistics();
  }, [fetchStatistics]);

  return {
    statistics,
    loading,
    error,
    refreshStatistics,
  };
}
