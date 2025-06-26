import { SideMenu } from "../components/layout/SideMenu";

function CadastroInsumoPage() {
  return (
    <SideMenu title="INSUMOS E PRODUTOS">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-8 rounded-2xl shadow-md w-full max-w-3xl text-[#1b5e1f]">
          <h2 className="text-center text-xl font-bold mb-6">NOVO PRODUTO/INSUMO</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label>Nome</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="nome" />
            </div>
            <div>
              <label>Tipo</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="produto ou insumo" />
            </div>
            <div>
              <label>Quantidade</label>
              <input type="number" className="w-full border p-2 rounded" placeholder="quantidade" />
            </div>
            <div>
              <label>Unidade</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="kg, L, etc." />
            </div>
            <div className="md:col-span-2">
              <label>Observação (opcional)</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="opcional" />
            </div>
          </form>

          <div className="flex justify-center gap-6 mt-8">
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

export default CadastroInsumoPage;
