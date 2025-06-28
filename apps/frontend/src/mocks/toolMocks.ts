import type { Tool } from "../services/api/toolService";

// Dados mockados para ferramentas agropecuárias
export const mockTools: Tool[] = [
  {
    id: "1",
    toolName: "Trator Massey Ferguson 275",
    status: "DISPONIVEL",
    responsiblePerson: undefined,
    created_at: "2024-01-10T08:00:00Z",
    updated_at: "2024-01-10T08:00:00Z",
  },
  {
    id: "2",
    toolName: "Arado de Discos",
    status: "EMPRESTADA",
    responsiblePerson: "João Silva",
    created_at: "2024-01-12T10:30:00Z",
    updated_at: "2024-01-15T14:20:00Z",
  },
  {
    id: "3",
    toolName: "Pulverizador Costal",
    status: "DISPONIVEL",
    responsiblePerson: undefined,
    created_at: "2024-01-15T09:15:00Z",
    updated_at: "2024-01-15T09:15:00Z",
  },
  {
    id: "4",
    toolName: "Enxada Rotativa",
    status: "SOLICITADA",
    responsiblePerson: "Maria Santos",
    created_at: "2024-01-18T11:45:00Z",
    updated_at: "2024-01-20T16:30:00Z",
  },
  {
    id: "5",
    toolName: "Mangueira de Irrigação 100m",
    status: "EMPRESTADA",
    responsiblePerson: "Pedro Oliveira",
    created_at: "2024-01-20T13:20:00Z",
    updated_at: "2024-01-22T08:45:00Z",
  },
  {
    id: "6",
    toolName: "Serra Elétrica Portátil",
    status: "DISPONIVEL",
    responsiblePerson: undefined,
    created_at: "2024-01-22T15:10:00Z",
    updated_at: "2024-01-22T15:10:00Z",
  },
  {
    id: "7",
    toolName: "Bomba de Água 2HP",
    status: "EMPRESTADA",
    responsiblePerson: "Carlos Mendes",
    created_at: "2024-01-25T07:30:00Z",
    updated_at: "2024-01-28T12:15:00Z",
  },
  {
    id: "8",
    toolName: "Carrinho de Mão",
    status: "DISPONIVEL",
    responsiblePerson: undefined,
    created_at: "2024-01-28T10:00:00Z",
    updated_at: "2024-01-28T10:00:00Z",
  },
  {
    id: "9",
    toolName: "Foice para Roçada",
    status: "SOLICITADA",
    responsiblePerson: "Ana Costa",
    created_at: "2024-02-01T14:20:00Z",
    updated_at: "2024-02-03T09:30:00Z",
  },
  {
    id: "10",
    toolName: "Máquina de Solda",
    status: "DISPONIVEL",
    responsiblePerson: undefined,
    created_at: "2024-02-05T11:45:00Z",
    updated_at: "2024-02-05T11:45:00Z",
  },
  {
    id: "11",
    toolName: "Compressor de Ar",
    status: "EMPRESTADA",
    responsiblePerson: "Roberto Alves",
    created_at: "2024-02-08T08:15:00Z",
    updated_at: "2024-02-10T17:20:00Z",
  },
  {
    id: "12",
    toolName: "Furadeira Elétrica",
    status: "DISPONIVEL",
    responsiblePerson: undefined,
    created_at: "2024-02-12T13:30:00Z",
    updated_at: "2024-02-12T13:30:00Z",
  },
  {
    id: "13",
    toolName: "Cadeado com Chave",
    status: "EMPRESTADA",
    responsiblePerson: "Lucia Ferreira",
    created_at: "2024-02-15T16:40:00Z",
    updated_at: "2024-02-18T10:25:00Z",
  },
  {
    id: "14",
    toolName: "Lanterna Recarregável",
    status: "DISPONIVEL",
    responsiblePerson: undefined,
    created_at: "2024-02-18T12:00:00Z",
    updated_at: "2024-02-18T12:00:00Z",
  },
  {
    id: "15",
    toolName: "Kit de Ferramentas Manuais",
    status: "SOLICITADA",
    responsiblePerson: "Fernando Lima",
    created_at: "2024-02-20T09:50:00Z",
    updated_at: "2024-02-22T14:10:00Z",
  },
];

// Funções auxiliares para filtrar dados
export const getToolsByStatus = (status: string) => {
  return mockTools.filter((tool) => tool.status === status);
};

export const getToolsByName = (toolName: string) => {
  return mockTools.filter((tool) =>
    tool.toolName.toLowerCase().includes(toolName.toLowerCase())
  );
};

export const getToolsByResponsiblePerson = (responsiblePerson: string) => {
  return mockTools.filter((tool) =>
    tool.responsiblePerson
      ?.toLowerCase()
      .includes(responsiblePerson.toLowerCase())
  );
};

export const getAvailableTools = () => {
  return getToolsByStatus("DISPONIVEL");
};

export const getBorrowedTools = () => {
  return getToolsByStatus("EMPRESTADA");
};

export const getRequestedTools = () => {
  return getToolsByStatus("SOLICITADA");
};

// Função para simular busca com delay (simulando API)
export const searchTools = async (
  query: string,
  status?: string
): Promise<Tool[]> => {
  // Simular delay de rede
  await new Promise((resolve) => setTimeout(resolve, 300));

  let filteredTools = mockTools;

  if (query) {
    filteredTools = filteredTools.filter(
      (tool) =>
        tool.toolName.toLowerCase().includes(query.toLowerCase()) ||
        tool.responsiblePerson?.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (status) {
    filteredTools = filteredTools.filter((tool) => tool.status === status);
  }

  return filteredTools;
};

// Função para simular criação de ferramenta
export const createMockTool = async (toolData: {
  toolName: string;
  status: string;
  responsiblePerson?: string;
}): Promise<Tool> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const newTool: Tool = {
    id: (mockTools.length + 1).toString(),
    toolName: toolData.toolName,
    status: toolData.status,
    responsiblePerson: toolData.responsiblePerson,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  mockTools.push(newTool);
  return newTool;
};

// Função para simular atualização de ferramenta
export const updateMockTool = async (
  id: string,
  toolData: { toolName?: string; status?: string; responsiblePerson?: string }
): Promise<Tool> => {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const toolIndex = mockTools.findIndex((tool) => tool.id === id);
  if (toolIndex === -1) {
    throw new Error("Ferramenta não encontrada");
  }

  const updatedTool = {
    ...mockTools[toolIndex],
    ...toolData,
    updated_at: new Date().toISOString(),
  };

  mockTools[toolIndex] = updatedTool;
  return updatedTool;
};

// Função para simular exclusão de ferramenta
export const deleteMockTool = async (id: string): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const toolIndex = mockTools.findIndex((tool) => tool.id === id);
  if (toolIndex === -1) {
    throw new Error("Ferramenta não encontrada");
  }

  mockTools.splice(toolIndex, 1);
};
