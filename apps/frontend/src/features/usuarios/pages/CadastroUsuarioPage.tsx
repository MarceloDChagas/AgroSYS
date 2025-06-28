import { SideMenu } from "../components/layout/SideMenu";

function CadastroUsuarioPage() {
  return (
    <SideMenu title="CADASTRO DE USUÁRIO">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-2xl">
          <h2 className="text-[#1b5e1f] font-bold text-xl mb-6 text-center">
            CADASTRO DE USUÁRIO
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">NOME</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Digite o nome completo"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">E-MAIL</label>
              <input
                type="email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Digite o e-mail"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">SENHA</label>
              <input
                type="password"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Digite a senha"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                TIPO DE USUÁRIO
              </label>
              <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700">
                <option value="">Selecione o tipo</option>
                <option value="admin">Administrador</option>
                <option value="user">Usuário</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="btn-primary">CADASTRAR</button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default CadastroUsuarioPage;
