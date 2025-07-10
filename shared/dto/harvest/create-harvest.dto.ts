import { IsString, IsNumber, IsDateString, IsOptional } from "class-validator";

export class CreateHarvestDto {
  @IsDateString()
  harvestDate!: string;

  @IsString()
  product!: string;

  @IsNumber()
  quantity!: number;

  @IsString()
  unit!: string;

  @IsString()
  uap!: string;

  @IsString()
  responsible!: string;

  @IsString()
  cycle!: string;

  @IsString()
  status!: string;

  @IsString()
  @IsOptional()
  equipment?: string;

  @IsString()
  @IsOptional()
  observations?: string;
}
