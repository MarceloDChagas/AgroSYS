import { SideMenu } from "@/components/layout/SideMenu";

function SolicitarFerramentaPage() {
  return (
    <SideMenu title="SOLICITAR FERRAMENTA">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-2xl">
          <h2 className="text-[#1b5e1f] font-bold text-xl mb-6 text-center">
            SOLICITAR FERRAMENTA
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">FERRAMENTA</label>
              <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700">
                <option value="">Selecione a ferramenta</option>
                <option value="1">Trator Massey Ferguson 275</option>
                <option value="2">Arado de Discos</option>
                <option value="3">Pulverizador Costal</option>
                <option value="4">Enxada Rotativa</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">SOLICITANTE</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Nome do solicitante"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                DATA DE RETIRADA
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                DATA DE DEVOLUÇÃO
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">OBSERVAÇÕES</label>
              <textarea
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                rows={3}
                placeholder="Observações sobre a solicitação..."
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button className="btn-secondary">CANCELAR</button>
            <button className="btn-primary">SOLICITAR</button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default SolicitarFerramentaPage;
