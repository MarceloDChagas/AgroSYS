import type { ReactNode } from "react";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  iconBgColor: string;
  iconColor: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

export function SummaryCard({
  title,
  value,
  icon,
  iconBgColor,
  iconColor,
  trend,
  className = "",
}: SummaryCardProps) {
  return (
    <div className={`card-agro ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-agro-600">{title}</p>
          <p className="text-2xl font-bold text-agro-700">{value}</p>
          {trend && (
            <p
              className={`text-xs font-medium mt-1 ${
                trend.isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {trend.isPositive ? "↗" : "↘"} {trend.value}
            </p>
          )}
        </div>
        <div
          className={`p-3 ${iconBgColor} rounded-lg border ${iconBgColor.replace(
            "bg-",
            "border-"
          )}`}
        >
          <div className={iconColor} style={{ fontSize: "20px" }}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}
