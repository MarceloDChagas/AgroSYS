import { SideMenu } from "../components/layout/SideMenu";

function DevolverFerramentaPage() {
  return (
    <SideMenu title="DEVOLVER FERRAMENTA">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-2xl">
          <h2 className="text-[#1b5e1f] font-bold text-xl mb-6 text-center">
            DEVOLVER FERRAMENTA
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">FERRAMENTA</label>
              <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700">
                <option value="">Selecione a ferramenta</option>
                <option value="1">
                  Arado de Discos (Emprestada - João Silva)
                </option>
                <option value="2">
                  Mangueira de Irrigação (Emprestada - Pedro Oliveira)
                </option>
                <option value="3">
                  Bomba de Água 2HP (Emprestada - Carlos Mendes)
                </option>
                <option value="4">
                  Compressor de Ar (Emprestada - Roberto Alves)
                </option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">
                RESPONSÁVEL ATUAL
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                value="João Silva"
                disabled
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
              <label className="block font-semibold mb-1">
                CONDIÇÃO DA FERRAMENTA
              </label>
              <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700">
                <option value="">Selecione a condição</option>
                <option value="otima">Ótima</option>
                <option value="boa">Boa</option>
                <option value="regular">Regular</option>
                <option value="ruim">Ruim</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">OBSERVAÇÕES</label>
              <textarea
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                rows={3}
                placeholder="Observações sobre a devolução..."
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button className="btn-secondary">CANCELAR</button>
            <button className="btn-primary">DEVOLVER</button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default DevolverFerramentaPage;
