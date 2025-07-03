import { SideMenu } from "@/components/layout/SideMenu";

function CadastroUapPage() {
  return (
    <SideMenu title="CADASTRO DE UAP">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-2xl">
          <h2 className="text-[#1b5e1f] font-bold text-xl mb-6 text-center">
            CADASTRO DE UAP
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">NOME DA UAP</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Digite o nome da UAP"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">LOCALIZAÇÃO</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Endereço ou coordenadas"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                ÁREA (HECTARES)
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="0.00"
                step="0.01"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                TIPO DE CULTIVO
              </label>
              <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700">
                <option value="">Selecione o tipo</option>
                <option value="soja">Soja</option>
                <option value="milho">Milho</option>
                <option value="feijao">Feijão</option>
                <option value="arroz">Arroz</option>
                <option value="trigo">Trigo</option>
                <option value="cafe">Café</option>
                <option value="algodao">Algodão</option>
                <option value="cana">Cana-de-açúcar</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">RESPONSÁVEL</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Nome do responsável"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">OBSERVAÇÕES</label>
              <textarea
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                rows={3}
                placeholder="Observações sobre a UAP..."
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button className="btn-secondary">CANCELAR</button>
            <button className="btn-primary">CADASTRAR</button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default CadastroUapPage;
