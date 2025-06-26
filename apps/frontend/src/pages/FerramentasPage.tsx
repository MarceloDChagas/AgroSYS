import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SideMenu } from "../components/layout/SideMenu";
import { toolService, authService, type Tool } from "../services/api";
import { routes } from "../routes/routes";

function FerramentasPage() {
  const navigate = useNavigate();
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const canManageTools = authService.hasPermission("CREATE_TOOL");

  useEffect(() => {
    fetchTools();
  }, []);

  const fetchTools = async () => {
    try {
      setLoading(true);
      setError("");

      let toolsData: Tool[];
      if (filter) {
        toolsData = await toolService.getToolsByStatus(filter);
      } else {
        toolsData = await toolService.getAllTools();
      }

      setTools(toolsData);
    } catch (err) {
      setError("Erro ao carregar ferramentas");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = async (newFilter: string) => {
    setFilter(newFilter);
    try {
      setLoading(true);
      let toolsData: Tool[];
      if (newFilter) {
        toolsData = await toolService.getToolsByStatus(newFilter);
      } else {
        toolsData = await toolService.getAllTools();
      }
      setTools(toolsData);
    } catch (err) {
      console.error(err);
      setError("Erro ao filtrar ferramentas");
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <SideMenu title="FERRAMENTAS">
      <div className="flex justify-center items-center h-full w-full gap-6">
        {/* Área da tabela */}
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-4xl">
          {/* Filtros e botão de cadastrar */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <select
                value={filter}
                onChange={(e) => handleFilterChange(e.target.value)}
                className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="">Todos os status</option>
                <option value="DISPONIVEL">Disponível</option>
                <option value="EMPRESTADA">Emprestada</option>
                <option value="SOLICITADA">Solicitada</option>
                <option value="MANUTENCAO">Manutenção</option>
              </select>
              <button
                onClick={fetchTools}
                className="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
              >
                Atualizar
              </button>
            </div>

            {canManageTools && (
              <button
                onClick={() => navigate(routes.navigation.editarFerramenta)}
                className="bg-[#1b5e1f] text-white px-4 py-2 rounded hover:bg-green-800 transition"
              >
                Cadastrar Ferramenta
              </button>
            )}
          </div>

          {/* Tabela de ferramentas */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#1b5e1f]"></div>
                <p className="mt-2 text-gray-600">Carregando ferramentas...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-red-600">{error}</p>
                <button
                  onClick={fetchTools}
                  className="mt-2 px-4 py-2 bg-[#1b5e1f] text-white rounded hover:bg-green-800 transition"
                >
                  Tentar novamente
                </button>
              </div>
            ) : (
              <table className="min-w-full text-center border-collapse">
                <thead className="bg-[#eaf4e1] text-[#1b5e1f] font-bold">
                  <tr>
                    <th className="py-3 px-4 border">NOME</th>
                    <th className="py-3 px-4 border">STATUS</th>
                    <th className="py-3 px-4 border">RESPONSÁVEL</th>
                    {canManageTools && (
                      <th className="py-3 px-4 border">AÇÕES</th>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white text-[#1b5e1f]">
                  {tools.length === 0 ? (
                    <tr>
                      <td
                        colSpan={canManageTools ? 4 : 3}
                        className="py-8 text-gray-500"
                      >
                        Nenhuma ferramenta encontrada
                      </td>
                    </tr>
                  ) : (
                    tools.map((tool) => (
                      <tr key={tool.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 border font-medium">
                          {tool.toolName}
                        </td>
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
            )}
          </div>
        </div>

        {/* Área de AÇÕES */}
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md flex flex-col gap-3 h-fit w-48">
          <h3 className="text-[#1b5e1f] font-bold text-center mb-2">AÇÕES</h3>

          <button
            onClick={() => navigate(routes.navigation.solicitarFerramenta)}
            className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition"
          >
            SOLICITAR
          </button>

          <button
            onClick={() => navigate(routes.navigation.devolverFerramenta)}
            className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition"
          >
            DEVOLVER
          </button>

          {canManageTools && (
            <>
              <button
                onClick={() => navigate(routes.navigation.editarFerramenta)}
                className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition"
              >
                EDITAR
              </button>

              <button
                onClick={() => navigate(routes.navigation.excluirFerramenta)}
                className="bg-[#1b5e1f] text-white py-2 rounded hover:bg-green-800 transition"
              >
                EXCLUIR
              </button>
            </>
          )}
        </div>
      </div>
    </SideMenu>
  );
}

export default FerramentasPage;
