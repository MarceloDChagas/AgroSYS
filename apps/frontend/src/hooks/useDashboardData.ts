export interface UpcomingActivity {
  id: string;
  title: string;
  location: string;
  date: string;
  daysLeft: number;
  type: string;
}

export interface CostDistribution {
  category: string;
  value: number;
  color: string;
}

export interface PeriodOption {
  value: string;
  label: string;
}

export function useDashboardData() {
  const upcomingActivities: UpcomingActivity[] = [
    {
      id: "1",
      title: "Colheita da Soja",
      location: "UAP Norte",
      date: "15/01/2024",
      daysLeft: 3,
      type: "harvest",
    },
    {
      id: "2",
      title: "Aplicação de Fertilizante",
      location: "UAP Sul",
      date: "12/01/2024",
      daysLeft: 0,
      type: "fertilizer",
    },
    {
      id: "3",
      title: "Manutenção do Trator",
      location: "Garagem",
      date: "18/01/2024",
      daysLeft: 6,
      type: "maintenance",
    },
  ];

  const costDistribution: CostDistribution[] = [
    { category: "Insumos", value: 45, color: "#10b981" },
    { category: "Mão de Obra", value: 25, color: "#3b82f6" },
    { category: "Manutenção", value: 15, color: "#f59e0b" },
    { category: "Combustível", value: 10, color: "#ef4444" },
    { category: "Outros", value: 5, color: "#8b5cf6" },
  ];

  const periodOptions: PeriodOption[] = [
    { value: "1month", label: "Último mês" },
    { value: "3months", label: "Últimos 3 meses" },
    { value: "6months", label: "Últimos 6 meses" },
    { value: "1year", label: "Este ano" },
  ];

  return {
    upcomingActivities,
    costDistribution,
    periodOptions,
  };
}
