import { IsEnum } from 'class-validator';
import { EToolName, EStatusTool } from '@shared/enums/tool.enum';

export class CreateToolDto {
  @IsEnum(EToolName)
  toolName!: EToolName;

  @IsEnum(EStatusTool)
  status!: EStatusTool;
}
