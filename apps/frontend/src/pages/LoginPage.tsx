import LoginForm from '../components/LoginForm';
import { RotatedTitle } from '../components/RotatedTitle';
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
        <RotatedTitle className="z-10 whitespace-nowrap" />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-[#f0f4e9] h-full">
        <LoginForm />
      </div>
    </div>
  );
}
