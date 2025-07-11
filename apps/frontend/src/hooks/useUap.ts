import { useState, useCallback } from "react";
import { uapService } from "@/services/api/uapService";
import type {
  UAP,
  CreateUapDto,
  UpdateUapDto,
} from "@/services/api/uapService";

export function useUap() {
  const [uaps, setUaps] = useState<UAP[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUaps = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await uapService.getAll();
      setUaps(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar UAPs");
    } finally {
      setLoading(false);
    }
  }, []);

  const createUap = useCallback(async (data: CreateUapDto) => {
    setLoading(true);
    setError(null);
    try {
      const newUap = await uapService.create(data);
      setUaps((prev) => [newUap, ...prev]);
      return newUap;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao criar UAP");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateUap = useCallback(async (id: string, data: UpdateUapDto) => {
    setLoading(true);
    setError(null);
    try {
      const updatedUap = await uapService.update(id, data);
      setUaps((prev) => prev.map((uap) => (uap.id === id ? updatedUap : uap)));
      return updatedUap;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao atualizar UAP");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteUap = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await uapService.delete(id);
      setUaps((prev) => prev.filter((uap) => uap.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao excluir UAP");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    uaps,
    loading,
    error,
    fetchUaps,
    createUap,
    updateUap,
    deleteUap,
  };
}
