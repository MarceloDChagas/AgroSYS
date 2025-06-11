import { Tool } from '@prisma/client';
import { CreateToolDto } from '@shared/dto/create-tool.dto';
import { EStatusTool, EToolName } from '@shared/enums/tool.enum';

export interface IToolRepository {
      findOne(id: string): Promise<Tool | null>;