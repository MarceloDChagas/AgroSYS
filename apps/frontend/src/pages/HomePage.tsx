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
                <div className="flex flex-col items-center space-y-2">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <h1 className="text-2xl font-bold text-[#1b5e1f] tracking-wider">
          Bem-vindo ao AGROSYS
        </h1>
        <h2 className="text-1xl text-[#1b5e1f]">        
          Sua solução inteligente para gestão agropecuária.
        </h2>
        <h1 className="text-2xl font-bold text-[#1b5e1f] tracking-wider">        
         Monitoramento em tempo real.
        </h1>
        <h2 className="text-1xl  text-[#1b5e1f]">        
          Acompanhe dados da lavoura, clima e produtividade.
        </h2>
        <h2 className="text-2xl font-bold text-[#1b5e1f] tracking-wider">        
          Controle de Estoque
        </h2>
         <h2 className="text-1xl text-[#1b5e1f]">        
Organize insumos, sementes e safras com eficiência.        </h2>
        <h1 className="text-2xl font-bold text-[#1b5e1f] tracking-wider">        
Acesso fácil e rápido        </h1>
        <h2 className="text-1xl  text-[#1b5e1f]">        
Use em qualquer lugar, direto do seu celular ou computador.        </h2>
         <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
    <Button type="submit" color="#1b5e1f" className="block">
        Cadastrar
    </Button>
    <Button type="submit" color="#1b5e1f" className="block">
        Entrar
    </Button>
</div>
      </div>
      </div>
    </div>
  );
}

export default HomePage;