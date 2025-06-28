import { useNavigate } from "react-router-dom";

interface DashboardCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  route: string;
  color: string;
  bgColor: string;
  className?: string;
}

export function DashboardCard({
  icon,
  label,
  description,
  route,
  color,
  bgColor,
  className = "",
}: DashboardCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className={`
        group relative overflow-hidden rounded-lg p-6 cursor-pointer
        bg-white shadow-institutional hover:shadow-card-hover transition-all duration-300
        border-2 border-neutral-200 hover:border-agro-300
        transform hover:-translate-y-1
        ${className}
      `}
    >
      {/* Background accent - Mais sutil */}
      <div
        className={`absolute top-0 right-0 w-16 h-16 ${bgColor} opacity-5 rounded-bl-full`}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div
          className={`inline-flex p-3 rounded-lg ${bgColor} mb-4 group-hover:scale-105 transition-transform duration-200`}
        >
          <div className={`text-2xl ${color}`}>{icon}</div>
        </div>

        <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-agro-700 transition-colors">
          {label}
        </h3>

        <p className="text-sm text-neutral-600 leading-relaxed font-medium">
          {description}
        </p>

        {/* Hover indicator - Mais tradicional */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className={`w-3 h-3 rounded-full ${bgColor}`}></div>
        </div>
      </div>
    </div>
  );
}
