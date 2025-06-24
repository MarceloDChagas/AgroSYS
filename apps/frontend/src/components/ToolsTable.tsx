import { useNavigate } from "react-router-dom";
import { authService, type Tool } from "../services/api";
import { routes } from "../routes/routes";

interface ToolsTableProps {
  tools: Tool[];
  loading: boolean;
  error: string;
  onRefresh: () => void;
}

export function ToolsTable({
  tools,
  loading,
  error,
  onRefresh,
}: ToolsTableProps) {
  const navigate = useNavigate();
  const canManageTools = authService.hasPermission("CREATE_TOOL");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DISPONIVEL":
        return "text-green-600 bg-green-100";
      case "EMPRESTADA":
        return "text-red-600 bg-red-100";
      case "SOLICITADA":
        return "text-yellow-600 bg-yellow-100";
      case "MANUTENCAO":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "DISPONIVEL":
        return "Disponível";
      case "EMPRESTADA":
        return "Emprestada";
      case "SOLICITADA":
        return "Solicitada";
      case "MANUTENCAO":
        return "Manutenção";
      default:
        return status;
    }
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#1b5e1f]"></div>
        <p className="mt-2 text-gray-600">Carregando ferramentas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
        <button
          onClick={onRefresh}
          className="mt-2 px-4 py-2 bg-[#1b5e1f] text-white rounded hover:bg-green-800 transition"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <table className="min-w-full text-center border-collapse">
      <thead className="bg-[#eaf4e1] text-[#1b5e1f] font-bold">
        <tr>
          <th className="py-3 px-4 border">NOME</th>
          <th className="py-3 px-4 border">STATUS</th>
          <th className="py-3 px-4 border">RESPONSÁVEL</th>
          {canManageTools && <th className="py-3 px-4 border">AÇÕES</th>}
        </tr>
      </thead>
      <tbody className="bg-white text-[#1b5e1f]">
        {tools.length === 0 ? (
          <tr>
            <td colSpan={canManageTools ? 4 : 3} className="py-8 text-gray-500">
              Nenhuma ferramenta encontrada
            </td>
          </tr>
        ) : (
          tools.map((tool) => (
            <tr key={tool.id} className="hover:bg-gray-50">
              <td className="py-3 px-4 border font-medium">{tool.toolName}</td>
              <td className="py-3 px-4 border">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    tool.status
                  )}`}
                >
                  {getStatusText(tool.status)}
                </span>
              </td>
              <td className="py-3 px-4 border">
                {tool.responsiblePerson || "-"}
              </td>
              {canManageTools && (
                <td className="py-3 px-4 border">
                  <div className="flex gap-1 justify-center">
                    <button
                      onClick={() =>
                        navigate(
                          `${routes.navigation.editarFerramenta}?id=${tool.id}`
                        )
                      }
                      className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                      title="Editar ferramenta"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() =>
                        navigate(
                          `${routes.navigation.excluirFerramenta}?id=${tool.id}`
                        )
                      }
                      className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                      title="Excluir ferramenta"
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
