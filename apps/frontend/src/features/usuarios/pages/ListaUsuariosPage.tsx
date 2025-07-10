import { SideMenu } from "@/components/layout/SideMenu";
import { ActionButtons } from "@/components/ui/ActionButtons";
import { FaEdit, FaUserPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ListaUsuariosPage() {
  const navigate = useNavigate();

  const actions = [
    {
      label: "EDITAR PERMISSÃO",
      onClick: () => navigate("/perfil/editar"),
      variant: "primary" as const,
      icon: <FaEdit size={14} />,
    },
    {
      label: "CADASTRAR",
      onClick: () => navigate("/perfil/cadastro"),
      variant: "primary" as const,
      icon: <FaUserPlus size={14} />,
    },
    {
      label: "EXCLUIR",
      onClick: () => {},
      variant: "danger" as const,
      icon: <FaTrash size={14} />,
    },
  ];

  return (
    <SideMenu title="LISTA DE USUÁRIOS">
      <div className="flex justify-center items-center h-full w-full gap-6">
        {/* Área da tabela */}
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-4xl">
          <h2 className="text-[#1b5e1f] font-bold text-xl mb-4">
            Lista de Usuários
          </h2>
          <table className="min-w-full text-center border-collapse">
            <thead className="bg-[#eaf4e1] text-[#1b5e1f] font-bold">
              <tr>
                <th className="py-3 px-4 border">NOME</th>
                <th className="py-3 px-4 border">EMAIL</th>
                <th className="py-3 px-4 border">PERMISSÃO</th>
                <th className="py-3 px-4 border">STATUS</th>
              </tr>
            </thead>
            <tbody className="bg-white text-[#1b5e1f]">
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border">João Silva</td>
                <td className="py-3 px-4 border">joao@email.com</td>
                <td className="py-3 px-4 border">Administrador</td>
                <td className="py-3 px-4 border">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Ativo
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 border">Maria Santos</td>
                <td className="py-3 px-4 border">maria@email.com</td>
                <td className="py-3 px-4 border">Usuário</td>
                <td className="py-3 px-4 border">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Ativo
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ActionButtons
          actions={actions}
          title="AÇÕES"
          className="border-agro-200"
        />
      </div>
    </SideMenu>
  );
}

export default ListaUsuariosPage;
