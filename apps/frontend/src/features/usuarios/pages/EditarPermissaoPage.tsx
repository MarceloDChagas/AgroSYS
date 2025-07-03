import { SideMenu } from "@/components/layout/SideMenu";

function EditarPermissaoPage() {
  return (
    <SideMenu title="EDITAR PERMISSÃO">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-2xl">
          <h2 className="text-[#1b5e1f] font-bold text-xl mb-6 text-center">
            EDITAR PERMISSÃO
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">USUÁRIO</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                value="João Silva"
                disabled
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">E-MAIL</label>
              <input
                type="email"
                className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                value="joao@email.com"
                disabled
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">TIPO ATUAL</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                value="Usuário"
                disabled
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">NOVO TIPO</label>
              <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700">
                <option value="">Selecione o novo tipo</option>
                <option value="admin">Administrador</option>
                <option value="user">Usuário</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">PERMISSÕES</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Cadastrar produtos
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Editar produtos
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Excluir produtos
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Gerenciar vendas
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Gerenciar usuários
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="btn-primary">SALVAR ALTERAÇÕES</button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default EditarPermissaoPage;
