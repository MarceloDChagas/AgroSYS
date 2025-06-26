import { SideMenu } from "../components/layout/SideMenu";

function CadastroUsuarioPage() {
  return (
    <SideMenu title="CADASTRAR USUÁRIO">
      <div className="flex justify-center items-center w-full">
        <div className="bg-[#f4f8ee] p-8 rounded-2xl shadow-md w-full max-w-2xl">
          <h2 className="text-[#1b5e1f] text-xl font-bold mb-6 text-center">NOVO USUÁRIO</h2>

          <div className="space-y-5 text-[#1b5e1f]">
            <div>
              <label className="block font-semibold mb-1">NOME</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Nome completo"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">E-MAIL</label>
              <input
                type="email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="email@exemplo.com"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">TIPO DE USUÁRIO</label>
              <select className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-700">
                <option value="comum">Comum</option>
                <option value="admin">Admin</option>
              </select>
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

          <div className="flex justify-center mt-6">
            <button className="bg-[#1b5e1f] text-white px-6 py-2 rounded hover:bg-green-800 transition">
              CADASTRAR
            </button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default CadastroUsuarioPage;
