import { apiClient } from "./client";

export interface InputMaterialEntry {
  id: string;
  date: string;
  productId: string;
  quantityKg: {
    amount: number;
    unit: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CreateInputMaterialEntryDto {
  productId: string;
  date: string;
  quantityKg: {
    amount: number;
    unit: string;
  };
}

export interface UpdateInputMaterialEntryDto {
  productId?: string;
  date?: string;
  quantityKg?: {
    amount: number;
    unit: string;
  };
}

class InputMaterialService {
  async getAll(): Promise<InputMaterialEntry[]> {
    return await apiClient.get<InputMaterialEntry[]>("/input-material-entries");
  }

  async getById(id: string): Promise<InputMaterialEntry> {
    return await apiClient.get<InputMaterialEntry>(
      `/input-material-entries/${id}`
    );
  }

  async getByProduct(productId: string): Promise<InputMaterialEntry[]> {
    return await apiClient.get<InputMaterialEntry[]>(
      `/input-material-entries/product/${productId}`
    );
  }

  async create(data: CreateInputMaterialEntryDto): Promise<InputMaterialEntry> {
    return await apiClient.post<InputMaterialEntry>(
      "/input-material-entries",
      data
    );
  }

  async update(
    id: string,
    data: UpdateInputMaterialEntryDto
  ): Promise<InputMaterialEntry> {
    return await apiClient.patch<InputMaterialEntry>(
      `/input-material-entries/${id}`,
      data
    );
  }

  async delete(id: string): Promise<void> {
    await apiClient.delete(`/input-material-entries/${id}`);
  }
}

export const inputMaterialService = new InputMaterialService();
