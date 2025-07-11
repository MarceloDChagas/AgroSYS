import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideMenu } from "@/components/layout/SideMenu";
import { FormField } from "@/components/ui/FormField";
import { PageHeader } from "@/components/ui/PageHeader";
import { FaWarehouse, FaTimes } from "react-icons/fa";
import { useUap } from "@/hooks/useUap";

function CadastroUapPage() {
  const navigate = useNavigate();
  const { createUap, loading, error } = useUap();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    area: "",
    cropType: "",
    responsible: "",
    observations: "",
  });
  return (
    <SideMenu title="CADASTRO DE UAP">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <PageHeader
          title="Nova UAP"
          subtitle="Cadastre uma nova unidade de produção"
        />

        {/* Form */}
        <div className="card p-8 border-agro-200">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                await createUap({
                  name: formData.name,
                  location: formData.location,
                  area: parseFloat(formData.area),
                  cropType: formData.cropType,
                  responsible: formData.responsible,
                  observations: formData.observations || undefined,
                });
                navigate("/UapPage");
              } catch {
                // erro tratado pelo hook
              }
            }}
          >
            {/* Nome */}
            <FormField label="NOME DA UAP" required>
              <input
                type="text"
                className="input-field"
                placeholder="Digite o nome da UAP"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </FormField>

            {/* Localização */}
            <FormField label="LOCALIZAÇÃO" required>
              <input
                type="text"
                className="input-field"
                placeholder="Endereço ou coordenadas"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </FormField>

            {/* Área */}
            <FormField label="ÁREA (HECTARES)" required>
              <input
                type="number"
                className="input-field"
                placeholder="0.00"
                min="0"
                step="0.01"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
              />
            </FormField>

            {/* Tipo de Cultivo */}
            <FormField label="TIPO DE CULTIVO" required>
              <select
                className="input-field"
                value={formData.cropType}
                onChange={(e) =>
                  setFormData({ ...formData, cropType: e.target.value })
                }
              >
                <option value="">Selecione o tipo</option>
                <option value="soja">Soja</option>
                <option value="milho">Milho</option>
                <option value="feijao">Feijão</option>
                <option value="arroz">Arroz</option>
                <option value="trigo">Trigo</option>
                <option value="cafe">Café</option>
                <option value="algodao">Algodão</option>
                <option value="cana">Cana-de-açúcar</option>
              </select>
            </FormField>

            {/* Responsável */}
            <FormField label="RESPONSÁVEL" required>
              <input
                type="text"
                className="input-field"
                placeholder="Nome do responsável"
                value={formData.responsible}
                onChange={(e) =>
                  setFormData({ ...formData, responsible: e.target.value })
                }
              />
            </FormField>

            {/* Observações */}
            <FormField label="OBSERVAÇÕES">
              <textarea
                className="input-field"
                rows={3}
                placeholder="Observações sobre a UAP..."
                value={formData.observations}
                onChange={(e) =>
                  setFormData({ ...formData, observations: e.target.value })
                }
              />
            </FormField>

            {/* Botões */}
            <div className="col-span-2 flex justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate("/UapPage")}
                className="btn-secondary flex items-center gap-2"
                disabled={loading}
              >
                <FaTimes size={14} />
                Cancelar
              </button>
              <button
                type="submit"
                className="btn-primary flex items-center gap-2"
                disabled={loading}
              >
                <FaWarehouse size={14} />
                {loading ? "Cadastrando..." : "Cadastrar UAP"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </SideMenu>
  );
}

export default CadastroUapPage;
