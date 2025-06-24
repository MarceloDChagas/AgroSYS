import { SideMenu } from "../components/layout/SideMenu";
import { useNavigate } from "react-router-dom";

function VendasPage() {
  const navigate = useNavigate();

  return (
    <SideMenu title="VENDAS">
      <div className="flex flex-col gap-4 items-center">
        {/* Filtros */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <select className="px-3 py-2 border rounded-md text-[#1b5e1f]">
            <option>Data</option>
          </select>
          <select className="px-3 py-2 border rounded-md text-[#1b5e1f]">
            <option>Cliente</option>
          </select>
          <select className="px-3 py-2 border rounded-md text-[#1b5e1f]">
            <option>Produto</option>
          </select>
          <button className="bg-[#1b5e1f] text-white px-4 py-2 rounded hover:bg-green-800 transition">
            FILTRAR
          </button>
        </div>

        {/* Tabela */}
        <div className="overflow-x-auto bg-[#f4f8ee] p-4 rounded-lg shadow w-full max-w-5xl">
          <table className="min-w-full text-center border-collapse">
            <thead className="bg-[#eaf4e1] text-[#1b5e1f] font-bold">
              <tr>
                <th className="py-2 px-4 border">N° VENDA</th>
                <th className="py-2 px-4 border">CLIENTE</th>
                <th className="py-2 px-4 border">PRODUTO</th>
                <th className="py-2 px-4 border">VALOR TOTAL</th>
                <th className="py-2 px-4 border">DATA</th>
              </tr>
            </thead>
            <tbody className="bg-white text-[#1b5e1f]">
              {[1, 2, 3].map((row) => (
                <tr key={row}>
                  <td className="py-2 px-4 border">000{row}</td>
                  <td className="py-2 px-4 border">Fulano</td>
                  <td className="py-2 px-4 border">Produto {row}</td>
                  <td className="py-2 px-4 border">R$ 100,00</td>
                  <td className="py-2 px-4 border">21/06/2025</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ações */}
        <div className="flex gap-3">
          <button onClick={() => navigate("/vendas/visualizar")} className="bg-[#1b5e1f] text-white py-2 px-4 rounded hover:bg-green-800 transition">VISUALIZAR</button>
          <button onClick={() => navigate("/vendas/nota")} className="bg-[#1b5e1f] text-white py-2 px-4 rounded hover:bg-green-800 transition">VER NOTA</button>
          <button className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 transition">EXCLUIR</button>
          <button onClick={() => navigate("/vendas/registrar")} className="bg-[#1b5e1f] text-white py-2 px-4 rounded hover:bg-green-800 transition ml-4">
            REGISTRAR VENDA
          </button>
        </div>
      </div>
    </SideMenu>
  );
}

export default VendasPage;
