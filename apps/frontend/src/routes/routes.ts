const apiAdress = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const routes = {
  // Auth
  auth: {
    login: `${apiAdress}/auth/login`,
    register: `${apiAdress}/auth/register`,
    profile: `${apiAdress}/auth/profile`,
  },

  // Usuários
  users: {
    base: `${apiAdress}/users`,
    getAll: `${apiAdress}/users`,
    getById: (id: string) => `${apiAdress}/users/${id}`,
    create: `${apiAdress}/users`,
    update: (id: string) => `${apiAdress}/users/${id}`,
    delete: (id: string) => `${apiAdress}/users/${id}`,
  },

  // Ferramentas
  tools: {
    base: `${apiAdress}/tools`,
    getAll: `${apiAdress}/tools`,
    getById: (id: string) => `${apiAdress}/tools/${id}`,
    create: `${apiAdress}/tools`,
    update: (id: string) => `${apiAdress}/tools/${id}`,
    delete: (id: string) => `${apiAdress}/tools/${id}`,
    getByStatus: (status: string) =>
      `${apiAdress}/tools/filter/status?status=${status}`,
    getByName: (toolName: string) =>
      `${apiAdress}/tools/filter/tool-name?toolName=${toolName}`,
  },

  // Rotas de navegação do frontend
  navigation: {
    login: "/login",
    register: "/register",
    dashboard: "/dashboard",
    profile: "/profile",

    // Ferramentas
    ferramentas: "/ferramentas",
    editarFerramenta: "/ferramentas/editar",
    excluirFerramenta: "/ferramentas/excluir",
    solicitarFerramenta: "/ferramentas/solicitar",
    devolverFerramenta: "/ferramentas/devolver",

    // Colheita
    colheita: "/colheita",
    novaColheita: "/colheita/nova",

    // Vendas
    vendas: "/vendas",
    vendaCadastro: "/vendas/cadastro",

    // Notas Fiscais
    notas: "/notas",
    notasFiscais: "/notas-fiscais",
    notaFiscal: "/nota-fiscal",
  },
};
