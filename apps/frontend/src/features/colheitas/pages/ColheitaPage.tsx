import { useNavigate } from "react-router-dom";
import { SideMenu } from "@/components/layout/SideMenu";
import { PageHeader } from "@/components/ui/PageHeader";
import { FilterBar } from "@/components/ui/FilterBar";
import { DataTable } from "@/components/ui/DataTable";
import { ActionButtons } from "@/components/ui/ActionButtons";
import { FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";

function ColheitaPage() {
  const navigate = useNavigate();

  // Dados mockados de colheitas agropecuárias
  const colheitasData = [
    {
      id: "COL-2025-001",
      data: "15/06/2025",
      produto: "Soja Grão",
      quantidade: "2.500 kg",
      uap: "UAP-001",
      responsavel: "João Silva",
      ciclo: "Verão",
      status: "Concluída",
    },
    {
      id: "COL-2025-002",
      data: "12/06/2025",
      produto: "Milho Verde",
      quantidade: "1.800 kg",
      uap: "UAP-002",
      responsavel: "Maria Santos",
      ciclo: "Verão",
      status: "Concluída",
    },
    {
      id: "COL-2025-003",
      data: "10/06/2025",
      produto: "Feijão Carioca",
      quantidade: "800 kg",
      uap: "UAP-003",
      responsavel: "Pedro Costa",
      ciclo: "Verão",
      status: "Concluída",
    },
    {
      id: "COL-2025-004",
      data: "08/06/2025",
      produto: "Arroz Branco",
      quantidade: "1.200 kg",
      uap: "UAP-004",
      responsavel: "Ana Oliveira",
      ciclo: "Verão",
      status: "Concluída",
    },
    {
      id: "COL-2025-005",
      data: "05/06/2025",
      produto: "Trigo",
      quantidade: "900 kg",
      uap: "UAP-005",
      responsavel: "Carlos Ferreira",
      ciclo: "Inverno",
      status: "Em Andamento",
    },
    {
      id: "COL-2025-006",
      data: "03/06/2025",
      produto: "Café Arábica",
      quantidade: "500 kg",
      uap: "UAP-006",
      responsavel: "Lucia Mendes",
      ciclo: "Perene",
      status: "Concluída",
    },
    {
      id: "COL-2025-007",
      data: "01/06/2025",
      produto: "Algodão",
      quantidade: "600 kg",
      uap: "UAP-001",
      responsavel: "João Silva",
      ciclo: "Verão",
      status: "Concluída",
    },
    {
      id: "COL-2025-008",
      data: "30/05/2025",
      produto: "Cana-de-açúcar",
      quantidade: "15.000 kg",
      uap: "UAP-002",
      responsavel: "Maria Santos",
      ciclo: "Perene",
      status: "Em Andamento",
    },
  ];

  const columns = [
    { key: "id", label: "N° COLHEITA" },
    { key: "data", label: "DATA" },
    { key: "produto", label: "PRODUTO" },
    { key: "quantidade", label: "QUANTIDADE" },
    { key: "uap", label: "UAP" },
    { key: "responsavel", label: "RESPONSÁVEL" },
    { key: "ciclo", label: "CICLO" },
    { key: "status", label: "STATUS" },
  ];

  const filters = [
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
        { value: "algodao", label: "Algodão" },
        { value: "cana", label: "Cana-de-açúcar" },
      ],
      placeholder: "Filtrar por produto",
    },
    {
      key: "ciclo",
      label: "Ciclo",
      options: [
        { value: "verao", label: "Verão" },
        { value: "inverno", label: "Inverno" },
        { value: "safrinha", label: "Safrinha" },
        { value: "perene", label: "Perene" },
      ],
      placeholder: "Filtrar por ciclo",
    },
    {
      key: "status",
      label: "Status",
      options: [
        { value: "concluida", label: "Concluída" },
        { value: "em-andamento", label: "Em Andamento" },
        { value: "agendada", label: "Agendada" },
        { value: "cancelada", label: "Cancelada" },
      ],
      placeholder: "Filtrar por status",
    },
  ];

  const actions = [
    {
      label: "VISUALIZAR",
      onClick: () => {
        // TODO: Implementar visualização da colheita
      },
      variant: "primary" as const,
      icon: <FaEye size={14} />,
    },
    {
      label: "EDITAR",
      onClick: () => navigate("/colheita/editar"),
      variant: "primary" as const,
      icon: <FaEdit size={14} />,
    },
    {
      label: "EXCLUIR",
      onClick: () => {
        // TODO: Implementar exclusão da colheita
      },
      variant: "danger" as const,
      icon: <FaTrash size={14} />,
    },
  ];

  return (
    <SideMenu title="COLHEITA">
      <div className="space-y-6">
        {/* Header */}
        <PageHeader
          title="Gestão de Colheitas"
          subtitle="Controle e acompanhamento das colheitas"
        >
          <button
            onClick={() => navigate("/colheita/nova")}
            className="btn-primary flex items-center gap-2"
          >
            <FaPlus size={14} />
            Registrar Nova Colheita
          </button>
        </PageHeader>

        {/* Filters */}
        <FilterBar
          filters={filters}
          onFilterChange={(_key, _value) => {
            // TODO: Implementar filtros
          }}
        />

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Tabela */}
          <div className="flex-1">
            <DataTable
              columns={columns}
              data={colheitasData}
              className="border-agro-200"
            />
          </div>

          {/* Ações */}
          <ActionButtons
            actions={actions}
            title="AÇÕES"
            className="border-agro-200"
          />
        </div>
      </div>
    </SideMenu>
  );
}

export default ColheitaPage;
