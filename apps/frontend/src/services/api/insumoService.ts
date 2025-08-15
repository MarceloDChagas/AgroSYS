import { apiClient } from "./client";
import type {
  Insumo,
  CreateInsumoDto,
  UpdateInsumoDto,
} from "../../types/insumo.js";

class InsumoService {
  async getAll(): Promise<Insumo[]> {
    return await apiClient.get<Insumo[]>("/insumos");
  }

  async getById(id: string): Promise<Insumo> {
    return await apiClient.get<Insumo>(`/insumos/${id}`);
  }

  async create(data: CreateInsumoDto): Promise<Insumo> {
    return await apiClient.post<Insumo>("/insumos", data);
  }

  async update(id: string, data: UpdateInsumoDto): Promise<Insumo> {
    return await apiClient.put<Insumo>(`/insumos/${id}`, data);
  }

  async delete(id: string): Promise<void> {
    await apiClient.delete(`/insumos/${id}`);
  }
}

export const insumoService = new InsumoService();
