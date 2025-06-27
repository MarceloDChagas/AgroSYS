import { useNavigate } from "react-router-dom";
import { SideMenu } from "../components/layout/SideMenu";
import { FaUserCircle } from "react-icons/fa";

function PerfilAdminPage() {
  const navigate = useNavigate();

  return (
    <SideMenu title="PERFIL DO USUÁRIO">
      <div className="flex flex-col items-center w-full p-4 overflow-y-auto">
        <div className="flex justify-start w-full max-w-4xl mb-6">
          <h2 className="text-[#1b5e1f] font-bold text-xl">PERFIL DO USUÁRIO</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl items-start">
          {/* Formulário */}
          <div className="flex flex-col w-full md:w-3/4">
            <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full flex flex-col gap-6">
              {/* Botão Gerenciar */}
              <div className="w-full flex justify-end">
                <button
                  onClick={() => navigate("/perfil/lista")}
                  className="bg-[#1b5e1f] text-white px-3 py-1.5 rounded hover:bg-green-800 transition whitespace-nowrap text-sm"
                >
                  GERENCIAR USUÁRIOS
                </button>
              </div>

              {/* Avatar */}
              <div className="flex justify-center w-full mb-4">
                <FaUserCircle size={100} className="text-[#1b5e1f]" />
              </div>

              {/* Campos */}
              <div className="w-full space-y-4 text-[#1b5e1f]">
                <div>
                  <label className="block font-semibold mb-1">NOME</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">E-MAIL</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">TIPO DE USUÁRIO</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                    value="Admin"
                    disabled
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">PERMISSÕES</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                    placeholder="Ex: cadastrar, editar, excluir..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md flex flex-col gap-3 w-full md:w-1/4 h-fit">
            <h3 className="text-[#1b5e1f] font-bold text-center mb-2">AÇÕES</h3>
            <button className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition text-sm">
              EDITAR
            </button>
            <button className="bg-red-700 text-white py-2 rounded hover:bg-red-800 transition text-sm">
              EXCLUIR
            </button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default PerfilAdminPage;
