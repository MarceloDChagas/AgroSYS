import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { CreateUapDto } from "@shared/dto/uap/create-uap.dto";
import { UpdateUapDto } from "@shared/dto/uap/update-uap.dto";
import { IUapRepository } from "../uap.repository.interface";
import { UAP } from "@shared/types/uap";
import { PrismaUap } from "./Utils.postgres";
import { Prisma } from "@prisma/client";

function toDomainUap(prismaUap: PrismaUap): UAP {
  return {
    id: prismaUap.id,
    name: prismaUap.name,
    location: prismaUap.location,
    area: Number(prismaUap.area),
    cropType: prismaUap.cropType,
    responsible: prismaUap.responsible,
    observations: prismaUap.observations,
    createdAt: prismaUap.createdAt,
    updatedAt: prismaUap.updatedAt,
  };
}

@Injectable()
export class UapRepositoryPostgres implements IUapRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UAP[]> {
    const uaps = await this.prisma.uAP.findMany({
      orderBy: { createdAt: "desc" },
    });
    return uaps.map(toDomainUap);
  }

  async findOne(id: string): Promise<UAP | null> {
    const uap = await this.prisma.uAP.findUnique({
      where: { id },
    });
    return uap ? toDomainUap(uap) : null;
  }

  async create(data: CreateUapDto): Promise<UAP> {
    const uap = await this.prisma.uAP.create({
      data: {
        name: data.name,
        location: data.location,
        area: data.area,
        cropType: data.cropType,
        responsible: data.responsible,
        observations: data.observations,
      },
    });
    return toDomainUap(uap);
  }

  async update(id: string, data: UpdateUapDto): Promise<UAP | null> {
    const updateData: Prisma.UAPUpdateInput = {};

    if (data.name) updateData.name = data.name;
    if (data.location) updateData.location = data.location;
    if (data.area) updateData.area = data.area;
    if (data.cropType) updateData.cropType = data.cropType;
    if (data.responsible) updateData.responsible = data.responsible;
    if (data.observations !== undefined)
      updateData.observations = data.observations;

    const updated = await this.prisma.uAP.update({
      where: { id },
      data: updateData,
    });
    return updated ? toDomainUap(updated) : null;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.uAP.delete({ where: { id } });
  }
}
