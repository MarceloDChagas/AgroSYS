import { useNavigate } from "react-router-dom";
import { SideMenu } from "@/components/layout/SideMenu";
import { PageHeader } from "@/components/ui/PageHeader";
import { FormField } from "@/components/ui/FormField";
import { FaSave, FaArrowLeft } from "react-icons/fa";

function CadastroProdutoPage() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/produtos");
  };

  return (
    <SideMenu title="CADASTRO DE PRODUTO">
      <div className="space-y-6">
        {/* Header */}
        <PageHeader
          title="Cadastro de Produto"
          subtitle="Registre uma nova semente ou muda"
        >
          <button
            onClick={() => navigate("/produtos")}
            className="btn-secondary flex items-center gap-2"
          >
            <FaArrowLeft size={14} />
            Voltar
          </button>
        </PageHeader>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-soft border border-neutral-200 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Nome do Produto" required>
                <input
                  type="text"
                  placeholder="Ex: Semente de Soja RR Intacta"
                  className="form-input"
                  required
                />
              </FormField>

              <FormField label="Tipo" required>
                <select className="form-select" required>
                  <option value="">Selecione o tipo</option>
                  <option value="semente">Semente</option>
                  <option value="muda">Muda</option>
                </select>
              </FormField>

              <FormField label="Variedade" required>
                <input
                  type="text"
                  placeholder="Ex: BMX Potência RR"
                  className="form-input"
                  required
                />
              </FormField>

              <FormField label="Quantidade" required>
                <input
                  type="number"
                  placeholder="0"
                  className="form-input"
                  required
                />
              </FormField>

              <FormField label="Unidade" required>
                <select className="form-select" required>
                  <option value="">Selecione a unidade</option>
                  <option value="kg">KG</option>
                  <option value="unidade">UNIDADE</option>
                  <option value="saca">SACA</option>
                </select>
              </FormField>

              <FormField label="Safra" required>
                <select className="form-select" required>
                  <option value="">Selecione a safra</option>
                  <option value="2025-2026">2025/2026</option>
                  <option value="2024-2025">2024/2025</option>
                  <option value="2023-2024">2023/2024</option>
                </select>
              </FormField>

              <FormField label="Fornecedor" required>
                <input
                  type="text"
                  placeholder="Ex: Sementes Brasil Ltda"
                  className="form-input"
                  required
                />
              </FormField>

              <FormField label="Data de Validade" required>
                <input type="date" className="form-input" required />
              </FormField>

              <FormField label="Preço Unitário" required>
                <input
                  type="number"
                  placeholder="0,00"
                  step="0.01"
                  className="form-input"
                  required
                />
              </FormField>

              <FormField label="Local de Armazenamento" required>
                <input
                  type="text"
                  placeholder="Ex: Galpão 1 - Prateleira A"
                  className="form-input"
                  required
                />
              </FormField>
            </div>

            <div className="col-span-full">
              <FormField label="Observações">
                <textarea
                  placeholder="Informações adicionais sobre o produto..."
                  rows={3}
                  className="form-textarea"
                />
              </FormField>
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-neutral-200">
              <button
                type="button"
                onClick={() => navigate("/produtos")}
                className="btn-secondary"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn-primary flex items-center gap-2"
              >
                <FaSave size={14} />
                Cadastrar Produto
              </button>
            </div>
          </form>
        </div>
      </div>
    </SideMenu>
  );
}

export default CadastroProdutoPage;
