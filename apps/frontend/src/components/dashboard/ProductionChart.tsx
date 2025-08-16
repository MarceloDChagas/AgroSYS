import { FaChartLine } from "react-icons/fa";
import { ChartCard, PeriodSelector } from "@/components/ui/ChartCard";
import type { PeriodOption } from "@/hooks/useDashboardData";

interface ProductionChartProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
  periodOptions: PeriodOption[];
}

export function ProductionChart({
  selectedPeriod,
  onPeriodChange,
  periodOptions,
}: ProductionChartProps) {
  return (
    <ChartCard
      title="Produção Mensal (Últimos 6 meses)"
      periodSelector={
        <PeriodSelector
          value={selectedPeriod}
          onChange={onPeriodChange}
          options={periodOptions}
        />
      }
    >
      <div className="h-64 bg-neutral-50 rounded-lg flex items-center justify-center">
        <div className="text-center text-neutral-500">
          <FaChartLine className="text-4xl mx-auto mb-2" />
          <p className="font-semibold text-neutral-700">
            Gráfico de Produção Mensal
          </p>
          <p className="text-sm mt-1">
            Período:{" "}
            {periodOptions.find((opt) => opt.value === selectedPeriod)?.label}
          </p>
          <p className="text-sm mt-4 text-neutral-500">
            Ainda não há dados de produção.
          </p>
          <button
            className="mt-3 px-3 py-1.5 text-sm rounded-lg bg-agro-500 text-white hover:bg-agro-600 transition-colors"
            onClick={() => (window.location.href = "/colheitas/nova")}
          >
            Adicionar primeira produção
          </button>
        </div>
      </div>
    </ChartCard>
  );
}
