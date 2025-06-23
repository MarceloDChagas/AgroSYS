import logo from "../assets/logo.png";
import { useState } from "react";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";
import type { RegisterFormData } from "@/types/forms/register-form-data";

interface RegisterFormProps {
  onSubmit: (
    data: Omit<RegisterFormData, "confirmPassword">
  ) => Promise<void> | void;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }
    setIsLoading(true);
    try {
      await onSubmit({ email, password, name });
    } catch {
      setError("Erro ao criar conta");
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

        <div>
          <label className="block text-sm text-gray-600">Confirmar Senha</label>
          <input
            type="password"
            placeholder="Confirme sua senha"
            className="w-full mt-1 p-3 border rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-600"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          color="#1b5e1f"
          className="block"
          disabled={isLoading}
        >
          {isLoading ? "CRIANDO..." : "CRIAR CONTA"}
        </Button>
      </form>

      {error && <div className="text-red-600 text-sm text-center">{error}</div>}

      <div className="text-center text-sm text-gray-600">
        Já possui conta?{" "}
        <Link to="/login" className="text-green-700 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
