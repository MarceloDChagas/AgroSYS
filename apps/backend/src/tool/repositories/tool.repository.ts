import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/prisma/prisma.service';
import { Tool } from '@prisma/client';
import { CreateToolDto } from '@shared/dto/tool/create-tool.dto';
import { UpdateToolDto } from '@shared/dto/tool/update-tool.dto';
import { IToolRepository } from './tool.repository.interface';
import { EStatusTool, EToolName } from '@shared/enums/tool.enum';


@Injectable()

export class ToolRepository implements IToolRepository {

  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string): Promise<Tool | null> {
    return this.prisma.tool.findUnique({ where: { id } });
  }

  async findAll(): Promise<Tool[]> {
    return this.prisma.tool.findMany();
  }

  async create(data: CreateToolDto): Promise<Tool> {
    return this.prisma.tool.create({ data });
  }

  async update(id: string, data: UpdateToolDto): Promise<Tool> {
    return this.prisma.tool.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.tool.delete({ where: { id } });

  }

  async findByStatus(status: EStatusTool): Promise<Tool[]> {
    return this.prisma.tool.findMany({ where: { status } });
  }

  async findByToolName(toolName: EToolName): Promise<Tool[]> {
    return this.prisma.tool.findMany({ where: { toolName } });
  }
}
