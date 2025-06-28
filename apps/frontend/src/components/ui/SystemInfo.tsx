interface SystemInfoProps {
  version?: string;
  lastUpdate?: string;
  status?: "operational" | "maintenance" | "offline";
  className?: string;
}

export function SystemInfo({
  version = "2.0.1",
  lastUpdate = "21/06/2025",
  status = "operational",
  className = "",
}: SystemInfoProps) {
  const statusConfig = {
    operational: {
      text: "Operacional",
      color: "text-green-600",
      dot: "bg-green-600",
    },
    maintenance: {
      text: "Manutenção",
      color: "text-yellow-600",
      dot: "bg-yellow-600",
    },
    offline: {
      text: "Offline",
      color: "text-red-600",
      dot: "bg-red-600",
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <div className={`card p-6 bg-agro-50 border-agro-200 ${className}`}>
      <h4 className="text-lg font-bold text-agro-700 mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-agro-500 rounded-full"></span>
        Informações do Sistema
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-agro-600">Versão:</span>
          <span className="text-neutral-700">{version}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-agro-600">
            Última Atualização:
          </span>
          <span className="text-neutral-700">{lastUpdate}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-agro-600">Status:</span>
          <span className={`font-semibold ${currentStatus.color}`}>
            ● {currentStatus.text}
          </span>
        </div>
      </div>
    </div>
  );
}
