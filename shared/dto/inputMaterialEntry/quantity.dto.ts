import { IsEnum, IsNumber } from "class-validator";
import { EUnit } from "@shared/enums/unit.enum";

export class QuantityDto {
  @IsNumber()
  amount: number;

  @IsEnum(EUnit)
  unit: EUnit;
}
