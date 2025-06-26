import { useNavigate } from 'react-router-dom';
import {
  FaLeaf,
  FaTools,
  FaDollarSign,
  FaFileInvoice,
  FaWarehouse,
  FaFlask,
} from 'react-icons/fa';
import { SideMenu } from '../components/layout/SideMenu';

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
      <span className="text-md font-bold text-[#1b5e1f] text-center px-2">{label}</span>
    </div>
  );
}

export function DashboardPage() {
  return (
    <SideMenu title="DASHBOARD">
      <div className="flex justify-center items-center h-full w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card icon={<FaLeaf size={64} />} label="COLHEITA" route="/colheita" />
          <Card icon={<FaTools size={64} />} label="FERRAMENTAS" route="/ferramentas" />
          <Card icon={<FaDollarSign size={64} />} label="VENDAS" route="/vendas" />
          <Card icon={<FaFileInvoice size={64} />} label="NOTAS FISCAIS" route="/notas" />
          <Card icon={<FaWarehouse size={64} />} label="UNIDADE DE PRODUÇÃO" route="/UapPage" />
          <Card icon={<FaFlask size={64} />} label="INSUMOS & PRODUÇÃO" route="/insumos" />
        </div>
      </div>
    </SideMenu>
  );
}

export default DashboardPage;
