import { SideMenu } from "../components/layout/SideMenu";

function GerarNotaPage() {
  return (
    <SideMenu title="NOTAS FISCAIS">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-8 rounded-2xl shadow-md w-full max-w-3xl">
          <h2 className="text-[#1b5e1f] font-bold text-xl text-center mb-6">GERAR NOTA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[#1b5e1f] font-semibold">TIPO DE NOTA</label>
              <input className="w-full border rounded px-3 py-2" placeholder="NF ou NFS-e" />
            </div>
            <div>
              <label className="text-[#1b5e1f] font-semibold">DESTINO</label>
              <input className="w-full border rounded px-3 py-2" placeholder="Dropdown com opções" />
            </div>
            <div>
              <label className="text-[#1b5e1f] font-semibold">VALOR TOTAL</label>
              <input className="w-full border rounded px-3 py-2" placeholder="Campo numérico" />
            </div>
            <div>
              <label className="text-[#1b5e1f] font-semibold">DATA</label>
              <input className="w-full border rounded px-3 py-2" placeholder="Seletor de data" />
            </div>
            <div className="md:col-span-2">
              <label className="text-[#1b5e1f] font-semibold">OBSERVAÇÃO</label>
              <input className="w-full border rounded px-3 py-2" placeholder="Opcional" />
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-[#1b5e1f] text-white px-6 py-2 rounded hover:bg-green-800 transition">GERAR</button>
            <button className="bg-[#1b5e1f] text-white px-6 py-2 rounded hover:bg-green-800 transition">CANCELAR</button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default GerarNotaPage;