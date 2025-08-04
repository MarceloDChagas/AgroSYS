import type { ReactNode } from "react";

export type AlertPriority = "urgent" | "warning" | "info";

interface AlertItem {
  id: string;
  title: string;
  description: string;
  priority: AlertPriority;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface AlertCardProps {
  title: string;
  icon?: ReactNode;
  alerts: AlertItem[];
  className?: string;
}

const priorityConfig = {
  urgent: {
    color: "border-red-500 bg-red-50",
    textColor: "text-red-700",
    icon: "🔴",
  },
  warning: {
    color: "border-yellow-500 bg-yellow-50",
    textColor: "text-yellow-700",
    icon: "🟡",
  },
  info: {
    color: "border-blue-500 bg-blue-50",
    textColor: "text-blue-700",
    icon: "🔵",
  },
};

export function AlertCard({
  title,
  icon,
  alerts,
  className = "",
}: AlertCardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl p-6 shadow-sm border border-neutral-100
        ${className}
      `}
    >
      {/* Header */}
      <div className="flex items-center mb-6">
        {icon && <div className="mr-3 text-xl text-neutral-600">{icon}</div>}
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        {alerts.length > 0 && (
          <span className="ml-auto bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
            {alerts.length}
          </span>
        )}
      </div>

      {/* Lista de alertas */}
      <div className="space-y-3">
        {alerts.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-2">✅</div>
            <p className="text-neutral-500 text-sm">Nenhum alerta pendente</p>
          </div>
        ) : (
          alerts.map((alert) => {
            const config = priorityConfig[alert.priority];
            return (
              <div
                key={alert.id}
                className={`
                  flex items-start p-4 rounded-lg border-l-4
                  ${config.color} hover:shadow-sm transition-shadow duration-200
                `}
              >
                {/* Indicador de prioridade */}
                <div className="mr-3 mt-0.5 text-sm">{config.icon}</div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  <h4
                    className={`font-medium text-sm ${config.textColor} mb-1`}
                  >
                    {alert.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {alert.description}
                  </p>
                </div>

                {/* Botão de ação - Padronizado */}
                {alert.action && (
                  <button
                    onClick={alert.action.onClick}
                    className="
                      ml-3 px-3 py-1.5 text-xs font-medium
                      bg-white border border-neutral-200 rounded-lg
                      text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300
                      transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-agro-500 focus:ring-offset-1
                      min-w-[60px] text-center
                    "
                  >
                    {alert.action.label}
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
