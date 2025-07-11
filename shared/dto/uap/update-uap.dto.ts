import { IsString, IsNumber, IsOptional } from "class-validator";

export class UpdateUapDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsNumber()
  @IsOptional()
  area?: number;

  @IsString()
  @IsOptional()
  cropType?: string;

  @IsString()
  @IsOptional()
  responsible?: string;

  @IsString()
  @IsOptional()
  observations?: string;
}
