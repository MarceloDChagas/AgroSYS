import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import { IInputMaterialEntryRepository } from "./repositories/inputMaterialEntry.repository.interface";
import { INPUT_MATERIAL_ENTRY_REPOSITORY } from "./repositories/inputMaterialEntry.token";
import { CreateInputMaterialEntryDto } from "@shared/dto/inputMaterialEntry/create-inputMaterialEntry.dto";
import { UpdateInputMaterialEntryDto } from "@shared/dto/inputMaterialEntry/update-inputMaterialEntry.dto";
import { InputMaterialEntry } from "@shared/types/inputMaterialEntry";

@Injectable()
export class InputMaterialEntryService {
  constructor(
    @Inject(INPUT_MATERIAL_ENTRY_REPOSITORY)
    private readonly repository: IInputMaterialEntryRepository
  ) {}

  async create(dto: CreateInputMaterialEntryDto): Promise<InputMaterialEntry> {
    return await this.repository.create(dto);
  }

  async findAll(): Promise<InputMaterialEntry[]> {
    return await this.repository.findAll();
  }

  async findOne(id: string): Promise<InputMaterialEntry> {
    const entry = await this.repository.findOne(id);
    if (!entry) {
      throw new NotFoundException(
        `Entrada de material com ID ${id} não encontrada`
      );
    }
    return entry;
  }

  async findByProduct(productId: string): Promise<InputMaterialEntry[]> {
    return await this.repository.findByProduct(productId);
  }

  async update(
    id: string,
    dto: UpdateInputMaterialEntryDto
  ): Promise<InputMaterialEntry> {
    const updated = await this.repository.update(id, dto);
    if (!updated) {
      throw new NotFoundException(
        `Entrada de material com ID ${id} não encontrada para atualização`
      );
    }
    return updated;
  }

  async remove(id: string): Promise<void> {
    const found = await this.repository.findOne(id);
    if (!found) {
      throw new NotFoundException(
        `Entrada de material com ID ${id} não encontrada para exclusão`
      );
    }
    await this.repository.delete(id);
  }
}
