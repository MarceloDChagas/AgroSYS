import { SideMenu } from "../components/layout/SideMenu";
import { useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaSearch,
  FaEye,
  FaFileAlt,
  FaTrash,
  FaDollarSign,
} from "react-icons/fa";
import { PageHeader } from "../components/ui/PageHeader";
import { FilterBar } from "../components/ui/FilterBar";
import { DataTable } from "../components/ui/DataTable";
import { ActionButtons } from "../components/ui/ActionButtons";

function VendasPage() {
  const navigate = useNavigate();

  // Dados reais de vendas agropecuárias
  const vendasData = [
    {
      id: "VDA-2025-001",
      data: "15/06/2025",
      cliente: "Fazenda São João Ltda",
      produto: "Soja Grão",
      quantidade: "2.500 kg",
      valor: "R$ 12.500,00",
      status: "Concluída",
    },
    {
      id: "VDA-2025-002",
      data: "14/06/2025",
      cliente: "Cooperativa Agropecuária Central",
      produto: "Milho Verde",
      quantidade: "1.800 kg",
      valor: "R$ 5.400,00",
      status: "Pendente",
    },
    {
      id: "VDA-2025-003",
      data: "13/06/2025",
      cliente: "Sítio Boa Vista",
      produto: "Feijão Carioca",
      quantidade: "800 kg",
      valor: "R$ 4.800,00",
      status: "Concluída",
    },
    {
      id: "VDA-2025-004",
      data: "12/06/2025",
      cliente: "Fazenda Santa Maria",
      produto: "Arroz Branco",
      quantidade: "1.200 kg",
      valor: "R$ 6.000,00",
      status: "Concluída",
    },
    {
      id: "VDA-2025-005",
      data: "11/06/2025",
      cliente: "Produtor Rural Silva",
      produto: "Trigo",
      quantidade: "900 kg",
      valor: "R$ 3.600,00",
      status: "Cancelada",
    },
    {
      id: "VDA-2025-006",
      data: "10/06/2025",
      cliente: "Fazenda Nova Esperança",
      produto: "Café Arábica",
      quantidade: "500 kg",
      valor: "R$ 8.500,00",
      status: "Concluída",
    },
  ];

  const columns = [
    { key: "id", label: "N° Venda" },
    { key: "data", label: "Data" },
    { key: "cliente", label: "Cliente" },
    { key: "produto", label: "Produto" },
    { key: "quantidade", label: "Quantidade" },
    { key: "valor", label: "Valor" },
    { key: "status", label: "Status" },
  ];

  const filters = [
    {
      key: "status",
      label: "Status",
      options: [
        { value: "concluida", label: "Concluída" },
        { value: "pendente", label: "Pendente" },
        { value: "cancelada", label: "Cancelada" },
      ],
      placeholder: "Filtrar por status",
    },
    {
      key: "produto",
      label: "Produto",
      options: [
        { value: "soja", label: "Soja Grão" },
        { value: "milho", label: "Milho Verde" },
        { value: "feijao", label: "Feijão Carioca" },
        { value: "arroz", label: "Arroz Branco" },
        { value: "trigo", label: "Trigo" },
        { value: "cafe", label: "Café Arábica" },
      ],
      placeholder: "Filtrar por produto",
    },
  ];

  const actions = [
    {
      label: "Visualizar",
      onClick: () => {},
      variant: "primary" as const,
      icon: <FaEye size={14} />,
    },
    {
      label: "Gerar NF",
      onClick: () => navigate("/vendas/nota"),
      variant: "primary" as const,
      icon: <FaFileAlt size={14} />,
    },
    {
      label: "Excluir",
      onClick: () => {},
      variant: "danger" as const,
      icon: <FaTrash size={14} />,
    },
  ];

  // Cálculos reais baseados nos dados
  const totalVendas = vendasData
    .filter((venda) => venda.status === "Concluída")
    .reduce((total, venda) => {
      const valor = parseFloat(
        venda.valor.replace("R$ ", "").replace(".", "").replace(",", ".")
      );
      return total + valor;
    }, 0);

  const vendasMes = vendasData.filter(
    (venda) => venda.status === "Concluída"
  ).length;
  const ticketMedio = vendasMes > 0 ? totalVendas / vendasMes : 0;

  return (
    <SideMenu title="Vendas">
      <div className="space-y-6">
        {/* Header Actions - Mais institucional */}
        <PageHeader
          title="Gestão de Vendas"
          subtitle="Controle completo de vendas e receita"
        >
          <button
            onClick={() => navigate("/vendas/registrar")}
            className="btn-primary flex items-center gap-2"
          >
            <FaPlus size={14} />
            Nova Venda
          </button>
        </PageHeader>

        {/* Filters - Mais robusto */}
        <FilterBar filters={filters}>
          <button className="btn-secondary flex items-center gap-2">
            <FaSearch size={14} />
            Buscar
          </button>
        </FilterBar>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Tabela de Vendas */}
          <div className="flex-1">
            <DataTable
              columns={columns}
              data={vendasData}
              className="border-agro-200"
            />
          </div>

          {/* Painel de Ações */}
          <ActionButtons
            actions={actions}
            title="AÇÕES"
            className="border-agro-200"
          />
        </div>

        {/* Resumo Financeiro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card-agro">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-agro-600">
                  Total de Vendas
                </p>
                <p className="text-2xl font-bold text-agro-700">
                  R${" "}
                  {totalVendas.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="p-3 bg-agro-100 rounded-lg border border-agro-200">
                <FaDollarSign className="text-agro-600" size={20} />
              </div>
            </div>
          </div>

          <div className="card-agro">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-agro-600">
                  Vendas do Mês
                </p>
                <p className="text-2xl font-bold text-agro-700">{vendasMes}</p>
              </div>
              <div className="p-3 bg-wheat-100 rounded-lg border border-wheat-200">
                <FaFileAlt className="text-wheat-600" size={20} />
              </div>
            </div>
          </div>

          <div className="card-agro">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-agro-600">
                  Ticket Médio
                </p>
                <p className="text-2xl font-bold text-agro-700">
                  R${" "}
                  {ticketMedio.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="p-3 bg-earth-100 rounded-lg border border-earth-200">
                <FaDollarSign className="text-earth-600" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default VendasPage;
