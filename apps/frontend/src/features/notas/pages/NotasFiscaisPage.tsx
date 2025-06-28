import { useNavigate } from "react-router-dom";
import { SideMenu } from "../../../components/layout/SideMenu";
import { PageHeader } from "../../../components/ui/PageHeader";
import { FilterBar } from "../../../components/ui/FilterBar";
import { DataTable } from "../../../components/ui/DataTable";
import { ActionButtons } from "../../../components/ui/ActionButtons";
import { FaPlus, FaEye, FaDownload, FaTrash } from "react-icons/fa";

function NotasFiscaisPage() {
  const navigate = useNavigate();

  // Dados mockados de notas fiscais agropecuárias
  const notasFiscaisData = [
    {
      numero: "NF-2025-001",
      tipo: "NF-e",
      destino: "Cooperativa Agropecuária do Sul",
      valorTotal: "R$ 15.750,00",
      data: "15/06/2025",
      status: "Emitida",
      produtos: "Soja Grão - 2.500 kg",
    },
    {
      numero: "NF-2025-002",
      tipo: "NF-e",
      destino: "Indústria de Óleos Vegetais Ltda",
      valorTotal: "R$ 8.900,00",
      data: "12/06/2025",
      status: "Emitida",
      produtos: "Milho Verde - 1.800 kg",
    },
    {
      numero: "NF-2025-003",
      tipo: "NF-e",
      destino: "Distribuidora de Grãos Central",
      valorTotal: "R$ 3.200,00",
      data: "10/06/2025",
      status: "Emitida",
      produtos: "Feijão Carioca - 800 kg",
    },
    {
      numero: "NF-2025-004",
      tipo: "NF-e",
      destino: "Cooperativa Agropecuária do Sul",
      valorTotal: "R$ 4.800,00",
      data: "08/06/2025",
      status: "Emitida",
      produtos: "Arroz Branco - 1.200 kg",
    },
    {
      numero: "NF-2025-005",
      tipo: "NF-e",
      destino: "Moinho de Trigo Industrial",
      valorTotal: "R$ 2.700,00",
      data: "05/06/2025",
      status: "Pendente",
      produtos: "Trigo - 900 kg",
    },
    {
      numero: "NF-2025-006",
      tipo: "NF-e",
      destino: "Torrefação de Café Premium",
      valorTotal: "R$ 12.500,00",
      data: "03/06/2025",
      status: "Emitida",
      produtos: "Café Arábica - 500 kg",
    },
    {
      numero: "NF-2025-007",
      tipo: "NF-e",
      destino: "Indústria Têxtil Nacional",
      valorTotal: "R$ 6.600,00",
      data: "01/06/2025",
      status: "Emitida",
      produtos: "Algodão - 600 kg",
    },
    {
      numero: "NF-2025-008",
      tipo: "NF-e",
      destino: "Usina de Açúcar e Etanol",
      valorTotal: "R$ 45.000,00",
      data: "30/05/2025",
      status: "Pendente",
      produtos: "Cana-de-açúcar - 15.000 kg",
    },
  ];

  const columns = [
    { key: "numero", label: "Nº NOTA" },
    { key: "tipo", label: "TIPO" },
    { key: "destino", label: "DESTINO" },
    { key: "valorTotal", label: "VALOR TOTAL" },
    { key: "data", label: "DATA" },
    { key: "status", label: "STATUS" },
  ];

  const filters = [
    {
      key: "tipo",
      label: "Tipo",
      options: [
        { value: "nfe", label: "NF-e" },
        { value: "nfs", label: "NFS-e" },
        { value: "cte", label: "CT-e" },
      ],
      placeholder: "Filtrar por tipo",
    },
    {
      key: "status",
      label: "Status",
      options: [
        { value: "emitida", label: "Emitida" },
        { value: "pendente", label: "Pendente" },
        { value: "cancelada", label: "Cancelada" },
      ],
      placeholder: "Filtrar por status",
    },
    {
      key: "destino",
      label: "Destino",
      options: [
        { value: "cooperativa-sul", label: "Cooperativa Agropecuária do Sul" },
        { value: "industria-oleos", label: "Indústria de Óleos Vegetais Ltda" },
        {
          value: "distribuidora-central",
          label: "Distribuidora de Grãos Central",
        },
        { value: "moinho-trigo", label: "Moinho de Trigo Industrial" },
        { value: "torrefacao-cafe", label: "Torrefação de Café Premium" },
        { value: "industria-textil", label: "Indústria Têxtil Nacional" },
        { value: "usina-acucar", label: "Usina de Açúcar e Etanol" },
      ],
      placeholder: "Filtrar por destino",
    },
  ];

  const actions = [
    {
      label: "VISUALIZAR",
      onClick: () => navigate("/notas/visualizar"),
      variant: "primary" as const,
      icon: <FaEye size={14} />,
    },
    {
      label: "DOWNLOAD",
      onClick: () => {
        // TODO: Implementar download da nota fiscal
        console.log("Download nota fiscal");
      },
      variant: "primary" as const,
      icon: <FaDownload size={14} />,
    },
    {
      label: "EXCLUIR",
      onClick: () => {
        // TODO: Implementar exclusão da nota fiscal
        console.log("Excluir nota fiscal");
      },
      variant: "danger" as const,
      icon: <FaTrash size={14} />,
    },
  ];

  return (
    <SideMenu title="NOTAS FISCAIS">
      <div className="space-y-6">
        {/* Header */}
        <PageHeader
          title="Notas Fiscais"
          subtitle="Gestão e emissão de documentos fiscais"
        >
          <button
            onClick={() => navigate("/notas/gerar")}
            className="btn-primary flex items-center gap-2"
          >
            <FaPlus size={14} />
            Gerar Nota Fiscal
          </button>
        </PageHeader>

        {/* Filters */}
        <FilterBar filters={filters} />

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Tabela */}
          <div className="flex-1">
            <DataTable
              columns={columns}
              data={notasFiscaisData}
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

export default NotasFiscaisPage;
