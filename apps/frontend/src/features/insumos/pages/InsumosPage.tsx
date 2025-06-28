import { useNavigate } from "react-router-dom";
import { SideMenu } from "../../../components/layout/SideMenu";
import { PageHeader } from "../../../components/ui/PageHeader";
import { FilterBar } from "../../../components/ui/FilterBar";
import { DataTable } from "../../../components/ui/DataTable";
import { ActionButtons } from "../../../components/ui/ActionButtons";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function InsumosPage() {
  const navigate = useNavigate();

  // Dados reais de insumos agropecuários
  const insumosData = [
    {
      nome: "Adubo NPK 10-20-20",
      tipo: "Fertilizante",
      quantidade: "2.500",
      unidade: "KG",
      fornecedor: "Fertilizantes Brasil Ltda",
      validade: "15/12/2025",
    },
    {
      nome: "Herbicida Glifosato 48%",
      tipo: "Defensivo",
      quantidade: "150",
      unidade: "LITRO",
      fornecedor: "AgroDefesa S.A.",
      validade: "30/08/2025",
    },
    {
      nome: "Calcário Dolomítico",
      tipo: "Corretivo",
      quantidade: "5.000",
      unidade: "KG",
      fornecedor: "Minerais do Sul",
      validade: "31/12/2026",
    },
    {
      nome: "Fungicida Cobre 50%",
      tipo: "Defensivo",
      quantidade: "80",
      unidade: "LITRO",
      fornecedor: "AgroDefesa S.A.",
      validade: "20/10/2025",
    },
    {
      nome: "Adubo Ureia 45%",
      tipo: "Fertilizante",
      quantidade: "1.800",
      unidade: "KG",
      fornecedor: "Fertilizantes Brasil Ltda",
      validade: "10/11/2025",
    },
    {
      nome: "Inseticida Deltametrina",
      tipo: "Defensivo",
      quantidade: "45",
      unidade: "LITRO",
      fornecedor: "AgroDefesa S.A.",
      validade: "05/09/2025",
    },
    {
      nome: "Adubo Superfosfato Simples",
      tipo: "Fertilizante",
      quantidade: "3.200",
      unidade: "KG",
      fornecedor: "Fertilizantes Brasil Ltda",
      validade: "25/12/2025",
    },
    {
      nome: "Gesso Agrícola",
      tipo: "Corretivo",
      quantidade: "2.800",
      unidade: "KG",
      fornecedor: "Minerais do Sul",
      validade: "15/01/2027",
    },
  ];

  const columns = [
    { key: "nome", label: "NOME" },
    { key: "tipo", label: "TIPO" },
    { key: "quantidade", label: "QUANT." },
    { key: "unidade", label: "UNIDADE" },
    { key: "fornecedor", label: "FORNECEDOR" },
    { key: "validade", label: "VALIDADE" },
  ];

  const filters = [
    {
      key: "tipo",
      label: "Tipo",
      options: [
        { value: "fertilizante", label: "Fertilizante" },
        { value: "defensivo", label: "Defensivo" },
        { value: "corretivo", label: "Corretivo" },
      ],
      placeholder: "Filtrar por tipo",
    },
    {
      key: "fornecedor",
      label: "Fornecedor",
      options: [
        { value: "fertilizantes-brasil", label: "Fertilizantes Brasil Ltda" },
        { value: "agrodefesa", label: "AgroDefesa S.A." },
        { value: "minerais-sul", label: "Minerais do Sul" },
      ],
      placeholder: "Filtrar por fornecedor",
    },
  ];

  const actions = [
    {
      label: "EDITAR",
      onClick: () => navigate("/insumos/editar"),
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
    <SideMenu title="INSUMOS">
      <div className="space-y-6">
        {/* Header */}
        <PageHeader
          title="Insumos Agropecuários"
          subtitle="Controle de fertilizantes, defensivos e corretivos"
        >
          <button
            onClick={() => navigate("/insumos/cadastro")}
            className="btn-primary flex items-center gap-2"
          >
            <FaPlus size={14} />
            Cadastrar novo insumo
          </button>
        </PageHeader>

        {/* Filters */}
        <FilterBar
          filters={filters}
          onFilterChange={(key, value) => {
            // TODO: Implementar filtros
            console.log("Filter changed:", key, value);
          }}
        />

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Tabela */}
          <div className="flex-1">
            <DataTable
              columns={columns}
              data={insumosData}
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

export default InsumosPage;
