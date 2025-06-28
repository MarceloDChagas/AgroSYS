import { SideMenu } from "../components/layout/SideMenu";

function VisualizarNotaPage() {
  return (
    <SideMenu title="VISUALIZAR NOTA FISCAL">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-4xl">
          <h2 className="text-[#1b5e1f] font-bold text-xl mb-6 text-center">
            NOTA FISCAL NF-2024-001
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">DADOS DA NOTA</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Número:</strong> NF-2024-001
                </p>
                <p>
                  <strong>Data:</strong> 15/01/2024
                </p>
                <p>
                  <strong>Tipo:</strong> Entrada
                </p>
                <p>
                  <strong>Status:</strong> Aprovada
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">FORNECEDOR</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Nome:</strong> Agropecuária Santa Maria Ltda
                </p>
                <p>
                  <strong>CNPJ:</strong> 12.345.678/0001-90
                </p>
                <p>
                  <strong>Endereço:</strong> Rua das Flores, 123
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">ITENS</h3>
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
                <tr>
                  <td className="border p-2">Fertilizante NPK 10-10-10</td>
                  <td className="border p-2 text-center">50 kg</td>
                  <td className="border p-2 text-center">R$ 2,50</td>
                  <td className="border p-2 text-right">R$ 125,00</td>
                </tr>
                <tr>
                  <td className="border p-2">Ração para Gado</td>
                  <td className="border p-2 text-center">1000 kg</td>
                  <td className="border p-2 text-center">R$ 1,80</td>
                  <td className="border p-2 text-right">R$ 1.800,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center gap-4">
            <button className="btn-primary">DOWNLOAD PDF</button>
            <button className="btn-primary">VER NOTA</button>
            <button className="btn-secondary">SAIR</button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default VisualizarNotaPage;
