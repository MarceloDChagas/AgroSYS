import { Tool } from '@prisma/client';
import { CreateToolDto } from '@shared/dto/tool/create-tool.dto';
import { UpdateToolDto } from '@shared/dto/tool/update-tool.dto';
import { EStatusTool, EToolName } from '@shared/enums/tool.enum';

export interface IToolRepository {
  create(data: CreateToolDto): Promise<Tool>;
  findAll(): Promise<Tool[]>;
  findById(id: string): Promise<Tool | null>;
  update(id: string, data: UpdateToolDto): Promise<Tool>;
  delete(id: string): Promise<Tool>;
}
