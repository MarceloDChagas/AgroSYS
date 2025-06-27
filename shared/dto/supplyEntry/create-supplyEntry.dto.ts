import { IsUUID, ValidateNested, IsDateString } from "class-validator";
import { Type } from "class-transformer";
import { QuantityDto } from "./quantity.dto";

export class CreateSupplyEntryDto {
  @IsUUID()
  productId: string;

  @IsDateString()
  date: string;

  @ValidateNested()
  @Type(() => QuantityDto)
  quantityKg: QuantityDto;
}
