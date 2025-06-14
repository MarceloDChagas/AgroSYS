import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/logo.png';

export function Header() {
  return (
    <header className="w-full h-[180px] bg-white flex flex-col shadow">
      <div className="flex items-center justify-between px-10 pt-6">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="h-24 w-24 object-contain"
          />
          <div>
            <h1 className="text-4xl font-bold text-[#1b5e1f] leading-tight">AGROSYS</h1>
            <p className="text-[#6b8e23] font-medium text-sm -mt-1">
              SISTEMA DE GESTÃO AGROPECUÁRIA
            </p>
          </div>
        </div>
        <FaUserCircle size={50} className="text-[#1b5e1f]" />
      </div>
      <div className="bg-[#1b5e1f] w-full text-white text-lg font-bold text-right px-10 py-2">  
        BEM-VINDO, [NOME]!
      </div>
    </header>
  );
}