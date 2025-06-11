import { IsEnum, IsOptional, IsString } from 'class-validator';
import { EStatusTool, EToolName } from '../../shared/enums/tool.enum';

export class UpdateToolDto {
  @IsOptional()
  @IsEnum(EToolName)
  toolName?: EToolName;

  @IsOptional()
  @IsEnum(EStatusTool)
  status?: EStatusTool;
}