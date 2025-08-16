import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

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

@Injectable()
export class AlertsService {
  constructor(private prisma: PrismaService) {}

  async getAlerts(userId: string): Promise<Alert[]> {
    const alerts: Alert[] = [];

    // Verificar estoque crítico
    const lowStockProducts = await this.prisma.product.findMany({
      where: {
        quantity: {
          lte: 10, // Considerar crítico se <= 10
        },
      },
    });

    for (const product of lowStockProducts) {
      alerts.push({
        id: `stock-${product.id}`,
        title: "Estoque Crítico",
        description: `${product.name}: Restam apenas ${product.quantity} unidades`,
        priority: product.quantity <= 5 ? "urgent" : "warning",
        type: "stock",
        action: {
          label: "Pedir",
          route: "/insumos/cadastro",
        },
        createdAt: new Date(),
        isRead: false,
      });
    }

    // Verificar manutenções pendentes
    const maintenanceTools = await this.prisma.tool.findMany();
    for (const tool of maintenanceTools) {
      const status = (tool.status || "").toLowerCase();
      const needsMaintenance =
        status.includes("manut") || // "manutenção" in PT-BR
        status.includes("maint") ||
        status.includes("repair") ||
        status.includes("inactive") ||
        status.includes("inativo");

      if (needsMaintenance) {
        alerts.push({
          id: `maintenance-${tool.id}`,
          title: "Manutenção Pendente",
          description: `${tool.toolName}: Manutenção necessária`,
          priority: "warning",
          type: "maintenance",
          action: {
            label: "Agendar",
            route: "/ferramentas/editar",
          },
          createdAt: new Date(),
          isRead: false,
        });
      }
    }

    // Verificar colheitas próximas
    const upcomingHarvests = await this.prisma.harvest.findMany({
      where: {
        harvestDate: {
          gte: new Date(),
          lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Próximos 7 dias
        },
      },
    });

    for (const harvest of upcomingHarvests) {
      const daysUntilHarvest = Math.ceil(
        (harvest.harvestDate.getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      );

      alerts.push({
        id: `harvest-${harvest.id}`,
        title: "Colheita Programada",
        description: `${harvest.product}: Colheita em ${daysUntilHarvest} dias`,
        priority: daysUntilHarvest <= 2 ? "urgent" : "info",
        type: "harvest",
        action: {
          label: "Ver Detalhes",
          route: `/colheita/visualizar/${harvest.id}`,
        },
        createdAt: new Date(),
        isRead: false,
      });
    }

    return alerts.sort((a, b) => {
      const priorityOrder = { urgent: 0, warning: 1, info: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  }

  async getRecentActivities(userId: string): Promise<RecentActivity[]> {
    const activities: RecentActivity[] = [];

    // Buscar colheitas recentes
    const recentHarvests = await this.prisma.harvest.findMany({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Últimos 7 dias
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    for (const harvest of recentHarvests) {
      activities.push({
        id: `harvest-${harvest.id}`,
        title: "Nova colheita registrada",
        description: `${harvest.product} - ${harvest.quantity.toString()} ${harvest.unit}`,
        type: "harvest",
        entityId: harvest.id,
        entityType: "harvest",
        createdAt: harvest.createdAt,
      });
    }

    // Buscar entradas de insumos recentes
    const recentInputMaterials = await this.prisma.inputMaterialEntry.findMany({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        },
      },
      include: {
        product: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    for (const entry of recentInputMaterials) {
      activities.push({
        id: `inventory-${entry.id}`,
        title: "Estoque de insumos atualizado",
        description: `${entry.product.name} - ${entry.amount.toString()} ${entry.unit}`,
        type: "inventory",
        entityId: entry.id,
        entityType: "inputMaterialEntry",
        createdAt: entry.createdAt,
      });
    }

    // Buscar vendas recentes
    const recentSales = await this.prisma.sale.findMany({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    for (const sale of recentSales) {
      activities.push({
        id: `sale-${sale.id}`,
        title: "Nova venda registrada",
        description: `Venda de ${Number(sale.totalAmount).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`,
        type: "sale",
        entityId: sale.id,
        entityType: "sale",
        createdAt: sale.createdAt,
      });
    }

    // Buscar ferramentas recentes
    const recentTools = await this.prisma.tool.findMany({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    for (const tool of recentTools) {
      activities.push({
        id: `maintenance-${tool.id}`,
        title: "Ferramenta registrada",
        description: `${tool.toolName} - ${tool.status}`,
        type: "maintenance",
        entityId: tool.id,
        entityType: "tool",
        createdAt: tool.createdAt,
      });
    }

    return activities.sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async markAlertAsRead(alertId: string, userId: string): Promise<void> {
    // Implementar lógica para marcar alerta como lido
    // Por enquanto, apenas retorna
    return;
  }

  async createAlert(
    alert: Omit<Alert, "id" | "createdAt" | "isRead">,
    userId: string
  ): Promise<Alert> {
    // Implementar criação de alerta personalizado
    const newAlert: Alert = {
      ...alert,
      id: `custom-${Date.now()}`,
      createdAt: new Date(),
      isRead: false,
    };

    return newAlert;
  }
}
