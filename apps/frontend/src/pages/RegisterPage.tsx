import RegisterForm from '../components/RegisterForm';
import agroImage from '../assets/agro.jpg';

export function RegisterPage() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Lado esquerdo: Formulário */}
      <div className="w-1/2 flex items-center justify-center bg-[#f0f4e9] h-full">
        <RegisterForm />
      </div>

      {/* Lado direito: Imagem com texto rotacionado */}
      <div
        className="relative w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${agroImage})`,
        }}
      >
        {/* Texto rotacionado centralizado */}
        <h1 className="absolute left-[0%] top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-8xl font-bold whitespace-nowrap bg-gradient-to-b from-white via-white to-[#2d572c] text-transparent bg-clip-text">
          AGRO SYS
        </h1>
      </div>
    </div>
  );
}

export default RegisterPage;
