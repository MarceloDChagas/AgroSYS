import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { InsumoRepository } from "../insumo.repository.interface";
import { Insumo } from "@shared/types/insumo";
import { CreateInsumoDto } from "@shared/dto/insumo/create-insumo.dto";
import { UpdateInsumoDto } from "@shared/dto/insumo/update-insumo.dto";

@Injectable()
export class InsumoRepositoryPostgres implements InsumoRepository {
  constructor(private prisma: PrismaService) {}

  private toDomainInsumo(prismaInsumo: any): Insumo {
    return {
      id: prismaInsumo.id,
      name: prismaInsumo.name,
      type: prismaInsumo.type,
      amount: prismaInsumo.amount,
      unit: prismaInsumo.unit,
      supplier: prismaInsumo.supplier,
      expiryDate: prismaInsumo.expiryDate,
      observations: prismaInsumo.observations,
      createdAt: prismaInsumo.createdAt,
      updatedAt: prismaInsumo.updatedAt,
    };
  }

  async findAll(): Promise<Insumo[]> {
    const insumos = await this.prisma.insumo.findMany({
      orderBy: { createdAt: "desc" },
    });
    return insumos.map(this.toDomainInsumo);
  }

  async findById(id: string): Promise<Insumo | null> {
    const insumo = await this.prisma.insumo.findUnique({
      where: { id },
    });
    return insumo ? this.toDomainInsumo(insumo) : null;
  }

  async create(data: CreateInsumoDto): Promise<Insumo> {
    const insumo = await this.prisma.insumo.create({
      data: {
        name: data.name,
        type: data.type,
        amount: data.amount,
        unit: data.unit as any,
        supplier: data.supplier,
        expiryDate: data.expiryDate,
        observations: data.observations,
      },
    });
    return this.toDomainInsumo(insumo);
  }

  async update(id: string, data: UpdateInsumoDto): Promise<Insumo> {
    const insumo = await this.prisma.insumo.update({
      where: { id },
      data: {
        name: data.name,
        type: data.type,
        amount: data.amount,
        unit: data.unit as any,
        supplier: data.supplier,
        expiryDate: data.expiryDate,
        observations: data.observations,
      },
    });
    return this.toDomainInsumo(insumo);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.insumo.delete({
      where: { id },
    });
  }
}
