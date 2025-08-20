import { AlertStats } from "@/components/ui/AlertStats";
import { AlertCard, type AlertPriority } from "@/components/ui/AlertCard";
import { FaExclamationTriangle } from "react-icons/fa";

interface Alert {
  id: string;
  title: string;
  description: string;
  priority: AlertPriority;
  action?: {
    label: string;
    route: string;
  };
}

interface DashboardSidebarProps {
  alerts: Alert[];
  onShowHelp: () => void;
  onMarkAlertAsRead: (id: string) => void;
}

export function DashboardSidebar({
  alerts,
  onShowHelp,
  onMarkAlertAsRead,
}: DashboardSidebarProps) {
  const alertItems = alerts.map((alert) => ({
    id: alert.id,
    title: alert.title,
    description: alert.description,
    priority: alert.priority,
    action: alert.action
      ? {
          label: alert.action.label,
          onClick: () => {
            if (alert.action?.route) {
              window.location.href = alert.action.route;
            }
            onMarkAlertAsRead(alert.id);
          },
        }
      : undefined,
  }));

  return (
    <div className="space-y-6">
      {/* Centro de Alertas & Notificações */}
      <div className="space-y-4">
        <AlertStats
          urgentCount={alerts.filter((a) => a.priority === "urgent").length}
          warningCount={alerts.filter((a) => a.priority === "warning").length}
          infoCount={alerts.filter((a) => a.priority === "info").length}
          totalCount={alerts.length}
          onShowHelp={onShowHelp}
        />
        {alerts.length > 0 ? (
          <AlertCard
            title="Alertas e Notificações"
            icon={<FaExclamationTriangle />}
            alerts={alertItems}
          />
        ) : (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
            <p className="text-sm text-neutral-600 text-center">
              Nenhum alerta no momento. Bom trabalho!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
