import logo from '../assets/logo.png';
import { useState } from 'react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        setError('Erro ao criar conta');
      }
    } catch {
      setError('Erro ao conectar com o servidor');
    } finally {
      setIsLoading(false);
    }
  };

  {
    /* Essa cor aqui e a interna */
  }
  return (
    <div className="bg-[#f0f4e9] rounded-2xl shadow-2xl p-10 w-full max-w-md space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <h2 className="text-2xl font-bold text-[#1b5e1f] tracking-wider">
          CRIAR CONTA
        </h2>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm text-gray-600">Usuário</label>
          <input
            placeholder="Nome de usuário"
            className="w-full mt-1 p-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">E-mail</label>
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

        <Button
          type="submit"
          color="#1b5e1f"
          className="block"
          disabled={isLoading}
        >
          {isLoading ? 'CRIANDO...' : 'CRIAR CONTA'}
        </Button>
      </form>

      {error && <div className="text-red-600 text-sm text-center">{error}</div>}

      <div className="text-center text-sm text-gray-600">
        Já possui conta?{' '}
        <Link to="/login" className="text-green-700 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
