import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SideMenu } from "@/components/layout/SideMenu";
import { PageHeader } from "@/components/ui/PageHeader";
import { FilterBar } from "@/components/ui/FilterBar";
import { DataTable } from "@/components/ui/DataTable";
import { ActionButtons } from "@/components/ui/ActionButtons";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useInputMaterial } from "@/hooks/useInputMaterial";

function InsumosPage() {
  const navigate = useNavigate();
  const {
    inputMaterials,
    loading,
    error,
    fetchInputMaterials,
    deleteInputMaterial,
  } = useInputMaterial();

  useEffect(() => {
    fetchInputMaterials();
  }, [fetchInputMaterials]);

  const handleDelete = async (inputMaterialId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este insumo?")) {
      try {
        await deleteInputMaterial(inputMaterialId);
      } catch {
        // erro tratado pelo hook
      }
    }
  };

  const columns = [
    { key: "date", label: "DATA" },
    { key: "productId", label: "PRODUTO" },
    { key: "quantity", label: "QUANTIDADE" },
    { key: "unit", label: "UNIDADE" },
  ];

  const filters = [
    {
      key: "date",
      label: "Data",
      options: [
        { value: "today", label: "Hoje" },
        { value: "week", label: "Esta semana" },
        { value: "month", label: "Este mês" },
      ],
      placeholder: "Filtrar por data",
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
      onClick: () => {
        // TODO: Implementar ação de exclusão
      },
      variant: "danger" as const,
      icon: <FaTrash size={14} />,
    },
  ];

  if (loading) {
    return (
      <SideMenu title="INSUMOS">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-agro-600 mx-auto mb-4"></div>
            <p className="text-neutral-600">Carregando insumos...</p>
          </div>
        </div>
      </SideMenu>
    );
  }

  if (error) {
    return (
      <SideMenu title="INSUMOS">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-red-600 mb-4">
              Erro ao carregar insumos: {error}
            </p>
            <button
              onClick={() => fetchInputMaterials()}
              className="btn-primary"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </SideMenu>
    );
  }

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
          onFilterChange={() => {
            // TODO: Implementar filtros
          }}
        />

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Tabela */}
          <div className="flex-1">
            <DataTable
              columns={columns}
              data={inputMaterials.map((inputMaterial) => ({
                date: new Date(inputMaterial.date).toLocaleDateString("pt-BR"),
                productId: inputMaterial.productId,
                quantity: inputMaterial.quantityKg.amount,
                unit: inputMaterial.quantityKg.unit,
              }))}
              className="border-agro-200"
              actions={
                <div className="flex gap-2">
                  {inputMaterials.map((inputMaterial) => (
                    <div key={inputMaterial.id} className="flex gap-2">
                      <button
                        onClick={() =>
                          navigate(`/insumos/editar/${inputMaterial.id}`)
                        }
                        className="btn-primary p-1 rounded"
                        title="Editar"
                      >
                        <FaEdit size={12} />
                      </button>
                      <button
                        onClick={() => handleDelete(inputMaterial.id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-1 rounded"
                        title="Excluir"
                      >
                        <FaTrash size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              }
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
