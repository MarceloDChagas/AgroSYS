import { SideMenu } from '../components/layout/SideMenu';

export function ColheitaPage() {
  return (
    <SideMenu title="COLHEITA">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-8 rounded-2xl shadow-md w-full max-w-4xl">
          {/* Botão para registrar nova colheita */}
          <div className="flex justify-end mb-4">
            <button className="bg-[#1b5e1f] text-white px-4 py-2 rounded hover:bg-green-800 transition">
              Registrar Nova Colheita
            </button>
          </div>

          {/* Tabela de colheitas */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-center border-collapse">
              <thead className="bg-[#eaf4e1] text-[#1b5e1f] font-bold">
                <tr>
                  <th className="py-2 px-4 border">DATA</th>
                  <th className="py-2 px-4 border">PRODUTO</th>
                  <th className="py-2 px-4 border">CICLO</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#1b5e1f]">
                {[1, 2, 3, 4].map((row: number) => (
                  <tr key={row}>
                    <td className="py-2 px-4 border">célula 1</td>
                    <td className="py-2 px-4 border">célula 1</td>
                    <td className="py-2 px-4 border">célula 1</td>
                  </tr>
                ))}
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
