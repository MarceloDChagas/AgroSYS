import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SideMenu } from "@/components/layout/SideMenu";
import { toolService } from "@/services/api";
import { routes } from "@/routes/routes";
import { FaTools, FaSave, FaArrowLeft } from "react-icons/fa";

interface CreateToolForm {
  toolName: string;
  status: string;
}

function CadastroFerramentaPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CreateToolForm>({
    toolName: "",
    status: "REQUESTED",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const toolNameOptions = [
    { value: "ENXADA", label: "Enxada" },
    { value: "PA", label: "Pá" },
    { value: "TRATOR", label: "Trator" },
  ];

  const statusOptions = [
    { value: "REQUESTED", label: "Solicitada" },
    { value: "LENDING", label: "Emprestada" },
    { value: "RETURNED", label: "Devolvida" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.toolName.trim()) {
      setError("Nome da ferramenta é obrigatório");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await toolService.createTool({
        toolName: formData.toolName,
        status: formData.status,
      });

      // Redirecionar para a lista de ferramentas após sucesso
      navigate(routes.navigation.ferramentas);
    } catch (error) {
      setError("Erro ao criar ferramenta. Tente novamente.");
      console.error("Erro ao criar ferramenta:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SideMenu title="CADASTRAR FERRAMENTA">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-8 rounded-2xl shadow-md w-full max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <FaTools className="text-[#1b5e1f] text-2xl" />
            <h1 className="text-2xl font-bold text-[#1b5e1f]">
              Cadastrar Nova Ferramenta
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome da Ferramenta */}
            <div>
              <label
                htmlFor="toolName"
                className="block text-sm font-medium text-[#1b5e1f] mb-2"
              >
                Nome da Ferramenta *
              </label>
              <select
                id="toolName"
                name="toolName"
                value={formData.toolName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b5e1f] focus:border-transparent"
                required
              >
                <option value="">Selecione uma ferramenta</option>
                {toolNameOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-[#1b5e1f] mb-2"
              >
                Status *
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b5e1f] focus:border-transparent"
                required
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mensagem de erro */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {/* Botões */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate(routes.navigation.ferramentas)}
                className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <FaArrowLeft size={14} />
                Voltar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-6 py-3 bg-[#1b5e1f] text-white rounded-lg hover:bg-[#134a19] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaSave size={14} />
                {loading ? "Salvando..." : "Salvar Ferramenta"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </SideMenu>
  );
}

export default CadastroFerramentaPage;
