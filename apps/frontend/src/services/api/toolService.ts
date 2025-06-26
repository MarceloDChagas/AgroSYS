import { apiClient } from "./client";

export interface Tool {
  id: string;
  toolName: string;
  status: string;
  responsiblePerson?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreateToolRequest {
  toolName: string;
  status: string;
  responsiblePerson?: string;
}

export interface UpdateToolRequest {
  toolName?: string;
  status?: string;
  responsiblePerson?: string;
}

export interface ToolsFilters {
  status?: string;
  toolName?: string;
  page?: number;
  limit?: number;
}

export class ToolService {
  async getAllTools(): Promise<Tool[]> {
    return await apiClient.get<Tool[]>("/tools");
  }

  async getToolById(id: string): Promise<Tool> {
    return await apiClient.get<Tool>(`/tools/${id}`);
  }

  async createTool(toolData: CreateToolRequest): Promise<Tool> {
    return await apiClient.post<Tool>("/tools", toolData);
  }

  async updateTool(id: string, toolData: UpdateToolRequest): Promise<Tool> {
    return await apiClient.put<Tool>(`/tools/${id}`, toolData);
  }

  async deleteTool(id: string): Promise<void> {
    return await apiClient.delete<void>(`/tools/${id}`);
  }

  async getToolsByStatus(status: string): Promise<Tool[]> {
    return await apiClient.get<Tool[]>(`/tools/filter/status?status=${status}`);
  }

  async getToolsByName(toolName: string): Promise<Tool[]> {
    return await apiClient.get<Tool[]>(
      `/tools/filter/tool-name?toolName=${toolName}`
    );
  }

  // Métodos auxiliares para ações específicas
  async requestTool(toolId: string, responsiblePerson: string): Promise<Tool> {
    return await this.updateTool(toolId, {
      status: "SOLICITADA",
      responsiblePerson,
    });
  }

  async lendTool(toolId: string, responsiblePerson: string): Promise<Tool> {
    return await this.updateTool(toolId, {
      status: "EMPRESTADA",
      responsiblePerson,
    });
  }

  async returnTool(toolId: string): Promise<Tool> {
    return await this.updateTool(toolId, {
      status: "DISPONIVEL",
      responsiblePerson: undefined,
    });
  }

  async getAvailableTools(): Promise<Tool[]> {
    return await this.getToolsByStatus("DISPONIVEL");
  }

  async getBorrowedTools(): Promise<Tool[]> {
    return await this.getToolsByStatus("EMPRESTADA");
  }

  async getRequestedTools(): Promise<Tool[]> {
    return await this.getToolsByStatus("SOLICITADA");
  }
}

export const toolService = new ToolService();
