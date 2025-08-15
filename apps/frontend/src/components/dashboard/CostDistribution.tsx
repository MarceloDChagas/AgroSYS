import { FaChartLine } from "react-icons/fa";
import { DonutChart } from "@/components/ui/DonutChart";
import type { CostDistribution } from "@/hooks/useDashboardData";

interface CostDistributionProps {
  data: CostDistribution[];
}

export function CostDistribution({ data }: CostDistributionProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-neutral-900">
          Distribuição de Custos
        </h3>
        <FaChartLine className="text-neutral-400" />
      </div>

      <div className="flex items-center space-x-6">
        {/* Gráfico de Rosca */}
        <div className="flex-shrink-0">
          <DonutChart data={data} size={120} />
        </div>

        {/* Legenda */}
        <div className="flex-1 space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-neutral-700">
                  {item.category}
                </span>
              </div>
              <span className="text-sm font-medium text-neutral-900">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
