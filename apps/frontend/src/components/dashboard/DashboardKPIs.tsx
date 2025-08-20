import { StatCard } from "@/components/ui/StatCard";
import {
  FaDollarSign,
  FaSeedling,
  FaExclamationTriangle,
} from "react-icons/fa";

interface DashboardKPIsProps {
  statistics: {
    harvests: number;
  };
  alertsCount: number;
}

export function DashboardKPIs({ statistics, alertsCount }: DashboardKPIsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="FATURAMENTO DO MÊS"
        value="R$ 28.450,00"
        icon={<FaDollarSign className="text-green-600" />}
        trend={{ value: 12, isPositive: true, period: "mês anterior" }}
        onClick={() => (window.location.href = "/financeiro/relatorio")}
      />

      <StatCard
        title="CUSTOS DO MÊS"
        value="R$ 15.200,00"
        icon={<FaDollarSign className="text-red-600" />}
        trend={{ value: 8, isPositive: false, period: "mês anterior" }}
        onClick={() => (window.location.href = "/custos/analise")}
      />

      <StatCard
        title="COLHEITAS ATIVAS"
        value={statistics.harvests.toString()}
        icon={<FaSeedling className="text-green-600" />}
        trend={{ value: 0, isPositive: true, period: "mês anterior" }}
        onClick={() => (window.location.href = "/colheitas")}
      />

      <StatCard
        title="ALERTAS ATIVOS"
        value={alertsCount.toString()}
        icon={<FaExclamationTriangle className="text-orange-600" />}
        onClick={() => (window.location.href = "/alertas")}
      />
    </div>
  );
}
