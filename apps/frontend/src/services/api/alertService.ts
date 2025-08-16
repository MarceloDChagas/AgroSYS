import { apiClient } from "./client";

export interface Alert {
  id: string;
  title: string;
  description: string;
  priority: "urgent" | "warning" | "info";
  type: "stock" | "maintenance" | "harvest" | "fertilizer" | "system";
  action?: {
    label: string;
    route: string;
  };
  createdAt: Date;
  isRead: boolean;
}

export interface RecentActivity {
  id: string;
  title: string;
  description: string;
  type:
    | "harvest"
    | "fertilizer"
    | "maintenance"
    | "inventory"
    | "sale"
    | "purchase";
  entityId: string;
  entityType: string;
  createdAt: Date;
}

export class AlertService {
  async getAlerts(): Promise<Alert[]> {
    return await apiClient.get<Alert[]>("/alerts");
  }

  async getRecentActivities(): Promise<RecentActivity[]> {
    return await apiClient.get<RecentActivity[]>("/alerts/recent-activities");
  }

  async markAlertAsRead(alertId: string): Promise<void> {
    await apiClient.post<void>(`/alerts/${alertId}/read`);
  }

  async createAlert(
    alert: Omit<Alert, "id" | "createdAt" | "isRead">
  ): Promise<Alert> {
    return await apiClient.post<Alert>("/alerts", alert);
  }
}

export const alertService = new AlertService();
