import { useState, useEffect, useCallback } from "react";
import { invoiceService } from "../services/api";
import type {
  CreateInvoiceRequest,
  UpdateInvoiceRequest,
  Invoice,
  InvoiceFilters,
} from "../types/invoice";

export interface UseInvoiceResult {
  invoices: Invoice[];
  loading: boolean;
  error: string;
  fetchInvoices: (filter?: string) => Promise<void>;
  refreshInvoices: () => Promise<void>;
  createInvoice: (invoiceData: CreateInvoiceRequest) => Promise<void>;
  updateInvoice: (
    id: string,
    invoiceData: UpdateInvoiceRequest
  ) => Promise<void>;
  deleteInvoice: (id: string) => Promise<void>;
  approveInvoice: (id: string) => Promise<void>;
  cancelInvoice: (id: string) => Promise<void>;
  finalizeInvoice: (id: string) => Promise<void>;
  getPendingInvoices: () => Promise<void>;
  getApprovedInvoices: () => Promise<void>;
  getFinalizedInvoices: () => Promise<void>;
  getInputInvoices: () => Promise<void>;
  getOutputInvoices: () => Promise<void>;
  getTransferInvoices: () => Promise<void>;
}

export function useInvoice(initialFilter?: string): UseInvoiceResult {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchInvoices = useCallback(async (filter?: string) => {
    try {
      setLoading(true);
      setError("");

      let result: Invoice[];

      if (filter) {
        const filters: InvoiceFilters = {
          status: filter as
            | "PENDENTE"
            | "APROVADA"
            | "CANCELADA"
            | "FINALIZADA",
        };
        result = await invoiceService.searchInvoices(filters);
      } else {
        result = await invoiceService.getAllInvoices();
      }

      setInvoices(result);
    } catch (err) {
      // Handle 404 errors gracefully - treat as empty result
      if (err instanceof Error && err.message.includes("404")) {
        setInvoices([]);
        setError("");
      } else {
        const errorMessage =
          err instanceof Error ? err.message : "Erro ao buscar faturas";
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshInvoices = useCallback(async () => {
    await fetchInvoices(initialFilter);
  }, [fetchInvoices, initialFilter]);

  const createInvoice = useCallback(
    async (invoiceData: CreateInvoiceRequest) => {
      setLoading(true);
      setError("");

      try {
        const result = await invoiceService.createInvoice(invoiceData);
        setInvoices((prev) => [...prev, result]);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Erro ao criar fatura";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const updateInvoice = useCallback(
    async (id: string, invoiceData: UpdateInvoiceRequest) => {
      setLoading(true);
      setError("");

      try {
        const result = await invoiceService.updateInvoice(id, invoiceData);
        setInvoices((prev) =>
          prev.map((invoice) => (invoice.id === id ? result : invoice))
        );
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Erro ao atualizar fatura";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteInvoice = useCallback(async (id: string) => {
    setLoading(true);
    setError("");

    try {
      await invoiceService.deleteInvoice(id);
      setInvoices((prev) => prev.filter((invoice) => invoice.id !== id));
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao deletar fatura";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const approveInvoice = useCallback(async (id: string) => {
    setLoading(true);
    setError("");

    try {
      const result = await invoiceService.approveInvoice(id);
      setInvoices((prev) =>
        prev.map((invoice) => (invoice.id === id ? result : invoice))
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao aprovar fatura";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const cancelInvoice = useCallback(async (id: string) => {
    setLoading(true);
    setError("");

    try {
      const result = await invoiceService.cancelInvoice(id);
      setInvoices((prev) =>
        prev.map((invoice) => (invoice.id === id ? result : invoice))
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao cancelar fatura";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const finalizeInvoice = useCallback(async (id: string) => {
    setLoading(true);
    setError("");

    try {
      const result = await invoiceService.finalizeInvoice(id);
      setInvoices((prev) =>
        prev.map((invoice) => (invoice.id === id ? result : invoice))
      );
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao finalizar fatura";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getPendingInvoices = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const result = await invoiceService.getPendingInvoices();
      setInvoices(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao buscar faturas pendentes";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const getApprovedInvoices = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const result = await invoiceService.getApprovedInvoices();
      setInvoices(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao buscar faturas aprovadas";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const getFinalizedInvoices = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const result = await invoiceService.getFinalizedInvoices();
      setInvoices(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Erro ao buscar faturas finalizadas";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const getInputInvoices = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const result = await invoiceService.getInputInvoices();
      setInvoices(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Erro ao buscar faturas de entrada";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const getOutputInvoices = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const result = await invoiceService.getOutputInvoices();
      setInvoices(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao buscar faturas de saída";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const getTransferInvoices = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const result = await invoiceService.getTransferInvoices();
      setInvoices(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Erro ao buscar faturas de transferência";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInvoices(initialFilter);
  }, [initialFilter, fetchInvoices]);

  return {
    invoices,
    loading,
    error,
    fetchInvoices,
    refreshInvoices,
    createInvoice,
    updateInvoice,
    deleteInvoice,
    approveInvoice,
    cancelInvoice,
    finalizeInvoice,
    getPendingInvoices,
    getApprovedInvoices,
    getFinalizedInvoices,
    getInputInvoices,
    getOutputInvoices,
    getTransferInvoices,
  };
}
