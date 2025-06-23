const apiAdress = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const routes = {
  // Auth
  login: "/login",
  profile: "/profile",
  register: `${apiAdress}/auth/register`,

  // Usuários
  users: `${apiAdress}/users`, // GET (listar), POST (criar)
  userById: (id: string) => `${apiAdress}/users/${id}`,
  createUser: `${apiAdress}/users`, // POST
  updateUser: (id: string) => `${apiAdress}/users/${id}`,
  deleteUser: (id: string) => `${apiAdress}/users/${id}`,

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
