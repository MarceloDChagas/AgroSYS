import { useState, useEffect, useCallback } from "react";
import { harvestService } from "../services/api";
import type {
  CreateHarvestRequest,
  UpdateHarvestRequest,
  Harvest,
} from "../services/api";

export interface UseHarvestResult {
  harvests: Harvest[];
  loading: boolean;
  error: string;
  fetchHarvests: (filter?: string) => Promise<void>;
  refreshHarvests: () => Promise<void>;
  createHarvest: (harvestData: CreateHarvestRequest) => Promise<void>;
  updateHarvest: (
    id: string,
    harvestData: UpdateHarvestRequest
  ) => Promise<void>;
  deleteHarvest: (id: string) => Promise<void>;
  getHarvestsByStatus: (status: string) => Promise<void>;
  getHarvestsByProduct: (product: string) => Promise<void>;
  getHarvestsByCycle: (cycle: string) => Promise<void>;
}

export function useHarvest(initialFilter?: string): UseHarvestResult {
  const [harvests, setHarvests] = useState<Harvest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchHarvests = useCallback(async (filter?: string) => {
    try {
      setLoading(true);
      setError("");

      let result: Harvest[];

      if (filter) {
        result = await harvestService.getHarvestsByStatus(filter);
      } else {
        result = await harvestService.getAllHarvests();
      }

      setHarvests(result);
    } catch (err) {
      // Handle 404 errors gracefully - treat as empty result
      if (err instanceof Error && err.message.includes("404")) {
        setHarvests([]);
        setError("");
      } else {
        const errorMessage =
          err instanceof Error ? err.message : "Erro ao buscar colheitas";
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshHarvests = useCallback(async () => {
    await fetchHarvests(initialFilter);
  }, [fetchHarvests, initialFilter]);

  const createHarvest = useCallback(
    async (harvestData: CreateHarvestRequest) => {
      setLoading(true);
      setError("");

      try {
        const result = await harvestService.createHarvest(harvestData);
        setHarvests((prev) => [...prev, result]);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Erro ao criar colheita";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const updateHarvest = useCallback(
    async (id: string, harvestData: UpdateHarvestRequest) => {
      setLoading(true);
      setError("");

      try {
        const result = await harvestService.updateHarvest(id, harvestData);
        setHarvests((prev) =>
          prev.map((harvest) => (harvest.id === id ? result : harvest))
        );
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Erro ao atualizar colheita";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteHarvest = useCallback(async (id: string) => {
    setLoading(true);
    setError("");

    try {
      await harvestService.deleteHarvest(id);
      setHarvests((prev) => prev.filter((harvest) => harvest.id !== id));
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao excluir colheita";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getHarvestsByStatus = useCallback(async (status: string) => {
    try {
      setLoading(true);
      setError("");
      const result = await harvestService.getHarvestsByStatus(status);
      setHarvests(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Erro ao filtrar colheitas por status";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const getHarvestsByProduct = useCallback(async (product: string) => {
    try {
      setLoading(true);
      setError("");
      const result = await harvestService.getHarvestsByProduct(product);
      setHarvests(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Erro ao filtrar colheitas por produto";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const getHarvestsByCycle = useCallback(async (cycle: string) => {
    try {
      setLoading(true);
      setError("");
      const result = await harvestService.getHarvestsByCycle(cycle);
      setHarvests(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Erro ao filtrar colheitas por ciclo";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHarvests(initialFilter);
  }, [fetchHarvests, initialFilter]);

  return {
    harvests,
    loading,
    error,
    fetchHarvests,
    refreshHarvests,
    createHarvest,
    updateHarvest,
    deleteHarvest,
    getHarvestsByStatus,
    getHarvestsByProduct,
    getHarvestsByCycle,
  };
}
