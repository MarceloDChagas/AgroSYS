import { useState, useCallback, useEffect } from "react";
import {
  dashboardService,
  type DashboardStatistics,
  type Alert,
  type UpcomingActivity,
  type RecentActivity,
  type CostDistribution,
} from "../services/api/dashboardService";

export interface UseDashboardResult {
  statistics: DashboardStatistics;
  alerts: Alert[];
  upcomingActivities: UpcomingActivity[];
  recentActivities: RecentActivity[];
  costDistribution: CostDistribution[];
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
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [upcomingActivities, setUpcomingActivities] = useState<
    UpcomingActivity[]
  >([]);
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>(
    []
  );
  const [costDistribution, setCostDistribution] = useState<CostDistribution[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await dashboardService.getDashboardData();
      setStatistics(data.statistics);
      setAlerts(data.alerts);
      setUpcomingActivities(data.upcomingActivities);
      setRecentActivities(data.recentActivities);
      setCostDistribution(data.costDistribution);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao carregar dados do dashboard"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshStatistics = useCallback(async () => {
    await fetchDashboardData();
  }, [fetchDashboardData]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return {
    statistics,
    alerts,
    upcomingActivities,
    recentActivities,
    costDistribution,
    loading,
    error,
    refreshStatistics,
  };
}
