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
        <h1 className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] text-8xl font-extrabold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#2d572c] z-10 whitespace-nowrap">
          AGRO SYS
        </h1>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-[#f0f4e9] h-full">
        <LoginForm />
      </div>
    </div>
  );
}
