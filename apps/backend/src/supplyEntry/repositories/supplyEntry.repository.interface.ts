import { CreateSupplyEntryDto } from "@shared/dto/supplyEntry/create-supplyEntry.dto";
import { UpdateSupplyEntryDto } from "@shared/dto/supplyEntry/update-supplyEntry.dto";
import { SupplyEntry } from "@shared/types/supply-entry";

export interface ISupplyEntryRepository {
  findAll(): Promise<SupplyEntry[]>;
  findOne(id: string): Promise<SupplyEntry | null>;
  findByProduct(productId: string): Promise<SupplyEntry[]>;
  create(data: CreateSupplyEntryDto): Promise<SupplyEntry>;
  update(id: string, data: UpdateSupplyEntryDto): Promise<SupplyEntry | null>;
  delete(id: string): Promise<void>;
}
