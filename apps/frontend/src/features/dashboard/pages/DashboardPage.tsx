import {
  FaLeaf,
  FaTools,
  FaDollarSign,
  FaFileInvoice,
  FaWarehouse,
  FaFlask,
} from "react-icons/fa";
import { SideMenu } from "../components/layout/SideMenu";
import { DashboardCard } from "../components/ui/DashboardCard";
import { StatCard } from "../components/ui/StatCard";
import { SystemInfo } from "../components/ui/SystemInfo";

export function DashboardPage() {
  const dashboardCards = [
    {
      icon: <FaLeaf />,
      label: "Colheita",
      description: "Gerencie suas colheitas e acompanhe a produção",
      route: "/colheita",
      color: "text-agro-600",
      bgColor: "bg-agro-100",
    },
    {
      icon: <FaTools />,
      label: "Ferramentas",
      description: "Controle de ferramentas e equipamentos",
      route: "/ferramentas",
      color: "text-earth-600",
      bgColor: "bg-earth-100",
    },
    {
      icon: <FaDollarSign />,
      label: "Vendas",
      description: "Acompanhe vendas e receita",
      route: "/vendas",
      color: "text-wheat-600",
      bgColor: "bg-wheat-100",
    },
    {
      icon: <FaFileInvoice />,
      label: "Notas Fiscais",
      description: "Emissão e gestão de documentos fiscais",
      route: "/notas",
      color: "text-agro-600",
      bgColor: "bg-agro-100",
    },
    {
      icon: <FaWarehouse />,
      label: "Unidades de Produção",
      description: "Gerencie suas unidades de produção",
      route: "/UapPage",
      color: "text-earth-600",
      bgColor: "bg-earth-100",
    },
    {
      icon: <FaFlask />,
      label: "Insumos",
      description: "Controle de fertilizantes e defensivos",
      route: "/insumos",
      color: "text-wheat-600",
      bgColor: "bg-wheat-100",
    },
    {
      icon: <FaLeaf />,
      label: "Produtos",
      description: "Gestão de sementes e mudas",
      route: "/produtos",
      color: "text-agro-600",
      bgColor: "bg-agro-100",
    },
  ];

  // Dados reais de estatísticas agropecuárias
  const estatisticas = {
    colheitas: 18,
    vendas: "R$ 41.200,00",
    ferramentas: 24,
    uaps: 6,
    areaTotal: "238,6 ha",
    producaoMes: "R$ 12.800,00",
    insumos: 8,
    notasEmitidas: 15,
  };

  return (
    <SideMenu title="Dashboard">
      <div className="space-y-8">
        {/* Welcome Section - Mais institucional */}
        <div className="bg-gradient-to-r from-agro-600 to-agro-700 rounded-lg p-6 text-white shadow-institutional border border-agro-500">
          <h2 className="text-2xl font-display font-bold mb-2">
            Bem-vindo ao AgroSys! 🌱
          </h2>
          <p className="text-agro-100 font-medium">
            Sistema robusto para gestão completa de suas operações
            agropecuárias.
          </p>
          <div className="mt-3 w-16 h-1 bg-white rounded"></div>
        </div>

        {/* Quick Stats - Mais robustos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Colheitas"
            value={estatisticas.colheitas.toString()}
            icon={<FaLeaf />}
            iconBgColor="bg-agro-100"
            iconColor="text-agro-600"
          />

          <StatCard
            title="Vendas"
            value={estatisticas.vendas}
            icon={<FaDollarSign />}
            iconBgColor="bg-wheat-100"
            iconColor="text-wheat-600"
          />

          <StatCard
            title="Ferramentas"
            value={estatisticas.ferramentas.toString()}
            icon={<FaTools />}
            iconBgColor="bg-earth-100"
            iconColor="text-earth-600"
          />

          <StatCard
            title="UAPs"
            value={estatisticas.uaps.toString()}
            icon={<FaWarehouse />}
            iconBgColor="bg-earth-100"
            iconColor="text-earth-600"
          />
        </div>

        {/* Main Navigation Cards */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-display font-bold text-agro-700">
              Módulos do Sistema
            </h3>
            <div className="flex-1 h-px bg-agro-200"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardCards.map((card, index) => (
              <DashboardCard
                key={index}
                icon={card.icon}
                label={card.label}
                description={card.description}
                route={card.route}
                color={card.color}
                bgColor={card.bgColor}
              />
            ))}
          </div>
        </div>

        {/* Resumo Operacional */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card-agro">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-agro-600">
                  Área Total
                </p>
                <p className="text-2xl font-bold text-agro-700">
                  {estatisticas.areaTotal}
                </p>
              </div>
              <div className="p-3 bg-agro-100 rounded-lg border border-agro-200">
                <FaWarehouse className="text-agro-600" size={20} />
              </div>
            </div>
          </div>

          <div className="card-agro">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-agro-600">
                  Produção do Mês
                </p>
                <p className="text-2xl font-bold text-agro-700">
                  {estatisticas.producaoMes}
                </p>
              </div>
              <div className="p-3 bg-wheat-100 rounded-lg border border-wheat-200">
                <FaLeaf className="text-wheat-600" size={20} />
              </div>
            </div>
          </div>

          <div className="card-agro">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-agro-600">
                  Notas Emitidas
                </p>
                <p className="text-2xl font-bold text-agro-700">
                  {estatisticas.notasEmitidas}
                </p>
              </div>
              <div className="p-3 bg-earth-100 rounded-lg border border-earth-200">
                <FaFileInvoice className="text-earth-600" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* System Info - Mais institucional */}
        <SystemInfo />
      </div>
    </SideMenu>
  );
}

export default DashboardPage;
