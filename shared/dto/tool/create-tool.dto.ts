import { IsEnum } from 'class-validator';
import { EStatusTool, EToolName } from '../../shared/enums/tool.enum';

export class CreateToolDto {
  @IsEnum(EToolName)
  toolName: EToolName;

  @IsEnum(EStatusTool)
  status: EStatusTool;
}