import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

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

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getStatistics(): Promise<DashboardStatistics> {
    try {
      console.log("Buscando estatísticas do dashboard...");

      // Buscar dados do banco usando Prisma
      const [harvests, sales, tools, uaps, inputMaterials, invoices] =
        await Promise.all([
          this.prisma.harvest.count(),
          this.prisma.sale.findMany({
            include: {
              saleItems: true,
            },
          }),
          this.prisma.tool.count(),
          this.prisma.uAP.findMany(),
          this.prisma.inputMaterialEntry.count(),
          this.prisma.invoice.count(),
        ]);

      console.log("Dados obtidos:", {
        harvests,
        salesCount: sales.length,
        tools,
        uapsCount: uaps.length,
        inputMaterials,
        invoices,
      });

      // Calcular valor total de vendas
      const totalSales = sales.reduce(
        (sum, sale) => sum + Number(sale.totalAmount),
        0
      );

      // Calcular área total das UAPs
      const totalArea = uaps.reduce((sum, uap) => sum + Number(uap.area), 0);

      // Calcular produção mensal (vendas do mês atual)
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

      const monthlySales = sales.filter((sale) => {
        const saleDate = new Date(sale.saleDate);
        return saleDate >= startOfMonth && saleDate <= endOfMonth;
      });

      const monthlyProduction = monthlySales.reduce(
        (sum, sale) => sum + Number(sale.totalAmount),
        0
      );

      const result = {
        harvests,
        sales: `R$ ${totalSales.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}`,
        tools,
        uaps: uaps.length,
        areaTotal: `${totalArea.toFixed(1)} ha`,
        productionMonth: `R$ ${monthlyProduction.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}`,
        inputMaterials,
        invoices,
      };

      console.log("Estatísticas calculadas:", result);
      return result;
    } catch (error) {
      console.error("Erro ao buscar estatísticas:", error);
      // Retornar valores padrão em caso de erro
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
      const alerts = await this.prisma.alert.findMany({
        where: {
          status: "ACTIVE",
        },
        orderBy: {
          priority: "desc",
        },
        take: 10,
      });

      return alerts.map((alert) => ({
        id: alert.id,
        title: alert.title,
        description: alert.description,
        priority: alert.priority.toLowerCase() as "urgent" | "warning" | "info",
        action: {
          label: "Ver",
          onClick: () => console.log(`Ver alerta: ${alert.id}`),
        },
      }));
    } catch (error) {
      console.error("Erro ao buscar alertas:", error);
      return [];
    }
  }

  async getUpcomingActivities(): Promise<UpcomingActivity[]> {
    try {
      const now = new Date();
      const thirtyDaysFromNow = new Date(
        now.getTime() + 30 * 24 * 60 * 60 * 1000
      );

      const activities = await this.prisma.activity.findMany({
        where: {
          scheduledDate: {
            gte: now,
            lte: thirtyDaysFromNow,
          },
          status: "SCHEDULED",
        },
        orderBy: {
          scheduledDate: "asc",
        },
        take: 10,
      });

      return activities.map((activity) => {
        const scheduledDate = new Date(activity.scheduledDate);
        const daysLeft = Math.ceil(
          (scheduledDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
        );

        return {
          id: activity.id,
          title: activity.title,
          location: activity.location,
          date: scheduledDate.toLocaleDateString("pt-BR"),
          daysLeft,
          type: activity.type.toLowerCase(),
        };
      });
    } catch (error) {
      console.error("Erro ao buscar próximas atividades:", error);
      return [];
    }
  }

  async getRecentActivities(): Promise<RecentActivity[]> {
    try {
      const now = new Date();
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      const activities = await this.prisma.activity.findMany({
        where: {
          completedDate: {
            gte: sevenDaysAgo,
            lte: now,
          },
          status: "COMPLETED",
        },
        orderBy: {
          completedDate: "desc",
        },
        take: 10,
      });

      return activities.map((activity) => {
        const completedDate = new Date(activity.completedDate!);
        const timeDiff = now.getTime() - completedDate.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        let timeText = "";
        if (daysDiff === 0) {
          timeText = "Hoje";
        } else if (daysDiff === 1) {
          timeText = "Ontem";
        } else {
          timeText = `${daysDiff} dias atrás`;
        }

        return {
          id: activity.id,
          title: activity.title,
          type: activity.type.toLowerCase(),
          time: timeText,
        };
      });
    } catch (error) {
      console.error("Erro ao buscar atividades recentes:", error);
      return [];
    }
  }

  async getCostDistribution(): Promise<CostDistribution[]> {
    try {
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

      const costs = await this.prisma.cost.findMany({
        where: {
          date: {
            gte: startOfMonth,
            lte: endOfMonth,
          },
        },
      });

      // Agrupar custos por categoria
      const costByCategory = costs.reduce((acc, cost) => {
        const category = cost.category;
        if (!acc[category]) {
          acc[category] = 0;
        }
        acc[category] += Number(cost.amount);
        return acc;
      }, {} as Record<string, number>);

      const totalCost = Object.values(costByCategory).reduce(
        (sum, cost) => sum + cost,
        0
      );

      const colorMap = {
        INPUTS: "#10b981",
        LABOR: "#3b82f6",
        MAINTENANCE: "#f59e0b",
        FUEL: "#ef4444",
        OTHER: "#8b5cf6",
      };

      const categoryLabels = {
        INPUTS: "Insumos",
        LABOR: "Mão de Obra",
        MAINTENANCE: "Manutenção",
        FUEL: "Combustível",
        OTHER: "Outros",
      };

      return Object.entries(costByCategory).map(([category, amount]) => ({
        category:
          categoryLabels[category as keyof typeof categoryLabels] || category,
        value: totalCost > 0 ? Math.round((amount / totalCost) * 100) : 0,
        color: colorMap[category as keyof typeof colorMap] || "#8b5cf6",
      }));
    } catch (error) {
      console.error("Erro ao buscar distribuição de custos:", error);
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
      const [
        statistics,
        alerts,
        upcomingActivities,
        recentActivities,
        costDistribution,
      ] = await Promise.all([
        this.getStatistics(),
        this.getAlerts(),
        this.getUpcomingActivities(),
        this.getRecentActivities(),
        this.getCostDistribution(),
      ]);

      return {
        statistics,
        alerts,
        upcomingActivities,
        recentActivities,
        costDistribution,
      };
    } catch (error) {
      console.error("Erro ao buscar dados do dashboard:", error);
      throw error;
    }
  }
}
