import { Tool } from '@prisma/client';
import { CreateToolDto } from '@shared/dto/tool/create-tool.dto';
import { UpdateToolDto } from '@shared/dto/tool/update-tool.dto';
import { EStatusTool, EToolName } from '@shared/enums/tool.enum';

export const TOOL_REPOSITORY = 'TOOL_REPOSITORY';

export interface IToolRepository {
  findOne(id: string): Promise<Tool | null>;

  findAll(): Promise<Tool[]>;

  create(data: CreateToolDto): Promise<Tool>;

  update(id: string, data: UpdateToolDto): Promise<Tool | null>;

  delete(id: string): Promise<void>;

  findByStatus(status: EStatusTool): Promise<Tool[]>;

  findByToolName(toolName: EToolName): Promise<Tool[]>;
}
