import { SideMenu } from "../components/layout/SideMenu";
import { FaUserCircle } from "react-icons/fa";

function PerfilPage() {
  return (
    <SideMenu title="PERFIL DO USUÁRIO">
      <div className="flex flex-col items-center w-full p-4 overflow-y-auto">
        {/* Título da página */}
        <div className="flex justify-start w-full max-w-xl mb-6">
          <h2 className="text-[#1b5e1f] font-bold text-xl">PERFIL DO USUÁRIO</h2>
        </div>

        {/* Formulário de perfil */}
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-xl flex flex-col gap-6">
          <div className="flex justify-center w-full mb-4">
            <FaUserCircle size={100} className="text-[#1b5e1f]" />
          </div>

          <div className="space-y-4 text-[#1b5e1f]">
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
                value="Comum"
                disabled
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">PERMISSÕES</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                value="Cadastrar produtos, vendas etc"
                disabled
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button className="bg-[#1b5e1f] text-white px-6 py-2 rounded hover:bg-green-800 transition w-full sm:w-auto">
              EDITAR
            </button>
            <button className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition w-full sm:w-auto">
              EXCLUIR
            </button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default PerfilPage;
