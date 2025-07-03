import { SideMenu } from "@/components/layout/SideMenu";
import { FormField } from "@/components/ui/FormField";
import { PageHeader } from "@/components/ui/PageHeader";
import { FaFileInvoice, FaTimes } from "react-icons/fa";

function GerarNotaPage() {
  return (
    <SideMenu title="NOTAS FISCAIS">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <PageHeader
          title="Gerar Nota Fiscal"
          subtitle="Emissão de documentos fiscais"
        />

        {/* Form */}
        <div className="card p-8 border-agro-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="TIPO DE NOTA" required>
              <select className="input-field">
                <option value="">Selecione o tipo</option>
                <option value="NF">Nota Fiscal (NF)</option>
                <option value="NFS-e">
                  Nota Fiscal de Serviços Eletrônica (NFS-e)
                </option>
                <option value="NFA-e">
                  Nota Fiscal Avulsa Eletrônica (NFA-e)
                </option>
              </select>
            </FormField>

            <FormField label="DESTINO" required>
              <select className="input-field">
                <option value="">Selecione o destino</option>
                <option value="consumidor">Consumidor Final</option>
                <option value="revenda">Revenda</option>
                <option value="industria">Indústria</option>
                <option value="cooperativa">Cooperativa</option>
                <option value="exportacao">Exportação</option>
              </select>
            </FormField>

            <FormField label="VALOR TOTAL" required>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
                  R$
                </span>
                <input
                  className="input-field pl-10"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0,00"
                />
              </div>
            </FormField>

            <FormField label="DATA DE EMISSÃO" required>
              <input
                className="input-field"
                type="date"
                defaultValue={new Date().toISOString().split("T")[0]}
              />
            </FormField>

            <FormField label="NATUREZA DA OPERAÇÃO" required>
              <select className="input-field">
                <option value="">Selecione a natureza</option>
                <option value="venda">Venda</option>
                <option value="transferencia">Transferência</option>
                <option value="devolucao">Devolução</option>
                <option value="remessa">Remessa</option>
                <option value="consignacao">Consignação</option>
              </select>
            </FormField>

            <FormField label="FORMA DE PAGAMENTO" required>
              <select className="input-field">
                <option value="">Selecione a forma</option>
                <option value="dinheiro">Dinheiro</option>
                <option value="cheque">Cheque</option>
                <option value="cartao">Cartão de Crédito/Débito</option>
                <option value="boleto">Boleto Bancário</option>
                <option value="pix">PIX</option>
                <option value="transferencia">Transferência Bancária</option>
              </select>
            </FormField>

            <div className="md:col-span-2">
              <FormField label="OBSERVAÇÕES">
                <textarea
                  className="input-field"
                  rows={3}
                  placeholder="Informações adicionais sobre a operação..."
                />
              </FormField>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="btn-primary flex items-center gap-2">
              <FaFileInvoice size={16} />
              GERAR NOTA
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <FaTimes size={16} />
              CANCELAR
            </button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default GerarNotaPage;
