import { Injectable, Inject } from "@nestjs/common";
import { InsumoRepository } from "./repositories/insumo.repository.interface";
import { INSUMO_REPOSITORY } from "./repositories/insumoToken";
import { Insumo } from "@shared/types/insumo";
import { CreateInsumoDto } from "@shared/dto/insumo/create-insumo.dto";
import { UpdateInsumoDto } from "@shared/dto/insumo/update-insumo.dto";

@Injectable()
export class InsumosService {
  constructor(
    @Inject(INSUMO_REPOSITORY)
    private readonly insumoRepository: InsumoRepository
  ) {}

  async findAll(): Promise<Insumo[]> {
    return this.insumoRepository.findAll();
  }

  async findById(id: string): Promise<Insumo | null> {
    return this.insumoRepository.findById(id);
  }

  async create(data: CreateInsumoDto): Promise<Insumo> {
    return this.insumoRepository.create(data);
  }

  async update(id: string, data: UpdateInsumoDto): Promise<Insumo> {
    return this.insumoRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.insumoRepository.delete(id);
  }
}
