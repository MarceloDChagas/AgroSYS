import { apiClient } from "./client";

export interface UAP {
  id: string;
  name: string;
  location: string;
  area: number;
  cropType: string;
  responsible: string;
  observations?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUapDto {
  name: string;
  location: string;
  area: number;
  cropType: string;
  responsible: string;
  observations?: string;
}

export interface UpdateUapDto {
  name?: string;
  location?: string;
  area?: number;
  cropType?: string;
  responsible?: string;
  observations?: string;
}

class UapService {
  async getAll(): Promise<UAP[]> {
    return await apiClient.get<UAP[]>("/uaps");
  }

  async getById(id: string): Promise<UAP> {
    return await apiClient.get<UAP>(`/uaps/${id}`);
  }

  async create(data: CreateUapDto): Promise<UAP> {
    return await apiClient.post<UAP>("/uaps", data);
  }

  async update(id: string, data: UpdateUapDto): Promise<UAP> {
    return await apiClient.patch<UAP>(`/uaps/${id}`, data);
  }

  async delete(id: string): Promise<void> {
    await apiClient.delete(`/uaps/${id}`);
  }
}

export const uapService = new UapService();
