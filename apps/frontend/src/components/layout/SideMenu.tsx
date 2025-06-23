import type { ReactNode } from 'react';
import { Header } from '../Header';
import { useNavigate } from 'react-router-dom';

interface SideMenuProps {
  children: ReactNode;
  title: string;
}

const menuItems = [
  { label: 'COLHEITA', route: '/colheita' },
  { label: 'FERRAMENTAS', route: '/ferramentas' },
  { label: 'VENDAS', route: '/vendas' },
  { label: 'NOTAS FISCAIS', route: '/notas' },
  { label: 'UNIDADES DE PRODUÇÃO', route: '/unidades' },
  { label: 'INSUMOS E PRODUTOS', route: '/insumos' },
  { label: 'PERFIL', route: '/perfil' },
];

export function SideMenu({ children }: SideMenuProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <div className="flex flex-1">
        {/* Menu lateral */}
        <aside className="w-56 bg-[#f8fbf3] shadow-md p-4 text-[#1b5e1f] font-semibold text-sm">
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">DASHBOARD</h2>
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.route)}
                  className="text-left px-2 py-1 rounded hover:bg-[#eaf4e1] transition"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 flex flex-col bg-[#eaece8]">
          <section className="flex-1 p-6">{children}</section>
        </main>
      </div>
    </div>
  );
}
