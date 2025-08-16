import { useState } from "react";
import { FaBell, FaExclamationTriangle } from "react-icons/fa";
import { useAlerts } from "@/hooks/useAlerts";
import { AlertTooltip } from "./AlertTooltip";

export function NotificationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { alerts, markAlertAsRead } = useAlerts();
  const unreadCount = alerts.filter((alert) => !alert.isRead).length;

  const handleAlertClick = async (alertId: string) => {
    await markAlertAsRead(alertId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
      >
        <FaBell size={20} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-neutral-200 z-50">
          <div className="p-4 border-b border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900">
              Notificações
            </h3>
            <p className="text-sm text-neutral-500">
              {unreadCount} não lida{unreadCount !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {alerts.length === 0 ? (
              <div className="p-4 text-center text-neutral-500">
                <FaBell className="mx-auto mb-2 text-neutral-300" size={24} />
                <p>Nenhuma notificação</p>
              </div>
            ) : (
              alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 border-b border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-colors duration-200 ${
                    !alert.isRead ? "bg-blue-50" : ""
                  }`}
                  onClick={() => handleAlertClick(alert.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <AlertTooltip priority={alert.priority}>
                        <FaExclamationTriangle
                          className={`${
                            alert.priority === "urgent"
                              ? "text-red-500"
                              : alert.priority === "warning"
                              ? "text-yellow-500"
                              : "text-blue-500"
                          }`}
                          size={16}
                        />
                      </AlertTooltip>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-neutral-900">
                        {alert.title}
                      </p>
                      <p className="text-xs text-neutral-600 mt-1">
                        {alert.description}
                      </p>
                      {alert.action && (
                        <button
                          className="text-xs text-blue-600 hover:text-blue-800 mt-2 font-medium"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (alert.action?.route) {
                              window.location.href = alert.action.route;
                            }
                          }}
                        >
                          {alert.action.label}
                        </button>
                      )}
                    </div>
                    {!alert.isRead && (
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Overlay para fechar ao clicar fora */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
