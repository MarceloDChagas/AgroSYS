import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  iconBgColor: string;
  iconColor: string;
  className?: string;
}

export function StatCard({
  title,
  value,
  icon,
  iconBgColor,
  iconColor,
  className = "",
}: StatCardProps) {
  return (
    <div className={`card-agro ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-agro-600">{title}</p>
          <p className="text-2xl font-bold text-agro-700">{value}</p>
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
