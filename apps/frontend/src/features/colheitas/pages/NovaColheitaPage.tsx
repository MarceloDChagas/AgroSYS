import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideMenu } from "@/components/layout/SideMenu";
import { FormField } from "@/components/ui/FormField";
import { PageHeader } from "@/components/ui/PageHeader";
import { FaLeaf, FaTimes } from "react-icons/fa";
import { useHarvest } from "@/hooks/useHarvest";

function NovaColheitaPage() {
  const navigate = useNavigate();
  const { createHarvest, loading, error } = useHarvest();
  const [formData, setFormData] = useState({
    harvestDate: new Date().toISOString().split("T")[0],
    product: "",
    quantity: "",
    unit: "",
    uap: "",
    responsible: "",
    cycle: "",
    status: "SCHEDULED",
    equipment: "",
    observations: "",
  });
  return (
    <SideMenu title="COLHEITA">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <PageHeader
          title="Nova Colheita"
          subtitle="Registre uma nova colheita"
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
                await createHarvest({
                  harvestDate: formData.harvestDate,
                  product: formData.product,
                  quantity: parseFloat(formData.quantity),
                  unit: formData.unit,
                  uap: formData.uap,
                  responsible: formData.responsible,
                  cycle: formData.cycle,
                  status: formData.status,
                  equipment: formData.equipment || undefined,
                  observations: formData.observations || undefined,
                });
                navigate("/colheita");
              } catch {
                // erro tratado pelo hook
              }
            }}
          >
            {/* Data */}
            <FormField label="DATA" required>
              <input
                type="date"
                className="input-field"
                value={formData.harvestDate}
                onChange={(e) =>
                  setFormData({ ...formData, harvestDate: e.target.value })
                }
              />
            </FormField>

            {/* Produto */}
            <FormField label="PRODUTO" required>
              <select
                className="input-field"
                value={formData.product}
                onChange={(e) =>
                  setFormData({ ...formData, product: e.target.value })
                }
              >
                <option value="">Selecione um produto</option>
                <option value="Soja Grão">Soja Grão</option>
                <option value="Milho Verde">Milho Verde</option>
                <option value="Feijão Carioca">Feijão Carioca</option>
                <option value="Arroz Branco">Arroz Branco</option>
                <option value="Trigo">Trigo</option>
                <option value="Café Arábica">Café Arábica</option>
                <option value="Algodão">Algodão</option>
                <option value="Cana-de-açúcar">Cana-de-açúcar</option>
              </select>
            </FormField>

            {/* Quantidade */}
            <FormField label="QUANTIDADE" required>
              <input
                type="number"
                className="input-field"
                placeholder="0"
                min="0"
                step="0.01"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: e.target.value })
                }
              />
            </FormField>

            {/* Unidade */}
            <FormField label="UNIDADE" required>
              <select
                className="input-field"
                value={formData.unit}
                onChange={(e) =>
                  setFormData({ ...formData, unit: e.target.value })
                }
              >
                <option value="">Selecione a unidade</option>
                <option value="kg">Quilogramas (kg)</option>
                <option value="ton">Toneladas (ton)</option>
                <option value="saca">Sacas (60kg)</option>
                <option value="litro">Litros (L)</option>
                <option value="metro">Metros Cúbicos (m³)</option>
              </select>
            </FormField>

            {/* Ciclo */}
            <FormField label="CICLO" required>
              <select
                className="input-field"
                value={formData.cycle}
                onChange={(e) =>
                  setFormData({ ...formData, cycle: e.target.value })
                }
              >
                <option value="">Selecione o ciclo</option>
                <option value="Verão">Verão</option>
                <option value="Inverno">Inverno</option>
                <option value="Safrinha">Safrinha</option>
                <option value="Perene">Perene</option>
              </select>
            </FormField>

            {/* UAP */}
            <FormField label="UAP" required>
              <select
                className="input-field"
                value={formData.uap}
                onChange={(e) =>
                  setFormData({ ...formData, uap: e.target.value })
                }
              >
                <option value="">Selecione a UAP</option>
                <option value="UAP-001">UAP-001 - Seção Norte</option>
                <option value="UAP-002">UAP-002 - Seção Sul</option>
                <option value="UAP-003">UAP-003 - Seção Leste</option>
                <option value="UAP-004">UAP-004 - Seção Oeste</option>
                <option value="UAP-005">UAP-005 - Seção Central</option>
                <option value="UAP-006">UAP-006 - Seção Nordeste</option>
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

            {/* Equipamento */}
            <FormField label="EQUIPAMENTO" required>
              <select
                className="input-field"
                value={formData.equipment}
                onChange={(e) =>
                  setFormData({ ...formData, equipment: e.target.value })
                }
              >
                <option value="">Selecione o equipamento</option>
                <option value="Colheitadeira">Colheitadeira</option>
                <option value="Trator">Trator</option>
                <option value="Manual">Manual</option>
                <option value="Outro">Outro</option>
              </select>
            </FormField>

            {/* Observações */}
            <div className="md:col-span-2">
              <FormField label="OBSERVAÇÕES">
                <textarea
                  className="input-field"
                  rows={3}
                  placeholder="Informações adicionais sobre a colheita..."
                  value={formData.observations}
                  onChange={(e) =>
                    setFormData({ ...formData, observations: e.target.value })
                  }
                />
              </FormField>
            </div>

            {/* Action Buttons */}
            <div className="md:col-span-2 flex justify-center gap-4 pt-4">
              <button
                type="submit"
                className="btn-primary flex items-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    REGISTRANDO...
                  </>
                ) : (
                  <>
                    <FaLeaf size={16} />
                    REGISTRAR COLHEITA
                  </>
                )}
              </button>
              <button
                type="button"
                className="btn-secondary flex items-center gap-2"
                onClick={() => navigate("/colheita")}
              >
                <FaTimes size={16} />
                CANCELAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </SideMenu>
  );
}

export default NovaColheitaPage;
