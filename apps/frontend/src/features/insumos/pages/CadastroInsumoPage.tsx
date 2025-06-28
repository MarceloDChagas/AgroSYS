import { SideMenu } from "../components/layout/SideMenu";

function CadastroInsumoPage() {
  return (
    <SideMenu title="CADASTRO DE INSUMO">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-2xl">
          <h2 className="text-[#1b5e1f] font-bold text-xl mb-6 text-center">
            CADASTRO DE INSUMO
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">NOME DO INSUMO</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Digite o nome do insumo"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">TIPO</label>
              <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700">
                <option value="">Selecione o tipo</option>
                <option value="fertilizante">Fertilizante</option>
                <option value="defensivo">Defensivo</option>
                <option value="corretivo">Corretivo</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">QUANTIDADE</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">UNIDADE</label>
                <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700">
                  <option value="">Selecione</option>
                  <option value="kg">Quilogramas (kg)</option>
                  <option value="l">Litros (L)</option>
                  <option value="un">Unidades (un)</option>
                  <option value="sacos">Sacos</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">FORNECEDOR</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Nome do fornecedor"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                DATA DE VALIDADE
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
                placeholder="Observações sobre o insumo..."
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

export default CadastroInsumoPage;
