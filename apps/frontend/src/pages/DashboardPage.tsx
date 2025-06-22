import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { FaLeaf, FaTools, FaDollarSign, FaFileInvoice } from "react-icons/fa";

interface CardProps {
  icon: React.ReactNode;
  label: string;
  route: string;
}

function Card({ icon, label, route }: CardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="flex flex-col items-center justify-center w-44 h-44 bg-[#f4f8ee] rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
    >
      <div className="text-[#1b5e1f] mb-3">{icon}</div>
      <span className="text-md font-bold text-[#1b5e1f]">{label}</span>
    </div>
  );
}

export function DashboardPage() {
  const [active, setActive] = useState("DASHBOARD");

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header /> {/* <-- Aqui você usa o Header */}
      <div className="flex flex-1">
        {/* Menu lateral */}
        <aside className="w-56 bg-[#f8fbf3] shadow-md p-4 text-[#1b5e1f] font-semibold text-sm">
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">DASHBOARD</h2>
            <nav className="flex flex-col space-y-4">
              {[
                "COLHEITA",
                "FERRAMENTAS",
                "VENDAS",
                "NOTAS FISCAIS",
                "PERFIL",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`text-left transition-all duration-200 px-2 py-1 rounded ${
                    active === item
                      ? "bg-[#eaf4e1] font-bold"
                      : "hover:bg-[#eaf4e1]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 flex flex-col">
          <section className="flex-1 flex items-center justify-center bg-white p-6">
            <div className="grid grid-cols-2 gap-10">
              <Card
                icon={<FaLeaf size={48} />}
                label="COLHEITA"
                route="/colheita"
              />
              <Card
                icon={<FaTools size={48} />}
                label="FERRAMENTAS"
                route="/ferramentas"
              />
              <Card
                icon={<FaDollarSign size={48} />}
                label="VENDAS"
                route="/vendas"
              />
              <Card
                icon={<FaFileInvoice size={48} />}
                label="NOTAS FISCAIS"
                route="/notas"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
