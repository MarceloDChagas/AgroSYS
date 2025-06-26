import { useNavigate } from "react-router-dom";
import { SideMenu } from "../components/layout/SideMenu";

function ListaUsuariosPage() {
  const navigate = useNavigate();

  return (
    <SideMenu title="PERFIL DO USUÁRIO">
      <div className="flex justify-center items-start h-full w-full gap-6">
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-5xl">
          <div className="flex justify-end mb-4">
          </div>

          <h2 className="text-[#1b5e1f] text-xl font-bold text-center mb-6">
            LISTA DE USUÁRIOS
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full text-center border-collapse">
              <thead className="bg-[#eaf4e1] text-[#1b5e1f] font-bold">
                <tr>
                  <th className="py-2 px-4 border">NOME</th>
                  <th className="py-2 px-4 border">E-MAIL</th>
                  <th className="py-2 px-4 border">TIPO</th>
                  <th className="py-2 px-4 border">PERMISSÕES</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#1b5e1f]">
                {[1, 2, 3].map((row) => (
                  <tr key={row}>
                    <td className="py-2 px-4 border">Usuário {row}</td>
                    <td className="py-2 px-4 border">user{row}@email.com</td>
                    <td className="py-2 px-4 border">Comum</td>
                    <td className="py-2 px-4 border">Cadastrar produtos</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md flex flex-col gap-3 h-fit w-48">
          <h3 className="text-[#1b5e1f] font-bold text-center mb-2">AÇÕES</h3>
          <button
            onClick={() => navigate("/perfil/editar")}
            className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition text-sm"
          >
            EDITAR PERMISSÃO
          </button>
          <button
            onClick={() => navigate("/perfil/cadastro")}
            className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition text-sm"
          >
            CADASTRAR
          </button>
          <button className="bg-red-700 text-white py-2 rounded hover:bg-red-800 transition text-sm">
            EXCLUIR
          </button>
        </div>
      </div>
    </SideMenu>
  );
}

export default ListaUsuariosPage;
