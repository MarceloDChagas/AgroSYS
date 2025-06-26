import { useNavigate } from "react-router-dom";
import { SideMenu } from "../components/layout/SideMenu";

function InsumosPage() {
  const navigate = useNavigate();

  return (
    <SideMenu title="INSUMOS E PRODUTOS">
      <div className="flex justify-center items-start h-full w-full gap-6">
        {/* Conteúdo principal */}
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-5xl">
          {/* Botão de cadastro */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => navigate("/insumos/cadastro")}
              className="bg-[#1b5e1f] text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Cadastrar novo produto/insumo
            </button>
          </div>

          {/* Filtros estilizados */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <label className="font-semibold text-[#1b5e1f]">Filtrar por:</label>
              <select className="p-2 border rounded-md bg-white text-[#1b5e1f] shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700">
                <option value="">Escolher</option>
                <option value="nome">Nome</option>
                <option value="tipo">Tipo</option>
              </select>
            </div>
          </div>

          {/* Tabela */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-center border-collapse">
              <thead className="bg-[#eaf4e1] text-[#1b5e1f] font-bold">
                <tr>
                  <th className="py-2 px-4 border">NOME</th>
                  <th className="py-2 px-4 border">TIPO</th>
                  <th className="py-2 px-4 border">QUANT.</th>
                  <th className="py-2 px-4 border">UNIDADE</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#1b5e1f]">
                {[1, 2, 3, 4, 5].map((row) => (
                  <tr key={row}>
                    <td className="py-2 px-4 border">Produto {row}</td>
                    <td className="py-2 px-4 border">Tipo {row}</td>
                    <td className="py-2 px-4 border">{row * 10}</td>
                    <td className="py-2 px-4 border">KG</td>
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
            onClick={() => navigate("/insumos/editar")}
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

export default InsumosPage;
