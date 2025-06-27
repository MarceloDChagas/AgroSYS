import {
  IsOptional,
  IsUUID,
  ValidateNested,
  IsDateString,
} from "class-validator";
import { Type } from "class-transformer";
import { QuantityDto } from "./quantity.dto";

export class UpdateSupplyEntryDto {
  @IsOptional()
  @IsUUID()
  productId?: string;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => QuantityDto)
  quantityKg?: QuantityDto;
}
