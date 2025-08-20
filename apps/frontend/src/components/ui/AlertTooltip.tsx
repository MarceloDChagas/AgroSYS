import { useState } from "react";
import {
  FaExclamationTriangle,
  FaExclamationCircle,
  FaInfoCircle,
} from "react-icons/fa";

interface AlertTooltipProps {
  priority: "urgent" | "warning" | "info";
  children: React.ReactNode;
  className?: string;
}

export function AlertTooltip({
  priority,
  children,
  className = "",
}: AlertTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const tooltipContent = {
    urgent: {
      title: "Alerta Urgente",
      description: "Requer ação imediata para evitar perdas.",
      icon: <FaExclamationTriangle className="text-red-500" size={16} />,
      examples: [
        "Estoque crítico",
        "Colheita em 2 dias",
        "Ferramenta quebrada",
      ],
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
    },
    warning: {
      title: "Alerta de Atenção",
      description: "Precisa de atenção em breve.",
      icon: <FaExclamationCircle className="text-yellow-500" size={16} />,
      examples: ["Estoque baixo", "Manutenção pendente", "Colheita próxima"],
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-800",
    },
    info: {
      title: "Alerta Informativo",
      description: "Apenas para informação.",
      icon: <FaInfoCircle className="text-blue-500" size={16} />,
      examples: [
        "Colheita programada",
        "Relatório disponível",
        "Atualização do sistema",
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
    },
  };

  const content = tooltipContent[priority];

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}

      {showTooltip && (
        <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80">
          <div
            className={`${content.bgColor} ${content.borderColor} border rounded-lg p-4 shadow-lg`}
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              {content.icon}
              <h4 className={`font-semibold ${content.textColor}`}>
                {content.title}
              </h4>
            </div>

            {/* Description */}
            <p className={`text-sm ${content.textColor} mb-3`}>
              {content.description}
            </p>

            {/* Examples */}
            <div className="mb-3">
              <p className={`text-xs font-medium ${content.textColor} mb-2`}>
                Exemplos:
              </p>
              <ul className="text-xs space-y-1">
                {content.examples.map((example, index) => (
                  <li
                    key={index}
                    className={`${content.textColor} flex items-center gap-1`}
                  >
                    <span className="w-1 h-1 bg-current rounded-full"></span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action hint */}
            <div
              className={`text-xs ${content.textColor} bg-white bg-opacity-50 rounded p-2`}
            >
              💡 <strong>Dica:</strong> Clique no alerta para ver detalhes e
              marcar como lido.
            </div>
          </div>

          {/* Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div
              className={`w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-current ${content.borderColor}`}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

// Componente para ícones com tooltip
export function AlertIconWithTooltip({
  priority,
  className = "",
}: {
  priority: "urgent" | "warning" | "info";
  className?: string;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const iconConfig = {
    urgent: {
      icon: <FaExclamationTriangle className="text-red-500" size={16} />,
      label: "Urgente",
    },
    warning: {
      icon: <FaExclamationCircle className="text-yellow-500" size={16} />,
      label: "Atenção",
    },
    info: {
      icon: <FaInfoCircle className="text-blue-500" size={16} />,
      label: "Informativo",
    },
  };

  const config = iconConfig[priority];

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {config.icon}

      {showTooltip && (
        <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
          {config.label}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );
}
