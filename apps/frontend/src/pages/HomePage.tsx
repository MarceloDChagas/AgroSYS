import { Button } from '@/components/ui/Button';
import agroImage from '../assets/agro.jpg';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="flex h-screen">
      {/* Lado esquerdo: Imagem */}
      <div className="w-1/2 relative">
        <img
          src={agroImage}
          alt="Trator"
          className="object-cover w-full h-full"
        />
        {/* Texto vertical */}
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute right-9 top-1/2 -translate-y-1/2 text-white text-6xl lg:text-7xl font-bold rotate-[-90deg] tracking-widest">
          <span className="text-lime-400">AGRO</span> SYS
        </h1>
      </div>

      {/* Lado direito: Conteúdo */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-[#f0f4e9]">
        <div className="flex flex-col items-center px-12 py-10 text-center max-w-xl">
          <img src={logo} alt="Logo" className="w-28 h-28 mb-6" />
          <h1 className="text-7xl font-bold text-[#1b5e1f] mb-6 leading-tight">
            Bem-vindo ao <br />
            AGROSYS
          </h1>
          <p className="text-2xl text-[#1b5e1f] mb-10">
            Sua solução inteligente para gestão agropecuária.
          </p>
          <div className="text-left w-full space-y-8 mb-12">
            <div>
              <span className="font-bold text-2xl text-[#1b5e1f]">
                Monitoramento em tempo real
              </span>
              <p className="text-xl text-[#1b5e1f]">
                Acompanhe dados da lavoura, clima e produtividade.
              </p>
            </div>
            <div>
              <span className="font-bold text-2xl text-[#1b5e1f]">
                Controle de Estoque
              </span>
              <p className="text-xl text-[#1b5e1f]">
                Organize insumos, sementes e safras com eficiência.
              </p>
            </div>
            <div>
              <span className="font-bold text-2xl text-[#1b5e1f]">
                Acesso fácil e rápido
              </span>
              <p className="text-xl text-[#1b5e1f]">
                Use em qualquer lugar, direto do seu celular ou computador.
              </p>
            </div>
          </div>
          <div className="flex gap-8 w-full justify-center">
            <Link to="/register" className="w-52">
              <Button variant="green-button" className="w-full text-2xl py-4">
                CADASTRAR
              </Button>
            </Link>
            <Link to="/login" className="w-52">
              <Button variant="white-button" className="w-full text-2xl py-4">
                ENTRAR
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
