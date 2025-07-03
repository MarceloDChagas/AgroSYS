import { SideMenu } from "@/components/layout/SideMenu";

function ExcluirFerramentaPage() {
  return (
    <SideMenu title="FERRAMENTAS">
      <div className="flex flex-col items-center justify-center h-full w-full">
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
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-800 transition">
              EXCLUIR
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

export default ExcluirFerramentaPage;
