import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideMenu } from "@/components/layout/SideMenu";
import { FormField } from "@/components/ui/FormField";
import { PageHeader } from "@/components/ui/PageHeader";
import { FaFileInvoice, FaTimes } from "react-icons/fa";
import { useInvoice } from "@/hooks/useInvoice";
import type { CreateInvoiceRequest } from "@/types/invoice";

function GerarNotaPage() {
  const navigate = useNavigate();
  const { createInvoice, loading, error } = useInvoice();
  const [formData, setFormData] = useState<Partial<CreateInvoiceRequest>>({
    type: "SAIDA",
    issueDate: new Date().toISOString().split("T")[0],
    items: [],
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.type || !formData.items || formData.items.length === 0) {
      alert(
        "Por favor, preencha todos os campos obrigatórios e adicione pelo menos um item."
      );
      return;
    }

    try {
      await createInvoice(formData as CreateInvoiceRequest);
      navigate("/notas");
    } catch (error) {
      console.error("Erro ao criar nota fiscal:", error);
    }
  };

  const handleCancel = () => {
    navigate("/notas");
  };

  return (
    <SideMenu title="NOTAS FISCAIS">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <PageHeader
          title="Gerar Nota Fiscal"
          subtitle="Emissão de documentos fiscais"
        />

        {/* Form */}
        <form onSubmit={handleSubmit} className="card p-8 border-agro-200">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="TIPO DE NOTA" required>
              <select
                className="input-field"
                value={formData.type || ""}
                onChange={(e) => handleInputChange("type", e.target.value)}
              >
                <option value="">Selecione o tipo</option>
                <option value="SAIDA">Nota Fiscal de Saída</option>
                <option value="ENTRADA">Nota Fiscal de Entrada</option>
                <option value="TRANSFERENCIA">
                  Nota Fiscal de Transferência
                </option>
              </select>
            </FormField>

            <FormField label="CLIENTE/FORNECEDOR" required>
              <input
                className="input-field"
                type="text"
                placeholder="Nome do cliente ou fornecedor"
                value={formData.customer || formData.supplier || ""}
                onChange={(e) => {
                  if (formData.type === "ENTRADA") {
                    handleInputChange("supplier", e.target.value);
                  } else {
                    handleInputChange("customer", e.target.value);
                  }
                }}
              />
            </FormField>

            <FormField label="DATA DE EMISSÃO" required>
              <input
                className="input-field"
                type="date"
                value={formData.issueDate || ""}
                onChange={(e) => handleInputChange("issueDate", e.target.value)}
              />
            </FormField>

            <FormField label="DATA DE VENCIMENTO">
              <input
                className="input-field"
                type="date"
                value={formData.dueDate || ""}
                onChange={(e) => handleInputChange("dueDate", e.target.value)}
              />
            </FormField>

            <div className="md:col-span-2">
              <FormField label="OBSERVAÇÕES">
                <textarea
                  className="input-field"
                  rows={3}
                  placeholder="Informações adicionais sobre a operação..."
                  value={formData.notes || ""}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                />
              </FormField>
            </div>

            <div className="md:col-span-2">
              <div className="border border-agro-200 rounded-lg p-4">
                <h3 className="font-semibold text-agro-700 mb-4">
                  ITENS DA NOTA FISCAL
                </h3>
                <div className="text-sm text-agro-600">
                  <p>
                    Para adicionar itens, você precisará implementar a
                    funcionalidade de gerenciamento de itens.
                  </p>
                  <p className="mt-2">
                    Por enquanto, a nota será criada com uma lista vazia de
                    itens.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex items-center gap-2 disabled:opacity-50"
            >
              <FaFileInvoice size={16} />
              {loading ? "GERANDO..." : "GERAR NOTA"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="btn-secondary flex items-center gap-2"
            >
              <FaTimes size={16} />
              CANCELAR
            </button>
          </div>
        </form>
      </div>
    </SideMenu>
  );
}

export default GerarNotaPage;
