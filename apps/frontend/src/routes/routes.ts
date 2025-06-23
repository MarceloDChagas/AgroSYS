const apiAdress = process.env.URL || 'http://localhost:3000';

export const routes = {
  // Auth
  login: `${apiAdress}/auth/login`,
  profile: `${apiAdress}/auth/profile`,

  // Usuários
  users: `${apiAdress}/users`, // GET (listar), POST (criar)
  userById: (id: string) => `${apiAdress}/users/${id}`,

  // Ferramentas
  tools: `${apiAdress}/tools`, // GET (listar), POST (criar)
  toolById: (id: string) => `${apiAdress}/tools/${id}`,
  createTool: `${apiAdress}/tools`, // POST
  updateTool: (id: string) => `${apiAdress}/tools/${id}`,
  deleteTool: (id: string) => `${apiAdress}/tools/${id}`,
  toolsByStatus: (status: string) =>
    `${apiAdress}/tools/filter/status?status=${status}`,
  toolsByName: (toolName: string) =>
    `${apiAdress}/tools/filter/tool-name?toolName=${toolName}`,
};
