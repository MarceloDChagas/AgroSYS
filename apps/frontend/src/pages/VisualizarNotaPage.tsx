import { SideMenu } from "../components/layout/SideMenu";

function VisualizarNotaPage() {
  return (
    <SideMenu title="NOTAS FISCAIS">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-white p-6 rounded shadow max-w-lg w-full">
          <h2 className="text-center font-bold mb-4">Nota Fiscal — Nº 000123</h2>
          <table className="w-full text-sm border">
            <tbody>
              <tr><td className="border px-2 py-1 font-bold">Número da Venda</td><td className="border px-2 py-1">000123</td></tr>
              <tr><td className="border px-2 py-1 font-bold">Cliente</td><td className="border px-2 py-1">Fulano</td></tr>
              <tr><td className="border px-2 py-1 font-bold">Produtos</td><td className="border px-2 py-1">Lista dos produtos</td></tr>
              <tr><td className="border px-2 py-1 font-bold">Valor Total</td><td className="border px-2 py-1">R$ 1.250,00</td></tr>
              <tr><td className="border px-2 py-1 font-bold">Data</td><td className="border px-2 py-1">21/06/2025</td></tr>
              <tr><td className="border px-2 py-1 font-bold">Observações</td><td className="border px-2 py-1">opcional</td></tr>
            </tbody>
          </table>
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-[#1b5e1f] text-white px-4 py-2 rounded">DOWNLOAD PDF</button>
            <button className="bg-[#1b5e1f] text-white px-4 py-2 rounded">VER NOTA</button>
            <button className="bg-[#1b5e1f] text-white px-4 py-2 rounded">SAIR</button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default VisualizarNotaPage;
