import { SideMenu } from "../../../components/layout/SideMenu";
import { ActionButtons } from "../../../components/ui/ActionButtons";
import { FaEdit, FaTrash } from "react-icons/fa";

function PerfilAdminPage() {
  const actions = [
    {
      label: "EDITAR",
      onClick: () => {},
      variant: "primary" as const,
      icon: <FaEdit size={14} />,
    },
    {
      label: "EXCLUIR",
      onClick: () => {},
      variant: "danger" as const,
      icon: <FaTrash size={14} />,
    },
  ];

  return (
    <SideMenu title="PERFIL DO ADMINISTRADOR">
      <div className="flex justify-center items-start h-full w-full gap-6">
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-5xl">
          <div className="flex justify-end mb-4">
            <button className="bg-[#1b5e1f] text-white px-3 py-1.5 rounded hover:bg-green-800 transition whitespace-nowrap text-sm">
              EDITAR
            </button>
          </div>

          <h2 className="text-[#1b5e1f] text-xl font-bold text-center mb-6">
            PERFIL DO ADMINISTRADOR
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-1">NOME</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                value="Administrador"
                disabled
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">E-MAIL</label>
              <input
                type="email"
                className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                value="admin@email.com"
                disabled
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">TIPO</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                value="Administrador"
                disabled
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">PERMISSÕES</label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                value="Todas as permissões"
                disabled
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button className="btn-primary">EDITAR</button>
            <button className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition w-full sm:w-auto">
              EXCLUIR
            </button>
          </div>
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

export default PerfilAdminPage;
