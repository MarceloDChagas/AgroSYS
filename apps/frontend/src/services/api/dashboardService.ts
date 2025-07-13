import { apiClient } from "./index";
import type { SaleWithItems } from "./salesService";
import type { UAP } from "./uapService";
import type { Tool } from "./toolService";
import type { InputMaterialEntry } from "./inputMaterialService";
import type { Invoice } from "../../types/invoice";
import type { Harvest } from "./harvestService";

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

export class DashboardService {
  async getStatistics(): Promise<DashboardStatistics> {
    try {
      // Fetch data from different endpoints and aggregate
      const [harvests, sales, tools, uaps, inputMaterials, invoices] =
        await Promise.all([
          apiClient.get<Harvest[]>("/harvests").catch(() => []),
          apiClient.get<SaleWithItems[]>("/sales").catch(() => []),
          apiClient.get<Tool[]>("/tools").catch(() => []),
          apiClient.get<UAP[]>("/uaps").catch(() => []),
          apiClient
            .get<InputMaterialEntry[]>("/input-materials")
            .catch(() => []),
          apiClient.get<Invoice[]>("/invoices").catch(() => []),
        ]);

      // Calculate total sales amount
      const totalSales = sales.reduce(
        (sum: number, sale: SaleWithItems) => sum + (sale.totalAmount || 0),
        0
      );

      // Calculate total area from UAPs
      const totalArea = uaps.reduce(
        (sum: number, uap: UAP) => sum + (uap.area || 0),
        0
      );

      // Calculate monthly production (simplified - could be enhanced with date filtering)
      const monthlyProduction = sales
        .filter((sale: SaleWithItems) => {
          const saleDate = new Date(sale.saleDate);
          const now = new Date();
          return (
            saleDate.getMonth() === now.getMonth() &&
            saleDate.getFullYear() === now.getFullYear()
          );
        })
        .reduce(
          (sum: number, sale: SaleWithItems) => sum + (sale.totalAmount || 0),
          0
        );

      return {
        harvests: harvests.length,
        sales: `R$ ${totalSales.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}`,
        tools: tools.length,
        uaps: uaps.length,
        areaTotal: `${totalArea.toFixed(1)} ha`,
        productionMonth: `R$ ${monthlyProduction.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
        })}`,
        inputMaterials: inputMaterials.length,
        invoices: invoices.length,
      };
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
}

export const dashboardService = new DashboardService();
