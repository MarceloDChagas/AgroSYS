import { useParams, useNavigate } from "react-router-dom";
import { SideMenu } from "@/components/layout/SideMenu";
import { useInvoice } from "@/hooks/useInvoice";
import { FaFileInvoice, FaPlus } from "react-icons/fa";

function VisualizarNotaPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { invoices, loading, error } = useInvoice();

  // Find the specific invoice by ID or use the first one for demo
  const invoice = id ? invoices.find((inv) => inv.id === id) : invoices[0];

  if (loading) {
    return (
      <SideMenu title="VISUALIZAR NOTA FISCAL">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Carregando nota fiscal...</div>
        </div>
      </SideMenu>
    );
  }

  if (error) {
    return (
      <SideMenu title="VISUALIZAR NOTA FISCAL">
        <div className="flex justify-center items-center h-64">
          <div className="text-red-600 text-lg">Erro: {error}</div>
        </div>
      </SideMenu>
    );
  }

  if (!invoice) {
    return (
      <SideMenu title="VISUALIZAR NOTA FISCAL">
        <div className="flex flex-col items-center justify-center h-64">
          <FaFileInvoice size={64} className="text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Nenhuma nota fiscal encontrada
          </h3>
          <p className="text-gray-500 text-center mb-6 max-w-md">
            Não foi possível encontrar a nota fiscal solicitada ou não existem
            notas fiscais cadastradas.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/notas")}
              className="btn-secondary"
            >
              Voltar para Notas Fiscais
            </button>
            <button
              onClick={() => navigate("/notas/gerar")}
              className="btn-primary flex items-center gap-2"
            >
              <FaPlus size={14} />
              Criar Nota Fiscal
            </button>
          </div>
        </div>
      </SideMenu>
    );
  }

  return (
    <SideMenu title="VISUALIZAR NOTA FISCAL">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-4xl">
          <h2 className="text-[#1b5e1f] font-bold text-xl mb-6 text-center">
            NOTA FISCAL {invoice.invoiceNumber}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">DADOS DA NOTA</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Número:</strong> {invoice.invoiceNumber}
                </p>
                <p>
                  <strong>Data:</strong>{" "}
                  {new Date(invoice.issueDate).toLocaleDateString("pt-BR")}
                </p>
                <p>
                  <strong>Tipo:</strong>{" "}
                  {invoice.type === "SAIDA"
                    ? "Saída"
                    : invoice.type === "ENTRADA"
                    ? "Entrada"
                    : "Transferência"}
                </p>
                <p>
                  <strong>Status:</strong> {invoice.status}
                </p>
                {invoice.dueDate && (
                  <p>
                    <strong>Vencimento:</strong>{" "}
                    {new Date(invoice.dueDate).toLocaleDateString("pt-BR")}
                  </p>
                )}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                {invoice.type === "ENTRADA" ? "FORNECEDOR" : "CLIENTE"}
              </h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Nome:</strong>{" "}
                  {invoice.supplier || invoice.customer || "N/A"}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">ITENS</h3>
            {invoice.items && invoice.items.length > 0 ? (
              <table className="w-full border-collapse border">
                <thead className="bg-[#eaf4e1]">
                  <tr>
                    <th className="border p-2 text-left">Produto</th>
                    <th className="border p-2 text-center">Qtd</th>
                    <th className="border p-2 text-center">Unit.</th>
                    <th className="border p-2 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item, index) => (
                    <tr key={index}>
                      <td className="border p-2">{item.productName}</td>
                      <td className="border p-2 text-center">
                        {item.quantity} {item.unit}
                      </td>
                      <td className="border p-2 text-center">
                        R${" "}
                        {item.unitPrice.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                      <td className="border p-2 text-right">
                        R${" "}
                        {item.totalPrice.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-4 text-gray-500">
                Nenhum item cadastrado
              </div>
            )}
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">VALORES</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Valor Total:</strong> R${" "}
                {invoice.totalAmount.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
              {invoice.discount && (
                <p>
                  <strong>Desconto:</strong> R${" "}
                  {invoice.discount.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              )}
              {invoice.tax && (
                <p>
                  <strong>Impostos:</strong> R${" "}
                  {invoice.tax.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              )}
              <p className="font-semibold">
                <strong>Valor Final:</strong> R${" "}
                {invoice.finalAmount.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>

          {invoice.notes && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">OBSERVAÇÕES</h3>
              <p className="text-sm">{invoice.notes}</p>
            </div>
          )}

          <div className="flex justify-center gap-4">
            <button className="btn-primary">DOWNLOAD PDF</button>
            <button onClick={() => navigate("/notas")} className="btn-primary">
              VOLTAR
            </button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default VisualizarNotaPage;
