import { useEffect, useState } from 'react';
import { SideMenu } from '../components/layout/SideMenu';
import { routes } from '../routes/routes';

interface Tool {
  id: string;
  name: string;
  type: string;
  status: string;
}

export function FerramentasPage() {
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    fetch(routes.tools)
      .then((res) => res.json())
      .then((data) => setTools(data))
      .catch(() => setTools([]));
  }, []);

  return (
    <SideMenu title="FERRAMENTAS">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-8 rounded-2xl shadow-md w-full max-w-4xl">
          {/* Botão para registrar nova ferramenta */}
          <div className="flex justify-end mb-4">
            <button className="bg-[#1b5e1f] text-white px-4 py-2 rounded hover:bg-green-800 transition">
              Registrar Nova Ferramenta
            </button>
          </div>

          {/* Tabela de ferramentas */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-center border-collapse">
              <thead className="bg-[#eaf4e1] text-[#1b5e1f] font-bold">
                <tr>
                  <th className="py-2 px-4 border">NOME</th>
                  <th className="py-2 px-4 border">TIPO</th>
                  <th className="py-2 px-4 border">STATUS</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#1b5e1f]">
                {tools.length > 0 ? (
                  tools.map((tool) => (
                    <tr key={tool.id}>
                      <td className="py-2 px-4 border">{tool.name}</td>
                      <td className="py-2 px-4 border">{tool.type}</td>
                      <td className="py-2 px-4 border">{tool.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-2 px-4 border text-gray-400">
                      Nenhuma ferramenta encontrada
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Botões de ação */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-[#1b5e1f] text-white px-6 py-2 rounded hover:bg-green-800 transition">
              EDITAR
            </button>
            <button className="bg-[#1b5e1f] text-white px-6 py-2 rounded hover:bg-green-800 transition">
              EXCLUIR
            </button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}
