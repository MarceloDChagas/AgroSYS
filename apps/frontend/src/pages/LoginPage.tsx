import LoginForm from '../components/LoginForm';
import agroImage from '../assets/agro.jpg';

export function LoginPage() {
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
      <div className="w-1/2 flex items-center justify-center bg-[#f0f4e9] h-full">
        <LoginForm />
      </div>
    </div>
  );
}
