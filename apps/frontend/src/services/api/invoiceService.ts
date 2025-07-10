import { apiClient } from "./client";
import type {
  Invoice,
  CreateInvoiceRequest,
  UpdateInvoiceRequest,
  InvoiceFilters,
} from "../../types/invoice";

export interface UseInvoiceResult {
  invoices: Invoice[];
  loading: boolean;
  error: string;
  fetchInvoices: (filter?: string) => Promise<void>;
  refreshInvoices: () => Promise<void>;
}

export class InvoiceService {
  async getAllInvoices(): Promise<Invoice[]> {
    return await apiClient.get<Invoice[]>("/invoices");
  }

  async getInvoiceById(id: string): Promise<Invoice> {
    return await apiClient.get<Invoice>(`/invoices/${id}`);
  }

  async createInvoice(invoiceData: CreateInvoiceRequest): Promise<Invoice> {
    return await apiClient.post<Invoice>("/invoices", invoiceData);
  }

  async updateInvoice(
    id: string,
    invoiceData: UpdateInvoiceRequest
  ): Promise<Invoice> {
    return await apiClient.put<Invoice>(`/invoices/${id}`, invoiceData);
  }

  async deleteInvoice(id: string): Promise<void> {
    return await apiClient.delete<void>(`/invoices/${id}`);
  }

  async getInvoicesByType(
    type: "ENTRADA" | "SAIDA" | "TRANSFERENCIA"
  ): Promise<Invoice[]> {
    return await apiClient.get<Invoice[]>(`/invoices/filter/type?type=${type}`);
  }

  async getInvoicesByStatus(
    status: "PENDENTE" | "APROVADA" | "CANCELADA" | "FINALIZADA"
  ): Promise<Invoice[]> {
    return await apiClient.get<Invoice[]>(
      `/invoices/filter/status?status=${status}`
    );
  }

  async getInvoicesByDateRange(
    startDate: string,
    endDate: string
  ): Promise<Invoice[]> {
    return await apiClient.get<Invoice[]>(
      `/invoices/filter/date-range?startDate=${startDate}&endDate=${endDate}`
    );
  }

  async getInvoicesBySupplier(supplier: string): Promise<Invoice[]> {
    return await apiClient.get<Invoice[]>(
      `/invoices/filter/supplier?supplier=${supplier}`
    );
  }

  async getInvoicesByCustomer(customer: string): Promise<Invoice[]> {
    return await apiClient.get<Invoice[]>(
      `/invoices/filter/customer?customer=${customer}`
    );
  }

  async searchInvoices(filters: InvoiceFilters): Promise<Invoice[]> {
    const params = new URLSearchParams();

    if (filters.type) params.append("type", filters.type);
    if (filters.status) params.append("status", filters.status);
    if (filters.supplier) params.append("supplier", filters.supplier);
    if (filters.customer) params.append("customer", filters.customer);
    if (filters.startDate) params.append("startDate", filters.startDate);
    if (filters.endDate) params.append("endDate", filters.endDate);
    if (filters.minAmount)
      params.append("minAmount", filters.minAmount.toString());
    if (filters.maxAmount)
      params.append("maxAmount", filters.maxAmount.toString());
    if (filters.page) params.append("page", filters.page.toString());
    if (filters.limit) params.append("limit", filters.limit.toString());

    return await apiClient.get<Invoice[]>(
      `/invoices/search?${params.toString()}`
    );
  }

  // Métodos auxiliares para ações específicas
  async approveInvoice(id: string): Promise<Invoice> {
    return await this.updateInvoice(id, { status: "APROVADA" });
  }

  async cancelInvoice(id: string): Promise<Invoice> {
    return await this.updateInvoice(id, { status: "CANCELADA" });
  }

  async finalizeInvoice(id: string): Promise<Invoice> {
    return await this.updateInvoice(id, { status: "FINALIZADA" });
  }

  async getPendingInvoices(): Promise<Invoice[]> {
    return await this.getInvoicesByStatus("PENDENTE");
  }

  async getApprovedInvoices(): Promise<Invoice[]> {
    return await this.getInvoicesByStatus("APROVADA");
  }

  async getFinalizedInvoices(): Promise<Invoice[]> {
    return await this.getInvoicesByStatus("FINALIZADA");
  }

  async getInputInvoices(): Promise<Invoice[]> {
    return await this.getInvoicesByType("ENTRADA");
  }

  async getOutputInvoices(): Promise<Invoice[]> {
    return await this.getInvoicesByType("SAIDA");
  }

  async getTransferInvoices(): Promise<Invoice[]> {
    return await this.getInvoicesByType("TRANSFERENCIA");
  }
}

export const invoiceService = new InvoiceService();
