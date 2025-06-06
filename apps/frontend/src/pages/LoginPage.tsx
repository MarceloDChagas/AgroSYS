import LoginForm from '../components/LoginForm'; // Assumo que seu LoginForm já está estilizado
import agroImage from '../assets/agro.jpg';

export function LoginPage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden font-sans">
      {/* Lado da imagem com background-image + overlay */}
      <div
        className="relative flex-1"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
            url(${agroImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <h1
          className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold"
          style={{
            fontSize: '80px',
            color: 'transparent',
            background: 'linear-gradient(to bottom, white 0%, white 50%, #2d572c 50%, #2d572c 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transformOrigin: 'center',
            transform: 'translate(-50%, -50%) rotate(-90deg)',
            whiteSpace: 'nowrap',
          }}
        >
          AGRO SYS
        </h1>
      </div>

      {/* Lado do formulário */}
      <div className="flex-1 bg-[#d9e2d5] flex justify-center items-center">
        <div className="bg-[#f0f3e8] p-10 rounded-lg shadow-md w-[350px] text-center">
          <div className="text-4xl mb-2 text-[#2d572c]">🌿</div>
          <h2 className="text-[#2d572c] text-2xl font-bold mb-6">LOGIN</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
