import { useState, useEffect, useCallback } from "react";
import { salesService } from "../services/api/salesService";
import type {
  CreateSaleRequest,
  UpdateSaleRequest,
  SaleWithItems,
  SaleFilters,
} from "../services/api/salesService";

export interface UseSalesResult {
  sales: SaleWithItems[];
  loading: boolean;
  error: string;
  fetchSales: (filter?: string) => Promise<void>;
  refreshSales: () => Promise<void>;
  createSale: (saleData: CreateSaleRequest) => Promise<void>;
  updateSale: (id: string, saleData: UpdateSaleRequest) => Promise<void>;
  deleteSale: (id: string) => Promise<void>;
  completeSale: (id: string) => Promise<void>;
  getSalesByStatus: (status: string) => Promise<void>;
  getSalesByUserId: (userId: string) => Promise<void>;
  searchSales: (filters: SaleFilters) => Promise<void>;
}

export function useSales(initialFilter?: string): UseSalesResult {
  const [sales, setSales] = useState<SaleWithItems[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSales = useCallback(async (filter?: string) => {
    try {
      setLoading(true);
      setError("");

      let result: SaleWithItems[];

      if (filter) {
        result = await salesService.getSalesByStatus(filter);
      } else {
        result = await salesService.getAllSales();
      }

      setSales(result);
    } catch (err) {
      // Handle 404 errors gracefully - treat as empty result
      if (err instanceof Error && err.message.includes("404")) {
        setSales([]);
        setError("");
      } else {
        const errorMessage =
          err instanceof Error ? err.message : "Erro ao buscar vendas";
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshSales = useCallback(async () => {
    await fetchSales(initialFilter);
  }, [fetchSales, initialFilter]);

  const createSale = useCallback(async (saleData: CreateSaleRequest) => {
    setLoading(true);
    setError("");

    try {
      const result = await salesService.createSale(saleData);
      setSales((prev) => [...prev, result]);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao criar venda";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateSale = useCallback(
    async (id: string, saleData: UpdateSaleRequest) => {
      setLoading(true);
      setError("");

      try {
        const result = await salesService.updateSale(id, saleData);
        setSales((prev) =>
          prev.map((sale) => (sale.id === id ? result : sale))
        );
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Erro ao atualizar venda";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteSale = useCallback(async (id: string) => {
    setLoading(true);
    setError("");

    try {
      await salesService.deleteSale(id);
      setSales((prev) => prev.filter((sale) => sale.id !== id));
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao excluir venda";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const completeSale = useCallback(async (id: string) => {
    setLoading(true);
    setError("");

    try {
      const result = await salesService.completeSale(id);
      setSales((prev) => prev.map((sale) => (sale.id === id ? result : sale)));
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao completar venda";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getSalesByStatus = useCallback(async (status: string) => {
    try {
      setLoading(true);
      setError("");
      const result = await salesService.getSalesByStatus(status);
      setSales(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao buscar vendas por status";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const getSalesByUserId = useCallback(async (userId: string) => {
    try {
      setLoading(true);
      setError("");
      // Mapping to UAP for now as service exposes getSalesByUapId
      const result = await salesService.getSalesByUapId(userId);
      setSales(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Erro ao buscar vendas por usuário";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchSales = useCallback(async (filters: SaleFilters) => {
    try {
      setLoading(true);
      setError("");
      const result = await salesService.searchSales(filters);
      setSales(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao buscar vendas";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSales(initialFilter);
  }, [fetchSales, initialFilter]);

  return {
    sales,
    loading,
    error,
    fetchSales,
    refreshSales,
    createSale,
    updateSale,
    deleteSale,
    completeSale,
    getSalesByStatus,
    getSalesByUserId,
    searchSales,
  };
}
