import { Insumo } from "@shared/types/insumo";
import { CreateInsumoDto } from "@shared/dto/insumo/create-insumo.dto";
import { UpdateInsumoDto } from "@shared/dto/insumo/update-insumo.dto";

export interface InsumoRepository {
  findAll(): Promise<Insumo[]>;
  findById(id: string): Promise<Insumo | null>;
  create(data: CreateInsumoDto): Promise<Insumo>;
  update(id: string, data: UpdateInsumoDto): Promise<Insumo>;
  delete(id: string): Promise<void>;
}
