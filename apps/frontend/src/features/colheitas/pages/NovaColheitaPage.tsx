import { SideMenu } from "@/components/layout/SideMenu";
import { FormField } from "@/components/ui/FormField";
import { PageHeader } from "@/components/ui/PageHeader";
import { FaLeaf, FaTimes } from "react-icons/fa";

function NovaColheitaPage() {
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
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data */}
            <FormField label="DATA" required>
              <input
                type="date"
                className="input-field"
                defaultValue={new Date().toISOString().split("T")[0]}
              />
            </FormField>

            {/* Produto */}
            <FormField label="PRODUTO" required>
              <select className="input-field">
                <option value="">Selecione um produto</option>
                <option value="soja">Soja Grão</option>
                <option value="milho">Milho Verde</option>
                <option value="feijao">Feijão Carioca</option>
                <option value="arroz">Arroz Branco</option>
                <option value="trigo">Trigo</option>
                <option value="cafe">Café Arábica</option>
                <option value="algodao">Algodão</option>
                <option value="cana">Cana-de-açúcar</option>
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
              />
            </FormField>

            {/* Unidade */}
            <FormField label="UNIDADE" required>
              <select className="input-field">
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
              <select className="input-field">
                <option value="">Selecione o ciclo</option>
                <option value="verao">Verão</option>
                <option value="inverno">Inverno</option>
                <option value="safrinha">Safrinha</option>
                <option value="perene">Perene</option>
              </select>
            </FormField>

            {/* UAP */}
            <FormField label="UAP" required>
              <select className="input-field">
                <option value="">Selecione a UAP</option>
                <option value="uap-001">UAP-001 - Seção Norte</option>
                <option value="uap-002">UAP-002 - Seção Sul</option>
                <option value="uap-003">UAP-003 - Seção Leste</option>
                <option value="uap-004">UAP-004 - Seção Oeste</option>
                <option value="uap-005">UAP-005 - Seção Central</option>
                <option value="uap-006">UAP-006 - Seção Nordeste</option>
              </select>
            </FormField>

            {/* Responsável */}
            <FormField label="RESPONSÁVEL" required>
              <input
                type="text"
                className="input-field"
                placeholder="Nome do responsável"
              />
            </FormField>

            {/* Equipamento */}
            <FormField label="EQUIPAMENTO" required>
              <select className="input-field">
                <option value="">Selecione o equipamento</option>
                <option value="colheitadeira">Colheitadeira</option>
                <option value="trator">Trator</option>
                <option value="manual">Manual</option>
                <option value="outro">Outro</option>
              </select>
            </FormField>

            {/* Observações */}
            <div className="md:col-span-2">
              <FormField label="OBSERVAÇÕES">
                <textarea
                  className="input-field"
                  rows={3}
                  placeholder="Informações adicionais sobre a colheita..."
                />
              </FormField>
            </div>

            {/* Action Buttons */}
            <div className="md:col-span-2 flex justify-center gap-4 pt-4">
              <button
                type="submit"
                className="btn-primary flex items-center gap-2"
              >
                <FaLeaf size={16} />
                REGISTRAR COLHEITA
              </button>
              <button
                type="button"
                className="btn-secondary flex items-center gap-2"
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
