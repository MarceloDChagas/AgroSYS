import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { CreateInputMaterialEntryDto } from "@shared/dto/inputMaterialEntry/create-inputMaterialEntry.dto";
import { UpdateInputMaterialEntryDto } from "@shared/dto/inputMaterialEntry/update-inputMaterialEntry.dto";
import { IInputMaterialEntryRepository } from "../inputMaterialEntry.repository.interface";
import { InputMaterialEntry } from "@shared/types/inputMaterialEntry";
import { Quantity } from "@shared/value-objects/quantity.vo";

function toDomainInputMaterialEntry(prismaEntry: any): InputMaterialEntry {
  return {
    id: prismaEntry.id,
    date: prismaEntry.date,
    productId: prismaEntry.productId,
    quantity: new Quantity({
      amount: prismaEntry.amount,
      unit: prismaEntry.unit,
    }),
  };
}

@Injectable()
export class InputMaterialEntryRepositoryPostgres
  implements IInputMaterialEntryRepository
{
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<InputMaterialEntry[]> {
    const entries = await this.prisma.inputMaterialEntry.findMany({
      orderBy: { date: "desc" },
    });
    return entries.map(toDomainInputMaterialEntry);
  }

  async findOne(id: string): Promise<InputMaterialEntry | null> {
    const entry = await this.prisma.inputMaterialEntry.findUnique({
      where: { id },
    });
    return entry ? toDomainInputMaterialEntry(entry) : null;
  }

  async findByProduct(productId: string): Promise<InputMaterialEntry[]> {
    const entries = await this.prisma.inputMaterialEntry.findMany({
      where: { productId },
      orderBy: { date: "desc" },
    });
    return entries.map(toDomainInputMaterialEntry);
  }

  async create(data: CreateInputMaterialEntryDto): Promise<InputMaterialEntry> {
    const entry = await this.prisma.inputMaterialEntry.create({
      data: {
        date: data.date,
        productId: data.productId,
        amount: data.quantity.amount,
        unit: data.quantity.unit,
      },
    });
    return toDomainInputMaterialEntry(entry);
  }

  async update(
    id: string,
    data: UpdateInputMaterialEntryDto
  ): Promise<InputMaterialEntry | null> {
    const updated = await this.prisma.inputMaterialEntry.update({
      where: { id },
      data: {
        date: data.date,
        productId: data.productId,
        amount: data.quantity?.amount,
        unit: data.quantity?.unit,
      },
    });
    return updated ? toDomainInputMaterialEntry(updated) : null;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.inputMaterialEntry.delete({ where: { id } });
  }
}
