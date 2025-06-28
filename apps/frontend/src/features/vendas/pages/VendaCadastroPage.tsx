import { SideMenu } from "../components/layout/SideMenu";
import { FormField } from "../components/ui/FormField";
import { PageHeader } from "../components/ui/PageHeader";
import {
  FaSave,
  FaTimes,
  FaUser,
  FaBox,
  FaCalendar,
  FaDollarSign,
} from "react-icons/fa";

function VendaCadastroPage() {
  return (
    <SideMenu title="Vendas">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <PageHeader
          title="Nova Venda"
          subtitle="Preencha os dados para registrar uma nova venda"
        />

        {/* Form */}
        <div className="card p-8 border-agro-200">
          <form className="space-y-6">
            {/* Customer and Product Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Cliente" required>
                <div className="relative">
                  <FaUser
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agro-500"
                    size={14}
                  />
                  <input
                    className="input-field pl-10"
                    placeholder="Buscar cliente..."
                  />
                </div>
              </FormField>

              <FormField label="Produto" required>
                <div className="relative">
                  <FaBox
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agro-500"
                    size={14}
                  />
                  <select className="input-field pl-10">
                    <option value="">Selecionar produto...</option>
                    <option value="soja">Soja Grão</option>
                    <option value="milho">Milho Verde</option>
                    <option value="feijao">Feijão Carioca</option>
                    <option value="arroz">Arroz Branco</option>
                    <option value="trigo">Trigo</option>
                    <option value="cafe">Café Arábica</option>
                    <option value="algodao">Algodão</option>
                    <option value="cana">Cana-de-açúcar</option>
                  </select>
                </div>
              </FormField>
            </div>

            {/* Quantity and Date Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Quantidade" required>
                <div className="relative">
                  <input
                    className="input-field pr-12"
                    type="number"
                    placeholder="0"
                    min="0"
                    step="0.01"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-neutral-400 text-sm">kg</span>
                  </div>
                </div>
              </FormField>

              <FormField label="Data da Venda" required>
                <div className="relative">
                  <FaCalendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agro-500"
                    size={14}
                  />
                  <input
                    className="input-field pl-10"
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </FormField>
            </div>

            {/* Price Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Preço Unitário" required>
                <div className="relative">
                  <FaDollarSign
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agro-500"
                    size={14}
                  />
                  <input
                    className="input-field pl-10"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0,00"
                  />
                </div>
              </FormField>

              <FormField label="Valor Total" required>
                <div className="relative">
                  <FaDollarSign
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agro-500"
                    size={14}
                  />
                  <input
                    className="input-field pl-10 bg-neutral-50"
                    type="text"
                    placeholder="Calculado automaticamente"
                    readOnly
                  />
                </div>
              </FormField>
            </div>

            {/* Payment and Delivery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Forma de Pagamento" required>
                <select className="input-field">
                  <option value="">Selecione a forma de pagamento</option>
                  <option value="dinheiro">Dinheiro</option>
                  <option value="cheque">Cheque</option>
                  <option value="cartao">Cartão de Crédito/Débito</option>
                  <option value="boleto">Boleto Bancário</option>
                  <option value="pix">PIX</option>
                  <option value="transferencia">Transferência Bancária</option>
                </select>
              </FormField>

              <FormField label="Condição de Entrega" required>
                <select className="input-field">
                  <option value="">Selecione a condição</option>
                  <option value="imediata">Entrega Imediata</option>
                  <option value="agendada">Entrega Agendada</option>
                  <option value="retirada">Retirada no Local</option>
                  <option value="transporte">Transporte Incluso</option>
                </select>
              </FormField>
            </div>

            {/* Observations */}
            <FormField label="Observações">
              <textarea
                className="input-field"
                rows={3}
                placeholder="Informações adicionais sobre a venda..."
              />
            </FormField>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 pt-4">
              <button
                type="submit"
                className="btn-primary flex items-center gap-2"
              >
                <FaSave size={16} />
                SALVAR VENDA
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

        {/* Help Section */}
        <div className="card p-6 bg-blue-50 border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            💡 Dicas para uma venda eficiente
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Verifique se o cliente está cadastrado no sistema</li>
            <li>• Confirme a disponibilidade do produto em estoque</li>
            <li>• Revise os valores antes de finalizar a venda</li>
            <li>• Adicione observações relevantes para o controle</li>
          </ul>
        </div>
      </div>
    </SideMenu>
  );
}

export default VendaCadastroPage;
