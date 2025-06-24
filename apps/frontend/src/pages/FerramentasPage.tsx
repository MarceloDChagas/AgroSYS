import { useNavigate } from "react-router-dom";
import { SideMenu } from "../components/layout/SideMenu";

function FerramentasPage() {
  const navigate = useNavigate();

  return (
    <SideMenu title="FERRAMENTAS">
      <div className="flex justify-center items-center h-full w-full gap-6">
        {/* Área da tabela */}
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-4xl">
          {/* Botão de cadastrar ferramenta */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => navigate("/ferramentas/editar")}
              className="bg-[#1b5e1f] text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Cadastrar Ferramenta
            </button>
          </div>

          {/* Tabela de ferramentas */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-center border-collapse">
              <thead className="bg-[#eaf4e1] text-[#1b5e1f] font-bold">
                <tr>
                  <th className="py-2 px-4 border">NOME</th>
                  <th className="py-2 px-4 border">STATUS</th>
                  <th className="py-2 px-4 border">RESPONSÁVEL</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#1b5e1f]">
                {[1, 2, 3, 4].map((row) => (
                  <tr key={row}>
                    <td className="py-2 px-4 border">célula 1</td>
                    <td className="py-2 px-4 border">célula 1</td>
                    <td className="py-2 px-4 border">célula 1</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Área de AÇÕES */}
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md flex flex-col gap-3 h-fit w-48">
          <h3 className="text-[#1b5e1f] font-bold text-center mb-2">AÇÕES</h3>
          <button
            onClick={() => navigate("/ferramentas/solicitar")}
            className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition"
          >
            SOLICITAR
          </button>
          <button
            onClick={() => navigate("/ferramentas/devolver")}
            className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition"
          >
            DEVOLVER
          </button>
          <button
            onClick={() => navigate("/ferramentas/editar")}
            className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition"
          >
            EDITAR
          </button>
          <button
            onClick={() => navigate("/ferramentas/excluir")}
            className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition"
          >
            EXCLUIR
          </button>
        </div>
      </div>
    </SideMenu>
  );
}

export default FerramentasPage;
