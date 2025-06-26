import { useState, useEffect } from "react";
import { toolService, type Tool } from "../services/api";

export interface UseToolsResult {
  tools: Tool[];
  loading: boolean;
  error: string;
  fetchTools: (filter?: string) => Promise<void>;
  refreshTools: () => Promise<void>;
}

export function useTools(initialFilter?: string): UseToolsResult {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const fetchTools = async (filter?: string) => {
    try {
      setLoading(true);
      setError("");

      let toolsData: Tool[];
      if (filter) {
        toolsData = await toolService.getToolsByStatus(filter);
      } else {
        toolsData = await toolService.getAllTools();
      }

      setTools(toolsData);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro ao carregar ferramentas";
      setError(errorMessage);
      console.error("Erro ao buscar ferramentas:", error);
    } finally {
      setLoading(false);
    }
  };

  const refreshTools = () => fetchTools(initialFilter);

  useEffect(() => {
    fetchTools(initialFilter);
  }, [initialFilter]);

  return {
    tools,
    loading,
    error,
    fetchTools,
    refreshTools,
  };
}
