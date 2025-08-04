import {
  FaDollarSign,
  FaExclamationTriangle,
  FaChartLine,
  FaCalendarAlt,
  FaClipboardList,
  FaRocket,
  FaBox,
  FaSeedling,
  FaWrench,
  FaTint,
} from "react-icons/fa";
import { SideMenu } from "@/components/layout/SideMenu";
import { StatCard } from "@/components/ui/StatCard";
import { ChartCard, PeriodSelector } from "@/components/ui/ChartCard";
import { AlertCard } from "@/components/ui/AlertCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { DonutChart } from "@/components/ui/DonutChart";
import { SystemInfo } from "@/components/ui/SystemInfo";
import { useDashboard } from "@/hooks/useDashboard";
import { useState } from "react";

export function DashboardPage() {
  const {
    statistics,
    alerts,
    upcomingActivities,
    recentActivities,
    costDistribution,
    loading,
    error,
    refreshStatistics,
  } = useDashboard();
  const [selectedPeriod, setSelectedPeriod] = useState("6months");

  // Simular se é um novo usuário (em produção, isso viria do backend)
  const isNewUser = statistics.harvests === 2 && statistics.sales === "R$ 0,00";

  // Passos para novos usuários
  const setupSteps = [
    {
      id: "1",
      title: "Cadastre sua primeira Unidade de Produção",
      description: "Configure suas áreas de plantio e produção",
      route: "/uap/cadastro",
      completed: statistics.uaps > 0,
    },
    {
      id: "2",
      title: "Adicione seus Insumos ao Estoque",
      description: "Registre fertilizantes, defensivos e outros insumos",
      route: "/insumos/cadastro",
      completed: false, // Seria verificado pelo backend
    },
    {
      id: "3",
      title: "Agende sua primeira atividade",
      description: "Programe colheitas, aplicações e manutenções",
      route: "/colheita/nova",
      completed: statistics.harvests > 0,
    },
    {
      id: "4",
      title: "Configure suas ferramentas",
      description: "Registre tratores, implementos e equipamentos",
      route: "/ferramentas",
      completed: statistics.tools > 0,
    },
  ];

  const periodOptions = [
    { value: "1month", label: "Último mês" },
    { value: "3months", label: "Últimos 3 meses" },
    { value: "6months", label: "Últimos 6 meses" },
    { value: "1year", label: "Este ano" },
  ];

  // Função para obter ícone baseado no tipo de atividade
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "harvest":
        return <FaSeedling className="text-green-600" />;
      case "fertilizer":
        return <FaTint className="text-blue-600" />;
      case "maintenance":
        return <FaWrench className="text-orange-600" />;
      case "inventory":
        return <FaBox className="text-purple-600" />;
      default:
        return <FaClipboardList className="text-neutral-600" />;
    }
  };

  if (loading) {
    return (
      <SideMenu title="Dashboard">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-agro-600 mx-auto mb-4"></div>
            <p className="text-neutral-600">Carregando estatísticas...</p>
          </div>
        </div>
      </SideMenu>
    );
  }

  if (error) {
    return (
      <SideMenu title="Dashboard">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-red-600 mb-4">
              Erro ao carregar estatísticas: {error}
            </p>
            <button onClick={() => refreshStatistics()} className="btn-primary">
              Tentar novamente
            </button>
          </div>
        </div>
      </SideMenu>
    );
  }

  // Se for um novo usuário, mostrar o EmptyState
  if (isNewUser) {
    return (
      <SideMenu title="Dashboard">
        <div className="max-w-4xl mx-auto">
          <EmptyState
            title="Bem-vindo ao AgroSys! 🚀"
            description="Vamos configurar seu sistema para começar a gerenciar sua propriedade de forma eficiente."
            steps={setupSteps}
            icon={<FaRocket />}
          />
        </div>
      </SideMenu>
    );
  }

  return (
    <SideMenu title="Dashboard">
      <div className="space-y-6">
        {/* KPIs Principais - Linha do Topo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="FATURAMENTO DO MÊS"
            value={statistics.productionMonth}
            icon={<FaDollarSign className="text-green-600" />}
            trend={{ value: 12, isPositive: true, period: "mês anterior" }}
          />

          <StatCard
            title="CUSTOS DO MÊS"
            value="R$ 15.200,00"
            icon={<FaDollarSign className="text-red-600" />}
            trend={{ value: 8, isPositive: false, period: "mês anterior" }}
          />

          <StatCard
            title="COLHEITAS ATIVAS"
            value={statistics.harvests.toString()}
            icon={<FaSeedling className="text-green-600" />}
            trend={{ value: 5, isPositive: true, period: "mês anterior" }}
          />

          <StatCard
            title="ALERTAS DE ESTOQUE"
            value={alerts.length.toString()}
            icon={<FaBox className="text-orange-600" />}
          />
        </div>

        {/* Layout Principal - 2/3 + 1/3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna Esquerda - 2/3 da tela */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gráfico de Produção Mensal */}
            <ChartCard
              title="Produção Mensal (Últimos 6 meses)"
              periodSelector={
                <PeriodSelector
                  value={selectedPeriod}
                  onChange={setSelectedPeriod}
                  options={periodOptions}
                />
              }
            >
              <div className="h-64 bg-neutral-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <FaChartLine className="text-4xl mx-auto mb-2" />
                  <p>Gráfico de Produção Mensal</p>
                  <p className="text-sm">
                    Período:{" "}
                    {
                      periodOptions.find((opt) => opt.value === selectedPeriod)
                        ?.label
                    }
                  </p>
                  <p className="text-xs mt-2 text-neutral-400">
                    Seus dados de produção aparecerão aqui
                  </p>
                </div>
              </div>
            </ChartCard>

            {/* Próximas Atividades/Cronograma */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Próximas Atividades
                </h3>
                <FaCalendarAlt className="text-neutral-400" />
              </div>

              <div className="space-y-4">
                {upcomingActivities.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-2">📅</div>
                    <p className="text-neutral-500 text-sm">
                      Nenhuma atividade programada
                    </p>
                  </div>
                ) : (
                  upcomingActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-all duration-200 cursor-pointer group"
                    >
                      <div className="mr-4">
                        <div className="w-3 h-3 bg-agro-500 rounded-full group-hover:scale-110 transition-transform duration-200"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-neutral-900 group-hover:text-agro-700 transition-colors duration-200">
                          {activity.title}
                        </h4>
                        <p className="text-sm text-neutral-600">
                          {activity.location} • {activity.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-medium text-neutral-500">
                          {activity.daysLeft === 0
                            ? "Hoje"
                            : `${activity.daysLeft} dias`}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Coluna Direita - 1/3 da tela */}
          <div className="space-y-6">
            {/* Alertas Importantes */}
            <AlertCard
              title="Alertas Importantes"
              icon={<FaExclamationTriangle />}
              alerts={alerts}
            />

            {/* Distribuição de Custos */}
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
                  <DonutChart data={costDistribution} size={120} />
                </div>

                {/* Legenda */}
                <div className="flex-1 space-y-3">
                  {costDistribution.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
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

            {/* Atividades Recentes */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Atividades Recentes
                </h3>
                <FaClipboardList className="text-neutral-400" />
              </div>

              <div className="space-y-4">
                {recentActivities.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-neutral-500 text-sm">
                      Nenhuma atividade recente
                    </p>
                  </div>
                ) : (
                  recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-neutral-900 font-medium">
                          {activity.title}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* System Info */}
        <SystemInfo />
      </div>
    </SideMenu>
  );
}

export default DashboardPage;
