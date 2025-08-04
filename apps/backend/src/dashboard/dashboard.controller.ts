import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { DashboardService } from "./dashboard.service";

@ApiTags("dashboard")
@Controller("dashboard")
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get("statistics")
  @ApiOperation({ summary: "Obter estatísticas do dashboard" })
  @ApiResponse({ status: 200, description: "Estatísticas obtidas com sucesso" })
  @ApiResponse({ status: 401, description: "Não autorizado" })
  async getStatistics() {
    return this.dashboardService.getStatistics();
  }

  @Get("statistics/public")
  @ApiOperation({ summary: "Obter estatísticas do dashboard (público)" })
  @ApiResponse({ status: 200, description: "Estatísticas obtidas com sucesso" })
  async getStatisticsPublic() {
    return this.dashboardService.getStatistics();
  }

  @Get("alerts")
  @ApiOperation({ summary: "Obter alertas do dashboard" })
  @ApiResponse({ status: 200, description: "Alertas obtidos com sucesso" })
  async getAlerts() {
    return this.dashboardService.getAlerts();
  }

  @Get("upcoming-activities")
  @ApiOperation({ summary: "Obter próximas atividades" })
  @ApiResponse({
    status: 200,
    description: "Próximas atividades obtidas com sucesso",
  })
  async getUpcomingActivities() {
    return this.dashboardService.getUpcomingActivities();
  }

  @Get("recent-activities")
  @ApiOperation({ summary: "Obter atividades recentes" })
  @ApiResponse({
    status: 200,
    description: "Atividades recentes obtidas com sucesso",
  })
  async getRecentActivities() {
    return this.dashboardService.getRecentActivities();
  }

  @Get("cost-distribution")
  @ApiOperation({ summary: "Obter distribuição de custos" })
  @ApiResponse({
    status: 200,
    description: "Distribuição de custos obtida com sucesso",
  })
  async getCostDistribution() {
    return this.dashboardService.getCostDistribution();
  }

  @Get("data")
  @ApiOperation({ summary: "Obter todos os dados do dashboard" })
  @ApiResponse({
    status: 200,
    description: "Dados do dashboard obtidos com sucesso",
  })
  async getDashboardData() {
    return this.dashboardService.getDashboardData();
  }
}
