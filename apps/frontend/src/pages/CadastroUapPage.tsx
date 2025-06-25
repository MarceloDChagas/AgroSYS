import { SideMenu } from "../components/layout/SideMenu";

function CadastroUapPage() {
  return (
    <SideMenu title="UNIDADES DE PRODUÇÃO">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-8 rounded-2xl shadow-md w-full max-w-4xl text-[#1b5e1f]">
          <h2 className="text-center text-xl font-bold mb-6">NOVA UAP / EDITAR</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label>NOME DA UAP</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="nome da unidade de produção" />
            </div>
            <div>
              <label>SEÇÃO</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="dropdown ex: agropecuário..." />
            </div>
            <div>
              <label>ÁREA</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="descrição tamanho ex: 30 hectares" />
            </div>
            <div>
              <label>RESPONSÁVEL</label>
              <input type="text" className="w-full border p-2 rounded" placeholder="selecionar os admins cadastrados" />
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

export default CadastroUapPage;
