import { Button } from '@/components/ui/Button';
import agroImage from '../assets/agro.jpg';
import logo from '../assets/logo.png';

export function HomePage() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className="relative w-1/2 h-full">
        <img
          src={agroImage}
          alt="Imagem agro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute right-9 top-1/2 -translate-y-1/2 text-white text-6xl lg:text-7xl font-bold rotate-[-90deg] tracking-widest">
          <span className="text-lime-400">AGRO</span> SYS
        </h1>
      </div>

      <div className="w-1/2 flex justify-center bg-[#f0f4e9] h-full">
        <div className="flex flex-col items-center justify-center space-y-4 px-12 py-10 text-center">
          <img src={logo} alt="Logo" className="w-20 h-20 mb-4" />

          <h1 className="text-4xl font-bold text-[#1b5e1f] tracking-wider mb-2">
            Bem-vindo ao AGROSYS
          </h1>
          <h2 className="text-base text-[#1b5e1f] mb-6">
            Sua solução inteligente para gestão agropecuária.
          </h2>

          <h1 className="text-xl font-bold text-[#1b5e1f] tracking-wider mb-1">
            Monitoramento em tempo real
          </h1>
          <h2 className="text-base text-[#1b5e1f] mb-6">
            Acompanhe dados da lavoura, clima e produtividade.
          </h2>

          <h1 className="text-xl font-bold text-[#1b5e1f] tracking-wider mb-1">
            Controle de Estoque
          </h1>
          <h2 className="text-base text-[#1b5e1f] mb-6">
            Organize insumos, sementes e safras com eficiência.
          </h2>

          <h1 className="text-xl font-bold text-[#1b5e1f] tracking-wider mb-1">
            Acesso fácil e rápido
          </h1>
          <h2 className="text-base text-[#1b5e1f] mb-6">
            Use em qualquer lugar, direto do seu celular ou computador.
          </h2>

          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <Button
              type="submit"
              color="#1b5e1f"
              className="px-8 py-3 rounded-full font-bold text-white bg-[#1b5e1f] hover:bg-[#155219] transition"
            >
              Cadastrar
            </Button>
            <Button
              type="submit"
              color="#F0F4E9"
              className="px-8 py-3 rounded-full font-bold text-[#1b5e1f]-800 border-2 border-[#1b5e1f] hover:bg-[#1b5e1f] hover:text-white transition"
            >
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
