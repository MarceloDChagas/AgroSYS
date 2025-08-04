import { useNavigate } from "react-router-dom";

interface DashboardCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  route: string;
  className?: string;
}

export function DashboardCard({
  icon,
  label,
  description,
  route,
  className = "",
}: DashboardCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className={`
        group relative overflow-hidden rounded-xl p-6 cursor-pointer
        bg-white shadow-sm hover:shadow-md transition-all duration-300
        border border-neutral-100 hover:border-agro-200
        transform hover:-translate-y-1 hover:scale-[1.02]
        ${className}
      `}
    >
      {/* Background accent sutil */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-agro-50 opacity-30 rounded-bl-full"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header com ícone */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-agro-700 transition-colors">
              {label}
            </h3>
          </div>
          <div className="p-3 bg-agro-50 rounded-lg group-hover:bg-agro-100 transition-colors">
            <div className="text-agro-600 text-xl group-hover:text-agro-700 transition-colors">
              {icon}
            </div>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-sm text-neutral-600 leading-relaxed font-medium">
          {description}
        </p>

        {/* Indicador de hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-2 h-2 bg-agro-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
