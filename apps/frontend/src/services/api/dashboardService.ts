import { apiClient } from "./index";

export interface DashboardStatistics {
  harvests: number;
  sales: string;
  tools: number;
  uaps: number;
  areaTotal: string;
  productionMonth: string;
  inputMaterials: number;
  invoices: number;
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  priority: "urgent" | "warning" | "info";
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface UpcomingActivity {
  id: string;
  title: string;
  location: string;
  date: string;
  daysLeft: number;
  type: string;
}

export interface RecentActivity {
  id: string;
  title: string;
  type: string;
  time: string;
}

export interface CostDistribution {
  category: string;
  value: number;
  color: string;
}

export interface DashboardData {
  statistics: DashboardStatistics;
  alerts: Alert[];
  upcomingActivities: UpcomingActivity[];
  recentActivities: RecentActivity[];
  costDistribution: CostDistribution[];
}

export class DashboardService {
  async getStatistics(): Promise<DashboardStatistics> {
    try {
      // Buscar dados do endpoint de dashboard do backend
      const response = await apiClient.get<DashboardStatistics>(
        "/dashboard/statistics/public"
      );
      return response;
    } catch {
      // Return default values if there's an error
      return {
        harvests: 0,
        sales: "R$ 0,00",
        tools: 0,
        uaps: 0,
        areaTotal: "0,0 ha",
        productionMonth: "R$ 0,00",
        inputMaterials: 0,
        invoices: 0,
      };
    }
  }

  async getAlerts(): Promise<Alert[]> {
    try {
      const response = await apiClient.get<Alert[]>("/dashboard/alerts");
      return response;
    } catch {
      return [];
    }
  }

  async getUpcomingActivities(): Promise<UpcomingActivity[]> {
    try {
      const response = await apiClient.get<UpcomingActivity[]>(
        "/dashboard/upcoming-activities"
      );
      return response;
    } catch {
      return [];
    }
  }

  async getRecentActivities(): Promise<RecentActivity[]> {
    try {
      const response = await apiClient.get<RecentActivity[]>(
        "/dashboard/recent-activities"
      );
      return response;
    } catch {
      return [];
    }
  }

  async getCostDistribution(): Promise<CostDistribution[]> {
    try {
      const response = await apiClient.get<CostDistribution[]>(
        "/dashboard/cost-distribution"
      );
      return response;
    } catch {
      return [
        { category: "Insumos", value: 45, color: "#10b981" },
        { category: "Mão de Obra", value: 25, color: "#3b82f6" },
        { category: "Manutenção", value: 15, color: "#f59e0b" },
        { category: "Combustível", value: 10, color: "#ef4444" },
        { category: "Outros", value: 5, color: "#8b5cf6" },
      ];
    }
  }

  async getDashboardData(): Promise<DashboardData> {
    try {
      const response = await apiClient.get<DashboardData>("/dashboard/data");
      return response;
    } catch {
      // Return default values if there's an error
      return {
        statistics: {
          harvests: 0,
          sales: "R$ 0,00",
          tools: 0,
          uaps: 0,
          areaTotal: "0,0 ha",
          productionMonth: "R$ 0,00",
          inputMaterials: 0,
          invoices: 0,
        },
        alerts: [],
        upcomingActivities: [],
        recentActivities: [],
        costDistribution: [
          { category: "Insumos", value: 45, color: "#10b981" },
          { category: "Mão de Obra", value: 25, color: "#3b82f6" },
          { category: "Manutenção", value: 15, color: "#f59e0b" },
          { category: "Combustível", value: 10, color: "#ef4444" },
          { category: "Outros", value: 5, color: "#8b5cf6" },
        ],
      };
    }
  }
}

export const dashboardService = new DashboardService();
