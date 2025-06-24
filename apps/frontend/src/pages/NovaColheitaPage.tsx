import { SideMenu } from "../components/layout/SideMenu";

function NovaColheitaPage() {
  return (
    <SideMenu title="COLHEITA">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-10 rounded-2xl shadow-md w-full max-w-3xl">
          <h2 className="text-xl font-bold text-[#1b5e1f] text-center mb-6">
            NOVA COLHEITA
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data */}
            <div>
              <label className="text-sm font-semibold text-[#1b5e1f]">DATA</label>
              <input
                type="date"
                className="mt-1 w-full px-3 py-2 border rounded shadow-sm outline-none"
              />
            </div>

            {/* Produto */}
            <div>
              <label className="text-sm font-semibold text-[#1b5e1f]">PRODUTO</label>
              <select className="mt-1 w-full px-3 py-2 border rounded shadow-sm">
                <option value="">Selecione um produto</option>
                <option value="Milho">Milho</option>
                <option value="Feijão">Feijão</option>
              </select>
            </div>

            {/* Quantidade */}
            <div>
              <label className="text-sm font-semibold text-[#1b5e1f]">QUANTIDADE</label>
              <input
                type="number"
                className="mt-1 w-full px-3 py-2 border rounded shadow-sm outline-none"
              />
            </div>

            {/* Unidade */}
            <div>
              <label className="text-sm font-semibold text-[#1b5e1f]">UNIDADE</label>
              <select className="mt-1 w-full px-3 py-2 border rounded shadow-sm">
                <option value="">Selecione a unidade</option>
                <option value="kg">Kg</option>
                <option value="L">Litros</option>
              </select>
            </div>

            {/* Ciclo */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-[#1b5e1f]">
                CICLO DA COLHEITA
              </label>
              <input
                type="text"
                placeholder="Ex: Safra 2025, outono"
                className="mt-1 w-full px-3 py-2 border rounded shadow-sm outline-none"
              />
            </div>
          </form>

          {/* Botões */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-[#1b5e1f] text-white px-6 py-2 rounded hover:bg-green-800 transition">
              SALVAR
            </button>
            <button className="bg-[#1b5e1f] text-white px-6 py-2 rounded hover:bg-green-800 transition">
              CANCELAR
            </button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default NovaColheitaPage;
