import { IsString, IsNumber, IsOptional } from "class-validator";

export class CreateUapDto {
  @IsString()
  name!: string;

  @IsString()
  location!: string;

  @IsNumber()
  area!: number;

  @IsString()
  cropType!: string;

  @IsString()
  responsible!: string;

  @IsString()
  @IsOptional()
  observations?: string;
}
