// src/pages/DashboardPage.tsx
import { FaSeedling, FaTools, FaMoneyBill, FaFileAlt } from 'react-icons/fa';
import { Header } from '../components/header';

export function DashboardPage() {
  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo */}
      <div className="flex flex-1">
        {/* Menu lateral */}
        <aside className="w-64 bg-[#f6f9f0] py-8 px-4">
          <h2 className="text-xl font-bold text-[#1b5e1f] mb-8 text-center">DASHBOARD</h2>
          <nav className="flex flex-col gap-6 text-[#1b5e1f] font-semibold text-lg">
            <button className="hover:underline">COLHEITA</button>
            <button className="hover:underline">FERRAMENTAS</button>
            <button className="hover:underline">VENDAS</button>
            <button className="hover:underline">NOTAS FISCAIS</button>
            <button className="hover:underline">PERFIL</button>
          </nav>
        </aside>

        {/* Área principal */}
        <main className="flex-1 bg-white px-12 py-8">
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-[#f6f9f0] rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-lg cursor-pointer">
              <FaSeedling size={60} className="text-[#1b5e1f] mb-4" />
              <span className="text-xl font-bold text-[#1b5e1f]">COLHEITA</span>
            </div>
            <div className="bg-[#f6f9f0] rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-lg cursor-pointer">
              <FaTools size={60} className="text-[#1b5e1f] mb-4" />
              <span className="text-xl font-bold text-[#1b5e1f]">FERRAMENTAS</span>
            </div>
            <div className="bg-[#f6f9f0] rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-lg cursor-pointer">
              <FaMoneyBill size={60} className="text-[#1b5e1f] mb-4" />
              <span className="text-xl font-bold text-[#1b5e1f]">VENDAS</span>
            </div>
            <div className="bg-[#f6f9f0] rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-lg cursor-pointer">
              <FaFileAlt size={60} className="text-[#1b5e1f] mb-4" />
              <span className="text-xl font-bold text-[#1b5e1f]">NOTAS FISCAIS</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
