import { apiClient } from "./client";

export interface SaleWithItems {
  id: string;
  userId: string;
  totalAmount: number;
  status: string;
  saleDate: Date;
  createdAt: Date;
  updatedAt: Date;
  saleItems: {
    id: string;
    saleId: string;
    productId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    createdAt: Date;
    updatedAt: Date;
    product: {
      id: string;
      name: string;
      price: number;
    };
  }[];
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

export interface CreateSaleRequest {
  userId: string;
  items: {
    productId: string;
    quantity: number;
    unitPrice: number;
  }[];
  status?: string;
  saleDate?: string;
}

export interface UpdateSaleRequest {
  status?: string;
  saleDate?: string;
}

export interface SaleFilters {
  status?: string;
  userId?: string;
}

export class SalesService {
  async getAllSales(): Promise<SaleWithItems[]> {
    return await apiClient.get<SaleWithItems[]>("/sales");
  }

  async getSaleById(id: string): Promise<SaleWithItems> {
    return await apiClient.get<SaleWithItems>(`/sales/${id}`);
  }

  async createSale(saleData: CreateSaleRequest): Promise<SaleWithItems> {
    return await apiClient.post<SaleWithItems>("/sales", saleData);
  }

  async updateSale(
    id: string,
    saleData: UpdateSaleRequest
  ): Promise<SaleWithItems> {
    return await apiClient.patch<SaleWithItems>(`/sales/${id}`, saleData);
  }

  async deleteSale(id: string): Promise<void> {
    return await apiClient.delete<void>(`/sales/${id}`);
  }

  async getSalesByStatus(status: string): Promise<SaleWithItems[]> {
    return await apiClient.get<SaleWithItems[]>(
      `/sales/filter/status?status=${status}`
    );
  }

  async getSalesByUserId(userId: string): Promise<SaleWithItems[]> {
    return await apiClient.get<SaleWithItems[]>(`/sales/user/${userId}`);
  }

  async completeSale(id: string): Promise<SaleWithItems> {
    return await apiClient.patch<SaleWithItems>(`/sales/${id}/complete`);
  }

  async searchSales(filters: SaleFilters): Promise<SaleWithItems[]> {
    const params = new URLSearchParams();

    if (filters.status) {
      params.append("status", filters.status);
    }

    if (filters.userId) {
      params.append("userId", filters.userId);
    }

    return await apiClient.get<SaleWithItems[]>(`/sales?${params.toString()}`);
  }
}

export const salesService = new SalesService();
