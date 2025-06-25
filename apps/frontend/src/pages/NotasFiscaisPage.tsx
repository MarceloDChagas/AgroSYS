import { useNavigate } from "react-router-dom";
import { SideMenu } from "../components/layout/SideMenu";

function NotasFiscaisPage() {
  const navigate = useNavigate();

  return (
    <SideMenu title="NOTAS FISCAIS">
      <div className="flex justify-center items-start h-full w-full gap-6">
        {/* Tabela de Notas */}
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-5xl">
          {/* Filtros e botão */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <select className="border rounded px-2 py-1">
                <option>Data</option>
              </select>
              <select className="border rounded px-2 py-1">
                <option>Tipo</option>
              </select>
              <select className="border rounded px-2 py-1">
                <option>Destino</option>
              </select>
            </div>
            <button
              onClick={() => navigate("/notas/gerar")}
              className="bg-[#1b5e1f] text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              GERAR NOTA FISCAL
            </button>
          </div>

          {/* Tabela */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-center border-collapse">
              <thead className="bg-[#eaf4e1] text-[#1b5e1f] font-bold">
                <tr>
                  <th className="py-2 px-4 border">Nº NOTA</th>
                  <th className="py-2 px-4 border">TIPO</th>
                  <th className="py-2 px-4 border">DESTINO</th>
                  <th className="py-2 px-4 border">VALOR TOTAL</th>
                  <th className="py-2 px-4 border">DATA</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#1b5e1f]">
                {[1, 2, 3].map((row) => (
                  <tr key={row}>
                    <td className="py-2 px-4 border">00012{row}</td>
                    <td className="py-2 px-4 border">NF-e</td>
                    <td className="py-2 px-4 border">Agroindústria</td>
                    <td className="py-2 px-4 border">R$ 1.250,00</td>
                    <td className="py-2 px-4 border">21/06/2025</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AÇÕES */}
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md flex flex-col gap-3 h-fit w-48">
          <h3 className="text-[#1b5e1f] font-bold text-center mb-2">AÇÕES</h3>
          <button
            onClick={() => navigate("/notas/visualizar")}
            className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition"
          >
            VISUALIZAR
          </button>
          <button className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition">
            DOWNLOAD
          </button>
          <button className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition">
            EXCLUIR
          </button>
        </div>
      </div>
    </SideMenu>
  );
}

export default NotasFiscaisPage;