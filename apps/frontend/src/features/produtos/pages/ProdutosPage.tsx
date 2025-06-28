import { useNavigate } from "react-router-dom";
import { SideMenu } from "../components/layout/SideMenu";
import { PageHeader } from "../components/ui/PageHeader";
import { FilterBar } from "../components/ui/FilterBar";
import { DataTable } from "../components/ui/DataTable";
import { ActionButtons } from "../components/ui/ActionButtons";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function ProdutosPage() {
  const navigate = useNavigate();

  // Dados reais de produtos agropecuários
  const produtosData = [
    {
      nome: "Semente de Soja RR Intacta",
      tipo: "Semente",
      quantidade: "800",
      unidade: "KG",
      variedade: "BMX Potência RR",
      safra: "2025/2026",
    },
    {
      nome: "Semente de Milho Híbrido",
      tipo: "Semente",
      quantidade: "1.200",
      unidade: "KG",
      variedade: "DKB 390 PRO3",
      safra: "2025/2026",
    },
    {
      nome: "Semente de Feijão Carioca",
      tipo: "Semente",
      quantidade: "600",
      unidade: "KG",
      variedade: "BRS Estilo",
      safra: "2025/2026",
    },
    {
      nome: "Semente de Arroz Irrigado",
      tipo: "Semente",
      quantidade: "900",
      unidade: "KG",
      variedade: "BRS Pampa",
      safra: "2025/2026",
    },
    {
      nome: "Semente de Trigo",
      tipo: "Semente",
      quantidade: "750",
      unidade: "KG",
      variedade: "BRS 264",
      safra: "2025/2026",
    },
    {
      nome: "Muda de Café Arábica",
      tipo: "Muda",
      quantidade: "2.500",
      unidade: "UNIDADE",
      variedade: "Catuaí Vermelho",
      safra: "2025/2026",
    },
    {
      nome: "Semente de Algodão",
      tipo: "Semente",
      quantidade: "400",
      unidade: "KG",
      variedade: "FM 975 WS",
      safra: "2025/2026",
    },
    {
      nome: "Muda de Cana-de-açúcar",
      tipo: "Muda",
      quantidade: "15.000",
      unidade: "UNIDADE",
      variedade: "RB 867515",
      safra: "2025/2026",
    },
  ];

  const columns = [
    { key: "nome", label: "NOME" },
    { key: "tipo", label: "TIPO" },
    { key: "quantidade", label: "QUANT." },
    { key: "unidade", label: "UNIDADE" },
    { key: "variedade", label: "VARIEDADE" },
    { key: "safra", label: "SAFRA" },
  ];

  const filters = [
    {
      key: "tipo",
      label: "Tipo",
      options: [
        { value: "semente", label: "Semente" },
        { value: "muda", label: "Muda" },
      ],
      placeholder: "Filtrar por tipo",
    },
    {
      key: "safra",
      label: "Safra",
      options: [
        { value: "2025-2026", label: "2025/2026" },
        { value: "2024-2025", label: "2024/2025" },
        { value: "2023-2024", label: "2023/2024" },
      ],
      placeholder: "Filtrar por safra",
    },
  ];

  const actions = [
    {
      label: "EDITAR",
      onClick: () => navigate("/produtos/editar"),
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
    <SideMenu title="PRODUTOS">
      <div className="space-y-6">
        {/* Header */}
        <PageHeader
          title="Produtos Agropecuários"
          subtitle="Controle de sementes e mudas"
        >
          <button
            onClick={() => navigate("/produtos/cadastro")}
            className="btn-primary flex items-center gap-2"
          >
            <FaPlus size={14} />
            Cadastrar novo produto
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
              data={produtosData}
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

export default ProdutosPage;
