import { SideMenu } from "../components/layout/SideMenu";

function DevolverFerramentaPage() {
  return (
    <SideMenu title="FERRAMENTAS">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h2 className="text-[#1b5e1f] text-xl font-bold mb-6">CONFIRMAR DEVOLUÇÃO DA FERRAMENTA</h2>

        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-xl flex flex-col gap-4">
          <input
            type="text"
            placeholder="NOME DA FERRAMENTA"
            className="px-4 py-2 rounded border"
          />
          <input
            type="text"
            placeholder="OBSERVAÇÃO (OPCIONAL)"
            className="px-4 py-2 rounded border"
          />

          <div className="flex justify-center gap-4 mt-4">
            <button className="bg-[#1b5e1f] text-white px-6 py-2 rounded hover:bg-green-800 transition">
              CONFIRMAR
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

export default DevolverFerramentaPage;
