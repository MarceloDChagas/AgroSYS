import logo from '../assets/logo.png';
import { useState } from 'react';
import { Button } from './ui/Button';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dps valida aqui a logica de login
    console.log({ email, password });
  };

  {
    /* Essa cor aqui e a interna */
  }
  return (
    <div className="bg-[#f0f4e9] rounded-2xl shadow-2xl p-10 w-full max-w-md space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <h2 className="text-2xl font-bold text-[#1b5e1f] tracking-wider">
          LOGIN
        </h2>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm text-gray-600">Usuário</label>
          <input
            type="email"
            placeholder="Email institucional"
            className="w-full mt-1 p-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Senha</label>
          <input
            type="password"
            placeholder="Senha"
            className="w-full mt-1 p-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-green-600" />
            <span>Lembrar-me</span>
          </label>
          <a href="#" className="text-green-700 hover:underline">
            Esqueceu a senha?
          </a>
        </div>

        <Button type="submit" color="#1b5e1f">
          ENTRAR
        </Button>
      </form>

      <div className="text-center text-sm text-gray-600">
        Não possui uma conta?{' '}
        <a href="#" className="text-green-700 hover:underline">
          Inscreva-se
        </a>
      </div>
    </div>
  );
}
