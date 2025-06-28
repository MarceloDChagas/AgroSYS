import { useNavigate } from "react-router-dom";
import { SideMenu } from "../components/layout/SideMenu";
import { PageHeader } from "../components/ui/PageHeader";
import { FilterBar } from "../components/ui/FilterBar";
import { DataTable } from "../components/ui/DataTable";
import { ActionButtons } from "../components/ui/ActionButtons";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function UapPage() {
  const navigate = useNavigate();

  // Dados reais de unidades de produção agropecuária
  const uapData = [
    {
      uap: "UAP-001",
      secao: "Seção Norte",
      area: "45,2 ha",
      responsavel: "João Silva",
    },
    {
      uap: "UAP-002",
      secao: "Seção Sul",
      area: "32,8 ha",
      responsavel: "Maria Santos",
    },
    {
      uap: "UAP-003",
      secao: "Seção Leste",
      area: "28,5 ha",
      responsavel: "Pedro Costa",
    },
    {
      uap: "UAP-004",
      secao: "Seção Oeste",
      area: "51,3 ha",
      responsavel: "Ana Oliveira",
    },
    {
      uap: "UAP-005",
      secao: "Seção Central",
      area: "38,7 ha",
      responsavel: "Carlos Ferreira",
    },
    {
      uap: "UAP-006",
      secao: "Seção Nordeste",
      area: "42,1 ha",
      responsavel: "Lucia Mendes",
    },
  ];

  const columns = [
    { key: "uap", label: "UAP" },
    { key: "secao", label: "SEÇÃO" },
    { key: "area", label: "ÁREA" },
    { key: "responsavel", label: "RESPONSÁVEL" },
  ];

  const filters = [
    {
      key: "secao",
      label: "Seção",
      options: [
        { value: "norte", label: "Seção Norte" },
        { value: "sul", label: "Seção Sul" },
        { value: "leste", label: "Seção Leste" },
        { value: "oeste", label: "Seção Oeste" },
        { value: "central", label: "Seção Central" },
        { value: "nordeste", label: "Seção Nordeste" },
      ],
      placeholder: "Filtrar por seção",
    },
  ];

  const actions = [
    {
      label: "EDITAR",
      onClick: () => navigate("/uap/editar"),
      variant: "primary" as const,
      icon: <FaEdit size={14} />,
    },
    {
      label: "EXCLUIR",
      onClick: () => {},
      variant: "danger" as const,
      icon: <FaTrash size={14} />,
    },
  ];

  return (
    <SideMenu title="UNIDADES DE PRODUÇÃO">
      <div className="space-y-6">
        {/* Header */}
        <PageHeader
          title="Unidades de Produção"
          subtitle="Gerencie suas unidades de produção"
        >
          <button
            onClick={() => navigate("/uap/cadastro")}
            className="btn-primary flex items-center gap-2"
          >
            <FaPlus size={14} />
            Cadastrar nova UAP
          </button>
        </PageHeader>

        {/* Filters */}
        <FilterBar
          filters={filters}
          onFilterChange={(key, value) =>
            // Remover console.log("Filter changed:", key, value)
          }
        />

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Tabela */}
          <div className="flex-1">
            <DataTable
              columns={columns}
              data={uapData}
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

export default UapPage;
