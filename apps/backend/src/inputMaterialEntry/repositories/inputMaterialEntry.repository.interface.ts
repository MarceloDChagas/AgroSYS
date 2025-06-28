import { CreateInputMaterialEntryDto } from "@shared/dto/inputMaterialEntry/create-inputMaterialEntry.dto";
import { UpdateInputMaterialEntryDto } from "@shared/dto/inputMaterialEntry/update-inputMaterialEntry.dto";
import { InputMaterialEntry } from "@shared/types/inputMaterialEntry";

export interface IInputMaterialEntryRepository {
  findAll(): Promise<InputMaterialEntry[]>;
  findOne(id: string): Promise<InputMaterialEntry | null>;
  findByProduct(productId: string): Promise<InputMaterialEntry[]>;
  create(data: CreateInputMaterialEntryDto): Promise<InputMaterialEntry>;
  update(
    id: string,
    data: UpdateInputMaterialEntryDto
  ): Promise<InputMaterialEntry | null>;
  delete(id: string): Promise<void>;
}
