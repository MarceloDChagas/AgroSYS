import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { AlertsService, Alert, RecentActivity } from './alerts.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('alerts')
@UseGuards(JwtAuthGuard)
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Get()
  async getAlerts(@Request() req): Promise<Alert[]> {
    const userId = req.user.id;
    return this.alertsService.getAlerts(userId);
  }

  @Get('recent-activities')
  async getRecentActivities(@Request() req): Promise<RecentActivity[]> {
    const userId = req.user.id;
    return this.alertsService.getRecentActivities(userId);
  }

  @Post(':id/read')
  async markAlertAsRead(@Param('id') alertId: string, @Request() req): Promise<void> {
    const userId = req.user.id;
    return this.alertsService.markAlertAsRead(alertId, userId);
  }

  @Post()
  async createAlert(@Body() alert: Omit<Alert, 'id' | 'createdAt' | 'isRead'>, @Request() req): Promise<Alert> {
    const userId = req.user.id;
    return this.alertsService.createAlert(alert, userId);
  }
} 