import { SideMenu } from "@/components/layout/SideMenu";

function EditarFerramentaPage() {
  return (
    <SideMenu title="EDITAR FERRAMENTA">
      <div className="flex justify-center items-center h-full w-full">
        <div className="bg-[#f4f8ee] p-6 rounded-2xl shadow-md w-full max-w-2xl">
          <h2 className="text-[#1b5e1f] font-bold text-xl mb-6 text-center">
            EDITAR FERRAMENTA
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">
                NOME DA FERRAMENTA
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Digite o nome da ferramenta"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">STATUS</label>
              <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-700">
                <option value="">Selecione o status</option>
                <option value="DISPONIVEL">Disponível</option>
                <option value="EMPRESTADA">Emprestada</option>
                <option value="SOLICITADA">Solicitada</option>
                <option value="MANUTENCAO">Manutenção</option>
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
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button className="btn-secondary">CANCELAR</button>
            <button className="btn-primary">SALVAR</button>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

export default EditarFerramentaPage;
