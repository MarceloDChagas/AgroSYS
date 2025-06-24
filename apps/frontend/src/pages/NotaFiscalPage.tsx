import { SideMenu } from "../components/layout/SideMenu";

function NotaFiscalPage() {
  return (
    <SideMenu title="VENDAS">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md text-[#1b5e1f]">
          <h3 className="text-center font-bold text-lg mb-4">Nota Fiscal — Nº 000123</h3>
          <table className="w-full text-left">
            <tbody>
              <tr>
                <td className="font-bold">Número da Venda:</td>
                <td>000123</td>
              </tr>
              <tr>
                <td className="font-bold">Cliente:</td>
                <td>Fulano</td>
              </tr>
              <tr>
                <td className="font-bold">Produto:</td>
                <td>Lista dos produtos</td>
              </tr>
              <tr>
                <td className="font-bold">Valor Total:</td>
                <td>R$ 1.500,00</td>
              </tr>
              <tr>
                <td className="font-bold">Data:</td>
                <td>21/06/2025</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4">
            <label className="font-bold block mb-1">Observações:</label>
            <textarea className="w-full border px-2 py-1 rounded" placeholder="opcional" rows={3} />
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="bg-[#1b5e1f] text-white px-6 py-2 rounded hover:bg-green-800 transition">DOWNLOAD PDF</button>
          <button className="bg-[#1b5e1f] text-white px-6 py-2 rounded hover:bg-green-800 transition">VER NOTA</button>
          <button className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-600 transition">SAIR</button>
        </div>
      </div>
    </SideMenu>
  );
}

export default NotaFiscalPage;
