// exemplo dentro do seu LoginForm.jsx (simplificado)

export default function LoginForm() {
  return (
    <form>
      <label htmlFor="email" className="block text-left text-[#2d572c] mb-1">Usuário</label>
      <input
        type="email"
        id="email"
        placeholder="Nome ou @gmail.com"
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label htmlFor="senha" className="block text-left text-[#2d572c] mb-1">Senha</label>
      <input
        type="password"
        id="senha"
        placeholder="Senha"
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <div className="flex justify-between text-sm mb-6 text-[#2d572c]">
        <label className="flex items-center gap-1">
          <input type="checkbox" /> Lembrar-me
        </label>
        <a href="#" className="hover:underline">Esqueci a senha</a>
      </div>

      <button
        type="submit"
        className="bg-[#2d572c] w-full text-white py-2 rounded font-bold hover:bg-[#1b3e1e] transition-colors"
      >
        ENTRAR
      </button>

      <p className="mt-4 text-sm text-[#2d572c]">
        Não possui uma conta?{' '}
        <a href="#" className="underline hover:text-[#1b3e1e]">
          Inscreva-se
        </a>
      </p>
    </form>
  );
}
