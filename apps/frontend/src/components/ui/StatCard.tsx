import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
    period: string;
  };
  className?: string;
  onClick?: () => void;
}

export function StatCard({
  title,
  value,
  icon,
  trend,
  className = "",
  onClick,
}: StatCardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl p-6 shadow-sm border border-neutral-100
        hover:shadow-md hover:border-agro-200 hover:-translate-y-1
        transition-all duration-300 cursor-pointer group
        ${className}
      `}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {/* Título */}
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-2">
            {title}
          </p>

          {/* Valor Principal */}
          <div className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-agro-700 transition-colors duration-200">
            {value}
          </div>

          {/* Indicador de Tendência */}
          {trend && (
            <div className="flex items-center">
              {trend.value === 0 ? (
                <span className="text-sm font-medium text-neutral-500">
                  — 0%
                </span>
              ) : (
                <span
                  className={`text-sm font-medium ${
                    trend.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <span className="mr-1">{trend.isPositive ? "▲" : "▼"}</span>
                  {Math.abs(trend.value)}%
                </span>
              )}
              <span className="text-xs text-neutral-500 ml-1">
                vs. {trend.period}
              </span>
            </div>
          )}
        </div>

        {/* Ícone */}
        <div className="p-2 bg-agro-50 rounded-lg group-hover:bg-agro-100 transition-colors duration-200">
          <div className="text-agro-600 text-lg group-hover:scale-110 transition-transform duration-200">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}
