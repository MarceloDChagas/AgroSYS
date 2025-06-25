import { useNavigate } from "react-router-dom";
import { SideMenu } from "../components/layout/SideMenu";

function UapPage() {
  const navigate = useNavigate();

  return (
    <SideMenu title="UNIDADES DE PRODUÇÃO">
      <div className="flex justify-center items-start h-full w-full gap-6">
        {/* Tabela */}
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-5xl">
          {/* Botão cadastrar */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => navigate("/uap/cadastro")}
              className="bg-[#1b5e1f] text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Cadastrar nova UAP
            </button>
          </div>

          {/* Filtros Estilizados */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4 text-sm">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <label className="font-semibold text-[#1b5e1f]">Filtrar por:</label>
              <select className="p-2 border rounded-md bg-white text-[#1b5e1f] shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700">
                <option value="">Escolher</option>
                <option value="data">Data</option>
                <option value="cliente">Cliente</option>
                <option value="produto">Produto</option>
              </select>
            </div>
            
          </div>

          {/* Tabela */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-center border-collapse">
              <thead className="bg-[#eaf4e1] text-[#1b5e1f] font-bold">
                <tr>
                  <th className="py-2 px-4 border">UAP</th>
                  <th className="py-2 px-4 border">SEÇÃO</th>
                  <th className="py-2 px-4 border">ÁREA</th>
                  <th className="py-2 px-4 border">RESPONSÁVEL</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#1b5e1f]">
                {[1, 2, 3, 4].map((row) => (
                  <tr key={row}>
                    <td className="py-2 px-4 border">UAP {row}</td>
                    <td className="py-2 px-4 border">Seção {row}</td>
                    <td className="py-2 px-4 border">{row * 10} ha</td>
                    <td className="py-2 px-4 border">Responsável {row}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ações */}
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md flex flex-col gap-3 h-fit w-48">
          <h3 className="text-[#1b5e1f] font-bold text-center mb-2">AÇÕES</h3>
          <button
            onClick={() => navigate("/uap/editar")}
            className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition"
          >
            EDITAR
          </button>
          <button className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition">
            EXCLUIR
          </button>
        </div>
      </div>
    </SideMenu>
  );
}

export default UapPage;
