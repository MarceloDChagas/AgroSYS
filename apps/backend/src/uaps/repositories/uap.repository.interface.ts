import { CreateUapDto } from "@shared/dto/uap/create-uap.dto";
import { UpdateUapDto } from "@shared/dto/uap/update-uap.dto";
import { UAP } from "@shared/types/uap";

export interface IUapRepository {
  findAll(): Promise<UAP[]>;
  findOne(id: string): Promise<UAP | null>;
  create(data: CreateUapDto): Promise<UAP>;
  update(id: string, data: UpdateUapDto): Promise<UAP | null>;
  delete(id: string): Promise<void>;
}
