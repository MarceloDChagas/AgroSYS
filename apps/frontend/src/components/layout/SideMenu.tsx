import type { ReactNode } from 'react';
import { Header } from '../Header';
import { useNavigate, useLocation } from 'react-router-dom'; // Importe useLocation

interface SideMenuProps {
  children: ReactNode;
  title: string; // Você pode remover esta prop se não estiver usando-a no SideMenu, já que o título agora é dinâmico no Header.
}

const menuItems = [
  { label: 'DASHBOARD', route: '/dashboard' }, // Adicione o Dashboard como um item de menu para que ele também possa ser destacado
  { label: 'COLHEITA', route: '/colheita' },
  { label: 'FERRAMENTAS', route: '/ferramentas' },
  { label: 'VENDAS', route: '/vendas' },
  { label: 'NOTAS FISCAIS', route: '/notas' },
  { label: 'UNIDADES DE PRODUÇÃO', route: '/UapPage' },
  { label: 'INSUMOS E PRODUTOS', route: '/insumos' },
  { label: 'PERFIL', route: '/perfil' },
];

export function SideMenu({ children }: SideMenuProps) {
  const navigate = useNavigate();
  const location = useLocation(); // Use o hook useLocation para obter a rota atual

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <div className="flex flex-1">
        {/* Menu lateral */}
        <aside className="w-56 bg-[#f8fbf3] shadow-md p-4 text-[#1b5e1f] font-semibold text-sm">
          <div className="mb-8">
            {/* O título DASHBOARD pode ser um item de menu como os outros para consistência */}
            {/* <h2 className="text-lg font-bold mb-4">DASHBOARD</h2> */}
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.route)}
                  // Aplica classes condicionalmente com base na rota atual
                  className={`
                    text-left px-2 py-1 rounded transition
                    ${location.pathname === item.route
                      ? 'bg-[#1b5e1f] text-white' // Estilo para o item ativo (fundo verde, texto branco)
                      : 'hover:bg-[#eaf4e1]' // Estilo para o item inativo (hover com fundo mais claro)
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 flex flex-col bg-[#eaece8]">
          {/* Adicione o título da página aqui, dinamicamente com base na rota atual */}
          <div className="bg-[#1b5e1f] w-full text-white text-lg font-bold px-10 py-2 flex items-center justify-between">
            {/* Encontra o item de menu correspondente à rota atual e exibe seu label como título */}
            {menuItems.find(item => item.route === location.pathname)?.label || 'BEM-VINDO, [NOME]!'}
            {/* Este botão "Registrar Nova Colheita" pode ser renderizado condicionalmente
                apenas para a rota /colheita, por exemplo. */}
          </div>
          <section className="flex-1 p-6">{children}</section>
        </main>
      </div>
    </div>
  );
}