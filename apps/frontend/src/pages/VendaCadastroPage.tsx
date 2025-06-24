import { SideMenu } from "../components/layout/SideMenu";

function VendaCadastroPage() {
  return (
    <SideMenu title="VENDAS">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h2 className="text-[#1b5e1f] font-bold mb-6 text-xl">NOVA VENDA</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f4f8ee] p-6 rounded-xl shadow-md max-w-4xl w-full">
          <div>
            <label className="block text-[#1b5e1f] mb-1">CLIENTE</label>
            <input className="w-full px-3 py-2 border rounded" placeholder="Buscar cliente..." />
          </div>
          <div>
            <label className="block text-[#1b5e1f] mb-1">PRODUTO</label>
            <input className="w-full px-3 py-2 border rounded" placeholder="Selecionar produto..." />
          </div>
          <div>
            <label className="block text-[#1b5e1f] mb-1">QUANTIDADE</label>
            <input className="w-full px-3 py-2 border rounded" type="number" placeholder="0" />
          </div>
          <div>
            <label className="block text-[#1b5e1f] mb-1">DATA</label>
            <input className="w-full px-3 py-2 border rounded" type="date" />
          </div>
          <div className="col-span-2">
            <label className="block text-[#1b5e1f] mb-1">OBSERVAÇÕES</label>
            <textarea className="w-full px-3 py-2 border rounded" placeholder="Observações adicionais..." />
          </div>
        </form>

        <div className="flex gap-4 mt-6">
          <button className="bg-[#1b5e1f] text-white px-6 py-2 rounded hover:bg-green-800 transition">REGISTRAR</button>
          <button className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-600 transition">CANCELAR</button>
        </div>
      </div>
    </SideMenu>
  );
}

export default VendaCadastroPage;
